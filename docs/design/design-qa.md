# ARCHIVE — Design QA & Visual Audit Protocol
**Document ID:** `DSN-QA-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 02 — Senior Product Designer  

---

## 1. Visual Audit Checklist

| Item | Inspection Criterion | Expected Visual Outcome | Audit Status |
|---|---|---|:---:|
| **QA-VIS-01** | **Monumental Hero Typography** | Line wrap does not break words awkwardly; negative letterspacing (`-0.04em`) creates unified block. | PASS |
| **QA-VIS-02** | **Color Harmony & Paper Tone** | Canvas background (`#0F0F11`) renders consistently without banding; light drawer surfaces (`#F7F4EE`) feel warm and unbleached. | PASS |
| **QA-VIS-03** | **Card Elevation & Borders** | Cards feature crisp 1px borders (`rgba(244,241,234,0.12)`) without harsh white outlines. | PASS |
| **QA-VIS-04** | **Aspect Ratio Preservation** | Archival cards maintain 4:5 or 1:1 image boxes without image stretching or unexpected vertical jumps during loading. | PASS |
| **QA-VIS-05** | **Typographic Rhythm** | Consistent baseline rhythm across editorial body copy; max measure of 68 characters per line maintained. | PASS |
| **QA-VIS-06** | **Discipline Distinctiveness** | Each of the 4 disciplines displays its authentic color accent and iconography consistently across tabs, cards, and drawers. | PASS |
| **QA-VIS-07** | **Interactive Focus Indicators** | Every interactive element shows high-visibility outline on `:focus-visible` (`2px solid #E09F3E; offset 2px`). | PASS |
| **QA-VIS-08** | **Modal Drawer Transitions** | Curatorial modal slides smoothly from right or fades into center without clipping on mobile screens. | PASS |
| **QA-VIS-09** | **Mobile Bottom Clearance** | Ensure content does not get hidden under iOS Safari navigation bar or Android system navigation bar. | PASS |
| **QA-VIS-10** | **Contrast Ratios (WCAG AA)** | All text combinations tested with axe-core / Lighthouse confirm contrast ratios >= 4.5:1. | PASS |

---

## 2. Cross-Device Visual QA Protocol

- **Simulated Test Devices:**
  1. iPhone SE / 13 Mini (360px – 375px)
  2. iPhone 14/15 Pro (393px)
  3. iPad 10th Gen (810px)
  4. MacBook Pro 14" (1512px @ 2x)
  5. 27" QHD Monitor (2560px @ 1x)
- **Visual Defect Policy:**
  - Any overlapping text or clipped dialog is considered a Critical Blocker.
  - Any non-functioning interactive element (dead button, unlinked search) is considered a Critical Blocker.
