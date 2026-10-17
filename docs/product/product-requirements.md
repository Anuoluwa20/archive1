# ARCHIVE — Product Requirements Document (PRD)
**Document ID:** `DOC-PRD-003`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 01 — Product Manager  
**Status:** Approved for Implementation  

---

## 1. Product Objectives & Target Release Scope

The release objective is to deliver a world-class, production-ready landing page and digital exhibition platform for **ARCHIVE**. It must set a new global benchmark for African cultural storytelling on the web.

---

## 2. Nine-Section Structural Architecture (Functional Specifications)

### Section 01: Opening Statement (Hero)
* **Objective:** Deliver an arresting visual, typographic, and conceptual impact within 2 seconds.
* **Requirements:**
  - Primary headline: `"THE PAST IS NOT PAST."` in monumental condensed display typography.
  - Sub-headline / Supporting copy: *"An evolving digital museum of Nigerian photography, music, fashion, and design. The stories that shaped us. The creativity that still moves us."*
  - Primary CTA: `"ENTER THE ARCHIVE"` (Smooth scrolls directly to Section 03 / Disciplines).
  - Secondary CTA: `"EXPLORE THE COLLECTION"` (Smooth scrolls directly to Section 06 / The Collection).
  - Sound atmosphere control toggle (Mute / Soundscape Ambiance with visualizer indicator).
  - Live status indicator: Current Exhibition status, accession count (`510+ Verified Artifacts`), and local Lagos time (`WAT / UTC+1`).
  - Accessibility: Full semantic heading order (`<h1>`), high contrast ratio against dark archival palette, touch-safe targets (>48px).

