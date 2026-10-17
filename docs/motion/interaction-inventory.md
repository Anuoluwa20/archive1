# ARCHIVE — Master Interaction Inventory
**Document ID:** `MOT-INV-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 04 — Motion & Graphics Director  

---

## 1. Interaction Matrix Across All 9 Sections

| Component ID | Section | Trigger | Interactive State Changes | Motion Specification | Reduced Motion Fallback |
|---|---|---|---|---|---|
| **INT-NAV-01** | Header | Scroll Down (>50px) | Header shrinks slightly, background changes from transparent to backdrop-blur carbon. | `transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1)` | Instant background swap without height change. |
| **INT-NAV-02** | Header | Click Audio Toggle | Audio visualizer bars animate; Web Audio API soundscape begins breathing. | Sound waves scale Y from 0.2 to 1.0 periodically; icon switches to Unmute. | Visual icon switches instantly; no looping bars. |
| **INT-NAV-03** | Header | Click Mobile Menu | Fullscreen overlay menu slides from right; body scroll locks. | Slide-in from `100%` to `0%` over `0.35s`, staggered links. | Instant overlay appearance; no slide. |
| **INT-HER-01** | Sec 01: Hero | Click "Enter Archive" | Smooth scroll jump to Section 03 (Four Disciplines). | Native smooth scroll behavior with offset calculation. | Instant jump (`behavior: auto`). |
| **INT-HER-02** | Sec 01: Hero | Click "Explore Collection" | Smooth scroll jump to Section 06 (The Collection). | Native smooth scroll behavior with offset calculation. | Instant jump (`behavior: auto`). |
| **INT-DIS-01** | Sec 03: Disciplines | Hover / Click Discipline Tab | Active tab highlights; right showcase image and metadata crossfade. | Tab indicator glides with spring (`stiffness: 400, damping: 30`); image fades with `0.25s` scale-up. | Immediate active class toggle and content switch. |
| **INT-DIS-02** | Sec 03: Disciplines | Click "View In Collection" | Scrolls to Section 06 and automatically sets active discipline filter. | Smooth scroll + filter state dispatch. | Instant scroll + state update. |
| **INT-STO-01** | Sec 04: Story | Move Mouse / Touch Loupe | Magnifier loupe follows cursor over Ojeikere hairstyle photograph. | CSS transform translate with cursor coordinates; magnified 2x layer. | Static high-res inspection image; loupe disabled. |
| **INT-TIM-01** | Sec 05: Timeline | Click Era Milestone Pill | Era updates; milestone card crossfades with directional slide. | Slide-in `x: 24px ➔ 0px` over `0.3s` with ease-out curve. | Instant replacement. |
| **INT-COL-01** | Sec 06: Collection | Click Category / Era Filter | Filters items; matching cards re-animate into view. | Staggered grid re-layout over `0.25s` (`opacity: 0 ➔ 1`, `scale: 0.96 ➔ 1`). | Instant DOM filter update; zero stagger. |
| **INT-COL-02** | Sec 06: Collection | Type in Instant Search | Real-time filtering matches title, creator, tags, medium. | Input debounce 150ms; instant list update. | Same; no visual transitions. |
| **INT-COL-03** | Sec 06: Collection | Click Artifact Card | Opens Curatorial Detail Drawer / Lightbox Modal. | Modal slides in from right (`x: 100% ➔ 0%`) over `0.38s`; backdrop fades to 80% opacity. | Modal appears instantly with zero translation. |
| **INT-MOD-01** | Modal | Press Escape / Click Close | Curatorial Drawer closes; focus restored to triggering card. | Modal slides out (`x: 0% ➔ 100%`) over `0.28s`; backdrop fades. | Instant disappearance; focus immediately restored. |
| **INT-SLI-01** | Sec 07: Continuity | Drag Comparison Handle | Resizes clipping mask between historic and contemporary image. | Real-time hardware-accelerated `clip-path` update following pointer. | Same; functional direct touch interaction. |
| **INT-INV-01** | Sec 08: Invitation | Click "Submit Archive" | Opens Multi-step Archival Submission Modal dialog. | Modal scales from 0.95 to 1.0 with backdrop blur. | Instant modal appearance. |
| **INT-INV-02** | Sec 08: Invitation | Submit Newsletter Form | Validates email; displays success toast with accession registration ID. | Input button transforms into checkmark with spring pop. | Static text change to "Confirmed". |
