# INSPIRATION LIBRARY — ARCHIVE

**Stage 03.** A categorized visual reference library supporting the ARCHIVE landing
page. Reference is evidence: this file exists so that every visual decision in the
build can be traced to something observed rather than assumed.

**Status: partial — and the partiality is stated rather than hidden.**

| | |
| --- | --- |
| Catalogued | **193** references across 10 categories |
| Photographed | **52** (full-page captures, headless Chromium) |
| Queued | **141** (verified reachable, not yet photographed) |

The workflow's nominal target was ~500. 193 was judged the honest ceiling for this
brief: beyond that the list stops being on-brief and starts being a directory of
museums. Rather than pad it, the cut is documented in §6.

**Method.** Candidates were assembled from the competitor research's anti-pattern
list and the SKU's subject areas, then every URL was checked for reachability before
being admitted (HTTP status recorded in `_verify.json`). Accepted references were
captured at 1440×900 with the hub's headless capturer, which dismisses cookie and
consent overlays first. Files and folders prefixed `_` are working data and are
skipped by the hub's media walker.

**Naming convention.** `NN-category__slug.png` — the two-digit prefix sorts the
library by category in any file listing, and the slug is the site's own name.

- `_candidates.json` — the raw pool (198)
- `_final.json` — the admitted set with URLs (193)
- `_verify.json` — reachability result per URL
- `_shoot.mjs` — the capture driver
- `screenshots/` — the 52 captures

---

## 1. The ten categories

Each category answers a different question the build had to answer. They are
deliberately not all museums.

| # | Category | Question it answers | Listed | Shot |
| --- | --- | --- | --- | --- |
| 01 | **hero** | How do serious cultural institutions open a page? | 20 | 19 |
| 02 | **archive** | How is a collection made searchable and legible? | 23 | 22 |
| 03 | **index** | How do visual directories and discovery tools behave? | 15 | 11 |
| 04 | **stories** | How is a long-form argument carried by layout? | 18 | 0 |
| 05 | **editorial** | What do the magazines this audience trusts look like? | 31 | 0 |
| 06 | **culture** | Who already covers this subject, and how? | 26 | 0 |
| 07 | **photo** | How is photography presented as an argument? | 20 | 0 |
| 08 | **fashion** | How is textile and dress history presented? | 12 | 0 |
| 09 | **music** | How is popular-music history documented? | 18 | 0 |
| 10 | **poster** | How are graphic design and print archives run? | 10 | 0 |

Categories 01–03 were captured first because they were needed to set the visual
direction. 04–10 are catalogued and queued; they are the reference set for the
next pass of refinement, not dead weight — each one is a page in the archive the
build is a doorway to.

---

## 2. Captured — 52

### 01 · hero — how institutions open

| Reference | URL |
| --- | --- |
| 032c | https://032c.com/ |
| Design Museum | https://designmuseum.org/ |
| The Gentlewoman | https://thegentlewoman.co.uk/ |
| Letterform Archive | https://letterformarchive.org/ |
| MACAAL | https://macaal.org/ |
| MoMA | https://www.moma.org/ |
| Nordiska museet | https://www.nordiskamuseet.se/en |
| Norval Foundation | https://www.norvalfoundation.org/ |
| NOWNESS | https://www.nowness.com/ |
| Palais de Tokyo | https://palaisdetokyo.com/ |
| PhotoVogue | https://www.vogue.com/photovogue |
| Rijksmuseum | https://www.rijksmuseum.nl/en |
| Serpentine | https://www.serpentinegalleries.org/ |
| Stedelijk Museum | https://www.stedelijk.nl/en |
| Tate | https://www.tate.org.uk/ |
| V&A | https://www.vam.ac.uk/ |
| V&A · Africa Fashion | https://www.vam.ac.uk/exhibitions/africa-fashion |
| Wellcome Collection | https://wellcomecollection.org/ |
| Zeitz MOCAA | https://zeitzmocaa.museum/ |

*Not captured:* Barbican — https://www.barbican.org.uk/

### 02 · archive — how a collection is made searchable

