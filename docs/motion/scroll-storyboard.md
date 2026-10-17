# ARCHIVE — Scroll Storyboard & Viewport Choreography
**Document ID:** `MOT-SCB-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 04 — Motion & Graphics Director  

---

## 1. Sequential Scroll Storyboard

```
[0vh] SEC 01: HERO
├─ Headline "THE PAST IS NOT PAST" fades up with letter-spacing settling (-0.04em).
├─ Status indicators slide down gently (y: -10px ➔ 0px).
└─ CTA buttons appear with subtle stagger.

[100vh] SEC 02: MANIFESTO
├─ Trigger: Viewport crosses top 20% of section.
├─ Left Index "02 / MANIFESTO" locks into sticky alignment.
└─ Large editorial quote enters with masked line unravelling over 0.6s.

[200vh] SEC 03: FOUR DISCIPLINES
├─ Trigger: Viewport enters section bounds.
├─ 4 discipline cards cascade into view (stagger: 0.08s).
└─ Right showcase displays default discipline (01 Photography) with subtle film grain shimmer.

[320vh] SEC 04: FEATURED STORY (J.D. OJEIKERE)
├─ Trigger: Enters center viewport.
├─ High-res hairstyle plate reveals through vertical clip-path curtain.
└─ Curatorial essay and audio narration widget fade in with slight upward motion.

[420vh] SEC 05: THROUGH THE YEARS (TIMELINE)
├─ Horizontal chronological ribbon settles into view.
├─ Era milestones display active period marker with indicator dot pulse.
└─ Milestone description slides into view synchronously.

[520vh] SEC 06: THE LIVING COLLECTION
├─ Sticky Facet Bar pins beneath the global navigation.
├─ Archival grid loads initial batch with smooth 0.3s opacity and scale settling.
└─ Live count ticker animates: "Showing 12 of 510+ artifacts".

[720vh] SEC 07: THE CONTINUING STORY
├─ Split comparison card enters; divider bar pulses once to indicate interactivity.
└─ Side-by-side lineage notes lock into horizontal alignment.

[820vh] SEC 08: CLOSING INVITATION
├─ Massive display type "HISTORY IS STILL BEING MADE" anchors the page.
└─ Archival submission button and dispatch form enter with solid resting stability.

[900vh] SEC 09: INSTITUTIONAL FOOTER
├─ Museum colophon, copyright, live Lagos clock, and legal links settle.
└─ Back-to-top button becomes fixed at bottom-right corner.
```

---

## 2. Scroll Physics Constraints

- **No Scroll Lock:** Mousewheel, touch swipe, and spacebar/arrow keys remain 100% native.
- **Scroll Memory:** Native browser scroll restoration is supported; reloading restores exact coordinate without jump.
- **Intersection Observers:** Elements unmask using `IntersectionObserver` with a `rootMargin: "-10% 0px -10% 0px"` threshold to avoid premature or clipped transitions.
