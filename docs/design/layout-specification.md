# ARCHIVE — Layout & Grid Architecture Specification
**Document ID:** `DSN-LAY-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 02 — Senior Product Designer  

---

## 1. Grid Philosophy & The Archival Matrix

ARCHIVE employs an **Asymmetric Curatorial Grid System**. Rather than rigid, repetitive card arrays, the layout reflects the structured variation of exhibition wall installations, contact sheets, and letterpress specimen broadsheets.

```
+-------------------------------------------------------------------------+
| [Section 01: Hero]                                                      |
| Monumental 8-column Display Headline        | 4-column Live Status Meta |
+-------------------------------------------------------------------------+
| [Section 02: Manifesto]                                                 |
| 3-column Philosophy Label | 9-column Flowing Editorial Lead Measure     |
+-------------------------------------------------------------------------+
| [Section 03: Four Disciplines]                                          |
| 4-column Interactive Discipline Selector    | 8-column Dynamic Preview  |
+-------------------------------------------------------------------------+
| [Section 04: Featured Story - J.D. Ojeikere]                            |
| 7-column High-Res Exhibition Plate          | 5-column Curatorial Notes |
+-------------------------------------------------------------------------+
| [Section 05: Through the Years]                                         |
| Sticky 12-column Chronological Horizontal Ribbon                        |
+-------------------------------------------------------------------------+
| [Section 06: The Living Collection]                                     |
| Sticky Facet Bar | 3-to-4 Column Masonry Archival Artifact Grid        |
+-------------------------------------------------------------------------+
| [Section 07: The Continuing Story]                                      |
| 6-column Historic Artifact     | 6-column Contemporary Successor        |
+-------------------------------------------------------------------------+
| [Section 08: Closing Invitation]                                        |
| 6-column Archival Contribution | 6-column Curatorial Dispatch Subscribe|
+-------------------------------------------------------------------------+
| [Section 09: Institutional Footer]                                      |
| 12-column Multi-tier Legal, Provenance, Navigation, and Live Time Clock |
+-------------------------------------------------------------------------+
```

---

## 2. Container Dimensions & Spacing Tokens

```scss
$container-max-width: 1440px;
$container-reading-width: 760px;
$gutter-desktop: 2rem (32px);
$gutter-tablet: 1.5rem (24px);
$gutter-mobile: 1rem (16px);

/* Section Vertical Rhythms */
$section-padding-desktop: clamp(5rem, 8vw, 9rem);
$section-padding-mobile: clamp(3rem, 6vw, 4.5rem);
```

---

## 3. Section-by-Section Structural Breakdown

### 3.1 Section 01: Hero
- Full viewport height (`min-h-[90vh]`), flexbox column alignment with justified spacing.
- Top status rail: Local Lagos Time (WAT), total accession count (`510+ Verified References`), Exhibition status pill.
- Center statement: Monumental headline with negative letter-spacing and controlled line wrap.
- Bottom action rail: Dual CTA buttons (`ENTER THE ARCHIVE`, `EXPLORE THE COLLECTION`), scroll discovery indicator.

### 3.2 Section 02: Manifesto
- Two-column split: Left rail carries section index (`02 / MANIFESTO`) and foundational thesis; Right rail carries large-format editorial serif statement (`clamp(1.75rem, 3.2vw, 3rem)`).
- Below: 3-column quote callout highlighting seminal practitioners (Fela Kuti, Shade Thomas-Fahm, Bruce Onobrakpeya).

### 3.3 Section 03: Four Disciplines Interactive Matrix
- Left rail (35% width on desktop): 4 interactive discipline trigger cards (`01 PHOTOGRAPHY`, `02 MUSIC`, `03 FASHION`, `04 DESIGN`).
- Right rail (65% width on desktop): Dynamic showcase area updating instantly upon discipline selection, presenting hero visual, seminal dates, key innovators, and direct filter trigger to Section 06.

### 3.4 Section 04: Featured Story (J.D. Ojeikere)
- Split showcase: Left container displays high-resolution hairstyle photograph with interactive zoom loupe and darkroom film frame border (`KODAK TRI-X PAN 400`).
- Right container: Curatorial essay, provenance metadata table, audio narration snippet player, and external archive link.

### 3.5 Section 05: Through the Years (Timeline)
- Horizontal timeline rail with 5 chronological milestone anchors (1950s, 1960s, 1970s, 1980s-90s, Contemporary).
- Active period selector with animated progress indicator.
- Milestone cards featuring era name, social-political context, pivotal creative breakthrough, and representative artifact.

### 3.6 Section 06: The Living Collection (Archival Grid)
- Facet header: Multi-button discipline filter pills (`All`, `Photography`, `Music`, `Fashion`, `Design`), era dropdown, and real-time fuzzy search input field.
- Dynamic masonry/grid: 3 columns on desktop, 2 columns on tablet, 1 column on mobile.
- Infinite feel: Initial view shows curated highlights with "Load More Artifacts" and active result counter (`Showing X of 510+ artifacts`).

### 3.7 Section 07: The Continuing Story
- Side-by-side interactive comparative slider/split cards juxtaposing vintage pioneer with contemporary innovator (e.g. Rex Lawson ↔ The Cavemen; Shade Thomas-Fahm ↔ Kenneth Ize).

### 3.8 Section 08: Closing Invitation
- Left block: Archival Submissions Portal trigger (modal form for families/collectors to submit heritage materials).
- Right block: Institutional Dispatch newsletter form with instant validation.

### 3.9 Section 09: Institutional Footer
- 4-column structured directory: Disciplines, Institutional Policy, Research Bibliography, Cultural Governance.
- Bottom bar: Live Lagos WAT clock, copyright disclaimer, WCAG AA conformance notice, back-to-top trigger.
