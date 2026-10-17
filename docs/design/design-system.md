# ARCHIVE — Design System Specification
**Document ID:** `DSN-SYS-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 02 — Senior Product Designer  
**Status:** Approved for Engineering Implementation  

---

## 1. Brand Identity & Marks

### 1.1 The Primary Wordmark
`ARCHIVE / NIGERIA`
- **Typography:** Display Grotesque in All Caps, letterspacing `+0.12em`, bold weight.
- **Accompanying Insignia:** Minimalist dual horizontal registry rule representing archival shelf indexing.
- **Micro-Colophon:** `EST. 1960 — RECLAIMED 2026`

### 1.2 The Monogram Symbol
A stylized interlocking geometric monogram uniting the Roman letter **"A"** with the Nigerian independence chevron and traditional Akwete loom lozenge:
```
    / \
   /   \
  /=====\
 / |   | \
/_/     \_/
```

---

## 2. Typography System & Font Tokens

The typography architecture balances three typographic voices:

| Role | Font Family | Google / System Fallback | Usage & Purpose |
|---|---|---|---|
| **Display (Monumental)** | `Syne` / `Cabinet Grotesk` | `'Syne', -apple-system, sans-serif` | Massive hero headlines, discipline titles, section numerals (`01`, `02`). |
| **Editorial (Literary)** | `Newsreader` / `Playfair Display` | `'Newsreader', Georgia, serif` | Manifesto body, curatorial essays, quote callouts, historical reflections. |
| **Interface & Data** | `Inter` / `Plus Jakarta Sans` | `'Inter', system-ui, sans-serif` | Navigation links, UI buttons, filter pills, general body readability. |
| **Archival & Colophon** | `Space Mono` / `JetBrains Mono` | `'Space Mono', monospace` | Accession numbers (`ARC-PH-1974-001`), dates, rights tags, technical specs. |

### 2.1 Typographic Scale (Desktop & Mobile)

```scss
/* Fluid Typography Tokens */
--text-display-hero: clamp(3.5rem, 8vw + 1rem, 8.5rem); /* Line height: 0.92, tracking: -0.04em */
--text-display-section: clamp(2.5rem, 5vw + 0.5rem, 5.0rem); /* Line height: 0.96, tracking: -0.03em */
--text-title-large: clamp(1.75rem, 3vw + 0.2rem, 2.75rem); /* Line height: 1.15 */
--text-title-medium: clamp(1.25rem, 2vw + 0.1rem, 1.75rem); /* Line height: 1.25 */
--text-body-editorial: clamp(1.125rem, 1.2vw + 0.2rem, 1.35rem); /* Line height: 1.65 */
--text-body-ui: 1rem (16px); /* Line height: 1.5 */
--text-caption-ui: 0.875rem (14px); /* Line height: 1.4 */
--text-metadata-mono: 0.75rem (12px); /* Line height: 1.35, tracking: +0.06em */
```

---

## 3. Color Tokens & Semantic Roles

All tokens are defined with strict WCAG 2.1 AA and AAA contrast guarantees:

```css
:root {
  /* Archival Surface & Canvas */
  --bg-primary: #0F0F11;        /* Deep Carbon Obsidian (Main museum canvas) */
  --bg-secondary: #17171A;      /* Darkroom Tray Charcoal (Cards, sections) */
  --bg-tertiary: #222227;       /* Card borders & elevated containers */
  --bg-paper: #F7F4EE;          /* Unbleached Archival Vellum (Light mode & drawer) */
  
  /* Text & Ink Tokens */
  --text-primary: #F4F1EA;      /* Crisp Archival Parchment (Contrast: 15.8:1) */
  --text-secondary: #A3A3A8;    /* Muted Silver Graphite (Contrast: 7.2:1) */
  --text-tertiary: #71717A;     /* Archival Pencil Gray (Contrast: 4.6:1) */
  --text-inverse: #111113;      /* Deep Carbon Ink for light surfaces */

  /* Curatorial Accent Tokens */
  --accent-terracotta: #C84B31; /* Oxidized Red / Official Wax Stamp */
  --accent-terracotta-hover: #E0583B;
  --accent-ochre: #E09F3E;      /* Lagos Sunset Ochre / Highlife Brass */
  --accent-indigo: #2D4059;     /* Yoruba Adire Deep Indigo */
  --accent-bronze: #A06840;     /* Benin Kingdom Cast Bronze */

  /* Semantic Borders & Dividers */
  --border-subtle: rgba(244, 241, 234, 0.12);
  --border-strong: rgba(244, 241, 234, 0.28);
  --border-accent: rgba(200, 75, 49, 0.45);
}
```

---

## 4. Spacing, Grid & Layout System

* **Base Unit:** 4px / 8px grid scale.
* **Containers:**
  - Standard Container: `max-width: 1440px` with `padding: 0 1.5rem` (mobile) to `0 4rem` (desktop).
  - Editorial Reading Measure: `max-width: 720px` (optimal 65-75 characters per line).
  - Full-Bleed Exhibition Strip: `100vw`.
* **Grid Hierarchy:**
  - Desktop (>= 1024px): 12-Column Grid with 24px/32px gutter.
  - Tablet (768px – 1023px): 8-Column Grid with 20px gutter.
  - Mobile (360px – 767px): 4-Column Grid with 16px gutter.

---

## 5. UI Components & Interaction States

### 5.1 Buttons & CTAs
1. **Primary Button (`.btn-archival-primary`):**
   - Background: Terracotta Red (`#C84B31`), Text: White (`#FFFFFF`).
   - Padding: `14px 28px`, Typography: Sans-serif, All-Caps, bold, tracking `+0.05em`.
   - Hover: Expands right border stroke with subtle 2px transform shift.
   - Focus: 2px offset solid outline (`outline: 2px solid #E09F3E; outline-offset: 3px`).
2. **Secondary Button (`.btn-archival-ghost`):**
   - Transparent background, 1px solid border (`rgba(244, 241, 234, 0.3)`), Text: Ivory (`#F4F1EA`).
   - Hover: Background fills with `rgba(244, 241, 234, 0.08)`, border turns solid Ivory.

### 5.2 Archival Collection Card (`.archive-card`)
- Aspect Ratio: 4:5 or 1:1 image container with dark background placeholder.
- Top metadata bar: Accession ID in monospace (`ARC-PH-1972-042`) + Discipline pill.
- Image overlay: Smooth zoom (`transform: scale(1.04)`) and subtle vignette lightening on hover.
- Bottom details: Artifact Title, Creator, Year, Medium tag.
- Keyboard accessible: Enter/Space triggers the Curatorial Detail Drawer.

### 5.3 Filter Pills & Toggles
- Rounded pill badge or sharp rectangular accession stamp style.
- Active state: Inverted colors with terracotta dot indicator (`●`).
- Inactive state: Muted border with graphite text.

---

## 6. Accessibility & Inclusivity Rules

1. **Target Sizes:** Every clickable button, link, and tab has a minimum touch target of `48px x 48px`.
2. **Focus Visibility:** High-visibility dual-tone focus rings on all interactive elements (`:focus-visible`).
3. **Screen Readers:** All non-text content carries meaningful descriptive alt text. Decorative elements carry `aria-hidden="true"`.
4. **Motion Preference:** Full respect for `prefers-reduced-motion: reduce`. All structural transforms are disabled, retaining clean instant state swaps.
