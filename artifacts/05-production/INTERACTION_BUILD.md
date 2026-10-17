# INTERACTION BUILD — ARCHIVE (Stage 06)
Implemented in `artifacts/05-production/site/index.html` from `INTERACTION_LIBRARY.md` §3.
Tokens only (`--dur-*`, `--ease-*`, `--stagger`); no new colours, durations or curves.

## Built
| Ref | Pattern | Where | Reduced motion |
| --- | --- | --- | --- |
| E3 | Two-tone focus ring (brass outline + ink gap), global | `:focus-visible` | n/a |
| A5 | Smooth scroll **opt-in** + `scroll-margin-top` | `html`, `[id]` | only under `no-preference` and not when toggle is on |
| A2 | Scroll-shrink bar, brass rule after 128px | `header[data-scrolled]` | transition collapses to 1ms |
| I1 | `aria-current="true"` on the nav link for the section in view | `.bar__nav a` | no motion involved |
| C6+K1 | Hero entry: masthead, rule draw, strap stagger (opacity/transform only) | `.hero__*` | `animation:none` |
| B1 | Clip-path reveal of each plate field, staggered by `--i`; captions never cropped | `.plate__field` | `clip-path:none` |
| D1 | Directional wipe on quiet buttons, hover and focus-visible identical | `.btn--quiet` | transition off |
| E5 | All new hover gated by `@media (hover:hover)` | buttons | n/a |
| D5 | Copy-citation per plate, `aria-live="polite"` confirmation | `.plate__cite` | label change kept |
| K4 | Visible "Reduce motion" switch, `aria-pressed`, persisted, applied before first paint | colophon | **is** the escape hatch |
| B2+K2 | **Pinned era rail** — the one pinned section. 21 existing entries are moved (not copied) into 5 era panels; vertical scroll maps 1:1 to horizontal travel; index of real links with `aria-current="step"`; progress bar | `#stories` | not built under OS reduce, manual toggle, or viewport <900×720; the original vertical list is the fallback |
| L2 | Kill switch mirrored for OS setting and manual toggle | CSS foot | animation/transition removed, content stays visible |

Already present upstream and left alone: skip link (A4), `.reveal` observer with
fire-once semantics, discipline-row hover/focus-within parity (E1/E2).

## Not built, and why
- **K3 grayscale→colour recovery (the library's "signature effect").** The page has no
  hero artefact and no photographs by rule. The plates are deliberately monochrome and
  their state encodes claim confidence, so animating it would misstate confidence.
  Needs a decision if a licensed image is ever added.
- **A3, F5 editorial index, J1 deep zoom, J2 slider, J5, G2, G4:**
  not attempted this pass. Deep zoom and slider need licensed imagery; 
- **Scroll-driven `animation-timeline` (L5):** not used. Reveals use the existing
  `IntersectionObserver`, which is the library's stated fallback and works everywhere.
- **D2 ticker, D3 underline-draw, B4 progress:** skipped; not needed for the page's argument.

## Evidence (Chromium via Playwright, 1440×900, localhost:8088)
- No page errors. Nav shrink flips at scroll; `aria-current` matched Photography, Music,
  Fashion, Design, Stories, Spotlight when each was scrolled to (after smooth scroll settled).
- 6 plates get a citation button; copying yields title + maker/date/holder/rights +
  source; live region announced "Citation copied".
- Toggle sets `data-motion="reduce"`, persists across reload, hero animation → `none`.
- Emulated OS `prefers-reduced-motion: reduce`: hero animation `none`, plate clip-path `none`.
- Performance: transform/opacity/clip-path only; one rAF-throttled passive scroll handler
  reading layout, no writes in the loop.

## Notes on the rail
The library suggested a static snap rail as the reduced-motion fallback; I kept the existing vertical list instead because it is already complete and accessible. Tested: 21 entries in the rail, index highlights Before 1950 → 1950s → 1960s → 1970s → 1980 onward across the scroll, rail absent on mobile and under reduced motion, toggle builds and restores it with all 21 entries back in order.

## Remaining motion work
Editorial index hover (F5). No hover or focus behaviour
was exercised on touch hardware; only emulated viewports.
