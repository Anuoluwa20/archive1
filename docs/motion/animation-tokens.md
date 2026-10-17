# ARCHIVE — Animation Tokens & Physics Constants
**Document ID:** `MOT-TOK-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 04 — Motion & Graphics Director  

---

## 1. Timing & Duration Architecture

```scss
/* Standard Durations */
--duration-micro: 120ms;    /* Toggle states, icon switches, checkbox checks */
--duration-tactile: 200ms;  /* Button clicks, hover highlights, border shifts */
--duration-standard: 320ms; /* Tab switches, dropdowns, card flips */
--duration-editorial: 500ms;/* Section crossfades, content reveals */
--duration-monumental: 800ms;/* Hero curtain reveal, major image unmasking */
```

---

## 2. Easing Curves & Mathematical Equations

```css
:root {
  /* Editorial Ease Out: Swift arrival with natural deceleration (no robotic bounce) */
  --ease-editorial-out: cubic-bezier(0.16, 1, 0.3, 1);

  /* Archival Shutter: Snappy start, crisp settling */
  --ease-shutter: cubic-bezier(0.25, 1, 0.5, 1);

  /* Tactile Press: For button depression */
  --ease-press: cubic-bezier(0.4, 0, 0.2, 1);

  /* Dynamic Exit: Crisp acceleration offscreen */
  --ease-exit: cubic-bezier(0.7, 0, 0.84, 0);
}
```

---

## 3. Framer Motion Spring Presets (TypeScript)

```typescript
export const MOTION_SPRINGS = {
  // Snappy for interactive UI components (Buttons, Tabs, Badges)
  snappy: {
    type: "spring",
    stiffness: 420,
    damping: 32,
    mass: 0.8
  },
  
  // Elegant for modals, slide drawers, and floating panels
  drawer: {
    type: "spring",
    stiffness: 300,
    damping: 35,
    mass: 1.0
  },

  // Contemplative for large editorial cards and featured stories
  contemplative: {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 1.2
  }
} as const;

export const MOTION_VARIANTS = {
  // Staggered child entrance
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  },

  // Archival Reveal item variant
  archivalItem: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }
};
```
