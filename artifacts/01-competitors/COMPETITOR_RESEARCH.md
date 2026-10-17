# Competitor & Benchmark Research — ARCHIVE

**Stage:** 02 · Competitive & inspiration research
**Source of truth:** `artifacts/00-sku/SKU.md`
**Scope of this document:** who ARCHIVE is up against (as an *experience*), what
already exists in the Nigerian cultural-archive space, which archive/collection
experiences set the craft benchmark, which museum conventions the SKU tells us to
avoid, and what the build team should actually reuse.

---

## 0. Research method, and two limitations (read this first)

### 0.1 Web search was unavailable in this environment

The agent's web-search tool returned nothing but this error on every attempt:

```
{"error":{"type":"unknown","message":"Web search cancelled"}}
```

**Acknowledge this openly: no search-engine result set was available.** No
directory listing, "top 10" roundup or ranking was taken at face value from a
search index. Instead:

- **Live pages were fetched directly** with an HTTP fetch tool and their actual
  markup, navigation, copy and structure were read. Every structural claim in this
  document comes from a page that was actually rendered/fetched, not from memory.
- Where a substitute search view was needed, `https://lite.duckduckgo.com/lite/?q=…`
  was fetched and its result links followed to the source.
- Award status (Awwwards, CSS Design Awards) was taken **only** from the award
  sites' own listing pages, fetched directly.

**Consequence to carry forward:** there may be relevant awarded work that a normal
search would have surfaced and this method missed. The set below is *well-analysed
and relevant*, not *exhaustive*. Treat the "Top references" section as a strong
curated starting point, not a census.

### 0.2 No screenshots could be captured

Every browser call returned:

```
[browser.disconnected] No desktop browser is connected to this session.
```

So **no visual screenshots or image paths accompany this report.** Nothing is
described from a screenshot. All observations are **structural and textual**
(navigation labels, section headings, copy, ordering, counts, technology) — not
claims about colour, exact typeface or motion timing unless that was legible in
fetched markup/copy. **Stage 03 (interactions) and Stage 05 (visuals) will need
browser access to capture the actual look and motion of the references below.**

### 0.3 What "competitor" means here

ARCHIVE is a **fictional single landing page**, not a live institution. It does
not compete for visitors with the British Museum. It competes for a feeling and
for **credibility with young Nigerian creatives**. So "competitors" are grouped
by *the job they do in the reader's head*:

1. Sites that already own "Nigerian cultural heritage" online (the ones a visitor
   will mentally compare ARCHIVE to).
2. Sites that own the *tone* young Nigerian creatives expect (contemporary
   African editorial/culture platforms).
3. Sites that own the *craft* bar for archive/collection experiences worldwide
   (the award-level benchmark).
4. The **conventional museum template** — documented explicitly as the
   anti-pattern the SKU orders us to avoid.

---

## 1. Executive summary

- **The Nigerian institutional field is thin, templated and slow.** The state
  museum's site (`museum.ng`) is a hero carousel + stat counters + "BOOK A VISIT"
  + a WebGL digital-museum link; the Lagos museum/archives site
  (`lagosmuseumarchives.ng`) is a near-empty shell with a "Quick Links" list; the
  Yemisi Shyllon Museum site (`ysma.pau.edu.ng`) is a WordPress exhibition/events
  site with a Calendly tour widget. **None of them treats the archive as a
  navigable, editorial, contemporary experience.** This is the gap.
- **The most advanced Nigerian archive-first product is `archivi.ng`** —
  "Nigeria's history, one search away", search-first with topic chips, dated
  "Editions", a "Today in History" module and a stories section. It is the
  closest thing to a *competitor in spirit*, and it is a **research/text**
  product, not a designed visual destination. ARCHIVE should not compete with its
  search utility — it should compete on **curation and visual confidence**.
- **The tone young Nigerian creatives already trust comes from editorial
  platforms, not museums** — `nataal.com`, `thenativemag.com`, `zikoko.com`,
  `agbowo.org`, `olongoafrica.*`, `lolwe.org`. They win with full-bleed imagery,
  confident headlines, issue/print framing and an editorial-credibility voice.
  ARCHIVE's SKU positioning ("a cultural institution that behaves like a
  contemporary publication") is **exactly the right read of this field**.
