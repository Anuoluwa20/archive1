import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const itemsPath = process.argv[2];
const outDir = process.argv[3];
const mode = process.argv[4] || 'viewport';
const only = process.argv[5] || '';

const items = JSON.parse(fs.readFileSync(itemsPath, 'utf8'))
  .filter(i => !only || i.file.includes(only));
fs.mkdirSync(outDir, { recursive: true });

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const report = [];

async function dismiss(page) {
  const words = ['accept all', 'accept cookies', 'accept', 'agree', 'i agree', 'got it', 'okay', 'ok', 'allow all', 'consent', 'close', 'dismiss', 'agree and continue'];
  try {
    const btns = await page.$$('button, a[role="button"], [role="button"], input[type="submit"]');
    for (const b of btns.slice(0, 40)) {
      let txt = '';
      try { txt = (await b.innerText()) || ''; } catch { continue; }
      const t = txt.trim().toLowerCase();
      if (!t || t.length > 30) continue;
      if (words.some(w => t === w || t.startsWith(w))) {
        try { await b.click({ timeout: 900 }); break; } catch {}
      }
    }
  } catch {}
}

async function shoot(browser, item) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
    locale: 'en-US',
    userAgent: UA,
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9' },
    ignoreHTTPSErrors: true,
  });
  const page = await ctx.newPage();
  const rec = { file: item.file, url: item.url, ok: false };
  try {
    const resp = await page.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    rec.status = resp ? resp.status() : null;
    await page.waitForTimeout(3200);
    await dismiss(page);
    await page.waitForTimeout(1200);
    await dismiss(page);
    // nudge lazy-loaded imagery
    await page.evaluate(async () => {
      await new Promise(r => {
        let y = 0;
        const step = () => {
          y += 500;
          window.scrollTo(0, y);
          if (y < 2000) requestAnimationFrame(step); else { window.scrollTo(0, 0); r(); }
        };
        requestAnimationFrame(step);
      });
    }).catch(() => {});
    await page.waitForTimeout(1400);
    rec.title = await page.title();
    const p = path.join(outDir, `${item.file}.png`);
    await page.screenshot({ path: p, fullPage: mode === 'full', timeout: 30000 });
    rec.bytes = fs.statSync(p).size;
    rec.ok = rec.bytes > 12000;
  } catch (e) {
    rec.error = String(e.message || e).split('\n')[0].slice(0, 180);
  } finally {
    await ctx.close().catch(() => {});
  }
  return rec;
}

const browser = await chromium.launch({ headless: true, args: ['--disable-blink-features=AutomationControlled', '--no-sandbox'] });
const queue = [...items];
const CONC = 3;
await Promise.all(Array.from({ length: CONC }, async () => {
  while (queue.length) {
    const item = queue.shift();
    const rec = await shoot(browser, item);
    report.push(rec);
    console.log(`${rec.ok ? 'OK ' : 'FAIL'} ${rec.status ?? '-'} ${rec.bytes ?? 0} ${rec.file}${rec.error ? ' :: ' + rec.error : ''}`);
  }
}));
await browser.close();
fs.writeFileSync(path.join(outDir, `_report-${mode}.json`), JSON.stringify(report, null, 1));
console.log(`\nDONE ${report.filter(r => r.ok).length}/${report.length}`);
