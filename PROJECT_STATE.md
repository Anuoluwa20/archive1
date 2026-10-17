# Project State

Owned and maintained by the `project-manager` agent. Do not hand-edit stage
status; ask the Project Manager to update it.

- **Project:** ARCHIVE — digital museum landing page
- **Brief received:** yes
- **Current stage:** 06 production
- **Overall status:** built, interactions added, refinement pass done; awaiting user review
- **Last update:** Direction A chosen and documented; the landing page built and
  captured at desktop and mobile; brand system document and its downloads generated

## Stage tracking

| Stage | Owner | Status | Artifact | Notes |
| --- | --- | --- | --- | --- |
| 01 Discovery / SKU | project-manager | done | artifacts/00-sku/SKU.md | scope, audiences, must-avoid list, risks |
| 02 Competitor research | competitor-research | done | artifacts/01-competitors/COMPETITOR_RESEARCH.md | 4 groups; anti-patterns documented; no Nigerian archive precedent awarded |
| 03 Inspiration library | inspiration-library | done | artifacts/02-inspiration/INSPIRATION_LIBRARY.md | **193 catalogued, 52 photographed**; 141 queued; limits stated in §6 |
| 03 Reference captures | general (gap fill) | done | artifacts/references/screenshots/ | 52 full-page captures; `_final.json` holds the URL set |
| 04 Interaction research | interaction-research | done | artifacts/03-interactions/INTERACTION_LIBRARY.md | 70 entries, 12 categories; signature effect mapped to SKU §5 |
| 05 Brand / logo research | brand-research | done | artifacts/04-brand/LOGO_RESEARCH.md | 68 entries; anti-patterns; specificity bank |
| 05 Creative direction | creative-direction | done | artifacts/04-brand/BRAND_DIRECTIONS.md | 3 directions + recommendation; 6 standalone SVG specimens |
| 05 Brand system document | general (gap fill) | done | artifacts/04-brand/document/ | 9 sheets; 8 downloads (ZIP + PDF), all verified 200 and intact |
| 07 Content register | general (gap fill) | done | artifacts/07-content/CONTENT_REGISTER.md | 39 verified entries; myths flagged; rights noted |
| 06 Website build | general (website-build died) | done | artifacts/05-production/site/ | direction A + 2 imports; build log at WEBSITE_BUILD.md |
| 06 Interaction build | interaction-build | done | artifacts/05-production/INTERACTION_BUILD.md | Tier 1 subset built; K3 deliberately not built; pinned rail outstanding |
| 06 Visual refinement | visual-refinement | done | artifacts/05-production/VISUAL_REFINEMENT.md | contrast + target-size fixed; fonts unverified; recommendation: go |
| 07 Progress | progress-observer | running | artifacts/06-progress/PROGRESS_LOG.md | |

## Decisions made

- **Page scope:** single landing page, sections 01–08 from the brief treated as a
  starting point. Realised as 8 sections: nav, hero, featured archive,
  disciplines, timeline, spotlight, what-we-could-not-verify, closing.
- **Content rule:** the institution is fictional, the history is real. Nothing
  historical reaches the page without a cited source; credits visible on-page.
- **Rights rule:** no unlicensed archival imagery. Prefer self-made imagery,
  typographic treatments and permissively licensed material.
- **Anti-patterns are binding:** no pan-African clichés, no green-white-green
  shorthand, no beige/serif museum template, no agency-portfolio aesthetic.
- **Creative direction — A, "The Masthead"** (BRAND_DIRECTIONS.md §6.1), with two
  sanctioned imports: **B's absence policy** (never a silent empty box — name the
  title, date, holder and rights status) and **C's registered-state and marker
  mechanics**. B was rejected as too fragile and copy-heavy with the worst
  degradation when unfinished; C as not buildable in budget, with accessibility
  debt, and for treating a living meaning-bearing sign system as interface.
- **The rights constraint became the premise.** No archival imagery is cleared, so
  the page carries no photographs at all and says why. Six "plates" name real,
  dated, institution-held works in the position where an image would be. This is
  the identity, not a fallback.
- **The masthead does not rotate decoratively.** The four registered states are
  applied to the plates *by confidence*, so the design system encodes how much the
  page trusts a claim. An earlier decorative hero rotation was removed — it fought
  the brief's "purpose clear within the first few seconds" criterion.
- **Reference target cut to 193 catalogued / 52 photographed** rather than a
  nominal ~500. Beyond that the list stops being on-brief.
- **Brand document authored from the written standard** because the skill's
  `examples/` and the Lagos Life references are absent from this machine. Fidelity
  to the reference implementation is therefore **unverified**; the locked standard
  (fonts, sizes, spacing, layout) was preserved and only content and colour tokens
  changed.

## Open questions for the user

- None blocking. The build is complete to the chosen direction; refinement is the
  remaining stage before it could be called finished.

## Blocked / waiting on a decision

- Nothing blocked.
- **Waiting on the user only to look at it.** The three things worth a decision:
  1. **The six plate sections are large and mostly empty.** That is the concept,
     but it is a lot of deliberate emptiness before the disciplines. The
     alternative is three plates plus a second row behind a disclosure.
  2. **The page runs ~12,000px at 1440 wide.** The section rhythm is generous by
     design; it could be tightened.
  3. **Fonts load from Google Fonts** with system fallbacks, because the network
     was unstable during the build. Self-hosting is the better answer for a
     finished site and is a small job.

## Known gaps carried forward

- The six refinement-facing reference categories (editorial, culture, photography,
  fashion, music, poster) are catalogued but **not photographed** — 141 queued.
- Web search remains unavailable, so the research is Anglophone-internet shaped.
  Nigerian and West African culture platforms are under-represented relative to
  their importance; `06 · culture` is the correction and is uncaptured.
- Nigerian graphic design proper (posters, book jackets, record sleeves, type)
  could not be sourced anywhere. The page names this as a gap rather than padding it.

- **Light edition (branch design/light-creative-brand):** `artifacts/05-production/site-light/index.html` built with BRAND_SYSTEM.md; not yet reviewed by the user.