- **The craft benchmark for archive/collection experiences is European and
  larger-institutional**, and it is *interaction-led*: Awwwards-recognised work
  such as `sammlung.tiroler-landesmuseen.at` (a random "dice" generator that links
  two collection works by a shared keyword) and `harvardfilmarchive.org`
  (programming-led typographic hierarchy, Site of the Day 2019) show that an
  archive page can be built around **one memorable mechanism** rather than a
  grid. That is the single most transferable idea for ARCHIVE.
- **There is no awarded Nigerian cultural-archive experience.** Awwwards' Nigeria
  country listing shows portfolios, product and marketing work (including Studio
  Lumio, Site of the Day + Developer Award, Jul 2024) — **no Nigerian museum or
  cultural-archive site.** Treated as an "unclaimed" position: a distinctive
  Nigerian cultural-archive landing page has no local design precedent to beat.
- **The obvious museum template is the thing to avoid, and it is specific:** beige
  + serif + grid-of-cards + slide carousel + "Journey into…" + stat counters. The
  modern counter-move documented in the field is dark/high-contrast background,
  large bold typography and editorial layout. ARCHIVE's brand characteristics
  already point there; research supports it.

---

## 2. Competitor map — grouped by how they compete / differentiate

### Group A — Nigerian institutional heritage (what a visitor will compare us to)

These own the keywords, not the experience.

| Site | What it is | How it competes | What it gets wrong for our goal |
| --- | --- | --- | --- |
| `museum.ng` — National Commission for Museums & Monuments | The state museum body | Authority, breadth, real collections. Multi-slide hero ("Journey into Nigeria's Heritage", "Explore Artifacts That Define a Nation"), stat counters (53 national museums, 2 world heritage sites, 65 monuments, 81 years), opening hours, "BOOK A VISIT", "VISIT OUR DIGITAL MUSEUM" (a Unity WebGL experience hosted on `storage.net-fs.com`). | Pure conventional-institution template: carousel hero, counters, visit-planning CTAs. No editorial voice, no curation point of view, no contemporary visual identity. **This is the anti-pattern in the SKU §6.** |
| `museum.ng` → `collection.museum.ng` | Collections sub-site | Object browsing | A database shell — collection-first, not story-first. Nothing here makes a young visitor *feel* anything. |
| `lagosmuseumarchives.ng` (+ `/photos`) | Lagos Museum & Archives | Local relevance, a photos section | Near-empty shell: thin content, a "Quick Links" list, CC BY-NC-ND 4.0 licensing, funded by the French Embassy via IFRA-NIGERIA, designed by Uzoma Studio (`uzoma.studio`). Evidence that Nigerian cultural-archive web work is under-resourced and template-following. |
| `wearemowaa.org` (MOWAA) | Museum of West African Art — the most serious new institutional player | **Closest institutional analogue to ARCHIVE's ambition.** Nav is editorial: What We Do / Membership / **News & Ideas** / **What's On** / Support. Runs a dated editorial card feed (e.g. "15.6.26"). Partnered on the **DRUM Magazine West African Archives** project with BAHA and the Ford Foundation. | Behaves like a *newsroom*, not a destination — text-heavy, no single memorable interactive moment, low visual risk. Good positioning reference, weak craft reference. |
| `archive.wearemowaa.org` | MOWAA's archive arm | Dedicated archive sub-brand | Shows the archive treated as its own product, worth its own domain and identity — a useful precedent for ARCHIVE existing at all. |
| `mowaa.wearemowaa.org/home` | "MOWAA Collections Online" | Collection search UX | Placeholder-quality collection UI (a "Hotspot 1" placeholder was visible in fetched markup). A concrete example of what a Nigerian collection interface currently looks like — **easy to improve on.** |
| `ysma.pau.edu.ng` — Yemisi Shyllon Museum of Art, Pan-Atlantic University | The best-funded private university museum site in Nigeria | Programming and events first: exhibitions/collections **card grids**, activities ("Sip n Paint", "Tie-Dye Masterclass"), opening hours, a Calendly tour booking widget, a virtual tour. WordPress. | The literal SKU §6 template: serif-ish institutional tone, card grids, visit logistics. It is a *venue* site, not a *cultural* one. |
| `nigeriannostalgiaproject.org` | Nostalgia-focused digital memory project | Emotional pull of the recent past | Proves the *nostalgia* angle works in Nigeria — but the treatment is archival-documentary, not designed. Validates ARCHIVE's "history feels alive" instinct while showing the execution ceiling of the field. |
| `artxlagos.com` | ART X Lagos — the country's leading art fair | Contemporary credibility, artist roster, event gravity | Not an archive, but the **taste-maker young Nigerian creatives already trust**. Also the institution that staged the 2025 Ojeikere exhibition (see §5). ARCHIVE should feel adjacent to this, not to the NCMM. |
| `rele.co` | Rele — Lagos gallery/platform | Gallery-as-brand, artist-first | Shows the contemporary-gallery register: confident, spare, artist-led. A tone reference for the "featured creator" section. |

