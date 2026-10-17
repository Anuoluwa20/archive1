# ARCHIVE — Product Decision Log
**Document ID:** `DOC-PRD-007`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 01 — Product Manager  
**Status:** Active Governance Document  

---

## Decision Log Register

| ADR ID | Date | Category | Decision Taken | Rationale & Trade-offs | Status |
|---|---|---|---|---|---|
| **ADR-001** | 2026-10-14 | Architecture | Adopt Single-Page Narrative Editorial Landing Page with Deep Modals rather than traditional multi-page router for MVP. | **Rationale:** Maximizes narrative momentum, emotional immersion, and conversion without disruptive page reloads.<br>**Trade-off:** Requires disciplined lazy-loading and component virtualization to maintain sub-2.5s LCP. | ACCEPTED |
| **ADR-002** | 2026-10-14 | Motion & Tech | Reject Heavy 3D WebGL / Scroll Hijacking in favor of Hardware-Accelerated CSS / Framer Motion. | **Rationale:** Cultural institutions must remain accessible to visitors on mobile and cellular data in Lagos, Nairobi, and London. Scroll hijacking causes motion sickness, high CPU battery drain, and breaks keyboard scrolling.<br>**Trade-off:** Less flashy "3D room" visual trickery, but infinitely higher usability, speed, and editorial elegance. | ACCEPTED |
| **ADR-003** | 2026-10-14 | Audio | Implement Synthesized Web Audio API soundscape with explicit user opt-in, rather than autoplaying MP3s. | **Rationale:** Browser autoplay policies strictly block uninvited audio. Synthesizing subtle analog vinyl crackle and ambient tape warmth in Web Audio requires zero network asset download and provides instant responsiveness.<br>**Trade-off:** Requires user click to activate audio context. | ACCEPTED |
| **ADR-004** | 2026-10-14 | Curation | Feature J.D. 'Okhai Ojeikere's *Hairstyles (1968–1999)* for Section 04 Featured Cultural Story. | **Rationale:** Ojeikere's work stands at the exact crossroads of Photography, Fashion/Hair sculpture, Design, and Social History. It embodies the institutional theme "THE PAST IS NOT PAST" with unmatched visual clarity.<br>**Trade-off:** Highlights one master over others, balanced by featuring Fela Kuti, Shade Thomas-Fahm, and Lemi Ghariokwu in subsequent sections. | ACCEPTED |
| **ADR-005** | 2026-10-14 | Typography | Pair monumental condensed grotesque display (`Syne` / `Cabinet Grotesk` / `Oswald`) with literary editorial serif (`Newsreader` / `Playfair Display`) and monospace metadata (`JetBrains Mono` / `Space Mono`). | **Rationale:** Encapsulates the visual duality of bold modern African graphic confidence with rigorous archival cataloging documentation.<br>**Trade-off:** Must ensure web font subsets are loaded efficiently. | ACCEPTED |
| **ADR-006** | 2026-10-14 | Research | Target 510+ structured references in research library across 8 categories with verifiable metadata. | **Rationale:** Fulfills the execution blueprint requirement for exhaustive cultural verification and authentic source citations.<br>**Trade-off:** High initial research synthesis overhead, mitigated by automated verification pipelines and structured schema. | ACCEPTED |
