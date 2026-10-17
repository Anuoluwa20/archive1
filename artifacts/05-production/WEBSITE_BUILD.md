# WEBSITE_BUILD — ARCHIVE

**Stage 06 — Build.** Output: `artifacts/05-production/site/index.html`
**Direction:** A — "The Masthead", with the two sanctioned imports
(B's absence policy, C's registered-state and marker mechanics).
**Source of truth:** `artifacts/00-sku/SKU.md` · `artifacts/04-brand/BRAND_DIRECTIONS.md` §7
(exact tokens, used verbatim) · `artifacts/07-content/CONTENT_REGISTER.md` (every fact).

---

## 1. What was built

A single static page — `site/index.html` — with no build step, no framework and
no bundler. Embedded CSS, ~80 lines of vanilla JS. Eight sections:

| # | Section | Job |
| --- | --- | --- |
| 01 | Navigation | Masthead link, six in-page section links, accessible mobile drawer |
| 02 | Hero | Masthead, folio line, purpose, the guiding principle, one primary action |
| 03 | Featured archive | **Six plates** — named absences, not images |
| 04 | Explore the disciplines | Four disciplines, four registers, four discipline colours |
| 05 | Stories through time | 21 dated, sourced events from 1856 to 2024 |
| 06 | Featured creator | J.D. 'Okhai Ojeikere and his four institutional holdings |
| 07 | What we could not verify | The gaps and the corrections, stated |
| 08 | Closing + footer | Continuation, real credits, source list, colophon |

## 2. The decision that shapes the page

There is no photograph anywhere on this page, and that is deliberate. The
content register shows that essentially every significant work in this history is
institution-held, not public domain, or unknown — the only cleared image is one
Met public-domain object whose own history (looted 1897) needs handling rather
than decorating with.

So the page implements the **absence policy** from direction B and makes it the
argument rather than a hole: each plate carries the title, maker, date, holding
institution, accession number and rights status, in the place the image would
have been. Plate 06 is a dashed outline because *Nigerian record sleeve design
could not be sourced at all* — a gap we are naming, not a finding we are
dressing up.

The four registered masthead states are applied to the plates **by confidence**
(`screen` = featured archive, `soft` = uncertain material, `outline` = lead
only), which means the design system itself encodes how much the page trusts a
claim. The masthead holds state `01 SOLID`.

## 3. Tokens

Taken from `BRAND_DIRECTIONS.md` §7 without amendment: the Archivo / Charis SIL /
Space Mono / Inter stack, the Ink & Vat palette, the fluid type scale, the
`--s-1…--s-11` spacing ramp, `--r-0` as default (a single `2px` and a single
pill), the five motion durations and four easings.

Two rules were treated as machine-checkable and are respected:
- **Uppercase is the mono catalogue layer only.** Display and body are never
  uppercased in the prose.
- **Discipline colours are 1px rules and labels — never text, never fills.**

Green was not introduced anywhere, including states where green would be
conventional. `--oxide-500` carries error/excluded only.

## 4. Interaction

One `IntersectionObserver` (threshold `0.2`), unobserved after first firing, so
each entrance plays exactly once and never re-triggers on scroll-back.
`transform` and `opacity` only. Maximum entrance translate is the tokenised
`12px`. No scroll listener drives layout — the only scroll listener updates the
spine's folio text.

Reduced motion is a first-class state, not a fallback: all durations collapse to
`1ms`, translates go to zero, and the masthead is pinned to `01 SOLID`.

## 5. Accessibility

- Skip link; `header`/`main`/`footer` landmarks; one `h1`, ordered headings.
- Focus visible everywhere via `:focus-visible` at 2px `--brass-500`, offset 2px.
- The mobile drawer is a real button with `aria-expanded`/`aria-controls`, and it
  closes on navigation.
- No content is conveyed by colour alone: every confidence marker is a glyph
  with a text label beside it, and every discipline colour is paired with its
  name.
- Decorative plate fields are `aria-hidden`; the meaning lives in the
  `figcaption`, so a screen reader gets the plate as a described figure rather
  than an empty box.
- Body measure capped at `68ch`; contrast from the pre-checked token pairs.

## 6. Defects found and fixed

Honest record; all three were found by looking at rendered screenshots rather
than by reading the code.

1. **Entrance animation was load-bearing.** `.reveal` set `opacity: 0`
   unconditionally, so if JS failed — or a crawler, or a reader with JS off
   viewed the page — the plates and all four discipline rows would have been
   invisible. The hidden state is now scoped to `.js .reveal`, so the page is
   fully visible without JavaScript and the animation is pure enhancement.
2. **Timeline labels clipped off the right edge.** The grid used `1fr` for the
   middle column, which resolves to `min-content` and pushed the date column
   past the container. Changed to `minmax(0, 1fr)`.
3. **Duplicated section number.** The closing section was numbered `07`, colliding
   with "What we could not verify". Renumbered to `08`.

One further change was made after looking at the renders: a decorative hero
rotation through the four masthead states was **removed**. It competed with the
brief's "purpose clear within the first few seconds" criterion, and the states
carry more meaning on the plates, where they encode confidence. The system is
still demonstrated — just where it means something.

## 7. Verified

Captured at 1440×900 and 390×844 with `scripts/capture.mjs`
(headless Chromium), then inspected:
`artifacts/05-production/screenshots/` — `01-desktop__site.png` (full page),
`01-mobile__site.png` (full page), `02-hero.png`, `03-plates.png`,
`04-disciplines.png`, `05-timeline.png`, `06-footer.png`.

Checked: layout at both widths, plate grid reflow (3 → 2 → 1 column), the
timeline at desktop and stacked at mobile, focus styling, and the drawer.

## 8. Known weaknesses

- **The full-page capture runs ~12,000px at 1440 wide.** The section rhythm
  (`--section-y`) is generous by design, but the page is long. A reviewer could
  reasonably argue for tightening it.
- **The plates are large and mostly empty.** That is the concept, but six of them
  in a row is a lot of deliberate emptiness before the reader reaches the
  disciplines. If it reads as unfinished to a first-time visitor rather than
  intentional, the fix is to reduce to three plates and move the rest to a
  second row behind a disclosure.
- **No hover states were verified by screenshot.** The hover rules exist
  (discipline marker extension, link underlines, button states) but a headless
  resting-state capture cannot show them.
- **Fonts are loaded from Google Fonts** with the documented system fallbacks,
  because the network was unstable during the build and self-hosting could not be
  completed reliably. The page renders correctly without them; self-hosting
  remains the better answer for a finished site.
- **The Design discipline is thin**, as the register says. The page says so
  openly rather than padding it.