**How this group competes:** authority and collection size.
**How ARCHIVE must compete instead:** curatorial point of view, editorial
confidence, and *an experience worth returning to* — because on authority we can
never win, and we don't need to (the institution is fictional; the history is real).

### Group B — Nigerian & African contemporary editorial/cultural platforms (the tone competitors)

These are not archives. They are the sites that set the **register** young
Nigerian creatives read as "current". They are ARCHIVE's real aesthetic
competitors.

| Site | What it is | Signature pattern | Why it matters to ARCHIVE |
| --- | --- | --- | --- |
| `nataal.com` | African fashion & culture magazine | Full-bleed **editorial headers**, large display headlines, a **Digital Issue** framing (issues, not posts), a Store. Publishes genuinely archival material — e.g. a feature on *The Pan-African Festival of Algiers*, William Klein, and "keeping an archive alive". | The single best model for turning **archive subject matter into contemporary editorial**. Proves "archive" and "current" are not opposites. |
| `thenativemag.com` | Nigerian youth-culture magazine | Dense editorial feed, culture/music/fashion/tech pillars, strong headline voice, list/ranking formats | Owns the exact audience ARCHIVE targets (young Nigerian creatives). The voice bar. |
| `zikoko.com` | Nigerian internet-culture publication | Conversational, internet-native, high-frequency | Shows how far *voice* can travel from institutional register — useful as a contrast limit case. |
| `agbowo.org` | African arts & literature journal | Issue-led, portfolio/essay framing, text-forward | A "cultural journal" register — supports the SKU's "contemporary publication" positioning. |
| `olongoafrica.org` / `olongoafrica.com` | African culture platform | Editorial curation across disciplines | Cross-discipline curation is exactly ARCHIVE's four-discipline structure. |
| `lolwe.org` | African literary magazine | Restrained, typographic, literature-first | Evidence that a quiet, type-led identity can read as respected rather than boring. |

**The finding that matters:** **not one of the strongest "feels-current African
culture" sites is a museum.** The tone ARCHIVE wants lives in magazines. The SKU
already says ARCHIVE should be "a cultural institution that behaves like a
contemporary publication" — the field confirms this is the right side of the line
to be on.

### Group C — Award-level archive & collection experiences (the craft benchmark)

Status verified only from Awwwards' own listings. Grouped by the mechanism they
demonstrate.