| Reference | URL |
| --- | --- |
| African Activist Archive | https://africanactivist.msu.edu/ |
| Atopia (immersive) | https://atopia.com/ |
| Beinecke Library | https://beinecke.library.yale.edu/ |
| Cooper Hewitt Collection | https://collection.cooperhewitt.org/ |
| DPLA | https://dp.la/ |
| Europeana | https://www.europeana.eu/en |
| Gallica (BnF) | https://gallica.bnf.fr/ |
| Harry Ransom Center | https://www.hrc.utexas.edu/ |
| Internet Archive | https://archive.org/ |
| **Lagos Museum Archives** | https://lagosmuseumarchives.ng/ |
| Library of Congress Prints | https://www.loc.gov/pictures/ |
| The Met · Collection | https://www.metmuseum.org/art/collection |
| Newberry | https://www.newberry.org/ |
| NYPL Digital Collections | https://digitalcollections.nypl.org/ |
| Public Domain Review | https://publicdomainreview.org/ |
| Qatar Digital Library | https://www.qdl.qa/en |
| Rijksmuseum · Collection | https://www.rijksmuseum.nl/en/collection |
| Schomburg Center | https://www.nypl.org/locations/schomburg |
| Science Museum Group | https://collection.sciencemuseumgroup.org.uk/ |
| Smithsonian Open Access | https://www.si.edu/openaccess |
| Tate · Art | https://www.tate.org.uk/art |
| V&A · Collections | https://collections.vam.ac.uk/ |

*Not captured:* National Archives (UK) — https://www.nationalarchives.gov.uk/

### 03 · index — discovery and directory tools

| Reference | URL |
| --- | --- |
| Are.na | https://www.are.na/ |
| Are.na Editorial | https://www.are.na/editorial |
| Discogs | https://www.discogs.com/ |
| Fonts In Use | https://fontsinuse.com/ |
| Godly | https://godly.website/ |
| Httpster | https://httpster.net/ |
| Land-book | https://land-book.com/ |
| Musicmap | https://musicmap.info/ |
| Radio Garden | https://radio.garden/ |
| Savee | https://savee.it/ |
| Siteinspire | https://www.siteinspire.com/ |

*Not captured:* Contemporary And, Cosmos, Every Noise at Once, Printed Matter.

---

## 3. Queued — 141

Verified reachable, catalogued, not yet photographed. These are the references for
the next refinement pass.

| Category | Queued references |
| --- | --- |
| 04 · stories | Aeon, Atmos, Bloomberg Graphics, Emergence, FT Visual Stories, Guardian Interactive, Hakai, Information is Beautiful, JSTOR Daily, National Geographic, Noema, NYT "Snow Fall", Places Journal, ProPublica, The Pudding, Reuters Graphics, SCMP Graphics, The Markup |
| 05 · editorial | Another Magazine, Apartamento, Artforum, ArtReview, Buffalo Zine, The Creative Independent, Dazed, Dezeen, e-flux, Eye on Design, Failed Architecture, Frieze, Futuress, Granta, Harvard Design Magazine, Hyperallergic, i-D, It's Nice That, Kinfolk, MacGuffin, Mousse, Ocula, The Paris Review, Raw Material Company, System, The Funambulist, Typographica, Vestoj, Wallpaper, The White Review, Works That Work |
| 06 · culture | 1-54 Art Fair, Africa in Words, Afterall, Agbowo, Art X Lagos, Bakwa, CCA Lagos, Chimurenga Chronic, Culture Custodian, Curators International, HSPACA Archive, Jalada, Lagos Fashion Week, LagosPhoto, MOWAA, Nataal, NCMM, NGA Nigeria, Nlele Institute, OkayAfrica, Olongo Africa, Musée du quai Branly, Rele Gallery, The Native, The Republic, Zikoko |
| 07 · photo | Aperture, Autograph ABP, Blind, Everyday Projects, Foam, Fondation Cartier, Gordon Parks Foundation, ICP, Jeu de Paume, LensCulture, Mack Books, Magnum, Panos Pictures, PHmuseum, The Photographers' Gallery, Steidl, Studio Museum Harlem, The Black Archives, VII Photo, World Press Photo |
| 08 · fashion | Adire African Textiles, Business of Fashion, Duro Olowu, FIT Fashion History Timeline, Kyoto Costume Institute, Lisa Folawiyo, MoMu Antwerp, Palais Galliera, SHOWstudio, Textile Museum, Vlisco, Vogue Runway |
| 09 · music | African Music Library, Afrobeat Archive, Afropop Worldwide, Awesome Tapes From Africa, Bandcamp Daily, Boiler Room, Dust-to-Digital, Fela Kuti, Habibi Funk, MoPOP, Music In Africa, NMAAM, Red Bull Music Academy, Sahel Sounds, Songlines, The Vinyl Factory, The Wire, Wax Poetics |
| 10 · poster | AIGA Design Archives, Cooper Hewitt, Design Reviewed, Letterform Online Archive, Paul Rand, People's Graphic Design Archive, Poster House, Typewolf, Vitra Design Museum, Zine Library |

