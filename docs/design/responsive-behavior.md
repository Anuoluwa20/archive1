# ARCHIVE — Responsive Behavior & Viewport Adaptation
**Document ID:** `DSN-RSP-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 02 — Senior Product Designer  

---

## 1. Responsive Philosophy: Re-architecture, Never Simple Scaling

A common failure mode in cultural websites is simply reducing desktop font sizes and squeezing wide multi-column grids down until mobile screens become an illegible wall of tiny text.

ARCHIVE approaches responsiveness as a **continuous editorial choreography**:
- At 1440px and 1920px, the experience commands room-scale museum wall presence.
- At 768px, it refolds into a tactile, curated gallery catalogue.
- At 390px and 360px, it transforms into an intimate, high-velocity pocket exhibition where touch gestures feel native, immediate, and ergonomic.

---

## 2. Breakpoint Matrix & Layout Reflow

| Breakpoint Name | Viewport Width | Target Devices | Grid Columns | Layout Strategy |
|---|---|---|:---:|---|
| **Mobile Compact** | `360px – 389px` | Android compact (Galaxy A series, older devices) | 4 | Single-column linear stack, full-width touch cards, fixed bottom navigation bar, collapsed menus into full-screen drawer. |
| **Mobile Standard** | `390px – 767px` | iPhone 14/15/16, Galaxy S23/S24 | 4 | Generous tap targets (>=48px), 1-column collection cards, horizontal touch-swipe rail for timeline. |
| **Tablet Portrait** | `768px – 1023px` | iPad Mini, iPad 10th Gen, Galaxy Tab | 8 | 2-column collection grid, side-by-side featured story, tabbed discipline selector. |
| **Desktop Small** | `1024px – 1439px` | MacBook Air 13", Dell XPS 13 | 12 | Full asymmetric editorial split, sticky side filters, 3-column collection masonry. |
| **Desktop Wide** | `1440px – 1919px` | iMac 24", 27" 1440p displays | 12 | Max-width container (`1440px`), generous negative space margins, large-scale typography. |
| **Ultra-Wide** | `>= 1920px` | 4K monitors, wide studio displays | 12 | Centered content boundary with extended atmospheric margins. |

---

## 3. Critical Section Reflow Protocols

### 3.1 Hero (Section 01)
* **Mobile (<768px):** The live status indicators (Lagos time, accession count) stack cleanly at the top. The headline wraps into 3 powerful lines (`THE PAST / IS NOT / PAST.`) at `clamp(3.2rem, 14vw, 4.2rem)`. The CTAs become full-width stacked buttons with 52px touch height.
* **Desktop (>=1024px):** Headline renders in massive single or dual line lockup with horizontal metadata alignment.

### 3.2 Four Disciplines (Section 03)
* **Mobile (<768px):** Converts from side-by-side split into an interactive accordion or segmented pill switcher. Selecting a discipline smoothly opens its expanded preview card beneath it with zero layout jump.
* **Desktop (>=1024px):** 35% / 65% split layout. Clicking any left discipline card smoothly updates the right showcase window with cross-fade.

### 3.3 Through the Years (Section 05)
* **Mobile (<768px):** Horizontal swipeable snap carousel with visible milestone progress dots and touch inertia (`scroll-snap-type: x mandatory`).
* **Desktop (>=1024px):** Continuous horizontal scrubber with clickable era milestones and desktop keyboard arrow support.

### 3.4 The Collection Grid (Section 06)
* **Mobile (<768px):** 1-column card stack. Facet buttons horizontally scrollable. Instant search bar pinned at top with clear icon.
* **Tablet (768px - 1023px):** 2-column balanced grid.
* **Desktop (>=1024px):** 3-column masonry grid with sticky header filter bar.

---

## 4. Ergonomics & Touch Target Enforcement

1. **Touch Bounds:** All interactive elements on mobile adhere to minimum dimensions of `48px x 48px` with at least `8px` separation between adjacent interactive targets.
2. **Thumb Zone Optimization:** Critical mobile actions (Audio toggle, Search trigger, Filter reset, Modal close) are located within natural thumb-reach arcs.
3. **No Horizontal Scroll Leaks:** All containers carry `overflow-x: clip` or `max-w-full` to eliminate accidental horizontal page displacement on touchscreens.