| Site | Award (verified on Awwwards) | Mechanism it demonstrates | Relevance |
| --- | --- | --- | --- |
| `sammlung.tiroler-landesmuseen.at` — Tiroler Landesmuseen collection | Honourable Mention, Oct 2023 (dev: "Wir sind Plural") | **Serendipitous discovery.** "Zwei Werke, durch ein Schlagwort verbunden" — *two works linked by one keyword* — paired with a **"Zufallsgenerator" (random generator / dice)** the user can roll. | **The best single transferable interaction for ARCHIVE.** It gives a collection a *reason to keep clicking* that is not a grid: chance, connection, surprise. Directly serves "make people feel the past's influence on the present" — two artifacts, generations apart, joined by a theme. |
| `harvardfilmarchive.org` | **Site of the Day 2019** (dev: Huncwot) | **Programming-led hierarchy.** Sparse typographic nav (Public cinema, Calendar, Film Series, Collections, Conversations, Online Exhibits) over a dense, chronological screening programme. Confidence through restraint + density, not decoration. | Proves an *archive of a cultural practice* (not objects) can be a beautiful, celebrated site by leading with **time and programme**. Maps directly to "Stories Through Time" and to a decade/era timeline. |
| `thearchives.manoloblahnik.com` | Honourable Mention, Mar 2022 (dev: Rōnin Amsterdam) | **Total immersion.** The archive as a full branded experience rather than a section of a corporate site. | Precedent for a *fashion* archive being treated as a flagship. Relevant to ARCHIVE's fashion discipline and to the "immersive cultural destination" goal. |
| Massimo Osti Archive (Awwwards archive listing) | Awwwards archive entry | Designer-archive as identity — the founder's practice *is* the site. | Shows a single-creator archive can carry a whole destination — useful for the "Featured Creator" section. |
| The Street Style Archive (Awwwards archive listing) | Awwwards archive entry | **Street/vernacular photography first.** | Closest in spirit to studio-portrait + street-documentary Nigerian photography. |
| Copenhagen Archive (Awwwards archive listing) | Awwwards archive entry | City as archive. | Model if ARCHIVE leans into Lagos as the frame. |
| Built for Archives (Awwwards archive listing) | Awwwards archive entry | Archive *aesthetics* as a design language. | Reference for treating archival texture/typography as the visual system itself. |
| The Design Archive by Dinidu (Awwwards archive listing) | Awwwards archive entry | **Design discipline** presented as archive. | Covers ARCHIVE's Design pillar (posters, book/record sleeves, movements). |
| Los Angeles Public Library (Awwwards archive listing) | Awwwards archive entry | Public-institution archive given contemporary form. | Precedent that a *public cultural collection* can be beautifully executed. |
| `blackarchives.co` (Renata Cherlise) | — (not an Awwwards entry; verified by fetch) | **Dark, photo-first treatment** (white logo on dark), "Featured Archival Collections", a services list, and a **press/essay wall** citing MoMA, The Washington Post, Vogue, The Atlantic; a Getty Images partnership. | **The closest tonal analogue to ARCHIVE's "archival but alive".** Proof that the archive register can be dark, contemporary and credible — and that visible **press/credibility signals** do real work for an archive brand. |
| `archive-for-hans-sleutelaar` (Awwwards archive listing → `sleutelaar.xyz`) | Awwwards archive entry | Photographer's legacy archive as a designed object. | Namesake-reference for a photographer-legacy archive (the Ojeikere model). **Site itself did not render on fetch (JS-only) — treat as directory-level evidence only.** |
| `objectandarchive.com` | Awwwards archive listing | Objects + archive framing. | Secondary reference for object-led presentation. |
| `archive51.art` | Awwwards archive listing | — | **Could not be verified: fetch returned a transport error.** Do not cite as evidence. |

**Cross-cutting craft finding:** every award-level entry above is built around
**one legible idea** (chance-linking, programme-as-timeline, immersion, dark
photo-first) rather than a feature list. None of them looks like a museum
homepage with a carousel.

### Group D — Nigerian award landscape (the "unclaimed position")

Fetched from Awwwards' Nigeria country listing (Oct 2026). The awarded Nigerian
work is:

- Kore's Portfolio
- Order & Chaos (AIZIZA)
- Armory AI
- Directionless
- **Studio Lumio — Site of the Day + Developer Award, Jul 2024**
- Livespot360
- Radio Null "Rewind" — Site of the Day, 2022
- Chowdeck Black Friday 2025
- ADBC '24

**Read:** the Nigerian work recognised internationally is **agency portfolios,
product launches, marketing campaigns and experiential/creative-tech** — plus one
studio's own site at the highest level. **Not a single Nigerian museum, archive or
cultural-heritage experience appears.** CSS Design Awards' winners listing was
also reviewed and showed no Nigerian cultural-archive work.

Two implications:
1. There is **no local design precedent to beat** in this exact category — the
   position is genuinely open.
2. Nigerian studios *can* reach Awwwards SOTD standard (Studio Lumio, 2024) — so
   "a Nigerian team built this" is not a limiting factor; the absence of
   cultural-archive work reflects a gap in commissioning, not in capability.

---

## 3. Award-winning / benchmark sites grouped by what they demonstrate

