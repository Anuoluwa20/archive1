# ARCHIVE

A digital museum landing page documenting and celebrating Nigeria's creative
history across **Photography**, **Music**, **Fashion** and **Design**.

**Guiding principle:** do not merely display the past — make people feel its
influence on the present.

> **This repository contains two independent builds of the same brief.**
> They were produced by different agent workflows, on different stacks, and they
> share no common ancestor in Git history. Neither is a branch of the other.
> Both are kept. This file is the map.

| | Track A | Track B |
| --- | --- | --- |
| **What** | Next.js museum application | Agent-workflow hub + static landing page |
| **Stack** | Next.js 15 (App Router), React 19, TypeScript, Tailwind | One static `index.html`, no build step |
| **Where** | `src/`, `docs/`, `research/`, `scripts/`, `tests/` | `artifacts/`, `hub/`, `.opencode/` |
| **Run** | `npm install && npm run dev` → `localhost:3000` | `node hub/server.mjs` → `localhost:10002` |
| **Write-up** | [`docs/README-nextjs-build.md`](docs/README-nextjs-build.md) | this file, below |

---

## Track A — the Next.js museum application

A nine-section immersive exhibition built by a documented five-role agent studio
(product → research → design → motion → engineering), with sequential handoffs in
`docs/agent-handoffs/`. It ships a research corpus of **510 references** across
eight categories (`research/`), a Web Audio synthesiser, an interactive collection
grid with a curatorial lightbox, and a comparison slider.

- `docs/` — product, design, engineering and motion specifications
- `research/` — reference corpus, shortlists, deep analyses, source register
- `src/` — the application; `scripts/` — corpus generators; `tests/` — QA suite
- Full original write-up: [`docs/README-nextjs-build.md`](docs/README-nextjs-build.md)

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # tests/run-verification.js
npm run build && npm run start
```

---

## Track B — the agent-workflow hub and landing page

A separate run of the same brief, built as an inspectable trail rather than an
application: every stage produces a document, and a local hub renders them all so
the work can be reviewed while it happens.

```bash
node hub/server.mjs
```

Open <http://localhost:10002>. It reads `hub/hub.config.json`, renders every
artifact under `artifacts/`, and refreshes every 15 seconds so agent output appears
as it lands.

### Where things are

- `artifacts/00-sku/SKU.md` — **the source of truth.** Every agent reads it first.
- `WORKFLOW.md` — agent roster, stage gates, directory contract.
- `PROJECT_STATE.md` — the Project Manager's live state.
- `pipeline.md` — the stage board, rendered with status badges.
- `artifacts/` — one folder per stage:
  - `00-sku/` brief · `01-competitors/` · `02-inspiration/` reference library
  - `03-interactions/` interaction library · `04-brand/` logo research, creative
    directions and the brand system document
  - `05-production/` the built landing page · `06-progress/` · `07-content/`
    verified historical facts, the only permitted source of claims
- `.opencode/agents/` — the ten workflow agents.
- `hub/` — the documentation hub (server + UI + config).

### The landing page

`artifacts/05-production/site/index.html` — one static file, no framework, no build
step. Eight sections, all design tokens from `artifacts/04-brand/BRAND_DIRECTIONS.md`
§7 used verbatim.

**It carries no photographs at all, and that is the argument.** No archival imagery
is rights-cleared, so instead of borrowing images the page runs six *plates*: real,
dated, institution-held works named in full — title, maker, date, holding
institution, accession number and rights status — in the position an image would
have occupied. The four registered masthead states are applied to the plates *by
confidence*, so the design system itself encodes how much the page trusts a claim.
An unverified lead is drawn as an outline rather than dressed up.

Build log, including the defects found by looking at renders: `WEBSITE_BUILD.md`.

The brand system document — three creative directions, costed and compared, with
downloadable specimens — is at `artifacts/04-brand/document/index.html`.

---

## Ground rules for this project

- The institution is fictional; the history is **real and credited**. No invented
  facts presented as history.
- **No unlicensed archival imagery.** Prefer self-made imagery, typographic
  treatments and permissively licensed material, credited on the page.
- No pan-African clichés, no green-white-green shorthand, no beige/serif museum
  template, no agency-portfolio aesthetic.

## Research leads are unverified

Everything in `artifacts/00-sku/SKU.md` §11 is a lead, not a finding. Nothing
reaches the page without a cited source, and the content register records the
confidence and rights status of every claim it admits.
