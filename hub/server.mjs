#!/usr/bin/env node
/**
 * Project Hub — local black-and-white documentation server.
 *
 * Reads ./hub.config.json (next to this file), serves index.html, renders
 * markdown from the project folder, and exposes a tiny JSON API the UI polls
 * every 15s so agent outputs appear live.
 *
 *   node hub/server.mjs
 *
 * No dependencies. Node 18+.
 */

import { createServer } from 'node:http';
import { readFile, readdir, stat } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'node:crypto';

const HUB_DIR = path.dirname(fileURLToPath(import.meta.url));
const CONFIG_PATH = path.join(HUB_DIR, 'hub.config.json');
const INDEX_HTML = path.join(HUB_DIR, 'index.html');

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif', '.svg', '.bmp']);
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.m4v', '.ogv']);
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.htm': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
  '.bmp': 'image/bmp',
  '.ico': 'image/x-icon',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.m4v': 'video/x-m4v',
  '.ogv': 'video/ogg',
  '.pdf': 'application/pdf',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.zip': 'application/zip',
};

/* ------------------------------------------------------------------ config */

let cache = { mtimeMs: -1 };

async function loadConfig() {
  const st = await stat(CONFIG_PATH).catch(() => null);
  if (!st) throw new Error('hub.config.json not found next to server.mjs');
  if (cache.mtimeMs === st.mtimeMs && cache.config) return cache;

  const config = JSON.parse(await readFile(CONFIG_PATH, 'utf8'));
  const projectDir = path.resolve(HUB_DIR, config.projectRoot ?? '..');

  // roots: alias -> absolute folder. "@" is always the project folder.
  const roots = { '@': projectDir };
  for (const [alias, value] of Object.entries(config.roots ?? {})) {
    if (typeof value !== 'string') continue;
    roots[alias] = path.isAbsolute(value) ? path.resolve(value) : path.resolve(projectDir, value);
  }

  cache = { mtimeMs: st.mtimeMs, config, projectDir, roots };
  return cache;
}

/** Resolve a config path. `@/x` and `@alias/x` use roots; anything else is project-relative. */
function resolveConfigPath(p, roots) {
  if (typeof p !== 'string' || !p.length) return null;
  if (p.startsWith('@')) {
    const m = p.match(/^@([^/\\]*)[/\\]?(.*)$/);
    const alias = m[1] || '@';
    const rest = m[2] || '';
    const base = roots[alias] ?? roots['@'];
    return path.resolve(base, rest);
  }
  return path.resolve(roots['@'], p);
}

/** True when `target` is inside `base`. */
function isWithin(base, target) {
  const rel = path.relative(base, target);
  return rel === '' || (!rel.startsWith('..') && !path.isAbsolute(rel));
}

/** Unknown roots must not escape the configured folders. */
function isAllowed(target, roots) {
  return Object.values(roots).some((base) => isWithin(base, target));
}

/* ------------------------------------------------------------------ helpers */

const isHidden = (name) => name.startsWith('_') || name.startsWith('.');

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

/** Relative URL for a file, safe for spaces and friends. */
function fileUrl(absPath, roots) {
  const base = Object.values(roots)
    .filter((b) => isWithin(b, absPath))
    .sort((a, b) => b.length - a.length)[0];
  const rel = path.relative(base, absPath).split(path.sep).join('/');
  return '/f/' + rel.split('/').map(encodeURIComponent).join('/');
}

const slugify = (s) =>
  String(s)
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .slice(0, 80) || 'section';

/* -------------------------------------------------------------- markdown */

const escapeHtml = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function safeHref(url) {
  const u = String(url).trim();
  if (/^(https?:|mailto:|tel:|#|\/|\.\/|\.\.\/)/i.test(u)) return escapeHtml(u);
  return '#';
}

/** Inline spans. Code spans are protected first so nothing formats inside them. */
function inline(text) {
  const codes = [];
  let s = String(text).replace(/`([^`]+)`/g, (_, code) => {
    codes.push(code);
    return `\u0000${codes.length - 1}\u0000`;
  });

  s = escapeHtml(s);
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,
    (_, alt, src) => `<img src="${safeHref(src)}" alt="${escapeHtml(alt)}">`);
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)(?:\s+&quot;([^&]*)&quot;)?\)/g,
    (_, label, href, title) =>
      `<a href="${safeHref(href)}"${title ? ` title="${escapeHtml(title)}"` : ''}>${label}</a>`);
  s = s.replace(/(^|[\s(])(https?:\/\/[^\s<)]+)/g,
    (_, pre, url) => `${pre}<a href="${escapeHtml(url)}">${escapeHtml(url)}</a>`);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
  s = s.replace(/~~([^~]+)~~/g, '<del>$1</del>');

  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${escapeHtml(codes[Number(i)])}</code>`);
}