| What it demonstrates | Reference | Why the build team should study it |
| --- | --- | --- |
| **Serendipity as navigation** (collection discovery without a grid) | `sammlung.tiroler-landesmuseen.at` (Awwwards HM, Oct 2023) | The dice/keyword-link mechanic. Gives ARCHIVE a signature interaction: *roll to see which two archival works share a theme*. |
| **Time and programme as the layout** (archive of a practice) | `harvardfilmarchive.org` (Awwwards SOTD 2019, Huncwot) | The model for "Stories Through Time": chronology as the spine, typography as the hierarchy, density as a virtue. |
| **Total immersion as brand** (fashion archive) | `thearchives.manoloblahnik.com` (Awwwards HM, Mar 2022) | Permission to make the archive a flagship experience, not a nav item — relevant to ARCHIVE's fashion pillar and to the "immersive destination" brief. |
| **Dark, photo-first credibility** | `blackarchives.co` | Direct tonal precedent: dark surface, photography dominant, press/credibility wall. De-risks the "warm, not dusty" brief. |
| **Institutional site behaving like a newsroom** | `wearemowaa.org` | "News & Ideas" / "What's On" + dated editorial cards = the exact editorial-institution hybrid ARCHIVE is asked to be. |
| **Search-first history product** | `archivi.ng` | "One search away" + topic chips + dated "Editions" + "Today in History". The reference for *discoverability* (not for visual direction). |
| **Archive subject matter as contemporary editorial** | `nataal.com` | Turning a 1969 festival/archive story into a current-looking feature. The bridge between the archive and a young audience. |
| **Restraint as respect** | `lolwe.org`, `agbowo.org` | Type-led, quiet layouts that still read as serious and contemporary — an alternative to loud motion if performance is a concern. |

---

## 4. Pattern and positioning findings relevant to the goal

### 4.1 The conventions to deliberately avoid (documented, not assumed)

These were observed on the Nigerian institutional sites actually fetched — they
are the SKU §6 anti-patterns, confirmed in the wild:

