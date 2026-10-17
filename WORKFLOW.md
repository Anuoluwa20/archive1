# Agent-Based Website Building Workflow — Operating Manual

This project turns one clear outcome into an autonomous, research-driven website
build. The **Project Manager Agent** is the persistent brain; specialized agents
each produce one structured artifact and hand it to the next stage.

## Agent roster

| Stage | Agent ID | Mode | Produces |
| --- | --- | --- | --- |
| 01 | `project-manager` | primary | `artifacts/00-sku/SKU.md` + coordination |
| 02 | `competitor-research` | subagent | `artifacts/01-competitors/COMPETITOR_RESEARCH.md` |
| 03 | `inspiration-library` | subagent | `artifacts/02-inspiration/INSPIRATION_LIBRARY.md` |
| 04 | `interaction-research` | subagent | `artifacts/03-interactions/INTERACTION_LIBRARY.md` |
| 05 | `brand-research` | subagent | `artifacts/04-brand/LOGO_RESEARCH.md` |
| 05 | `creative-direction` | subagent | `artifacts/04-brand/BRAND_DIRECTIONS.md` |
| 06 | `website-build` | subagent | `artifacts/05-production/WEBSITE_BUILD.md` + site files |
| 06 | `interaction-build` | subagent | `artifacts/05-production/INTERACTION_BUILD.md` |
| 06 | `visual-refinement` | subagent | `artifacts/05-production/VISUAL_REFINEMENT.md` |
| 07 | `progress-observer` | subagent | `artifacts/06-progress/PROGRESS_LOG.md` |

## The full chain

User Goal → **Project Manager** → SKU → **Research** → Competitor + award-winning
research → **Website Reference** → 500-website library → **Interaction Expert** →
categorized motion library → **Brand / Logo Research** → **Creative Direction** →
**Production Agents** → Website build → **Review / Refinement**.
Across the chain the Project Manager is the persistent brain and the Progress
Agent is the visibility layer.

## Directory contract

```
artifacts/
  00-sku/            project knowledge/spec ("SKU") — source of truth
  01-competitors/    competitor + award-winning benchmark research
  02-inspiration/    large categorized website reference library
  03-interactions/   categorized interaction & motion library
  04-brand/          logo research + creative directions
  05-production/     build log + produced website and assets
  06-progress/       progress log / status reports
  07-content/        verified historical content + rights register
  references/        shared assets, incl. references/screenshots/
```

Every agent reads `artifacts/00-sku/SKU.md` first. If it is missing, the agent
stops and reports back instead of guessing.

## Status vocabulary

- `discovery complete` — SKU created
- `competitor research complete` — benchmarks categorized
- `research in progress` — website references being collected
- `interaction research in progress` — motion examples being gathered
- `production started` — enough context to build
- `blocked` — a decision, missing input, or technical issue needs attention

## Progress cadence

The Progress / Observer Agent targets a user-facing update roughly every 5 minutes
(a 2-minute internal heartbeat is acceptable when the environment allows). The
Project Manager also emits a concise status at each stage boundary. Each update
answers: what is happening, what is done, what is running, what is next, and
whether anything is blocked.