### Section 02: Editorial Manifesto
* **Objective:** Establish the philosophical and poetic foundation of the institution.
* **Requirements:**
  - Editorial core text: *"Before it became a movement, it was a moment. A photograph. A record. A garment. A mark on paper."*
  - Expandable typographic narrative examining how Nigerian visual culture survived colonial interruption, celebrated post-independence euphoria, and redefined global contemporary culture.
  - Interactive quote callouts highlighting key cultural figures (e.g., Fela Anikulapo Kuti, J.D. 'Okhai Ojeikere, Shade Thomas-Fahm, Bruce Onobrakpeya).

### Section 03: Four Disciplines Interactive Matrix
* **Objective:** Present the four foundational disciplines with distinctive character while demonstrating their interconnected nature.
* **Requirements:**
  - Disciplines:
    1. **01 PHOTOGRAPHY:** Studio portraiture, documentary realism, street photography, hair sculpture documentation.
    2. **02 MUSIC:** Highlife horns, Palmwine acoustic guitar, Afrobeat polyrhythms, Jùjú talking drums, Fuji street cadence.
    3. **03 FASHION:** Aso-Oke weaving, Adire indigo dyeing, post-independence bespoke tailoring, avant-garde contemporary drape.
    4. **04 DESIGN:** Hand-set typography, FESTAC '77 graphic identity, vintage vinyl packaging, protest posters, architectural modernism.
  - Interactive Behavior:
    - Interactive tabbed matrix / split preview with hover and active states.
    - Each discipline card reveals key practitioners, seminal years, representative artifacts, and a direct filter action to Section 06.
    - Full keyboard navigation (Arrow keys + Tab + Enter/Space).

### Section 04: Featured Deep Cultural Story
* **Objective:** Deliver a curated, academic-grade longform story with immersive visual pacing.
* **Story Focus:** *"J.D. 'Okhai Ojeikere: Architecture of the Crown (1968–1999)"*
  - Sub-focus: How over a 30-year span, Ojeikere documented more than 1,000 distinct Nigerian hairstyles as living sculptures, transforming ephemeral daily street culture into permanent architectural monuments.
* **Requirements:**
  - Archival photography display with magnifier / zoom inspection preview.
  - Curatorial annotations: Cultural context, historical lineage, geographic roots (Yoruba, Hausa, Igbo hairstyles).
  - Provenance & licensing badge with external catalog citation.
  - Audio narration / oral history snippet toggle.

### Section 05: Through the Years (Interactive Temporal Timeline)
* **Objective:** Situate Nigerian creative evolution across 5 pivotal chronological eras.
* **Requirements:**
  - Eras covered:
    1. **1950–1959: The Dawn of Sovereignty** (Late colonial studio portraiture, early Highlife pioneers, print press agitation).
    2. **1960–1969: Post-Independence Euphoria** (National identity explosion, Shade Thomas-Fahm modernizing traditional attire, Rex Lawson highlife).
    3. **1970–1979: The Golden Decade & FESTAC '77** (The Second World Black and African Festival of Arts and Culture, Kalakuta Republic, Fela Kuti Afrobeat revolution).
    4. **1980–1999: Military Resistance, Jùjú, Fuji & Street Cassettes** (Graphic cassette tape packaging, King Sunny Ade, underground photography during dictatorship).
    5. **2000–Present: Contemporary Renaissance & Global Diasporic Reconnection** (Digital street archives, global Afrobeats dominance, Lagos Fashion Week, digital typography).
  - Interactive controls: Period scrubber, active timeline pill selector, milestone cards with discipline badges.

### Section 06: The Living Collection (Archival Grid & Explorer)
* **Objective:** The functional core of the digital museum—a faceted, searchable catalogue of historical artifacts.
* **Requirements:**
  - Filtering controls:
    - By Discipline: All, Photography, Music, Fashion, Design.
    - By Era: All, 1950s, 1960s, 1970s, 1980s, 1990s, Contemporary.
    - Search input: Real-time fuzzy query across title, creator, tags, medium, and notes.
  - Collection Card UI:
    - High-fidelity visual asset with aspect-ratio preservation.
    - Accession ID (e.g., `ARC-PH-1972-042`).
    - Discipline pill badge.
    - Title, Creator, Year, Medium.
    - "Inspect Artifact" trigger button opening curatorial detail modal.
  - Detail Modal:
    - High-res image with zoom/pan.
    - Complete metadata table (Accession Number, Creator, Date, Origin/Location, Medium, Provenance, Current Repository / Rights Status).
    - Curatorial context essay.
    - Related artifacts recommendation slider.

### Section 07: The Continuing Story (Heritage to Modernity)
* **Objective:** Connect historical artifacts directly with current 21st-century Nigerian innovators.
* **Requirements:**
  - Juxtaposition pairings:
    - *Historic:* Rex Lawson & Cardinal Rex (1962) ↔ *Contemporary:* Cavemen & Highlife revival (2020s).
    - *Historic:* Shade Thomas-Fahm's zip-up iro & buba (1960s) ↔ *Contemporary:* Kenneth Ize & Orange Culture (2020s).
    - *Historic:* J.D. Ojeikere hairstyles (1970s) ↔ *Contemporary:* Stephen Tayo & Ruth Ossai portraiture.
    - *Historic:* FESTAC '77 emblem (1977) ↔ *Contemporary:* Nigerian digital type design & identity studios.
  - Interactive comparison slider or split card revealing genealogical influence.

### Section 08: Closing Invitation & Archival Submissions
* **Objective:** Convert visitor appreciation into ongoing participation and institutional longevity.
* **Headline:** `"HISTORY IS STILL BEING MADE."`
* **Requirements:**
  - Archival Contribution Modal: Fully functional form allowing researchers and families to submit family archives, vinyl records, or historical photographs for curatorial appraisal.
  - Archival Dispatch (Newsletter) subscription with immediate local validation and simulated confirmation.
  - Digital Museum Visitor Book: Functional interactive guestbook where visitors can leave thoughts, reflections, and hometown dedications.

### Section 09: Institutional Footer & Governance
* **Requirements:**
  - Official ARCHIVE monogram and typographic wordmark.
  - Institutional mission summary.
  - Discipline directory links with direct jump navigation.
  - Institutional credits, curation team acknowledgement, research bibliography.
  - Copyright, licensing disclaimer, cultural sensitivity statement, and open-access terms.
  - Live clock showing Lagos Time (WAT), operational server status, and visitor counter.

---

## 3. Global UI Features

1. **Persistent Navigation Bar:**
   - Brand Wordmark (`ARCHIVE / NIGERIA`).
   - Quick jump links: Disciplines, Featured, Timeline, Collection, Manifesto.
   - Quick Search Trigger button (opens command palette / instant modal search).
   - Audio Ambiance toggle.
   - Mobile slide-out drawer menu with full keyboard trap and focus restoration.

2. **Universal Artifact Lightbox / Curatorial Drawer:**
   - Accessible modal (`role="dialog"`, `aria-modal="true"`, focus locked, `Escape` key close).
   - Comprehensive provenance, rights, high-res viewer, and clipboard share action.

3. **Accessibility & Preference Settings Bar:**
   - Reduced Motion toggle (`prefers-reduced-motion` override option).
   - High Contrast mode toggle.
   - Font scale adjustment (+ / -).

---

## 4. Technical & Non-Functional Requirements

1. **Performance:**
   - Lighthouse Performance Score: 90+ target.
   - LCP <= 2.5s on simulated mid-tier mobile (Fast 4G).
   - CLS <= 0.1 (Zero content jumping during image loads).
   - INP <= 200ms.

2. **Accessibility:**
   - WCAG 2.1 Level AA compliance.
   - Complete keyboard accessibility: Focus visible indicators, tabindex discipline, skip links (`Skip to main content`).
   - Color contrast ratio >= 4.5:1 for normal text, >= 3:1 for large display headers.
   - All images accompanied by contextual, culturally accurate `alt` text.

3. **Responsiveness:**
   - Seamless adaptability across 360px (compact mobile), 390px (iPhone standard), 768px (iPad portrait), 1024px (laptop), 1440px (desktop), and 1920px (ultra-wide).
   - Layout transitions that re-architect grid flow rather than simply scaling down fonts.
