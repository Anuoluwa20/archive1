# VISUAL REFINEMENT — ARCHIVE (Stage 06)
Evidence: `screenshots/before/` and `screenshots/after/` (desktop 1440, tablet 820, mobile 390; fold + full page).

## Inputs checked
SKU, INSPIRATION_LIBRARY, BRAND_DIRECTIONS (Direction A), WEBSITE_BUILD, and the
root `DESIGN_SYSTEM.md` derived from `Design Inspiration/`.

## Found and fixed
1. **Contrast.** `--oxide-500` (#A8432C) used as text on `--ink-900` measures **3.22:1**, below AA 4.5:1.
   Affected the rights line "Not public domain. Not reproduced." on all 6 plates and the
   Design discipline label. Added `--oxide-text`, derived from the existing oxide and bone
   tokens (no new hue): **5.88:1**. The oxide token itself is unchanged for rules and fills.
2. **Touch targets.** On mobile, Menu was 35px, Copy citation 33px, and footer/inline links 15px.
   Controls now ≥44px; link lists padded so none is under 24px (WCAG 2.2 target size).
   Measured after: 0 interactive elements under 24px at 390 wide.
3. **Nav was not actually sticky** (pre-existing): `.bar` was sticky inside a `<header>` only as tall as itself, so it scrolled away. `body>header` is now the sticky element; scroll-shrink is visible for the first time.
4. **Fonts self-hosted.** The Google Fonts request is removed; 24 woff2 files (≈ 620 KB on disk; Latin plus Latin Extended, split by `unicode-range` so a visitor only downloads the subsets the page text needs) in `site/fonts/` (Archivo 400/500/700/800, Charis SIL 400/700/400i, Space Mono 400/700, Inter 400/500/600, all SIL OFL, from the Fontsource npm packages). Verified loaded in Chromium; zero failed requests.
5. Focus ring unified (two-tone) so it survives any background.

## Checked and fine
Text 15.9:1, muted 11.0:1, meta 5.6:1, brass 6.4:1, vat-300 5.3:1, photo marker 6.8:1.
No horizontal scroll at 1440, 820 or 390. Heading order H1 → H2 → H3 with no skipped level.

## Remaining issues
- **Fonts.** Resolved — see fixed item 4. The earlier `before/` screenshots still show fallbacks; `after/` shows the real typefaces. Latin Extended is included so ṣ and ọ render in the real faces. The confidence glyphs ● ◐ ○ ⊘ are in none of these fonts and use the system fallback.
- **Page length** ~11,300px at 1440 and ~18,700px on mobile; six near-empty plates before
  the disciplines remains the open decision already recorded in PROJECT_STATE.
- Meta text at 11px mono is small though it passes contrast.
- Not checked: real screen readers, Safari/Firefox, touch hardware, Lighthouse.

## Recommendation
**Go** for review by the user.
