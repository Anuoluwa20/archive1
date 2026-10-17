# SKU — ARCHIVE

**Project knowledge / spec.** The single source of truth for every agent in this
project. Downstream agents read this first.

- **Product:** ARCHIVE — a digital museum of Nigeria's creative history
- **Tagline direction:** Making Nigeria's Creative History Impossible to Ignore.
- **Type:** Landing page (single page), UI/UX + visual design + responsive build
- **Status:** Discovery complete; research starting
- **Owner:** Designer / Developer (one person)
- **Build target:** the local hub at `http://localhost:10002` plus a static site in
  `artifacts/05-production/site/`

---

## 1. Objective and desired outcome

Design and build a landing page that makes Nigeria's creative history engaging,
accessible, discoverable and relevant to contemporary audiences.

The page should feel less like a conventional museum website and more like an
**immersive cultural destination** where history feels alive.

**Guiding principle (verbatim from the brief):**
> Do not merely display the past. Make people feel its influence on the present.

**What "done" looks like:** a polished, responsive, single-page experience that
states ARCHIVE's purpose within seconds, carries one coherent visual identity,
and tells a story rather than presenting decorative images.

## 2. Product context

ARCHIVE is a **fictional** digital museum documenting and celebrating Nigeria's
creative history across four disciplines:

| Discipline | Scope |
| --- | --- |
| Photography | Portraiture, studio practice, street and documentary photography |
| Music | Highlife, juju, fuji, Afrobeat and their descendants |
| Fashion | Designers, textiles (adire, aso-oke, ankara), styling and editorials |
| Design | Graphic design, book and poster work, art movements, architecture |

Because the institution is fictional, the **product** is a concept, but the
**history it presents must be real and credited**. This distinction governs every
content decision: no invented facts presented as history.

## 3. Target users and their needs

| Audience | Needs |
| --- | --- |
| Young Nigerian creatives | Inspiration, cultural grounding, something that feels current |
| Students and researchers | Credible leads, named figures, verifiable sources |
| Photographers, musicians, designers, artists | Recognition of lineage and influence on their practice |
| Nigerians in the diaspora | Connection to heritage, orientation, discovery |
| Cultural institutions, collectors, enthusiasts | Seriousness, sourcing, curatorial credibility |

**Primary job to be done:** *"Show me that Nigerian creative history is rich,
specific and connected to what I make today — and let me explore it."*

**Core tension to design for:** the audience is young, fast and visual; the
subject is archival, historical and text-heavy. The design must make the past
read as present without falsifying it.

## 4. Existing website and current experience

None. This is a new build with no legacy constraints. There is no existing brand,
no existing design system and no existing content inventory — all of it is
in scope.

## 5. Core content and page structure

The brief proposes this structure; it is a starting point, not a constraint. The
final architecture is the Project Manager's call, informed by research.

| # | Section | Job |
| --- | --- | --- |
| 01 | Navigation | Introduce ARCHIVE, reach the four disciplines and about |
| 02 | Hero | State the purpose; strong type, archival imagery, one clear action |
| 03 | Featured Archive | Selected works: photographs, artwork, editorials, posters, artifacts |
| 04 | Explore the Disciplines | Photography, Music, Fashion, Design — distinct treatments, clear paths |
| 05 | Stories Through Time | Movements, figures, cultural moments, evolution across generations |
| 06 | Featured Creator / Cultural Moment | A deeper editorial spotlight |
| 07 | Closing | Reinforce preservation; invite continued exploration |
| 08 | Footer | Navigation, project information, social, credits |

**Minimum viable page:** a hero, the four disciplines, a featured archive, one
story/story spotlight, a closing call and a footer with real credits.

## 6. Brand characteristics and positioning

**Positioning:** a cultural institution that behaves like a contemporary
publication — curatorial rigour, editorial confidence, modern craft.

**Character:** archival but alive; warm, not dusty; confident, not loud; specific
to Nigeria, not generically "African"; historically serious, contemporary in form.

**Must avoid:**
- Generic cultural stereotypes (pan-African clichés, tourist-brochure imagery,
  green-white-green shorthand used as decoration).
- The standard museum template: beige, serif, grid-of-cards, "collection" copy.
- A portfolio or agency aesthetic — this is a museum, not a studio site.

