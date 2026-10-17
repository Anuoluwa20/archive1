# ARCHIVE — Reduced Motion & Vestibular Safety Specification
**Document ID:** `MOT-RED-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 04 — Motion & Graphics Director  

---

## 1. Accessibility Mandate & Legal Standard

In accordance with **WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions)** and the institutional ethics of ARCHIVE, motion must never induce vertigo, nausea, disorientation, or cognitive fatigue in visitors with vestibular disorders.

ARCHIVE enforces two independent layers of reduced-motion protection:
1. **System-Level Detection:** Automatic detection of the OS-level `@media (prefers-reduced-motion: reduce)` media query.
2. **In-App Manual Override:** A persistent UI toggle located in the Accessibility Preferences menu allowing any visitor to toggle motion on or off independently of system settings.

---

## 2. Reduced Motion Replacement Rules

| Interactive Component | Standard Dynamic Motion | Reduced Motion Equivalent |
|---|---|---|
| **Hero Headline Entrance** | Masked slide-up (`translateY: 100% ➔ 0%`) over `0.8s` with letter-tracking expansion. | Static immediate rendering with gentle `0.15s` opacity fade. |
| **Section Transitions** | Scroll-triggered stagger and vertical displacement (`y: 30px ➔ 0px`). | Pure instantaneous placement (`y: 0`, `opacity: 1`). |
| **Curatorial Modal Drawer** | Slide-in from right margin (`x: 100% ➔ 0%`) with damped spring. | Instant visual appearance (`x: 0`, `opacity: 1`). |
| **Audio Visualizer** | Continuously oscillating vertical EQ bars. | Static icon showing active audio state without oscillation. |
| **Comparison Slider** | Inertial drag with velocity smoothing. | Direct positional cursor tracking without inertia lag. |
| **Card Hover Feedback** | Zoom (`scale: 1.04`) and elevation lift (`translateY: -4px`). | Subtle border color change only (`border-color: var(--accent-terracotta)`). Zero scale or translation. |

---

## 3. CSS Implementation Directive

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
