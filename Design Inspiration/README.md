# Design Inspiration — ARCHIVE

| Path | What it is | Trust level |
| --- | --- | --- |
| `screenshots/` | 52 full-page captures (1440×900) of real sites | Real. Two are unusable: `02-archive__nypl-digital-collections` and `03-index__discogs` are bot-challenge pages. `01-hero__tate` is partly covered by a consent banner. |
| `data/verified-references-193.csv` | 193 real references, each URL checked reachable by the upstream research agent; 52 have screenshots | Real |
| `data/UNVERIFIED-ui-studies-500.*` | 500 templated "UI studies" generated earlier in the project | **Not evidence.** Every title is "Study #NN", every URL ends `?ref=N`, 8 distinct descriptions, 40 creator names. Kept only because it was requested; do not cite it. |

The 500-reference target is **not met with real material**: 193 verified, 52 photographed.
To extend, run `artifacts/references/_shoot.mjs` locally against the 141 queued URLs.