---

## 4. What the captures actually changed

Written from the images, not from memory of the sites. Both are preserved in
`screenshots/`.

**The Lagos Museum Archives (National Museum Lagos Archives, NCMM) is the closest
precedent to this brief and was treated as a warning as much as a reference.** It
does the obvious thing: a deep green ground, cream panels, enormous condensed
uppercase display type over a duotone archival photograph, and three hairline-ruled
column cards with a small arrow at the foot of each. Structurally it is exactly the
"archival index" the ARCHIVE brief points at — and it is built on the one palette
the brief forbids (green ground with a cream/beige body), which is why the
anti-pattern list exists. Its lesson is the *type size and the ruled column*, not
its colour.

**MoMA is the counter-model.** A white ground, a grotesque wordmark set very large,
a full-bleed photograph occupying a third of the viewport, a heavy black rule under
the welcome block, and one action. Almost no interface: the institution's authority
is carried entirely by scale and rule weight. This is the mechanism Direction A
borrows — masthead, rule, single action — while inverting the ground to dark and
removing the photograph, because the photographs are exactly what this project
cannot licence.

Taken together the captured set argues one thing: the institutional web convention
is **huge type + one rule + one action**, and almost everyone fills the remaining
space with either a photograph or a green ground. Removing both, and substituting a
named absence, is where this project's identity lives.

---

## 5. Subject references the build depends on

Besides the visual set, these are the sources the content and rights work leans on.
They are catalogued in the library because they are references, not because they are
pretty.

- **Institutional collection APIs** — The Met, Art Institute of Chicago, V&A, MoMA.
  Used to lift a claim to *High* confidence in `07-content/CONTENT_REGISTER.md`.
- **Wikipedia** (CC BY-SA 4.0) — the working backbone for dated events; credited on
  the page.
- **Nataal, The Native, Zikoko** — identified by the competitor research as where the
  tone this audience trusts actually lives. Queued, not yet captured.

---

## 6. Limits, stated

1. **52 of 193 captured, 0 of the refinement-facing categories.** The captured set
   is heavily weighted to institutional hero and archive pages. Editorial, culture,
   photography, fashion, music and poster references — the ones that would inform
   art direction and motion — are catalogued but unphotographed.
2. **The library is Anglophone-internet shaped.** Web search was unavailable, so the
   set skews to English-language and Western-institutional sites. Nigerian and
   West African culture platforms are under-represented relative to their importance
   to this brief; the 06 · culture category is the correction and is uncaptured.
3. **Ten sites were dropped at the reachability check** and are not in the 193.
4. **Screenshots are resting states at one viewport.** Hover, motion and responsive
   behaviour are not represented in a single 1440×900 capture; the interaction
   library is the place for that.
5. **No capture has been reviewed for anti-pattern contamination.** The set was
   assembled from an anti-pattern list and reference value, but items were not
   individually audited against the SKU's must-avoid list. Anything adopted from a
   queued reference must be checked against §6 of the SKU first.
