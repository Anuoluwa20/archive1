# Progress log

The observer agent appends here. Newest last.

---

## Discovery complete

- **What is happening:** Stage 01 finished; four research agents running in
  parallel from the SKU.
- **Completed:** `artifacts/00-sku/SKU.md`; project state and pipeline board set.
- **Running:** `competitor-research`, `inspiration-library`,
  `interaction-research`, `brand-research`.
- **Next:** `creative-direction` once brand research lands, then the build agents.
- **Blocked:** no.

**Status: research in progress**

---

## Stage 02 complete; content register added

- **What is happening:** competitor research landed; a content register was added
  because no agent in the workflow owned historical accuracy.
- **Completed:** `artifacts/01-competitors/COMPETITOR_RESEARCH.md` (4 groups,
  anti-patterns, no awarded Nigerian archive precedent);
  `artifacts/07-content/CONTENT_REGISTER.md` (39 verified entries across the four
  disciplines, with myths flagged).
- **Running:** `inspiration-library`, `interaction-research`, `brand-research`.
- **Next:** `creative-direction`, then the build agents.
- **Blocked:** no.

### Environment limitations surfaced

1. **Web search is unavailable** — no search provider is configured, so
   `websearch` cancels. All research fell back to fetching live pages directly.
   Coverage is therefore narrower and Anglophone-internet shaped.
2. **Subagents have no desktop browser**, so they cannot screenshot. Closed by
   adding `scripts/capture.mjs` (headless Chromium) to the skill.
3. **Institutional sources blocked** during content work: Smithsonian (403),
   British Museum (403), the Met's website (bot checkpoint; its API worked).
4. **Content gap:** Nigerian graphic design proper — posters, book jackets,
   record sleeves, type — is the weakest area. Record sleeve design is
   unverified anywhere. Do not invent it.

**Status: research in progress**

---

## Incident: network failure killed three agents

- **What happened:** `getaddrinfo ENOTFOUND opencode.ai` — a DNS/network failure
  that also took the hub process down with the session.
- **Lost:** `inspiration-library` (final report only), `creative-direction` (final
  report only), `website-build` (everything).
- **Survived, because artifacts were already on disk:** `BRAND_DIRECTIONS.md`
  (13,480 words) plus all six direction specimens; 52 reference captures.
- **Consequence:** the landing page was built directly rather than by the
  `website-build` agent, so the build has a single author. Recorded honestly in
  `artifacts/05-production/WEBSITE_BUILD.md`.
- **Blocked:** no longer.

**Status: recovered**

---

## Direction A chosen; brand system document delivered

- **What is happening:** creative direction resolved and the identity work
  published as a document that can be downloaded.
- **Completed:**
  - `artifacts/04-brand/BRAND_DIRECTIONS.md` — three directions, costed and
    compared, then one recommended.
  - `artifacts/04-brand/document/` — 9-sheet brand system document, built on the
    locked template. Content and colour tokens changed; fonts, sizes, spacing and
    layout untouched.
  - 8 real downloads: per-item ZIP (SVG + PNG + PDF) and whole-document ZIP, plus
    a PDF per item. All verified: HTTP 200, archives pass `testzip()`.
  - 6 standalone SVG specimens rasterised to 16 PNGs at 512 and 1024.
- **Decision:** take **Direction A — The Masthead**, with B's absence policy and
  C's registered-state and marker mechanics imported.
- **Why A:** it is the only direction that wins on both halves of the same
  decision — distinctive and culturally grounded, *and* buildable, accessible and
  finishable by one person inside the budget. It also degrades best when
  unfinished, which given the rights position mattered more than it usually would.
- **Caveat:** the document was authored from the written standard because the
  skill's `examples/` and the Lagos Life references are absent from this machine.
  Fidelity to the reference implementation is **unverified**.
- **Next:** the landing page build.
- **Blocked:** no.

**Status: design complete**

---

## Landing page built and verified

- **What is happening:** stage 06 production. The ARCHIVE landing page exists.
- **Completed:** `artifacts/05-production/site/index.html` — one static file, no
  build step, no framework. Eight sections, all tokens from
  `BRAND_DIRECTIONS.md` §7 used verbatim, every historical claim traced to
  `CONTENT_REGISTER.md`.
- **The page carries no photographs at all**, and that is the argument: six plates
  name real, dated, institution-held works — title, maker, date, holder,
  accession, rights status — in the position where an image would have been.
- **Defects found by looking at renders, not by reading code:**
  1. Entrance animation was load-bearing — `.reveal` set `opacity: 0`
     unconditionally, so without JS the plates and all four discipline rows were
     invisible. Now scoped to `.js .reveal`.
  2. Timeline right-hand labels clipped off the container edge — `1fr` was
     resolving to `min-content`; changed to `minmax(0, 1fr)`.
  3. A duplicated section number (`07` used twice).
  4. A decorative hero rotation through the four masthead states was **removed**
     after seeing it: it competed with the "purpose clear in seconds" criterion,
     and the states mean more on the plates, where they encode confidence.
- **Verified:** 1440×900 and 390×844 full-page captures plus section captures, all
  in `artifacts/05-production/screenshots/`, inspected by eye.
- **Also improved:** `capture.mjs` now walks the page in viewport-sized steps
  instead of jumping to the bottom. The jump only ever exposed the last screen, so
  anything gated on `IntersectionObserver` mid-page was captured invisible — which
  produced a screenshot of blank sections that looked like a broken build.
- **Next:** `interaction-build`, then `visual-refinement`.
- **Blocked:** no.

**Status: built; refinement pending**

---
### Update — interaction build and visual refinement
- **Done:** 10 interaction patterns built from the library (E3, A5, A2, I1, C6+K1, B1, D1, E5, D5, K4) with a mirrored reduce-motion kill switch; contrast (oxide text 3.22 → 5.88:1) and mobile target-size defects fixed.
- **Decided against:** K3 grayscale-to-colour effect — plates are monochrome and encode confidence.
- **Verified:** Playwright run on desktop/tablet/mobile; OS reduced-motion emulation; toggle persistence; before/after screenshots.
- **Not verified:** webfonts (blocked in capture), other browsers, assistive tech, touch hardware.
- **Also added:** `Design Inspiration/` folder and `DESIGN_SYSTEM.md`. The 500-record "UI studies" file is templated and kept only as `UNVERIFIED-*`.
- **Next:** user review; self-host fonts; pinned era rail.
- **Blocked:** no.

**Status: refinement done; awaiting review**

---
### Update — era rail, self-hosted fonts, sticky nav
- **Done:** pinned era rail (B2+K2) on Stories; fonts self-hosted and verified; nav made genuinely sticky (pre-existing bug).
- **Verified:** desktop, short laptop, tablet, mobile — no errors, no failed requests, no horizontal scroll; rail absent where it should be.
- **Open:** confidence glyphs (● ◐ ○ ⊘) use system fallback fonts; F5 editorial index; touch hardware and other browsers untested.
- **Blocked:** no.

**Status: refinement done; awaiting review**

---
### Update — light creative edition and brand system
- **Done:** brand system (palette, type, contrast table, motion rules); light site with coverflow plates, tabbed promises, cloud band, scroll/pointer motion.
- **Not verified:** the new layer was written without a render test; no screenshots taken this round.
- **Blocked:** push needs credentials (see below).

**Status: built, awaiting review**
