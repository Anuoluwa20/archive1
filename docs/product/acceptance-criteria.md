# ARCHIVE — Measurable Acceptance Criteria & Quality Gates
**Document ID:** `DOC-PRD-006`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 01 — Product Manager  
**Status:** Approved for Implementation & QA  

---

## 1. Landing-Page Section Acceptance Matrix

| Section ID | Section Title | Functional Acceptance Criteria | Edge Cases & Error States | Pass/Fail Gate |
|---|---|---|---|---|
| **SEC-01** | **Opening Statement** | • Headline `"THE PAST IS NOT PAST"` renders with correct monumental typography.<br>• CTAs `"ENTER THE ARCHIVE"` and `"EXPLORE THE COLLECTION"` smoothly navigate to target anchors without jumping.<br>• Ambient audio toggle turns on/off synthesized web audio ambiance with visual EQ indicator.<br>• Live Lagos time clock updates continuously. | • Audio blocked by browser autoplay policy displays polite "Click to enable sound" state.<br>• Sub-360px screens wrap headline without overflow. | MUST PASS |
| **SEC-02** | **Manifesto** | • Editorial statement renders with balanced typographic pacing.<br>• Interactive cultural quotes can be cycled or clicked.<br>• High-contrast reading mode maintains >=7:1 contrast. | • Text scaling up to 200% does not clip or overflow container. | MUST PASS |
| **SEC-03** | **Four Disciplines** | • Displays 01 Photography, 02 Music, 03 Fashion, 04 Design.<br>• Selecting a discipline displays preview imagery, seminal practitioners, and representative years.<br>• Direct button filters Section 06 collection to that discipline.<br>• Full keyboard Arrow / Tab support. | • Rapid tab switching does not desynchronize imagery or cause layout jitter. | MUST PASS |
| **SEC-04** | **Featured Story** | • Features J.D. 'Okhai Ojeikere's hairstyle archive with clear curatorial text and rights clearance.<br>• Magnifier / image inspection interactive allows zoom on hair architecture details.<br>• Audio snippet player plays curated commentary. | • Missing audio asset falls back to text transcript gracefully without breaking layout. | MUST PASS |
| **SEC-05** | **Timeline** | • 5 eras rendered chronologically: 1950s, 1960s, 1970s, 1980s-90s, Contemporary.<br>• Selecting an era updates active card and highlights key cultural milestones.<br>• Era filter button jumps to Section 06 filtered by that era. | • Touch swipe works cleanly on mobile; horizontal track does not disrupt vertical page scroll. | MUST PASS |
| **SEC-06** | **The Collection** | • Renders catalog grid with real-time filtering by Discipline and Era.<br>• Instant search filters by keyword across title, creator, medium, and notes.<br>• Active filter tags can be cleared individually or reset entirely.<br>• Clicking any card opens Curatorial Drawer / Lightbox Modal.<br>• Modal shows full accession ID, provenance, rights, high-res image, and copy link action. | • Zero search results displays helpful "No artifacts found matching query" empty state with "Reset Filters" CTA.<br>• Modal traps keyboard focus (`Tab` wraps inside modal) and closes on `Esc` key. | MUST PASS |
| **SEC-07** | **The Continuing Story** | • Visual juxtaposition cards compare 4 historic milestones with modern successors.<br>• Interactive comparison slider or toggle reveals continuity without layout shift. | • Slider is touch-enabled on mobile and keyboard-navigable via left/right arrow keys. | MUST PASS |
| **SEC-08** | **Closing Invitation** | • Displays `"HISTORY IS STILL BEING MADE"`.<br>• Archival Contribution button opens functional multi-step contribution modal with form validation.<br>• Newsletter subscription field validates email format and provides success confirmation toast. | • Invalid email triggers inline accessible error message (`aria-invalid="true"`). | MUST PASS |
| **SEC-09** | **Footer** | • Complete institutional directory with working anchor links.<br>• Attribution register, copyright, and research bibliography links.<br>• Back to top button smoothly returns visitor to Section 01. | • All external links open with `rel="noopener noreferrer"`. No dead links. | MUST PASS |

---

## 2. Non-Functional Quality Gates

### 2.1 Performance Criteria
* **Lighthouse Performance Score:** >= 90 on simulated mobile / desktop audit.
* **LCP (Largest Contentful Paint):** <= 2.5 seconds.
* **CLS (Cumulative Layout Shift):** <= 0.1 throughout full page interaction.
* **INP (Interaction to Next Paint):** <= 200 ms.
* **Asset Payload:** Initial bundle size <= 250 KB compressed; lazy loading for below-the-fold media.

### 2.2 Accessibility Criteria (WCAG 2.1 AA)
* **Lighthouse Accessibility Score:** >= 95.
* **Keyboard Navigation:** 100% of interactive controls (buttons, links, search, modal, tabs, sliders) fully operable with `Tab`, `Shift+Tab`, `Enter`, `Space`, `Arrow` keys, and `Esc`.
* **Screen Reader Support:** Proper heading hierarchy (`h1` -> `h2` -> `h3`), semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), `aria-expanded` on toggles, `aria-modal` on dialogs.
* **Prefers Reduced Motion:** When active, all continuous loops, parallax, and slide animations transition instantly with subtle opacity fades.

### 2.3 Cultural & Curatorial Integrity
* Zero generic pan-African generalizations.
* Historical dates and regional attributions verified against credible registers.
* Clear distinction between museum-grade historical records and curatorial digital reconstructions.