1. **Hero carousel** as the primary device (`museum.ng`: "Journey into Nigeria's
   Heritage" → "Explore Artifacts That Define a Nation"). → ARCHIVE uses **one
   strong hero statement**, not a slideshow.
2. **Stat counters** ("53 national museums", "2 world heritage sites", "65
   monuments", "81 years"). → Institutional proof-by-numbers. ARCHIVE should
   prove itself with **specific works and named figures**, not a brag bar.
3. **Grid-of-cards** as the only content pattern (`ysma.pau.edu.ng`; MOWAA
   Collections Online). → Cards are how archives *avoid* curation. ARCHIVE needs
   at least one non-grid, editorial treatment per discipline.
4. **Visit-logistics CTAs** ("BOOK A VISIT", opening hours, tour booking) on the
   homepage. → ARCHIVE has no building; every CTA should drive *exploration*, not
   attendance.
5. **Beige/serif/"collection" copy register.** → Named explicitly in SKU §6; the
   live examples confirm the register is pervasive and undifferentiated.
6. **Four-slide "what we do" nav** (What We Do / Membership / Support …) — MOWAA's
   nav is genuinely editorial, but this structure is still *organisation-first*.
   ARCHIVE's nav should be **content-first**: the four disciplines are the nav.

### 4.2 The counter-pattern the field is moving toward

Field commentary on museum web design (Heritage Creative, "10 Best Museum Website
Design Examples", updated 2026) identifies the modern shift as: **dark/black
backgrounds, large bold typography, unexpected accent colour, and mega-menu
navigation** — citing the British Museum's treatment as the exemplar. This
**corroborates the SKU's instinct** away from beige/serif and is the strongest
external justification for a dark, type-led, high-contrast direction. (Secondary
industry commentary — Social Design House's art-museum redesign guide — frames the
"editorial approach / magazine-style homepage" as the current best practice for
art museums; that page was cited at the URL level only.)

### 4.3 The audience finding: "contemporary" is an editorial signal, not a palette

Across Group B, what makes a site read as *current* to a young Nigerian creative
is **not** a colour scheme. It is:

- **Issues and editions** rather than "pages" (nataal's Digital Issue; archivi's
  dated Editions) — time is framed, not filed.
- **Headlines that take a position**, not labels ("Explore Artifacts…" vs a real
  editorial statement).
- **Full-bleed imagery** with type over/against it, rather than framed thumbnails.
- **Named people and named works**, not "collection highlights".
- **Visible sourcing and credit** — which reads as respect, not paperwork.

What makes a site read as *institutional* (and old) to that same audience:
counters, carousels, "Welcome to…", opening hours, and being asked to book.

### 4.4 The whitespace nobody occupies

Combining §2D and §4.1–4.3, the specific unoccupied position:

> **A Nigerian cultural-archive experience that behaves like a contemporary
> publication — dark, type-led, interaction-first — with world-class craft.**

- Nigerian institutional sites have **authority but no craft**.
- African editorial platforms have **tone but no archive**.
- Award-level archive sites have **craft but no Nigerian subject**.
- **ARCHIVE can hold all three.** That is the strategic argument this research
  supports.

### 4.5 Source-material leads confirmed real (SKU §11 partially verified)

Confirmed during this stage as genuinely citable (do not publish beyond what is
verified):

- **J.D. 'Okhai Ojeikere** (1930–2014): 10,000+ photographs; the **"Hairstyles"
  series begun 1968**; studio **Foto Ojeikere**, opened 1975. Recent/renewed
  institutional attention: an **ART X Lagos 2025 exhibition ("An Exacting Eye",
  ~150 images)**, a **MoMA audio playlist**, and a **Fondation Cartier** collection
  page. → The single strongest "past → present" anchor: a Nigerian photographic
  archive that major international and Nigerian institutions are actively
  re-presenting *now*.
- The remaining SKU §11 leads (Tam Fiofori, Sunmi Smart-Cole, highlife/juju/fuji
  figures, Shade Thomas-Fahm, Deola Sagoe, the Zaria Art Society / Nsukka School,
  FESTAC '77, Demas Nwoko) were **not** independently verified in this stage and
  must be confirmed by the content/research stage before appearing on the page.

---

## 5. Implications and recommendations for this project

**Positioning**

1. **Benchmark against magazines, not museums.** The comparison set is
   `nataal.com` / `thenativemag.com` (tone) plus `sammlung.tiroler-landesmuseen.at`
   / `harvardfilmarchive.org` (craft). Do not benchmark against `museum.ng` —
   benchmark *against not being it*.
2. **Compete on curation and craft, never on completeness.** We are not building a
   searchable database (explicitly out of scope). The landing page's job is a
   point of view made beautiful, not coverage.
3. **Say the positioning out loud in the hero.** The category has no precedent, so
   the hero must do double duty: state purpose *and* signal "this is not a
   museum site".

**Structure / experience**

4. **Steal one mechanism, and one only.** The strongest candidate is a
   **serendipitous linking interaction** (the Tiroler Landesmuseen model: two
   works joined by one keyword/theme, with a roll/refresh affordance). It gives
   the Featured Archive a reason to be interacted with instead of scrolled past,
   and it *enacts* "the past's influence on the present" literally — two objects
   from different decades, linked by a theme. Keyboard-operable (required by SKU
   §7) and cheap to build.
5. **Make "Stories Through Time" a real spine, not a heading.** The Harvard Film
   Archive demonstrates that chronology + typographic hierarchy carries an entire
   cultural practice. ARCHIVE's four disciplines can each show a compact timeline
   (Ojeikere 1968 → Lagos studio portraiture → today) rather than a card row.
6. **Give each discipline a distinct treatment**, as SKU §5 proposes — research
   supports this: the four groups above each *feel* different (photo-first for
   Photography, type/sleeve-led for Music, textile/pattern-led for Fashion,
   poster/grid-breaking for Design). One shared grid for all four is the single
   fastest way to look generic.
7. **Design for one memorable non-grid moment per discipline minimum.** The
   observed failure mode of every Nigerian institutional site is "carousel, then
   cards, then footer".

**Tone / visual**

8. **Commit to dark, type-led, high-contrast.** It is externally corroborated
   (§4.2), it is what `blackarchives.co` proves works for an archive, and it is
   the cleanest way to satisfy SKU §6's "must avoid beige, serif, card grid".
   Note the SKU also demands *warm, not dusty* — so "dark" must be paired with
   warm accent and real photographic presence, not a cold black-on-grey.
9. **Credit visibly — treat sourcing as a design element.** `blackarchives.co`'s
   press wall and `archivi.ng`'s edition/attribution metadata both show that
   provenance reads as credibility to this audience, and the SKU makes real
   credits a non-negotiable. Make the credit line part of the composition.
10. **Avoid the "African" decoration trap by being specific.** The differentiator
    this research keeps pointing at is *specificity*: named photographers, named
    styles (adire, aso-oke, highlife, juju, fuji, Afrobeat), named studios and
    named decades. Specificity is the opposite of both stereotype and dullness.

**Delivery risk**

11. **Motion must be deliberate and few.** Every award reference uses restraint to
    buy density (HFA) or a single mechanic to buy delight (Tiroler). With ~10
    working days and a performance requirement (SKU §10), one signature
    interaction executed well beats several half-finished ones.
12. **One open research dependency:** image rights. All the strongest references
    are image-led, and SKU §8 flags archival imagery as rights-encumbered. The
    build must plan for typographic/self-made treatments from the start rather
    than discovering the constraint at build time.

---

## 6. Top references to reuse in production

The handful I would actually build from — ordered by usefulness, with the exact
thing to take from each.

1. **`sammlung.tiroler-landesmuseen.at`** (Awwwards HM, Oct 2023)
   *Take:* the discovery mechanic — two collection works linked by a shared
   keyword, plus a randomise/roll affordance. → ARCHIVE's signature interaction in
   the Featured Archive. **[Highest-value transfer.]**

2. **`harvardfilmarchive.org`** (Awwwards SOTD 2019, Huncwot)
   *Take:* time-as-layout. Chronology as the spine, restrained nav, typographic
   hierarchy carrying an entire cultural practice. → "Stories Through Time" and
   the per-discipline timelines.

3. **`blackarchives.co`** (Renata Cherlise)
   *Take:* dark, photo-first, warm-and-alive archive register; and the visible
   credibility/press treatment. → The overall tonal direction and the credits
   presentation.

4. **`nataal.com`**
   *Take:* how archive subject matter is made to feel current — issue framing,
   full-bleed editorial headers, decisive headlines. → The editorial voice and the
   "Featured Creator / Cultural Moment" spotlight.

5. **`archivi.ng`**
   *Take:* discoverability patterns — topic chips, dated "Editions", "Today in
   History". → A lightweight "today in Nigerian creative history" module and the
   navigation-by-theme chips. *(Do not take its visual direction — it is a utility,
   not a destination.)*

6. **`wearemowaa.org`**
   *Take:* the editorial-institution hybrid — "News & Ideas" / "What's On" +
   dated cards. → Section naming and the framing of stories as dated, current
   material rather than permanent "exhibitions".

7. **`thearchives.manoloblahnik.com`** (Awwwards HM, Mar 2022)
   *Take:* permission and precedent for a *fashion* archive as an immersive
   flagship. → The Fashion discipline treatment.

8. **`thenativemag.com`**
   *Take:* audience calibration — headline voice, pillar structure, pacing. → A
   gut-check for "would a young Nigerian creative read this as for them?"

9. **`museum.ng`** — **as an explicit anti-pattern.** *(Not to reuse; to avoid.)*
   Hero carousel + stat counters + "BOOK A VISIT" + beige institutional register.
   Put it in the build review checklist as the thing the page must not become.

10. **`lagosmuseumarchives.ng`** — **as a second anti-pattern.**
    Thin shell + "Quick Links" + no curation. The floor of the local field, and a
    reminder that ARCHIVE's only real competition is indifference.

---

## 7. Sources

Everything cited above, by group. All were fetched directly (no search index was
used to assert any fact).

**Nigerian institutional / heritage**
- https://museum.ng
- https://collection.museum.ng
- https://lagosmuseumarchives.ng
- https://lagosmuseumarchives.ng/photos
- https://wearemowaa.org
- https://archive.wearemowaa.org
- https://mowaa.wearemowaa.org/home
- https://ysma.pau.edu.ng
- https://nigeriannostalgiaproject.org
- https://artxlagos.com
- https://rele.co
- https://uzoma.studio (designer credited on `lagosmuseumarchives.ng`)
- Google Arts & Culture — Yemisi Shyllon Museum of Art partner page (453 items,
  35 stories, 16 virtual visits): https://artsandculture.google.com/partner/yemisi-shyllon-museum-of-art

**Nigerian / African contemporary editorial & culture**
- https://nataal.com
- https://thenativemag.com
- https://zikoko.com
- https://agbowo.org
- https://olongoafrica.org
- https://olongoafrica.com
- https://lolwe.org

**Award / craft benchmarks (status read from the award sites' own listings)**
- Awwwards archive listing: https://www.awwwards.com/websites/archive/
  - https://sammlung.tiroler-landesmuseen.at — HM Oct 2023
  - https://harvardfilmarchive.org — SOTD 2019 (dev: Huncwot)
  - https://thearchives.manoloblahnik.com — HM Mar 2022 (dev: Rōnin Amsterdam)
  - `archive-for-hans-sleutelaar` (listed; site `sleutelaar.xyz` did not render)
  - `objectandarchive.com`, Massimo Osti Archive, The Street Style Archive,
    Copenhagen Archive, Built for Archives, The Design Archive by Dinidu, Los
    Angeles Public Library — all listed in the Awwwards archive index
- https://www.awwwards.com/websites/nigeria/ — Nigeria country listing (Oct 2026):
  Kore's Portfolio; Order & Chaos (AIZIZA); Armory AI; Directionless; Studio Lumio
  (SOTD + Developer Award, Jul 2024); Livespot360; Radio Null "Rewind" (SOTD 2022);
  Chowdeck Black Friday 2025; ADBC '24
- https://www.cssdesignawards.com/wotd-award-winners — CSS Design Awards winners
  listing (reviewed; no Nigerian cultural-archive work found)
- https://blackarchives.co

**Convention / critique evidence (field commentary on museum web design)**
- https://heritagecreative.co.uk/insights/10-best-museum-website-design-examples-updated-2026/
  — modern shift = dark background, large bold typography, accent colour, mega-menu;
  cites the British Museum as exemplar; carousel/parallax/editorial conventions
- https://socialdesignhouse.com/post/art-museum-website-redesign — editorial /
  magazine-style homepage as best practice for art museums (cited at URL level;
  fetched content was not available to quote)

**Source material confirmed in this stage (SKU §11 leads)**
- J.D. 'Okhai Ojeikere — 1930–2014; "Hairstyles" series from 1968; studio Foto
  Ojeikere, 1975; 10,000+ photographs: https://en.wikipedia.org/wiki/J._D._%27Okhai_Ojeikere
- MoMA — Ojeikere audio playlist: https://www.moma.org/audio/playlist/
- Fondation Cartier — Ojeikere artist page: https://www.fondationcartier.com/en/artists/jd-okhai-ojeikere
- ART X Lagos 2025, "An Exacting Eye" (Ojeikere, ~150 images): https://artxlagos.com

**Unverified / could not be captured — do not cite as evidence**
- `https://archive51.art` — fetch returned a transport error
- `https://sleutelaar.xyz` and `https://studiolumio.com` — returned no rendered
  content (JavaScript-dependent); directory-level evidence only
- `mowaa.wearemowaa.org` collections UI contained placeholder content ("Hotspot 1")
  at time of fetch

---

## 8. Coverage note

**This is a well-analysed, curated set — not an exhaustive census.** With live web
search unavailable and no browser session for screenshots or rendered captures,
coverage is limited to pages reachable by direct fetch. The most likely gaps:

- Award-winning work in categories the Awwwards archive index does not surface by
  the routes used (e.g. Recent Webby/FWA winners vetted only at listing level).
- Non-English-language African archive projects.
- Post-2024 Nigerian cultural-heritage launches not yet linked from the directories
  fetched.

**Recommended follow-up when a browser session is available:** capture stills of
`sammlung.tiroler-landesmuseen.at` (the linking mechanic and the dice interaction
in motion), `harvardfilmarchive.org` (typographic hierarchy at desktop and mobile),
and `blackarchives.co` (the dark treatment and photo ratio). Those three captures
would carry Stage 03 and Stage 05 further than any additional list.
