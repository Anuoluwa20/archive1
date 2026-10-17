# ARCHIVE — System Architecture Specification
**Document ID:** `ENG-ARC-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 03 — Full-Stack Engineer  
**Status:** Approved for Implementation  

---

## 1. System Overview & Technology Stack

ARCHIVE is built as a high-performance, accessible digital cultural institution platform utilizing the **Next.js App Router**, **React 19**, **strict TypeScript**, **Tailwind CSS**, and **Framer Motion**.

```
                   +---------------------------+
                   | Next.js App Router (SSG)  |
                   | Layout, Metadata & Shell  |
                   +-------------+-------------+
                                 │
     +---------------------------+---------------------------+
     │                                                       │
+----+--------------------+                    +-------------+-------------+
| Server Components (RSC) |                    | Client Components ('use   |
| Static Shell, Meta Tags |                    | client') Interactivity    |
+-------------------------+                    +-------------+-------------+
                                                             │
                  +------------------------------------------+-----------------------+
                  │                            │                                     │
      +-----------+-----------+    +-----------+-----------+             +-----------+-----------+
      | State & Filter Engine |    | Audio Ambiance Engine |             | Motion & Modal Layer  |
      | useMemo, URL Search   |    | Web Audio API Synth   |             | Framer Motion Springs |
      +-----------+-----------+    +-----------+-----------+             +-----------+-----------+
                  │                            │                                     │
                  +----------------------------+-------------------------------------+
                                               ▼
                              +---------------------------------+
                              | Primary DOM & Curatorial Modals |
                              +---------------------------------+
```

### Stack Components:
- **Framework:** Next.js (App Router, SSG output for maximum CDN edge caching and instant TTFB).
- **Language:** TypeScript 5.x (Strict mode enabled: `noImplicitAny: true`, `strictNullChecks: true`).
- **Styling:** Tailwind CSS with custom theme extensions mapping to Design System tokens.
- **Animation:** Framer Motion for spring physics and modal drawers; CSS hardware-accelerated transforms for continuous scroll.
- **Audio:** Custom Web Audio API synthesized pink noise, tape hiss, and harmonic overtones (zero external audio file dependency, immediate availability).
- **Icons:** Lucide React (feather-weight SVG icons).

---

## 2. Directory Structure

```
suibmission/
├── docs/                      # Multi-agent specifications & handoffs
├── research/                  # 510-item research catalog & analyses
├── public/
│   ├── assets/
│   │   ├── images/            # Curated archival photography & art
│   │   └── graphics/          # SVG marks, monograms & symbols
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, meta, sound provider
│   │   ├── page.tsx           # 9-section master landing page orchestrator
│   │   └── globals.css        # Base styles, variables, typography
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Persistent responsive header & controls
│   │   │   ├── Footer.tsx     # Institutional footer & time clock
│   │   │   └── MobileMenu.tsx # Fullscreen accessible mobile drawer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx            # Sec 01: Monumental opening statement
│   │   │   ├── ManifestoSection.tsx       # Sec 02: Editorial manifesto & quotes
│   │   │   ├── DisciplinesSection.tsx     # Sec 03: Four disciplines matrix
│   │   │   ├── FeaturedStorySection.tsx   # Sec 04: J.D. Ojeikere deep dive
│   │   │   ├── TimelineSection.tsx        # Sec 05: Through the years scrubber
│   │   │   ├── CollectionSection.tsx      # Sec 06: Living collection & search
│   │   │   ├── ContinuitySection.tsx      # Sec 07: The continuing story slider
│   │   │   └── ClosingSection.tsx         # Sec 08: History is still being made
│   │   ├── ui/
│   │   │   ├── ArtifactModal.tsx          # Accessible curatorial drawer
│   │   │   ├── SubmissionModal.tsx        # Archival submission interactive form
│   │   │   ├── AudioController.tsx        # Synthesized sound ambiance toggle
│   │   │   ├── ComparisonSlider.tsx       # Touch-enabled image comparison
│   │   │   └── SearchBar.tsx              # Real-time fuzzy query input
│   │   └── motion/
│   │       ├── RevealOnScroll.tsx         # Intersection-observer reveal
│   │       └── ParallaxContainer.tsx      # Restrained transform container
│   ├── data/
│   │   ├── artifacts.ts                   # Structured museum artifacts
│   │   ├── timeline.ts                    # Chronological eras & milestones
│   │   ├── disciplines.ts                 # 4 disciplines metadata
│   │   └── stories.ts                     # Curatorial long-form essays
│   └── lib/
│       ├── audio-engine.ts                # Web Audio API sound generator
│       ├── search.ts                      # Client-side fuzzy search utility
│       └── utils.ts                       # Classnames, formatters, dates
└── tests/                                 # Automated unit and integration tests
```

---

## 3. Data Flow & State Management

1. **Static Catalog Hydration:** Artifacts and research records are statically imported at compile time, eliminating client-side API roundtrips.
2. **Client-Side Filter Engine:** Filtering across Discipline (`All`, `Photography`, `Music`, `Fashion`, `Design`), Era (`1950s` to `Contemporary`), and Search Query is computed via memoized predicates (`useMemo`), executing in `< 4ms` across all items.
3. **Modal & Focus State:** When an artifact is selected, its ID is set in component state. Focus is automatically trapped within the modal container using `keydown` listeners, and restored to the activating card button upon closing.
4. **Web Audio Soundscape Lifecycle:** The Web Audio `AudioContext` remains suspended until the user explicitly toggles the audio switch in the navbar, adhering to browser autoplay policies and user consent guidelines.
