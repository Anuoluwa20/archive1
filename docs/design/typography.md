# ARCHIVE — Typography System & Editorial Hierarchy
**Document ID:** `DSN-TYP-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 02 — Senior Product Designer  

---

## 1. Philosophical Grounding

In African and Nigerian cultural communication, typography is never passive decoration. It is an act of reclamation and presence. From the historic Yoruba language orthography formalized in the 1850s, through the radical broadsheets of the anti-colonial press in 1940s Lagos, to the hand-drawn album sleeves of Fela Kuti’s Kalakuta Republic, typography gives voice to political sovereignty and cultural memory.

ARCHIVE creates a deliberate three-tier typographic tension:
1. **The Proclamation:** Monumental, architectural condensed grotesque that announces history with undeniable physical gravity.
2. **The Witness:** High-contrast, elegant literary editorial serif that speaks with poetic nuance, historical insight, and scholarly gravitas.
3. **The Ledger:** Precise, tabular monospaced metadata that records accession numbers, dates, mediums, and conservation provenance with museum-grade accuracy.

---

## 2. Typeface Pairings & Font Tokens

```css
:root {
  --font-display: 'Syne', 'Cabinet Grotesk', system-ui, -apple-system, sans-serif;
  --font-editorial: 'Newsreader', 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'Space Mono', 'JetBrains Mono', SFMono-Regular, Menlo, monospace;
}
```

---

## 3. Typographic Hierarchy & Scale Tokens

| Token | Family | Size (clamp) | Weight | Line Height | Letter Spacing | Contextual Usage |
|---|---|---|---|---|---|---|
| `--type-display-hero` | Display | `clamp(3.5rem, 8.5vw, 8rem)` | 800 ExtraBold | 0.92 | `-0.04em` | Section 01 Hero Statement (`"THE PAST IS NOT PAST"`) |
| `--type-display-section`| Display | `clamp(2.5rem, 5vw, 5rem)` | 700 Bold | 0.96 | `-0.03em` | Section Headlines (`"03 FOUR DISCIPLINES"`) |
| `--type-manifesto-lead` | Editorial | `clamp(1.75rem, 3.2vw, 3rem)` | 400 Regular (Italic option) | 1.25 | `-0.01em` | Section 02 Manifesto Core Quote |
| `--type-editorial-body` | Editorial | `clamp(1.125rem, 1.3vw, 1.35rem)` | 400 Regular | 1.65 | `normal` | Section 04 Featured Story narrative essays |
| `--type-heading-card` | Display | `clamp(1.25rem, 2vw, 1.75rem)` | 700 Bold | 1.15 | `-0.02em` | Collection artifact titles, timeline cards |
| `--type-body-ui` | Sans | `1rem (16px)` | 400 / 500 | 1.50 | `normal` | Navigation links, UI descriptions, form fields |
| `--type-caption` | Sans | `0.875rem (14px)` | 400 Regular | 1.40 | `+0.01em` | Creator names, museum sub-labels |
| `--type-meta-mono` | Mono | `0.75rem (12px)` | 500 Medium | 1.35 | `+0.08em` (All-Caps) | Accession IDs (`ARC-PH-1974-001`), provenance codes |

---

## 4. Reading Comfort & Pacing Guidelines

1. **Optimal Measure:** All long-form editorial narratives in Sections 02, 04, and the curatorial drawers are strictly constrained to `max-width: 68ch` to avoid line-length eye fatigue.
2. **Display Leading:** ExtraBold headlines use tight leading (`0.92` to `0.98`) to form unified typographic sculptural blocks that resist awkward line breaks.
3. **Punctuation & Diacritics:** Full support for Nigerian diacritical marks (Yoruba tonal underdots *ẹ*, *ọ*, *ṣ*, and Igbo dotted vowels *ị*, *ọ*, *ụ*) to ensure cultural names are spelled with complete orthographic accuracy.
