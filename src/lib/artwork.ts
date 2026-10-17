// Original, procedurally generated archival artwork.
// Each record gets a unique, deterministic SVG (no stock photography, no external hosts).
export type ArtDiscipline = "photography" | "music" | "fashion" | "design";

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
function rng(seed: number) {
  let s = seed || 1;
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return ((s >>> 0) % 10000) / 10000;
  };
}

const PALETTES: Record<ArtDiscipline, string[]> = {
  photography: ["#0E0E12", "#2B2B33", "#6B6B78", "#CBCBD4", "#F4F1EA"],
  music: ["#09090B", "#BC3A18", "#D9532F", "#E09F3E", "#F4F1EA"],
  fashion: ["#111B30", "#1B2A4A", "#2B3E60", "#5A82B8", "#F4F1EA"],
  design: ["#0D0D10", "#8C6A28", "#D4AF37", "#E5C378", "#F8F5EE"],
};

export function artworkFor(seedText: string, discipline: ArtDiscipline = "design", w = 800, h = 1000): string {
  const r = rng(hash(seedText + discipline));
  const p = PALETTES[discipline];
  let body = "";
  if (discipline === "music") {
    // vinyl grooves + label
    const cx = w / 2 + (r() - 0.5) * 60, cy = h * 0.46;
    for (let i = 0; i < 26; i++) body += `<circle cx="${cx}" cy="${cy}" r="${70 + i * 11}" fill="none" stroke="${p[(i % 3) + 1]}" stroke-opacity="${0.12 + r() * 0.35}" stroke-width="${1 + r() * 2}"/>`;
    body += `<circle cx="${cx}" cy="${cy}" r="82" fill="${p[1]}"/><circle cx="${cx}" cy="${cy}" r="${20 + r() * 20}" fill="${p[4]}"/>`;
  } else if (discipline === "fashion") {
    // adire-style resist-dye tiles
    const n = 8, cw = w / n, ch = h / (n * 1.25);
    for (let y = 0; y < n * 1.25; y++) for (let x = 0; x < n; x++) {
      const t = Math.floor(r() * 4), px = x * cw, py = y * ch, c = p[1 + Math.floor(r() * 3)];
      const cxx = px + cw / 2, cyy = py + ch / 2;
      if (t === 0) body += `<circle cx="${cxx}" cy="${cyy}" r="${cw * 0.32}" fill="none" stroke="${c}" stroke-width="3"/><circle cx="${cxx}" cy="${cyy}" r="${cw * 0.12}" fill="${p[4]}" fill-opacity=".8"/>`;
      else if (t === 1) body += `<path d="M${px + 8} ${py + ch - 8} L${cxx} ${py + 8} L${px + cw - 8} ${py + ch - 8}Z" fill="none" stroke="${c}" stroke-width="3"/>`;
      else if (t === 2) body += `<rect x="${px + 14}" y="${py + 14}" width="${cw - 28}" height="${ch - 28}" fill="${c}" fill-opacity=".35" transform="rotate(${r() * 12 - 6} ${cxx} ${cyy})"/>`;
      else body += `<path d="M${px + 6} ${cyy} q${cw / 4} -${ch / 3} ${cw / 2 - 6} 0 t${cw / 2 - 6} 0" fill="none" stroke="${p[4]}" stroke-opacity=".7" stroke-width="3"/>`;
    }
  } else if (discipline === "photography") {
    // darkroom contact frame: gradient portrait silhouette + grain + crop marks
    body += `<defs><radialGradient id="g" cx="${40 + r() * 20}%" cy="38%" r="65%"><stop offset="0" stop-color="${p[3]}"/><stop offset=".55" stop-color="${p[2]}"/><stop offset="1" stop-color="${p[0]}"/></radialGradient></defs><rect width="${w}" height="${h}" fill="url(#g)"/>`;
    const bx = w * (0.35 + r() * 0.3);
    body += `<ellipse cx="${bx}" cy="${h * 0.62}" rx="${w * 0.3}" ry="${h * 0.32}" fill="${p[0]}" fill-opacity=".92"/><ellipse cx="${bx}" cy="${h * 0.34}" rx="${w * 0.15}" ry="${h * 0.13}" fill="${p[0]}" fill-opacity=".95"/>`;
    for (let i = 0; i < 6; i++) body += `<ellipse cx="${bx}" cy="${h * (0.2 - i * 0.012)}" rx="${w * (0.16 + i * 0.02)}" ry="${h * 0.035}" fill="none" stroke="${p[3]}" stroke-opacity=".5" stroke-width="3"/>`;
  } else {
    // design: letterpress / registration geometry
    for (let i = 0; i < 7; i++) {
      const x = r() * w, y = r() * h, s = 80 + r() * 300, c = p[1 + Math.floor(r() * 3)];
      body += r() > 0.5 ? `<rect x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s * (0.3 + r())}" fill="${c}" fill-opacity="${0.35 + r() * 0.5}" transform="rotate(${r() * 40 - 20} ${x} ${y})"/>` : `<circle cx="${x}" cy="${y}" r="${s / 2}" fill="${c}" fill-opacity="${0.35 + r() * 0.5}"/>`;
    }
    body += `<text x="${w * 0.08}" y="${h * 0.9}" font-family="Syne, Impact, sans-serif" font-weight="800" font-size="${w * 0.3}" fill="${p[4]}" fill-opacity=".9">${seedText.replace(/[^A-Za-z0-9]/g, "").slice(-2).toUpperCase() || "AR"}</text>`;
  }
  const frame = `<g stroke="#D4AF37" stroke-opacity=".6" stroke-width="2" fill="none"><path d="M24 64V24H64M${w - 64} 24H${w - 24}V64M24 ${h - 64}V${h - 24}H64M${w - 64} ${h - 24}H${w - 24}V${h - 64}"/></g><text x="34" y="${h - 36}" font-family="monospace" font-size="18" fill="#F4F1EA" fill-opacity=".75">${seedText.slice(0, 24)}</text>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/>${body}${frame}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
