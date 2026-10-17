# Pipeline

Where ARCHIVE stands. The Status column drives the board: **done** fills,
**running** pulses, **waiting** is dashed, **blocked** is hatched.

| Stage | Agent | Output | Status |
| --- | --- | --- | --- |
| 00 | Setup | Workflow agents + hub | done |
| 01 | `project-manager` | `artifacts/00-sku/SKU.md` | done |
| 02 | `competitor-research` | `artifacts/01-competitors/COMPETITOR_RESEARCH.md` | done |
| 03 | `inspiration-library` | `artifacts/02-inspiration/INSPIRATION_LIBRARY.md` | done |
| 03 | reference captures (gap fill) | `artifacts/references/screenshots/` | done |
| 04 | `interaction-research` | `artifacts/03-interactions/INTERACTION_LIBRARY.md` | done |
| 05 | `brand-research` | `artifacts/04-brand/LOGO_RESEARCH.md` | done |
| 05 | `creative-direction` | `artifacts/04-brand/BRAND_DIRECTIONS.md` + 6 specimens | done |
| 05 | brand system document (gap fill) | `artifacts/04-brand/document/` | done |
| 06 | `website-build` | `artifacts/05-production/site/` | done |
| 06 | `interaction-build` | `artifacts/05-production/INTERACTION_BUILD.md` | waiting |
| 06 | `visual-refinement` | `artifacts/05-production/VISUAL_REFINEMENT.md` | waiting |
| 07 | `progress-observer` | `artifacts/06-progress/PROGRESS_LOG.md` | running |
| 07 | content sourcing (unowned gap) | `artifacts/07-content/CONTENT_REGISTER.md` | done |

## Gates

- Stage 01 is gated on the project brief — **satisfied**.
- Stages 02–05 research run in parallel from the SKU.
- Stage 05 creative direction is gated on brand research — **satisfied**.
- Stage 06 production is gated on the SKU plus selected references and a chosen
  creative direction — **satisfied**; the build ran on direction A (the
  recommendation) plus the two sanctioned imports.
- Stage 06 interaction build and visual refinement are gated on the build
  landing — **satisfied**, and are next.

## Notes

- Research leads in SKU §11 are **unverified**. Nothing reaches the page without a
  cited source.
- Image rights are a live constraint: prefer self-made, typographic or
  permissively licensed material. See SKU §8.
- **Nothing in this project is rights-cleared for reproduction.** The only
  public-domain candidate found is a Met object whose own history (looted in 1897)
  needs handling rather than decorating with. This stopped being a blocker and
  became the creative premise: typography, colour, layout and motion carry the
  cultural load, and each omission is named on the page.
- **Two "done" rows are partial and say so.** Stage 03 catalogued 193 references
  and photographed 52; the six refinement-facing categories are uncaptured. The
  brand system document was authored from the written standard because the skill's
  `examples/` and the Lagos Life references were absent from this machine, so its
  fidelity to the reference implementation is unverified.
- **Unowned gaps filled during this run:** `07-content/` (no workflow agent owned
  historical accuracy), `artifacts/04-brand/document/` (no agent owned the brand
  document deliverable), and `artifacts/references/` (screenshots for agents that
  have no browser).

## Incident

A network failure (`getaddrinfo ENOTFOUND opencode.ai`) killed three subagents
mid-run — Stage 03, `creative-direction`, and `website-build` — and took the hub
down with the session. `creative-direction` had already written its artifact and
all six specimens, and the library had already written 52 captures, so only the
final reports were lost. `website-build` produced nothing, and the landing page
was built directly instead. Recorded here because it explains the shape of stage
03 and why the build has a single author.