**Creative direction:** to be established by research (Stage 02–05). Candidate
directions from the brief: editorial archive, contemporary cultural journal,
digital exhibition, experimental visual timeline. The chosen direction must be
justified by project relevance, not visual appeal alone.

## 7. Functional requirements

- Responsive: desktop, tablet, mobile.
- Functional navigation and in-page section links.
- Clear visual hierarchy; readable long-form typography.
- Interactive discipline/category cards with hover, focus and active states.
- Clickable stories/artifacts where content exists.
- Keyboard-accessible navigation and controls.
- Descriptive alt text on meaningful images.
- Optimised imagery; reasonable loading performance.
- Clear feedback on interactive elements.
- Motion and scroll behaviour must support the story without hurting usability.

## 8. Constraints, opportunities and requirements

**Constraints**
- One designer/developer; ~10 working days of scope (see brief §10).
- Landing page only. Out of scope: full museum, accounts, CMS, uploads,
  e-commerce/donations/ticketing, searchable database.
- **Image rights:** archival photographs, album art and posters are
  rights-encumbered. Use permissively licensed material, own compositions, or
  generated/typographic treatments; label anything uncertain. Never imply rights
  we do not have.
- **Historical accuracy:** credible sources only; credit sources and inspirations
  visibly on the page.

**Opportunities**
- Strong typographic identity is cheap to build and carries cultural weight.
- Motion and scroll can carry the "past → present" narrative.
- The four disciplines give natural, non-arbitrary structure.

**Non-negotiables**
- Real credits on the page.
- No invented historical claims.
- Accessible, keyboard-operable interactions.
- Performance: optimise archival imagery and any animation.

## 9. What success looks like

- ARCHIVE's purpose is clear within the first few seconds.
- The visual direction is distinctive, culturally grounded and consistent.
- Visitors can understand and explore the four disciplines easily.
- The page tells a coherent story, not a collection of decorated images.
- All primary interactions work.
- Usable across common screen sizes.
- Images and historical claims are sourced and credited.
- Meets the design and development requirements above.

## 10. Risks

| Risk | Mitigation |
| --- | --- |
| Historical inaccuracy | Research from credible sources; cite on-page; flag uncertainty |
| Image rights | Use licensed/permitted or self-made visuals; credit everything |
| Scope expansion | Build one excellent landing page, not the whole museum |
| Performance | Compress imagery, lazy-load, keep motion off the critical path |
| Cultural narrowness | Represent breadth across region, era and discipline |

## 11. Research leads (UNVERIFIED — agents must confirm or discard)

Listed only to direct Stage 02–05 research. **Nothing here is a fact until a
credible source is captured and cited.** Do not put these on the page without
verification.

- **Photography:** J.D. 'Okhai Ojeikere's hair series; Tam Fiofori; Sunmi
  Smart-Cole; Lagos studio portrait tradition; FESTAC '77 documentation.
- **Music:** highlife (Bobby Benson, Victor Olaiya); palm-wine; juju (King Sunny
  Adé, Ebenezer Obey); fuji (Sikiru Ayinde Barrister); Afrobeat (Fela Kuti and
  the Africa '70 lineage); the Afrobeats generation.
- **Fashion:** Shade Thomas-Fahm; Deola Sagoe; Duro Olowu; Lisa Folawiyo; adire,
  aso-oke and ankara as material culture.
- **Design:** the Zaria Art Society and the Nsukka School (Uche Okeke, Bruce
  Onobrakpeya, Yusuf Grillo); Demas Nwoko; FESTAC '77 identity and poster work;
  Nigerian modernism in book and record sleeve design; the National Theatre Lagos.

## 12. Deliverable map

| Deliverable | Where |
| --- | --- |
| Competitor + benchmark research | `artifacts/01-competitors/COMPETITOR_RESEARCH.md` |
| Visual reference library | `artifacts/02-inspiration/INSPIRATION_LIBRARY.md` |
| Interaction + motion library | `artifacts/03-interactions/INTERACTION_LIBRARY.md` |
| Logo/identity research | `artifacts/04-brand/LOGO_RESEARCH.md` |
| Creative directions | `artifacts/04-brand/BRAND_DIRECTIONS.md` |
| Brand system document | `artifacts/04-brand/document/index.html` |
| Built landing page | `artifacts/05-production/site/` |
| Build + refinement logs | `artifacts/05-production/*.md` |
| Progress log | `artifacts/06-progress/PROGRESS_LOG.md` |