const STATUS = [
  [/^(done|complete|completed|ready|shipped|✓)$/i, 'done'],
  [/^(running|in progress|active|wip|building|researching|in research)$/i, 'running'],
  [/^(waiting|pending|todo|to do|not started|queued|planned|—|-)$/i, 'waiting'],
  [/^(blocked|failed|error|stuck)$/i, 'blocked'],
];

function statusOf(cell) {
  const t = String(cell)
    .replace(/<[^>]*>/g, '')
    .trim()
    .replace(/[.。]$/, '');
  for (const [re, kind] of STATUS) if (re.test(t)) return kind;
  return null;
}

/** Cells that read as a status become badges; the caller collects progress. */
function cellHtml(raw, pipeline) {
  const inner = inline(raw);
  if (!pipeline) return inner;
  const kind = statusOf(inner);
  if (!kind) return inner;
  const label = inner.replace(/<[^>]*>/g, '').trim();
  return `<span class="badge badge-${kind}" data-status="${kind}">${escapeHtml(label)}</span>`;
}

function splitRow(line) {
  return line
    .trim()
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map((c) => c.trim());
}

/**
 * Render the markdown subset the hub needs: headings, tables, lists, code,
 * quotes, rules, images and inline spans — with ids on headings for the TOC.
 */
function renderMarkdown(source, { pipeline = false } = {}) {
  const lines = String(source).replace(/\r\n?/g, '\n').split('\n');
  const html = [];
  const toc = [];
  const usedIds = new Map();
  const progress = { done: 0, total: 0 };

  const headingId = (text) => {
    const base = slugify(text.replace(/[`*_]/g, ''));
    const n = usedIds.get(base) ?? 0;
    usedIds.set(base, n + 1);
    return n ? `${base}-${n}` : base;
  };

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) { i += 1; continue; }

    // fenced code
    const fence = line.match(/^\s*(```|~~~)\s*([\w+-]*)\s*$/);
    if (fence) {
      const close = fence[1];
      const lang = fence[2];
      const body = [];
      i += 1;
      while (i < lines.length && !lines[i].trim().startsWith(close)) body.push(lines[i++]);
      i += 1;
      html.push(
        `<pre class="code"${lang ? ` data-lang="${escapeHtml(lang)}"` : ''}><code>${escapeHtml(body.join('\n'))}</code></pre>`,
      );
      continue;
    }

    // horizontal rule
    if (/^\s*([-*_])(\s*\1){2,}\s*$/.test(line)) { html.push('<hr>'); i += 1; continue; }

    // heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      const level = h[1].length;
      const text = h[2].replace(/\s+#+\s*$/, '');
      const id = headingId(text);
      toc.push({ id, text: text.replace(/[`*_]/g, '').trim(), level });
      html.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      i += 1;
      continue;
    }

    // table
    if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(lines[i + 1])) {
      const head = splitRow(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\s*\|/.test(lines[i])) rows.push(splitRow(lines[i++]));
      const headHtml = head.map((c) => `<th>${inline(c)}</th>`).join('');
      const rowsHtml = rows
        .map((cells) => {
          const statusIdx = pipeline ? cells.findIndex((c) => statusOf(c)) : -1;
          if (pipeline && statusIdx !== -1) {
            progress.total += 1;
            if (statusOf(cells[statusIdx]) === 'done') progress.done += 1;
          }
          return `<tr>${cells.map((c) => `<td>${cellHtml(c, pipeline)}</td>`).join('')}</tr>`;
        })
        .join('');
      html.push(`<div class="table-wrap"><table>${headHtml ? `<thead><tr>${headHtml}</tr></thead>` : ''}<tbody>${rowsHtml}</tbody></table></div>`);
      continue;
    }

    // blockquote
    if (/^\s*>/.test(line)) {
      const body = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) body.push(lines[i++].replace(/^\s*>\s?/, ''));
      html.push(`<blockquote>${renderMarkdown(body.join('\n')).html}</blockquote>`);
      continue;
    }

    // lists
    const listMatch = line.match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
    if (listMatch) {
      const ordered = /\d/.test(listMatch[2]);
      const items = [];
      while (i < lines.length) {
        const m = lines[i].match(/^(\s*)([-*+]|\d+[.)])\s+(.*)$/);
        if (m) { items.push({ depth: Math.floor(m[1].replace(/\t/g, '  ').length / 2), text: m[3] }); i += 1; continue; }
        // lazy continuation of the previous item
        if (lines[i].trim() && /^\s{2,}\S/.test(lines[i]) && items.length) {
          items[items.length - 1].text += ' ' + lines[i].trim();
          i += 1;
          continue;
        }
        break;
      }
      const tag = ordered ? 'ol' : 'ul';
      let out = `<${tag}>`;
      let depth = 0;
      for (const item of items) {
        while (item.depth > depth) { out += `<${tag}>`; depth += 1; }
        while (item.depth < depth) { out += `</${tag}>`; depth -= 1; }
        out += `<li>${inline(item.text)}</li>`;
      }
      while (depth > 0) { out += `</${tag}>`; depth -= 1; }
      out += `</${tag}>`;
      html.push(out);
      continue;
    }

    // paragraph
    const para = [];
    while (i < lines.length && lines[i].trim() && !/^\s*(#{1,6}\s|>|\||```|~~~|([-*+]|\d+[.)])\s)/.test(lines[i])) {
      para.push(lines[i++]);
    }
    if (para.length) html.push(`<p>${inline(para.join('\n')).replace(/\n/g, '<br>')}</p>`);
    else i += 1;
  }

  return { html: html.join('\n'), toc, progress: progress.total ? progress : null };
}

/* ------------------------------------------------------------------ scanning */

async function walkMedia(dir, root, roots, out = [], depth = 0) {
  if (depth > 4) return out;
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    if (isHidden(entry.name)) continue;
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkMedia(abs, root, roots, out, depth + 1);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    const kind = IMAGE_EXT.has(ext) ? 'image' : VIDEO_EXT.has(ext) ? 'video' : 'file';
    const subfolder = path.relative(root, path.dirname(abs)).split(path.sep).join('/');
    const stem = path.basename(entry.name, ext);
    // Chip group: sub-folder, else text before "__", else the last name token.
    let group;
    if (subfolder) group = subfolder.split('/').filter((s) => s !== '.').pop();
    else if (stem.includes('__')) group = stem.split('__')[0].replace(/^\d+[-_]/, '');
    else group = stem.split(/[-_]/).pop();
    const info = await stat(abs).catch(() => null);
    out.push({
      name: entry.name,
      stem,
      ext,
      kind,
      group: group || 'other',
      subfolder: subfolder || '',
      url: fileUrl(abs, roots),
      bytes: info?.size ?? 0,
      mtime: info?.mtimeMs ?? 0,
    });
  }
  return out;
}

/* ------------------------------------------------------------------ status */

async function sectionState(section, ctx) {
  const { roots } = ctx;
  const docs = [];
  for (const file of section.docs ?? []) {
    const abs = resolveConfigPath(file, roots);
    docs.push({ file, exists: abs ? await exists(abs) : false });
  }

  let media = [];
  if (section.dir) {
    const abs = resolveConfigPath(section.dir, roots);
    if (abs && (await exists(abs))) media = await walkMedia(abs, abs, roots);
  }

  let page = null;
  if (section.page) {
    const abs = resolveConfigPath(section.page, roots);
    page = { file: section.page, exists: abs ? path.extname(abs).toLowerCase() === '.html' && (await exists(abs)) : false };
  }

  const ready = docs.some((d) => d.exists) || media.length > 0 || page?.exists === true;
  return {
    id: section.id,
    docs,
    mediaCount: media.length,
    page,
    ready,
    count: docs.filter((d) => d.exists).length + media.length + (page?.exists ? 1 : 0),
  };
}

async function fingerprint(ctx) {
  const { config, roots } = ctx;
  const parts = [];
  for (const section of config.sections ?? []) {
    for (const file of section.docs ?? []) {
      const abs = resolveConfigPath(file, roots);
      const st = abs ? await stat(abs).catch(() => null) : null;
      parts.push(`${file}:${st ? `${st.mtimeMs}:${st.size}` : 'missing'}`);
    }
    if (section.dir) {
      const abs = resolveConfigPath(section.dir, roots);
      const media = abs ? await walkMedia(abs, abs, roots) : [];
      parts.push(`${section.dir}:${media.length}:${media.reduce((a, f) => a + f.mtime, 0)}`);
    }
    if (section.page) {
      const abs = resolveConfigPath(section.page, roots);
      const st = abs ? await stat(abs).catch(() => null) : null;
      parts.push(`${section.page}:${st ? st.mtimeMs : 'missing'}`);
    }
  }
  return crypto.createHash('sha1').update(parts.join('|')).digest('hex').slice(0, 12);
}

/* ------------------------------------------------------------------ routes */

async function apiStatus(ctx) {
  const { config } = ctx;
  const sections = {};
  for (const section of config.sections ?? []) {
    const state = await sectionState(section, ctx);
    sections[section.id] = { ready: state.ready, count: state.count, mediaCount: state.mediaCount };
  }
  return {
    title: config.title ?? 'Project Hub',
    version: await fingerprint(ctx),
    sections,
  };
}

async function apiSection(id, ctx) {
  const { config, roots } = ctx;
  const section = (config.sections ?? []).find((s) => s.id === id);
  if (!section) return { error: 'unknown section' };

  const docs = [];
  for (const file of section.docs ?? []) {
    const abs = resolveConfigPath(file, roots);
    if (!abs || !(await exists(abs))) {
      docs.push({ file, exists: false, title: path.basename(file), html: '', toc: [] });
      continue;
    }
    const raw = await readFile(abs, 'utf8');
    const isPipeline = /(^|[/\\])pipeline\.md$/i.test(file) || section.pipeline === true;
    const rendered = renderMarkdown(raw, { pipeline: isPipeline });
    docs.push({
      file,
      exists: true,
      title: (raw.match(/^#\s+(.+)$/m)?.[1] ?? path.basename(file)).replace(/[`*_]/g, '').trim(),
      html: rendered.html,
      toc: rendered.toc,
      progress: rendered.progress,
      url: fileUrl(abs, roots),
    });
  }

  let media = { groups: [], files: [] };
  if (section.dir) {
    const abs = resolveConfigPath(section.dir, roots);
    if (abs && (await exists(abs))) {
      const all = await walkMedia(abs, abs, roots);
      const byGroup = new Map();
      const files = [];
      for (const item of all) {
        if (item.kind === 'file') { files.push(item); continue; }
        if (!byGroup.has(item.group)) byGroup.set(item.group, []);
        byGroup.get(item.group).push(item);
      }
      media = {
        groups: [...byGroup.entries()].map(([name, items]) => ({ name, items: items.sort((a, b) => a.name.localeCompare(b.name)) })),
        files,
      };
    }
  }

  let page = null;
  if (section.page) {
    const abs = resolveConfigPath(section.page, roots);
    if (abs && (await exists(abs))) page = { file: section.page, url: fileUrl(abs, roots) };
    else page = { file: section.page, url: null };
  }

  return {
    id: section.id,
    title: section.title,
    label: section.label ?? null,
    group: section.group ?? null,
    lede: section.lede ?? null,
    docs,
    media,
    page,
  };
}

async function apiIndex(ctx) {
  const { config, roots } = ctx;
  const entries = [];
  for (const section of config.sections ?? []) {
    for (const file of section.docs ?? []) {
      const abs = resolveConfigPath(file, roots);
      if (!abs || !(await exists(abs))) continue;
      const raw = await readFile(abs, 'utf8');
      const first = raw.match(/^#\s+(.+)$/m)?.[1] ?? path.basename(file);
      entries.push({ section: section.id, kind: 'doc', text: first.replace(/[`*_]/g, '').trim(), sub: section.title });
      for (const line of raw.split('\n')) {
        const h = line.match(/^(#{2,4})\s+(.*)$/);
        if (h) entries.push({ section: section.id, kind: 'heading', text: h[2].replace(/[`*_]/g, '').trim(), sub: section.title });
      }
      entries.push({ section: section.id, kind: 'file', text: path.basename(file), sub: section.title });
    }
    if (section.dir) {
      const abs = resolveConfigPath(section.dir, roots);
      if (abs && (await exists(abs))) {
        for (const item of await walkMedia(abs, abs, roots)) {
          entries.push({ section: section.id, kind: 'file', text: item.name, sub: section.title });
        }
      }
    }
    if (section.page) entries.push({ section: section.id, kind: 'page', text: section.title, sub: section.title });
  }
  return { entries };
}

/* ------------------------------------------------------------------ serving */

async function serveFile(res, abs, req, roots) {
  if (!isAllowed(abs, roots)) return send(res, 403, 'Forbidden');
  const st = await stat(abs).catch(() => null);
  if (!st || !st.isFile()) return send(res, 404, 'Not found');

  const ext = path.extname(abs).toLowerCase();
  const type = MIME[ext] ?? 'application/octet-stream';
  const headers = {
    'Content-Type': type,
    'Cache-Control': 'no-cache',
    'Accept-Ranges': 'bytes',
  };

  // Range support so <video> can seek.
  const range = req.headers.range;
  if (range) {
    const m = range.match(/bytes=(\d*)-(\d*)/);
    if (m) {
      const start = m[1] ? Number(m[1]) : 0;
      const end = m[2] ? Number(m[2]) : st.size - 1;
      if (start <= end && end < st.size) {
        res.writeHead(206, { ...headers, 'Content-Range': `bytes ${start}-${end}/${st.size}`, 'Content-Length': end - start + 1 });
        return createReadStream(abs, { start, end }).pipe(res);
      }
    }
  }

  res.writeHead(200, { ...headers, 'Content-Length': st.size });
  if (req.method === 'HEAD') return res.end();
  return createReadStream(abs).pipe(res);
}

function send(res, status, body, type = 'text/plain; charset=utf-8') {
  res.writeHead(status, { 'Content-Type': type, 'Cache-Control': 'no-cache' });
  res.end(body);
}

const json = (res, data) => send(res, 200, JSON.stringify(data), 'application/json; charset=utf-8');

/* ------------------------------------------------------------------ server */

const ctx = await loadConfig().catch((err) => {
  console.error(`[hub] ${err.message}`);
  process.exit(1);
});

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    const live = await loadConfig();

    if (pathname === '/api/status') return json(res, await apiStatus(live));
    if (pathname === '/api/section') return json(res, await apiSection(url.searchParams.get('id'), live));
    if (pathname === '/api/index') return json(res, await apiIndex(live));
    if (pathname === '/api/config') {
      const status = await apiStatus(live);
      return json(res, { title: live.config.title, sections: live.config.sections, version: status.version });
    }

    if (pathname === '/' || pathname === '/index.html') {
      return serveFile(res, INDEX_HTML, req, { '@': HUB_DIR });
    }
    if (pathname === '/favicon.ico') return send(res, 204, '');

    if (pathname.startsWith('/f/')) {
      const rel = pathname.slice(3);
      const abs = isAllowed(path.resolve(live.roots['@'], rel), live.roots)
        ? path.resolve(live.roots['@'], rel)
        : null;
      if (!abs) return send(res, 403, 'Forbidden');
      return serveFile(res, abs, req, live.roots);
    }

    return send(res, 404, 'Not found');
  } catch (err) {
    console.error('[hub]', err);
    return send(res, 500, `Server error: ${err.message}`);
  }
});

const base = Number(process.env.PORT ?? ctx.config.port ?? 10002);
const candidates = [base, ...Array.from({ length: 12 }, (_, i) => base + 1 + i)];

function listen(port) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      const next = candidates[candidates.indexOf(port) + 1];
      if (next) {
        console.log(`[hub] port ${port} busy, trying ${next}`);
        return setTimeout(() => listen(next), 40);
      }
      console.error('[hub] no free port');
      process.exit(1);
    }
    throw err;
  });
  server.listen(port, () => {
    console.log(`[hub] ${ctx.config.title ?? 'Project Hub'} → http://localhost:${port}`);
  });
}

listen(base);
