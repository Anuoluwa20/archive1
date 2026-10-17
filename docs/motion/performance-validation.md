# ARCHIVE — Motion Performance & GPU Validation Protocol
**Document ID:** `MOT-PRF-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 04 — Motion & Graphics Director  

---

## 1. 60 FPS / 120 Hz Target & Budget Constraints

To prevent frame drops on mid-range Android devices (e.g. Tecno, Infinix, Samsung Galaxy A series common across Nigeria and West Africa), all animations must operate strictly within a **16.6ms per frame render budget** (or 8.3ms on 120Hz ProMotion displays).

---

## 2. The Four Rules of Hardware-Accelerated Motion

1. **Only Animate Transform and Opacity:**
   Never animate geometry properties that trigger browser layout recalculations (`width`, `height`, `top`, `left`, `padding`, `margin`). Only animate `transform: translate3d(...)`, `transform: scale(...)`, and `opacity`.
2. **Layer Promotion Discipline:**
   Do not apply `will-change: transform` indiscriminately to hundreds of DOM nodes, which causes catastrophic VRAM ballooning. Apply `will-change: transform` only to active interactive targets (e.g. current modal drawer, active timeline milestone card).
3. **Passive Event Listeners:**
   All touch and scroll event listeners must be registered with `{ passive: true }` to eliminate scroll jank on WebKit and Chromium engines.
4. **Cleanup on Unmount:**
   Every `requestAnimationFrame` loop, Web Audio oscillator node, and Framer Motion subscription must cleanly terminate during React component unmount lifecycle hooks.

---

## 3. Chrome DevTools Rendering Audit Benchmark

- **Compositing Check:** Verified zero forced reflows or layout thrashing during collection grid filtering.
- **Paint Rectangles:** Inspected with "Paint Flashing" enabled; only active card hovers cause localized sub-pixel repaints.
- **Dropped Frames:** Target 0% dropped frames during continuous 100vh to 900vh scroll sweeps.
