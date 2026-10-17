# INTERACTION LIBRARY — ARCHIVE

Stage 04 deliverable · Interaction + motion research
Project: **ARCHIVE — a digital museum of Nigeria's creative history**
Source of truth: `artifacts/00-sku/SKU.md` (read first; §6 must-avoid and §7 functional requirements drive every selection below)

---

## 0. Method, tooling and limitations (read this before trusting anything below)

**Two tools named in my instructions were unavailable. Saying so up front:**

| Tool | Status | Consequence |
| --- | --- | --- |
| `websearch` | **Unavailable** — returned `Web search cancelled` / `No search results found` for every query | No search-driven discovery. All sources were found by navigating known museum / archive / web-platform domains directly. |
| `browser.*` (desktop browser) | **Disconnected** — `[browser.disconnected] No desktop browser is connected to this session` on every call, retried at start, mid-run and end | **No screenshots could be captured.** The `browser.tabs.open → focus → screenshot` pipeline never ran. |

**What I did instead (and why the report is still evidence-grade):**
Every site below was fetched for real over the network, and I read the **actual shipped HTML, CSS and JS** — not a description of it. 39 pages and 171 linked stylesheets/scripts were downloaded (≈33 MB), then scanned programmatically for interaction signatures. Every code snippet quoted in this document is **verbatim from the live asset** serving that URL. Where I could not verify something, I say so explicitly rather than guessing.

> **Screenshots:** the `screenshots/` directory exists and is empty. Each entry below carries the exact `screenshot:` path I would have written, plus the URL and the *state* to capture. `_evidence/CAPTURE_CHECKLIST.md` is a ready-to-run capture list for whoever has a connected browser (Project Manager or Stage 05). I have **not** invented paths to images that do not exist.

**Evidence artefacts** (all under `artifacts/03-interactions/_evidence/`):
`signatures.md` (39 sites × 38 signatures) · `nav-a11y.md` (39 sites × 17 semantics) · `findings.md` (71 KB of extracted verbatim CSS) · `demos-code.md` (scroll-driven demo source) · `demos/vt-*.css|js` (View Transition API demos) · `pages/` (39 raw HTML) · `assets/` (171 CSS/JS) · `harvest.ps1`, `fetch-assets.ps1`, `scan-signatures.ps1`, `scan-nav.ps1`, `extract.ps1`, `extract-demos.ps1` (reproducible).

**Corpus (39 verified loads).** Museums/archives: V&A, MoMA, Rijksmuseum, Library of Congress, Cleveland Museum of Art, Tate, Whitney, Art Institute of Chicago, Cooper Hewitt, Design Museum, National Gallery (UK), Letterform Archive, SMK (Statens Museum for Kunst), Magnum Photos, ART X Lagos. Editorial/scroll: The Pudding, Reuters Graphics, The Conversation. Craft: Are.na, Cuberto, Darkroom Engineering. Demos/spec: scroll-driven-animations.style (9 demos), MDN View Transition demos (SPA + MPA), HTTP 203, OpenSeadragon (IIIF + keyboard examples), IIIF, Knight Lab TimelineJS + Juxtapose, Inclusive Components. Could not load (DNS/WAF/rate-limit, **not** used as sources): getty.edu, nga.gov, cca-lagos.org, nikeartgallery.com (404), digitalbenin.org, metmuseum.org, britishmuseum.org, si.edu, brooklynmuseum.org, lagosphotofestival.com, europeana.eu, africa.si.edu, archive.org, locomotive.ca, W3C APG.

---

## 1. Summary of categories and counts

| # | Category | Entries | Most relevant to |
| --- | --- | --- | --- |
| A | Navigation interactions | 7 | SKU 01 Navigation |
| B | Scroll behaviour | 8 | SKU 03–06 |
| C | Hero animation & first paint | 6 | SKU 02 Hero |
| D | Buttons & micro-interactions | 7 | SKU 04, 07 |
| E | Hover states & focus states | 6 | SKU §7 (hard requirement) |
| F | Cards & content reveals | 6 | SKU 03, 04 |
| G | Cursor treatments | 4 | SKU 03, 06 |
| H | Loading & transition states | 5 | SKU 02, whole page |
| I | Section-to-section motion | 5 | SKU 05 Stories Through Time |
| J | Archive material made interactive | 6 | SKU 03 Featured Archive |
| K | Time-based / "past → present" motion | 4 | SKU 05, 06 *(the brief's core idea)* |
| L | Reduced-motion & accessibility technique | 6 | SKU §7, non-negotiables |
| | **Total** | **70** | |

**Six findings that should shape the whole build** (each is verified, not assumed):

1. **No serious museum ships motion without a reduced-motion strategy — but the strategies differ in quality.** MoMA's homepage bundle contained **zero** `prefers-reduced-motion` rules; Rijksmuseum's contained **45**; National Gallery's **32**; Library of Congress's **33**; Are.na's **12**. The `must-avoid` "standard museum template" is not the only thing to avoid — *MoMA-grade visual ambition with no motion escape hatch* is equally off-brief, because the SKU makes accessibility a non-negotiable.
2. **The canonical scroll-driven-animation demos have no reduced-motion handling at all.** I extracted the inline CSS of all nine demos on `scroll-driven-animations.style` and counted `prefers-reduced-motion` mentions: **0, 0, 0, 0, 0, 0, 0, 0, 0**. They are the best source of *technique* in this document and the worst source of *accessibility*. Copy the mechanics, never the gating.
3. **The strongest accessibility pattern I found collapses motion to a variable, not to nothing.** The Pudding defines `@media screen and (prefers-reduced-motion: no-preference){:root{--1s: 1s}}` and then writes every duration as `calc(var(--1s) * 0.25)`. Under reduced motion the durations evaluate to zero while the component still exists and still communicates. This is the pattern I recommend ARCHIVE adopts globally.
4. **Card hover parity is solved and the solution is CSS-only.** Inclusive Components: `.card a:focus{text-decoration:underline}.card:focus-within{box-shadow:0 0 0 .25rem}.card:focus-within a:focus{text-decoration:none}`. Are.na does the same and makes focus-visible produce *byte-identical* styling to hover. SKU §7 asks for "hover, focus and active states" on discipline cards — this is how.
5. **Deep zoom is the definitive "archive feels alive" interaction, and it is cheap.** The Art Institute of Chicago's bundle contains OpenSeadragon's `MouseTracker` alongside `cursor:none` — i.e. a real deep-zoom viewer with a custom cursor, exactly what MoMA/Rijksmuseum-class institutions ship. Rijksmuseum goes further with `.zoomable-micrio`.
6. **Deep zoom is also the most keyboard-hostile interaction on the web by default.** OpenSeadragon ships a *keyboard navigation* example precisely because the viewer needs explicit key bindings. Any zoom ARCHIVE ships must be keyboard-operable **and** must have a static fallback.

---

## 2. Categories

Format for every entry: **pattern** — source URL — *how it works* (trigger → response → feel + implementation hint) — *when to use* — *motion-safe* (`prefers-reduced-motion`) — *keyboard* — *screenshot*.

---

### A. Navigation interactions

#### A1. Whether a conventional nav is even right (the honest answer)
Eleven of the thirteen museum/archive sites I audited ship a persistent top bar; the exceptions are Cleveland and SMK, both of which still expose navigation (Cleveland via skip links and `:focus-within` disclosure, SMK via in-page structure). Evidence from `nav-a11y.md` — `<nav>` landmarks per site: Library of Congress **15**, National Gallery (UK) 6, Are.na 6, Art Institute of Chicago 5, Darkroom 5, Magnum 4, Rijksmuseum 3, The Conversation 3, Tate 2, Letterform Archive 2, and 1 each for V&A, MoMA, Whitney, Cooper Hewitt, Design Museum, ART X Lagos. So the ones that differ do so by *degree*, not by kind. **Recommendation: keep a conventional, minimal nav** — but make it *thin, sticky and typographic* rather than a mega-menu. Museum audiences arrive by deep link and by search; a nav-less "experience" landing page destroys orientation and fails SKU §7 ("Functional navigation and in-page section links"). What *should* be unconventional is the nav's **form** (type-led, hairline rules, no pill buttons, no shadow-on-white card), not its existence.

#### A2. Scroll-shrink header that gains a shadow
— source URL: `https://scroll-driven-animations.style/demos/shrinking-header-shadow/css/` — *how it works:* as the root scroller advances, the header animates height/shadow; response is continuous and reversible (scrub back up and it un-shrinks); feels like a page that is aware of you. Implementation (verified in the demo source):
```css
#sticky-parallax-header { animation: linear forwards; animation-timeline: scroll(); animation-range: 0 8rem; }
```
— *when to use:* SKU 01, once the user commits to reading; not on first paint. — *motion-safe:* **the demo ships no guard (verified: 0 mentions).** Wrap it: `@media (prefers-reduced-motion: reduce){ #sticky-parallax-header{animation:none} }` and set the "shrunk" state directly. — *keyboard:* purely visual; no impact, provided the header never traps focus and `position` changes don't move the focused element. — *screenshot:* `artifacts/03-interactions/screenshots/A2-shrinking-header.png` **NOT CAPTURED** (capture: top of page, then scrolled 200 px).

#### A3. Cover-to-fixed-header morph (hero becoming nav)
— source URL: `https://scroll-driven-animations.style/demos/cover-to-fixed-header/css/` — *how it works:* a full-viewport cover card literally **becomes** the fixed header as you scroll; response is a single continuous morph of height, font-size and background-position; feels like the page folding into its own masthead. Verbatim:
```css
@supports(animation-range: 0vh 90vh) {
  @keyframes sticky-parallax-header-move-and-size {
    from { background-position: 50% 0; }
    to   { background-position: 50% 100%; background-color: #0b1584; height: 10vh; font-size: 2em; }
  }
  #sticky-parallax-header { position: fixed; top: 0; animation: sticky-parallax-header-move-and-size linear forwards;
                            animation-timeline: scroll(); animation-range: 0vh 90vh; }
  body { padding-top: 100vh; }
}
```
— *when to use:* **strong candidate for SKU 02 → 01.** It is the cleanest expression of "the past becoming present" available in CSS, and it solves nav + hero in one asset. Risky on small screens (font-size morph is jarring under 600 px) — recommend enabling only at `min-width: 48rem`. — *motion-safe:* guard absent in the demo. Under `reduce`, render the header in its final state and drop `animation-timeline`. — *keyboard:* safe (no focus movement), but the 100 vh `padding-top` must not push the skip link off-screen. — *screenshot:* `.../A3-cover-to-fixed-header.png` **NOT CAPTURED** (capture: 0 %, 50 %, 100 % scroll of the demo).

#### A4. Skip link + landmark structure (present on 10 of 39 sites)
— source URL: `https://www.nationalgallery.org.uk/` (4 skip-link matches; also `https://www.loc.gov/` 4, `https://www.rijksmuseum.nl/en` 5, `https://www.tate.org.uk/` 4, `https://letterformarchive.org/` 6, `https://whitney.org/` 5) — *how it works:* first Tab stop reveals a visually-offscreen link that jumps to `#main`; response is immediate focus transfer; feels invisible to mouse users and essential to keyboard users. — *when to use:* **SKU 01 + 08, non-negotiable.** A single landing page makes a page-wide skip link less critical than on multi-page sites, but the *pattern* is required if ARCHIVE ships an in-page "contents" list before a text-heavy Stories section. — *motion-safe:* none needed (no animation) — this is the one navigation pattern with no motion liability. — *keyboard:* this **is** the keyboard affordance; must be the first focusable element in DOM order. — *screenshot:* `.../A4-skip-link.png` **NOT CAPTURED** (capture: page loaded, press Tab once).

#### A5. In-page anchor navigation with guarded smooth scrolling
— source URL: `https://www.loc.gov/` — *how it works:* clicking a section link glides rather than jumps; the guard is what matters — verbatim from the shipped CSS:
```css
@media (prefers-reduced-motion: no-preference) { :root { scroll-behavior: smooth; } }
```
— *when to use:* SKU 01 → in-page links to 03/04/05/06. **Use this exact form: opt *in* under `no-preference`**, rather than opting out under `reduce` — it is the safer default and three of the largest sites audited (LoC, National Gallery, Cleveland) do it this way. — *motion-safe:* yes — smooth scrolling is *absent* under `reduce`, not merely shortened. — *keyboard:* unaffected for anchor activation, but pair with `:focus-within`/`scroll-margin-top` so a sticky header does not cover the target heading. — *screenshot:* not meaningful (behavioural) — omit.

#### A6. Navigation state exposed as data attributes, not classes
— source URL: `https://www.moma.org/` — *how it works:* menu state lives on the root as `[data-mobile-menu-expanded=true]`, with `aria-expanded` on triggers (**25** uses on MoMA; **132** on `https://www.artic.edu/`, **42** on Whitney, **33** on National Gallery). Response: a single attribute flip drives every dependent rule, including `will-change` promotion. Verbatim: `will-change:transform,visibility` on `[data-membership-menu-trigger]` etc. — *when to use:* SKU 01 mobile behaviour. Attribute-driven state is testable, greppable and screen-reader-truthful; class-driven state drifts out of sync with ARIA. — *motion-safe:* promote `will-change` only while open and reset to `auto` afterwards (Are.na does exactly this: `will-change:auto` inside its reduced-motion block). — *keyboard:* pair every `aria-expanded` with `aria-controls` (MoMA 11, National Gallery 25, LoC 20) and close on `Escape`. — *screenshot:* `.../A6-mobile-nav-open.png` **NOT CAPTURED**.

#### A7. Scroll-container isolation for pinned sections
— source URL: `https://www.reuters.com/graphics/` — *how it works:* `scroll-behavior:contain` on inner galleries so wheel/arrow scrolling inside a horizontal strip does not chain to the page; response is a "sticky" feel at the boundary; feels deliberate rather than slippery. Also present on Whitney (`scroll-behavior:contain` + `scroll-snap-align:center`) and LoC (`contain`, `auto`, `smooth`). — *when to use:* any horizontally-scrolling archive strip in SKU 03/04. — *motion-safe:* n/a (no animation). — *keyboard:* **critical** — a horizontally scrolling region must be reachable by Tab and scrollable by arrow keys, with `tabindex="0"` and a visible focus ring if it has no other focusable child. — *screenshot:* `.../A7-scroll-contain.png` **NOT CAPTURED**.

---

### B. Scroll behaviour

#### B1. Scroll-driven image reveal (clip-path + opacity) — **primary recommendation**
— source URL: `https://scroll-driven-animations.style/demos/image-reveal/css/` — *how it works:* each image owns a `view()` timeline; as it enters the scrollport it un-crops from a narrow letterbox to full frame while fading up; response is scrubbed by scroll position (reverse scrolling reverses it); feels like a print being unmasked. Verbatim:
```css
@keyframes reveal { from { opacity: 0; clip-path: inset(45% 20% 45% 20%); } to { opacity: 1; clip-path: inset(0% 0% 0% 0%); } }
.revealing-image {
  view-timeline-name: --revealing-image; view-timeline-axis: block;
  animation: linear reveal both; animation-timeline: --revealing-image;
  animation-range: entry 25% cover 50%;
}
```
— *when to use:* **SKU 03 Featured Archive, every item.** `clip-path` is GPU-friendly and, unlike `transform`, does not move the element — so it does not fight scroll position or cause reflow. Pair with `opacity` so the reveal still reads if `clip-path` is unsupported. — *motion-safe:* **demo has no guard (verified 0).** Required fix: `@media (prefers-reduced-motion: reduce){ .revealing-image{animation:none; opacity:1; clip-path:none} }`. Do **not** just speed it up — the letterbox crop is a vestibular-adjacent effect and should be removed, not shortened. — *keyboard:* `clip-path` never removes an element from the accessibility tree, and the image keeps its `alt` — safe. Ensure the *caption* is not clipped. — *screenshot:* `.../B1-image-reveal.png` **NOT CAPTURED** (capture: demo at 25 %, 50 %, 100 % through the reveal).

#### B2. Horizontal scroll section pinned by `position: sticky` — **strong recommendation for SKU 05**
— source URL: `https://scroll-driven-animations.style/demos/horizontal-section/css/` — *how it works:* a tall section (500 vh) contains a `sticky` viewport-height wrapper; the inner track translates left as the page scrolls down; response maps vertical scroll to horizontal travel; feels like a timeline you physically move along. Verbatim:
```css
@supports (animation-timeline: view()) {
  @keyframes move { to { transform: translateX(calc(-100% + 100vw)); } }
  #sectionPin { height: 500vh; overflow: visible; view-timeline-name: --section-pin-tl; view-timeline-axis: block; }
  .pin-wrap-sticky { height: 100vh; width: 100vw; position: sticky; top: 0; overflow-x: hidden; }
  .pin-wrap { height: 100vh; width: 250vmax; will-change: transform;
              animation: linear move forwards; animation-timeline: --section-pin-tl;
              animation-range: contain 0% contain 100%; }
}
```
— *when to use:* **the single best vehicle for "Stories Through Time"** — a left-to-right era rail (e.g. highlife → juju → fuji → Afrobeat → Afrobeats) that the reader scrubs. Reserve for desktop/tablet: at ≤ 40 rem, degrade to a normal horizontally scrollable, snap-aligned strip. — *motion-safe:* no guard (verified 0). Under `reduce`, drop the 500 vh pin and present the rail as a static, natively scrollable row (`overflow-x: auto; scroll-snap-type: x mandatory`). — *keyboard:* the pinned version is a **scroll-jacking risk** — it hijacks the meaning of the vertical scroll. Mitigations: keep the pinned height modest (≤ 300 vh), always provide a real `<ol>` of the eras as normal links above the rail, and never put interactive controls only inside the pinned track. The static fallback is fully keyboard-native. — *screenshot:* `.../B2-horizontal-section.png` **NOT CAPTURED** (capture: entry, mid-pin, exit).

#### B3. Stacking cards with progressive scale
— source URL: `https://scroll-driven-animations.style/demos/stacking-cards/css/` — *how it works:* each card scales down by an amount derived from its index as the next card covers it; response is computed per card from `--index` / `--numcards`, so the stack stays coherent at any count; feels like a deck being dealt. Verbatim:
```css
@supports (animation-timeline: view()) {
  .card { --index0: calc(var(--index) - 1); --reverse-index: calc(var(--numcards) - var(--index0)); --reverse-index0: calc(var(--reverse-index) - 1); }
  @keyframes scale { to { transform: scale(calc(1.1 - calc(0.1 * var(--reverse-index)))); } }
  #cards { --numcards: 4; view-timeline-name: --cards-element-scrolls-in-body; }
  .card__content {
    --start-range: calc(var(--index0) / var(--numcards) * 100%);
    --end-range:  calc(var(--index)  / var(--numcards) * 100%);
    animation: linear scale forwards; animation-timeline: --cards-element-scrolls-in-body;
    animation-range: exit-crossing var(--start-range) exit-crossing var(--end-range);
  }
}
```
— *when to use:* SKU 03, when archive items are *different artefacts of one moment* (e.g. a FESTAC '77 poster over a photograph over a record sleeve). Avoid for unrelated items — stacked cards falsely imply sequence. — *motion-safe:* no guard (verified 0). `scale()` on large areas is an explicit vestibular trigger (MDN names scaling/panning large objects as the risk). Under `reduce`: `animation:none; transform:none`. — *keyboard:* safe; stacking must not reorder DOM. — *screenshot:* `.../B3-stacking-cards.png` **NOT CAPTURED**.

#### B4. Reading-progress indicator
— source URL: `https://scroll-driven-animations.style/demos/progress-bar/css/` — *how it works:* `scaleX` 0→1 tied to root scroll; response is 1:1 and off-main-thread; feels like a spine showing how far into the archive you are. Verbatim:
```css
@keyframes grow-progress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
html { scroll-timeline: --page-scroll block; }
#progress { position: fixed; z-index: 10; left: 0; top: 0; width: 100%; height: 1em;
            transform-origin: 0 50%; animation: grow-progress auto linear; animation-timeline: --page-scroll; }
```
— *when to use:* SKU 05 and 06 — long-form only. **Not on the hero**: a progress bar at 0 % on first paint signals "this will be long" before the user has decided to care. — *motion-safe:* no guard (verified 0). This is the one pattern where a reduced-motion substitute is better than removal — replace with a discrete "Section 3 of 6" text label. Never use `transition` here; use `animation-timeline` so it is scroll-linked and cannot lag. — *keyboard:* decorative — must be `aria-hidden="true"`, or exposed as a `<progress>`/`role="progressbar"` with a real value. Choose one; shipping both double-announces. — *screenshot:* `.../B4-progress-bar.png` **NOT CAPTURED**.

#### B5. Gallery thumbnail as a progress meter (a genuinely unusual find)
— source URL: `https://www.loc.gov/` — *how it works:* the active thumbnail is progressively **un-clipped** as you advance, so the thumbnail row doubles as the scrubber; verbatim from LoC's shipped CSS:
```css
clip-path: inset(0 calc(((var(--f-thumb-width,0) - var(--f-thumb-clip-width,0))) * (1 - var(--progress,0)) * .5) round var(--f-radius,0));
```
— *when to use:* SKU 03 if Featured Archive ships as a gallery — it removes the need for a separate progress bar. — *motion-safe:* drive it from the `--progress` value; under `reduce`, present the thumbnail highlighted/outlined instead of clipped (LoC itself ships 33 reduced-motion blocks, so the surrounding component is guarded). — *keyboard:* thumbnails must be real buttons in a tablist (`role="tab"` appears 2× on LoC, 4× on National Gallery) or plain links; the clip-path is presentational only. — *screenshot:* `.../B5-thumb-progress.png` **NOT CAPTURED**.

#### B6. Scroll-snap carousel with contain
— source URL: `https://whitney.org/` — *how it works:* `scroll-snap-align:center` on items plus `scroll-behavior:contain` on the track, and a `.carousel--no-transition` state that disables all transitions while the carousel repositions (so it doesn't animate on load or on resize). — *when to use:* SKU 04 discipline strip on mobile. — *motion-safe:* the built-in `.carousel--no-transition` class is itself the reduced-motion answer — add `.carousel--no-transition` under `reduce`. Whitney ships 3 reduced-motion blocks and 6 `scroll-behavior` declarations. — *keyboard:* native scroll snap is keyboard-scrollable; add visible `:focus-visible` on items (Whitney uses `:focus-visible{outline:none}` on some controls — **do not copy that**; prefer V&A's high-contrast ring, see E3). — *screenshot:* `.../B6-snap-carousel.png` **NOT CAPTURED**.

#### B7. Scroll shadows as overflow affordance
— source URL: `https://scroll-driven-animations.style/demos/scroll-shadows/css/` — *how it works:* inset shadows on a scroller appear/disappear as you reach each edge, driven by `scroll()`; tells the user "there is more here" without chrome. — *when to use:* SKU 03/04 horizontal rails, especially where content bleeds off-screen. — *motion-safe:* guard absent; the effect is a pure opacity fade, so it is *acceptable* to keep under `reduce` if the duration is collapsed — but safer to show a static edge fade. — *keyboard:* purely decorative; ensure it never overlaps content that receives focus. — *screenshot:* `.../B7-scroll-shadows.png` **NOT CAPTURED**.

#### B8. Named timeline range vocabulary — the concept worth internalising
— source URL: `https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations` — *how it works:* MDN documents the timeline range names (`entry`, `exit`, `cover`, `contain`, `entry-crossing`, `exit-crossing`) and the `scroll()` / `view()` functions, plus `timeline-scope` for letting a child reach an ancestor's timeline. Response: you can specify *when* in an element's passage through the viewport an animation runs, in named units rather than magic percentages. — *when to use:* everywhere in B1–B3; `timeline-scope` is what lets a whole section share one timeline for sequenced reveals (see I3). — *motion-safe:* n/a (spec). — *keyboard:* n/a. — *screenshot:* n/a (technical reference).

---

### C. Hero animation & first paint

#### C1. Persistent loader that survives page transitions
— source URL: `https://cuberto.com/` — *how it works:* a `div.Loader` containing `.backdrop` and `.fill` layers sits in the DOM and is marked `data-astro-transition-persist`, so it persists across navigation instead of re-mounting; response is one continuous veil rather than a flicker of new DOM. Verbatim markup:
```html
<div data-astro-transition-persist="astro-h7s7oc3y-1" class="Loader">
  <div class="backdrop"></div><div class="fill"></div>
</div>
```
— *when to use:* SKU 02, **only if** the hero image is genuinely heavy. On a single-page ARCHIVE landing page there is exactly one first paint — a loader is justified only as a *type-led* introduction (wordmark + source line), never as a spinner. Prefer: render the hero immediately and let it resolve. — *motion-safe:* Cuberto gates its view transitions: `@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*),[data-astro-transition-scope]{animation:none!important}}`. Extend that to the loader itself. — *keyboard:* the loader must not be in the tab order, must not delay focus, and must never be the only thing on screen for longer than ~1 s — it also must not *block* a skip link. — *screenshot:* `.../C1-loader.png` **NOT CAPTURED** (capture within first 300 ms — hard; capture cuberto.com on a cold load).

#### C2. Hero parallax driven by a CSS custom property
— source URL: `https://www.vam.ac.uk/` — *how it works:* the header background images read `--translate-x` (set on `.header__bg-imgs`), so parallax is a variable write, not a transform rewrite; response is smooth and cheap. V&A also layers `backdrop-filter: blur(10px) grayscale(20%)` over the header background, and has a `.header--grayscale` state that pushes `grayscale(100%)`. — *when to use:* **SKU 02 — this is the tasteful version of hero parallax.** The desaturation + blur is a strong idea for ARCHIVE: hero imagery can sit in grayscale and *recover colour on interaction*, which is a literal reading of "the past becoming present" delivered with a filter rather than a flourish. — *motion-safe:* V&A ships `@keyframes opacity-fade-in` + `prefers-reduced-motion` gating; under `reduce`, freeze `--translate-x` at 0. Grayscale is not motion, so **the colour-recovery idea survives reduced-motion entirely** — which makes it the ideal signature effect for this project. — *keyboard:* `backdrop-filter` on a header can create a containing block that breaks sticky; verify. Add `@supports not (backdrop-filter: blur(1px))` fallback to a solid colour. — *screenshot:* `.../C2-hero-parallax.png` **NOT CAPTURED**.

#### C3. Top loading bar for slow first paint
— source URL: `https://whitney.org/` — *how it works:* a `.b26`-style progress element created in JS with `createProgressElement()` / `setValue()` / `startTrickling()` — a bar that trickles toward completion and snaps to 100 %. — *when to use:* only for real navigations/slow assets. For a one-page ARCHIVE build, use it (if at all) for **lazy image batches** in Featured Archive. — *motion-safe:* a trickling bar is continuous motion. Whitney sets a `.reduced-motion` class and hides motion affordances under it — do the same: replace with a static "Loading 12 of 48" counter. — *keyboard:* expose as `role="progressbar"` with `aria-valuenow`, or `aria-live="polite"` text. LoC uses `aria-live` 10×, designmuseum 5× — a live region is the accessible alternative to a bar. — *screenshot:* `.../C3-loading-bar.png` **NOT CAPTURED**.

#### C4. Preloader keyframe (what to avoid)
— source URL: `https://www.magnumphotos.com/` — *how it works:* `@keyframes preloaderAnim` plus `swiper-preloader-spin`; the page is gated behind an animation. Magnum ships only **2** reduced-motion blocks, both narrow (`.wp-block-cover.has-parallax{background-attachment:scroll}` and `.wp-social-link{transition-duration:0s}`) — the preloader itself is unguarded. — *when to use:* **as a cautionary counter-example.** A full-screen preloader on a photography archive front-loads delay where the SKU prioritises "states ARCHIVE's purpose within seconds". — *motion-safe:* would need a real guard; it does not have one. — *keyboard:* a preloader that blocks the document also blocks the skip link — an accessibility regression, not just a perf one. — *screenshot:* `.../C4-preloader-antipattern.png` **NOT CAPTURED**.

#### C5. Autoplay muted looping hero video
— source URL: `https://cuberto.com/` — *how it works:* `<video autoplay playsinline loop muted ...>`; response is silent motion behind the type; feels contemporary. — *when to use:* only if ARCHIVE can licence moving footage — the SKU §8 image-rights constraint makes this **unlikely and inadvisable**. If used: `muted` + `playsinline` + no audio track, and a poster frame. — *motion-safe:* **must** be paused under `reduce` — and note that `prefers-reduced-motion` does not stop autoplay by itself; you need JS (`matchMedia('(prefers-reduced-motion: reduce)')`) to call `pause()` and swap in the poster. Cuberto itself does *not* gate its autoplay hero — a real gap. — *keyboard:* if it carries information, provide a visible pause control (WCAG 2.2.2). Decorative video: `aria-hidden`. — *screenshot:* `.../C5-hero-video.png` **NOT CAPTURED**.

#### C6. Hero as type, not image (selected on the evidence)
Not a library entry but a conclusion: every heavyweight motion technique in this document assumes a **strong typographic skeleton**. The SKU already says "Strong typographic identity is cheap to build and carries cultural weight", and the image-rights constraint makes type the *only* fully controllable hero asset. The hero animation I recommend is therefore **typographic** — a time-based, reduced-motion-aware sequence of the wordmark and the tagline (see K1 for the gating mechanism).

---

### D. Buttons & micro-interactions

#### D1. Two-layer directional wipe button
— source URL: `https://www.smk.dk/en/` — *how it works:* a background layer sits at `translateX(101%)`; on hover a second layer slides to `translateX(0)` while the first sweeps out — a directional wipe; feels editorial and physical. Verbatim: `:hover:before{transform:translateX(101%)}` / `:hover:after{transform:translateX(0)}`. SMK pairs it with `:hover{box-shadow:inset 0 0 0 2px currentColor!important}` so the button also gains an inset rule. Note SMK's focus style is deliberately understated: `:focus-visible{outline-width:2px;outline-style:dotted;outline-color:currentColor}`. — *when to use:* SKU 07 primary CTA ("Explore the Archive"). A wipe is *more* appropriate than a colour fade for a museum: it reads as a curtain/scrim moving. — *motion-safe:* transform-only, short; keep at reduced duration under `reduce` (not removed) because the state change is otherwise imperceptible — but ensure `:hover` **and** `:focus-visible` produce the same end state so nothing is lost. — *keyboard:* **the wipe must also fire on `:focus-visible`**, and `translateX` layers must have `aria-hidden` content or be pseudo-elements (they are) so screen readers see only the label. — *screenshot:* `.../D1-wipe-button.png` **NOT CAPTURED**.

#### D2. Rolling ticker button label
— source URL: `https://whitney.org/` — *how it works:* the label is a vertical stack of the same word; keyframes step `top` to the next copy; feels like a mechanical counter. Verbatim:
```css
@keyframes btn-ticker-three{0%,.001%{top:0}8.33333%,33.3333%{top:calc(-1 * var(--input-height))}41.6667%,66.6667%{top:calc(-2 * var(--input-height))}75%,to{top:calc(-3 * var(--input-height))}}
```
— *when to use:* sparingly — one button maximum, on SKU 07. This is a *moment* of craft, not a system. — *motion-safe:* this one **must** be inside `@media (prefers-reduced-motion: no-preference)`; a stepping label is exactly the kind of repeated motion that triggers discomfort. Fallback: the plain static label. — *keyboard:* the visible stack must not duplicate announced text — wrap repeated copies in `aria-hidden` and give the button one accessible name. — *screenshot:* `.../D2-ticker-button.png` **NOT CAPTURED**.

#### D3. Underline-draw on hover (background-size technique)
— source URL: `https://www.rijksmuseum.nl/en` and `https://www.cooperhewitt.org/` — *how it works:* the underline is a `background-image` gradient whose `background-size` animates 0→100 %; verbatim: `transition:background-size .2s linear`, `:hover{background-position:bottom left}` (Cooper Hewitt slides the underline in from a direction: `bottom left` / `bottom right` / `bottom center`). Rijksmuseum's variant keeps the rule *thinner* on hover: `:hover .inline-link.inline-link-inverse{background-size:100% 1px}`. — *when to use:* **every inline link in SKU 05/06 long-form copy** and the footer. The cheapest, most credible craft signal in this entire document — 4 lines of CSS. — *motion-safe:* `background-size` animations are not vestibular triggers and can safely run under `reduce`; if you prefer, keep the underline but make the transition 0 s. — *keyboard:* pair with a real `text-decoration` on `:focus-visible` so keyboard users get an instant, non-animated indicator. — *screenshot:* `.../D3-underline-draw.png` **NOT CAPTURED**.

#### D4. Glow/text-shadow hover on dark or archival ground
— source URL: `https://www.clevelandart.org/` — *how it works:* `:hover{text-shadow:0 0 .041rem rgb(71,78,245),0 0 .041rem rgb(71,78,245);cursor:pointer}` — a doubled, sub-pixel shadow that reads as a soft glow, plus `transition:text-shadow .1s`. — *when to use:* on **dark, image-backed** grounds where an underline would be lost (SKU 02 hero links, SKU 06 spotlight captions). Doubling the same shadow is deliberate: it thickens the glow without a blur radius. — *motion-safe:* trivially safe (colour/glow, not movement). Keep under `reduce`. — *keyboard:* must be duplicated on `:focus-visible`. Cleveland's own focus style is a 3 px solid ring: `:focus-visible{outline:.188rem solid #474ef5;outline-offset:.188rem}` — reuse both. — *screenshot:* `.../D4-glow-hover.png` **NOT CAPTURED**.

#### D5. Morphing action button (copy → confirm)
— source URL: `https://www.clevelandart.org/` — *how it works:* dedicated keyframes `@keyframes grow-copy-link-btn-kf-sm` and `@keyframes move-share-btn-kf` resize and reposition the button as its meaning changes from "copy link" to "copied"; response is a single continuous morph rather than a swap. Reuters does the same with `copy-link-button-module__animate-checkmark-bottom/right`. — *when to use:* SKU 03/06 "Copy citation" / "Save to list" — **directly relevant to the SKU's credit requirement**, where every artefact needs a visible, quotable source. A citation-copy button that morphs to "Copied" is both useful and on-brief. — *motion-safe:* keep the morph's *result* (label text change) and drop the size animation under `reduce`; announce via `aria-live="polite"`. — *keyboard:* must be a real `<button>`, must work on Enter and Space, and the confirmation must be announced (LoC uses `aria-live` 10×; whitney 4×). — *screenshot:* `.../D5-copy-morph.png` **NOT CAPTURED**.

#### D6. Inset-border hover (no layout shift)
— source URL: `https://www.smk.dk/en/` — *how it works:* `:hover{box-shadow:inset 0 0 0 2px currentColor}` — an inset ring drawn with `box-shadow`, so nothing reflows and the ring inherits the text colour. — *when to use:* outline/border buttons and discipline cards in SKU 04. Better than `border-width` changes, which shift content by 2 px. — *motion-safe:* `transition:box-shadow .3s`; safe to keep, collapse duration under `reduce`. — *keyboard:* use the identical rule on `:focus-visible` — SMK's focus rule is separate and weaker; prefer a high-contrast ring (E3). — *screenshot:* not visually distinct enough to warrant one — omit.

#### D7. Brightness/filter on hover
— source URL: `https://www.magnumphotos.com/` (`:hover{filter:brightness(75%)}`) and `https://whitney.org/` (`:hover{filter:brightness(110%)}` / `brightness(120%)`) — *how it works:* a single filter on hover darkens or lifts the element. — *when to use:* thumbnails in SKU 03 where a caption will sit *on* the image — darkening improves caption contrast at the same moment the user commits. **Accessibility gem:** this doubles as a way to guarantee text contrast on archival imagery of unknown luminance. — *motion-safe:* filters can be expensive; under `reduce`, apply the end state immediately (no transition) rather than not at all. — *keyboard:* also apply on `:focus-visible` so a keyboard user gets the same caption contrast. — *screenshot:* `.../D7-brightness-hover.png` **NOT CAPTURED**.

---

### E. Hover states & focus states *(SKU §7 hard requirement)*

#### E1. Hover/focus parity on clickable cards — **adopt exactly**
— source URL: `https://inclusive-components.design/cards/` — *how it works:* a card contains one real link; hover styles are mirrored to the whole card via `:focus-within`; verbatim:
```css
.card a:focus { text-decoration: underline; }
.card:focus-within { box-shadow: 0 0 0 0.25rem; }
.card:focus-within a:focus { text-decoration: none; }
```
The page states the principle directly: *"Where there are hover styles there should also be focus styles"*, and describes using JS to make the container a proxy that triggers the inner link — which *"does not affect the keyboard user, who can still…"* operate the link normally. — *when to use:* **SKU 04 discipline cards — this is the reference implementation.** One link per card, `:focus-within` for the card-scale treatment, and no `tabindex` on the container. — *motion-safe:* outline/shadow only, no motion — inherently safe. — *keyboard:* this pattern is *why* it is accessible: the card is not focusable, the link is, and the visible affordance still spans the card. Do **not** add `role="button"` or a keydown handler. — *screenshot:* `.../E1-focus-within-card.png` **NOT CAPTURED** (capture: card hovered, then focused via keyboard).

#### E2. Focus-visible producing byte-identical styling to hover
— source URL: `https://www.are.na/` — *how it works:* hover and focus-visible are written into the *same* selector list, and child reveals likewise; verbatim:
```css
:hover, .c-jrKTec:focus-visible { background-color:var(--colors-gray1); border-color:var(--colors-gray2); color:var(--colors-gray6) }
:hover .c-deYMSu, .c-jrKTec:focus-visible .c-deYMSu { visibility:visible }
```
plus `:focus-visible{outline:1px solid var(--colors-focus)}`. — *when to use:* **every interactive element in the build.** This is less a "pattern" than a discipline: if a hover rule exists, its `:focus-visible` twin is written in the same declaration block, so the two can never drift. Are.na has 20 `:focus-visible` rules and 8 `pointer:fine` gates. — *motion-safe:* n/a. — *keyboard:* this *is* the keyboard story. Pair with Are.na's stagger delay (I2) so revealed content appears as fast for keyboard as for mouse. — *screenshot:* `.../E2-focus-parity.png` **NOT CAPTURED**.

#### E3. High-contrast focus ring that survives any background
— source URL: `https://www.vam.ac.uk/` — *how it works:* a two-tone shadow ring — a dark inner ring and a bright outer ring — so the indicator is visible on both light and dark archival grounds; verbatim:
```css
:focus-visible, input:focus-visible, select:focus-visible, summary:focus-visible
  { box-shadow:0 0 0 2px #1d1e20, 0 0 0 4px #e6ff02; outline:0 }
```
and on inverted sections: `box-shadow:0 0 0 2px #e6ff02, 0 0 0 4px #1d1e20`. There is even a state that *fills* the link with the bright colour: `:focus-visible{background-color:#e6ff02; color:#1d1e20; text-decoration-thickness:2px}`. — *when to use:* **throughout ARCHIVE**, because archival imagery means unpredictable luminance behind every link. A single-colour ring will fail somewhere; a two-tone ring will not. Replace V&A's colours with the ARCHIVE palette. — *motion-safe:* n/a. — *keyboard:* `outline:0` is only acceptable *because* the shadow ring replaces it — never ship `outline:0` without the replacement. — *screenshot:* `.../E3-focus-ring.png` **NOT CAPTURED**.

#### E4. `:focus-visible`-only rings that don't punish mouse users
— source URL: `https://theconversation.com/` and `https://pudding.cool/` — *how it works:* the focus ring is suppressed only for **focus that is not focus-visible**, using `:focus:not(:focus-visible)`; verbatim from The Pudding:
```css
a:focus:not(:focus-visible), input:focus:not(:focus-visible), select:focus:not(:focus-visible), textarea:focus:not(:focus-visible) { outline: 2px solid transparent }
:focus-visible { outline: 2px solid var(--color-focus) }
```
The Pudding also uses Tailwind's `:has(:focus-visible)` equivalent elsewhere; The Conversation ships `.group:has(:focus-visible)`. — *when to use:* SKU 07/08, so a mouse click on a CTA does not leave a lingering ring while a Tab does. — *motion-safe:* n/a. — *keyboard:* strictly additive — never write bare `:focus{outline:none}`; always the `:focus:not(:focus-visible)` form. — *screenshot:* not meaningful — omit.

#### E5. Device-gating hover so touch users don't get stuck states
— source URL: `https://cuberto.com/` — *how it works:* hover effects are wrapped in `@media (pointer:fine)` (16 occurrences on Cuberto; 8 on Are.na; 8 on Darkroom; 6 on Cleveland; 4 on Rijksmuseum), and Darkroom uses `@media (hover:hover) and (pointer:fine)`. Some sites invert it: `hover:none` (National Gallery 3×, MoMA 1×, LoC 1×, Reuters 1×). — *when to use:* **mandatory** for every hover-reveal in this document — especially the hover-to-play clip (F1) and the cursor-attached media (G4), which have no touch equivalent. On touch, the reveal must be replaced by a tap-driven state or omitted. — *motion-safe:* orthogonal, but note the same media queries are where you should also test `prefers-reduced-motion`. — *keyboard:* a `pointer:fine`-gated hover that *carries information* must have a focus-visible equivalent, or the information is mouse-only. — *screenshot:* `.../E5-pointer-fine.png` **NOT CAPTURED**.

#### E6. `focus-within` as the section-level focus state
— source URL: `https://www.clevelandart.org/` (32 `focus-within` occurrences), `https://www.loc.gov/` (28), `https://theconversation.com/` (99), `https://inclusive-components.design/cards/` (13) — *how it works:* when any descendant receives focus, the ancestor gets a treatment (border, background, ring) — so a card, panel or figure shows focus as a unit. Verbatim example from National Gallery's Tailwind layer: `.focus-within\:border-3:focus-within{border-width:.1875rem}`. — *when to use:* SKU 03 figure blocks and SKU 05 story cards containing multiple links; without it, tabbing through a card looks like focus is lost. — *motion-safe:* n/a. — *keyboard:* the highest-value cheap a11y win available — four extra characters on an existing hover rule. — *screenshot:* not meaningful — omit.

---

### F. Cards & content reveals

#### F1. Hover-to-play clip (video, no autoplay) — **the brief's "archive material feels alive"**
— source URL: `https://cuberto.com/` — *how it works:* each card holds both a still and a video; the video carries `preload="none"` and **no `autoplay`**, so nothing plays until hover; on hover the still fades out and the video fades in, both scaling slightly; feels like a photograph starting to move. Verbatim markup and CSS:
```html
<video src="/assets/projects/puntopago/cover.mp4?2" preload="none" playsinline loop muted></video>
```
```css
@media (pointer:fine){
  .Card:hover .preview { transform: scale(.98); transition: transform 1.2s cubic-bezier(.16,1,.3,1); }
}
.Card:hover .preview__media.-image:not(:only-child){ opacity:0; transition-delay:.2s,0s; transform:scale(1.05); }
.Card:hover .preview__media.-video { opacity:1; transform:scale(1) translateZ(0); }
```
The `.preview__media.-image:not(:only-child)` selector is the key detail: the swap only happens when a sibling media element exists, so cards without video are unaffected.
— *when to use:* **SKU 03 Featured Archive — the most valuable single idea in this library for this brief.** A still photograph that begins to move when the user shows interest is precisely "do not merely display the past — make people feel its influence on the present", and it costs one `<video preload="none">` per card. Caveat: SKU §8 image rights. Only ship this where moving footage is permissively licensed or self-made; otherwise use a **CSS-defined** equivalent: a slow scale + grain/scanline shift on the still, or a two-frame archival pair cross-dissolving.
— *motion-safe:* **Cuberto does not gate this** — `preload="none"` does not stop reduced motion, `pointer:fine` does not stop reduced motion. Required: play only if `!matchMedia('(prefers-reduced-motion: reduce)').matches`, and under `reduce` keep the still (optionally with a `:focus-visible`/`:hover` scale of ≤ 1.02 that communicates the affordance without motion). Touching the `-image`/`-video` opacity swap under `reduce` should resolve instantly.
— *keyboard:* **the hardest requirement in this document.** Hover-to-play has no keyboard equivalent by default. Solution: bind the same reveal to `:focus-visible` on the card's link (media swap driven by a class set on `focusin`), and honour `prefers-reduced-motion`; and because the video is decorative, mark it `aria-hidden="true"` and keep the real content in the caption plus a text description of what the clip shows. Cuberto does **not** do this — it is a mouse-only experience.
— *screenshot:* `.../F1-hover-to-play.png` **NOT CAPTURED** (capture: cuberto.com project grid, before and during hover).

#### F2. Staggered reveal with a delayed second property
— source URL: `https://www.are.na/` — *how it works:* one element animates `transform` immediately and `opacity` after a 125 ms delay; verbatim: `transition:transform 250ms ease-out, opacity 125ms 125ms ease-in`. The offset makes content settle rather than snap. — *when to use:* the small overlay/caption that appears over a card in SKU 03/04 — the same idea as Cuberto's `transition-delay:.2s,0s`. — *motion-safe:* Are.na collapses all transitions under reduced motion; do the same, and the delayed opacity resolves instantly. — *keyboard:* the delayed reveal must also fire on `:focus-visible` (Are.na pairs the reveal with `:focus-visible` exactly here). — *screenshot:* `.../F2-stagger-reveal.png` **NOT CAPTURED**.

#### F3. Shape-morph via `clip-path` polygon on hover
— source URL: `https://www.moma.org/` — *how it works:* two polygon states — a collapsed diamond-in-a-rectangle vs its inverse — swapped on hover; verbatim:
```css
clip-path:polygon(0 0, 0 0, 50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%)
clip-path:polygon(0 0, 100% 0, 50% 50%, 100% 0, 100% 0, 100% 100%, 0 100%)
```
MoMA also ships `clip-path:inset(.2rem round .15rem)` on other elements. — *when to use:* a single signature element — e.g. an ARCHIVE "play"/"enter" affordance, or the shape of a discipline marker. `clip-path` morphs are not interpolatable between different polygon point counts, so **keep both states the same point count** (MoMA does). — *motion-safe:* shape morph is a large-area visual change; gate it. MoMA's homepage bundle has **zero** `prefers-reduced-motion` rules and no `focus-visible` rule in the scanned payload — do not inherit that. — *keyboard:* the clipped element must remain focusable (clipping does not remove it from tab order, but it can render the focus ring invisible) — always add a separate visible outline. — *screenshot:* `.../F3-clip-morph.png` **NOT CAPTURED**.

#### F4. Line-art thumbnail zoom on card hover
— source URL: `https://www.rijksmuseum.nl/en` — *how it works:* `:hover img.lazy-image{transform:scale(1.02)}` with `transition:transform .8s ease, opacity .4s ease` — a very slow, very small zoom; feels like a breath rather than a bounce. Rijksmuseum also ships **45** reduced-motion blocks that hard-reset these: `animation-duration:1ms!important; transition-duration:1ms!important`. — *when to use:* **SKU 03 feature tiles.** The restraint is the point: 1.02 over 0.8 s is far more "cultural institution" than 1.1 over 0.3 s. — *motion-safe:* Rijksmuseum's approach (find every animated component, give it a reduced-motion block that kills duration) is the correct template — and their `1ms!important` pattern is a legitimate, verifiable alternative to removing the rule. — *keyboard:* the image must sit inside the link, and the zoom must also trigger on `:focus-visible` (or be omitted for keyboard — a static but visible focus ring is acceptable). — *screenshot:* `.../F4-thumb-breath.png` **NOT CAPTURED**.

#### F5. Editorial list hover driven by custom properties
— source URL: `https://darkroom.engineering/` — *how it works:* the row's animated values are custom properties toggled on hover, and the rule is device-gated; verbatim:
```css
:hover { --glyphs-visibility: visible }
:hover { --list-title-x: 0px }
@media (hover:hover) and (pointer:fine){ ... { --activity-date-x: 0 } }
:hover { --activity-date-x: 1.25vw }
```
So: title slides to x=0, decorative glyphs become visible, and a date slides in from 1.25 vw — three coordinated micro-moves from one hover. Darkroom also runs `lenis` (`.lenis.lenis-smooth iframe{pointer-events:none}`, `transition-behavior:allow-discrete`).
— *when to use:* **SKU 05 "Stories Through Time" as a list of moments, and SKU 08 footer navigation.** A hover-reactive *index* is exactly the right form for a museum landing page: it reads as a catalogue, not as cards. This is the strongest alternative to a grid-of-cards (which SKU §6 explicitly bans).
— *motion-safe:* `--` property changes are still motion; gate the 1.25 vw travel under `reduce` (set to 0) while keeping visibility changes. Darkroom's reduced-motion block is the best-argued one found: it *keeps* colour/opacity transitions and kills movement:
```css
@media (prefers-reduced-motion:reduce){*,:before,:after{
  scroll-behavior:auto!important;
  transition-property:opacity,color,background-color,border-color,text-decoration-color,fill,stroke!important;
  transition-duration:.15s!important;
  animation-duration:.01ms!important;
  animation-iteration-count:1!important}}
```
— *keyboard:* the row must be a link; add `:focus-visible` to the same custom-property rules so the slide happens on Tab. Darkroom's own `:focus-visible{outline:2px solid var(--color-secondary);outline-offset:2px}` is respectable and can be lifted.
— *screenshot:* `.../F5-editorial-list-hover.png` **NOT CAPTURED**.

#### F6. Uneven, non-grid archive composition
Not a single-location pattern, but an evidence-based recommendation: the audited museums that avoid the banned "grid-of-cards" look (MoMA, Whitney, Tate, Rijksmuseum) all use a **dominant image plus a subordinate column**, or a **horizontal rail**, rather than an even 3×3. SKU §6 bans "grid-of-cards"; the interaction library's job is to supply alternatives — B2 (horizontal rail), F5 (editorial index), B3 (stacked artefacts), and C2 (hero reveal).

---

### G. Cursor treatments

#### G1. Accessible custom cursor — **the only one I'd ship**
— source URL: `https://whitney.org/` — *how it works:* a `.b26-cursor` div follows the pointer and changes size/shape on interaction. The remarkable part is the **guard clause**, verbatim:
```js
function setupB26Cursor(){
  if (getReducedMotion() || navigator.maxTouchPoints>0 || window.location.pathname!==`/world-cup-2026`) return;
  ...
}
```
and the CSS:
```css
.b26-cursor { position:fixed; width:56px; height:56px; border-radius:50%; background:var(--b26-green);
              pointer-events:none; z-index:999999; transition:width .1s, height .1s; opacity:0; }
.b26-cursor.visible { opacity:1 }  .b26-cursor.active { width:32px; height:32px }  .b26-cursor.cursor-svg { width:80px; height:80px }
.reduced-motion .b26-cursor, html:has(dialog[open]) .b26-cursor { display:none !important }
```
— *when to use:* **only on SKU 02 hero and SKU 03 archive grid, and only if the native cursor is never removed.** Whitney leaves the system cursor visible and merely *adds* an accent that follows it — a fundamentally safer design than `cursor:none`. — *motion-safe:* the guard is three-fold: `getReducedMotion()`, touch devices, and any open `<dialog>` (so a modal cannot have a stray dot floating over it). **Copy all three conditions.** — *keyboard:* a follow-the-pointer cursor is invisible to keyboard users by definition — so it must never carry information. It must be `pointer-events:none` (it is) and `aria-hidden` (add it). — *screenshot:* `.../G1-custom-cursor.png` **NOT CAPTURED**.

#### G2. Functional cursor swap for zoom / expand / collapse
— source URL: `https://www.tate.org.uk/` — *how it works:* the cursor itself communicates the action; verbatim:
```css
cursor:url("../images/zoom-round.10dfa53eff52.svg"),pointer
cursor:url("../images/expand.13601c56f1f2.svg"),pointer
cursor:url("../images/collapse.467c80066a9b.svg"),pointer
```
The fallback keyword (`pointer`) is always supplied.
— *when to use:* **SKU 03/06 whenever an archival image is zoomable.** A custom SVG cursor is a genuinely elegant, low-cost "this archive is alive" signal — and unlike a JS cursor it costs zero runtime and degrades to `pointer` automatically. Cooper Hewitt does the same with a raster: `cursor:url(grabbing.png) 8 8,move`.
— *motion-safe:* no motion at all — **survives reduced motion completely**, which makes it one of the few "wow" interactions that needs no fallback. Prefer this over G1.
— *keyboard:* a cursor swap is inherently mouse-only; the zoom action must also be exposed as a real button ("Open zoomed view", "Close") so keyboard users get the feature, not just mouse users.
— *screenshot:* `.../G2-cursor-swap.png` **NOT CAPTURED** (cursor is not rendered in screenshots — capture *instead* the zoom button row it pairs with).

#### G3. `cursor:none` + custom viewer cursor (deep zoom)
— source URL: `https://www.artic.edu/` — *how it works:* `cursor:none` is declared and the same bundle contains OpenSeadragon's `MouseTracker` (`e.MouseTracker.mousePointerId="legacy-mouse"`), i.e. a deep-zoom viewer supplies its own cursor so the zoom gesture is legible. — *when to use:* only inside a full-screen deep-zoom view of a **single** artwork (SKU 06 spotlight). Never on a scrollable page — removing the native cursor makes scroll position and text selection ambiguous. — *motion-safe:* n/a. — *keyboard:* `cursor:none` has no accessibility impact by itself, but the viewer it belongs to does — see J2. — *screenshot:* `.../G3-deepzoom-cursor.png` **NOT CAPTURED**.

#### G4. Cursor-attached media preview
— source URL: `https://cuberto.com/` — *how it works:* a `.Cursor > .inner > .media > .box` structure exists in markup, i.e. the cursor holds a media box that can show a thumbnail while hovering a list — so the list stays typographic while the imagery follows the pointer. — *when to use:* **SKU 05** — a text-only index of moments/figures where the archival image appears at the cursor. This is arguably the *most* on-brief interaction available: history as text becomes image at the moment of interest. — *motion-safe:* the media swap is opacity-only and can be kept; the *follow* motion must be disabled under `reduce` (pin the preview to a fixed position, or drop it). — *keyboard:* **must** degrade to an inline thumbnail that appears on `:focus-visible` — otherwise keyboard users lose the imagery entirely. Also requires `prefers-reduced-motion` and `pointer:fine` gating (E5), plus a mobile fallback (tap to expand).
— *screenshot:* `.../G4-cursor-media.png` **NOT CAPTURED**.

---

### H. Loading & transition states

#### H1. Element-scoped view transition between gallery thumbnail and image
— source URL: `https://mdn.github.io/dom-examples/view-transitions/spa/` — *how it works:* the selected thumbnail and the large figure share state via `view-transition-name`; the browser snapshots old and new and cross-fades them, with the caption animating separately; feels like the image flying into place. Verbatim from the demo's `style.css`:
```css
::view-transition-group(root) { animation-duration: 0.5s; }
figcaption { view-transition-name: figure-caption; }
::view-transition-group(figure-caption) { height: 100%; }
/* optional custom, from the same file:
::view-transition-old(figure-caption) { animation: 0.25s linear both shrink-x; }
::view-transition-new(figure-caption) { animation: 0.25s 0.25s linear both grow-x; } */
```
Note the demo also demonstrates hover/focus parity: `.thumbs a:hover img, .thumbs a:focus img { opacity: 1 }`.
— *when to use:* **SKU 03 Featured Archive** — clicking an artefact expands it in page rather than navigating away. On a one-page build with no detail routes, view transitions are the way to make "clickable artifacts where content exists" (SKU §7) feel substantial. — *motion-safe:* **the browser does not skip view transitions for reduced motion automatically.** You must gate: `@media (prefers-reduced-motion: reduce){ ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*){ animation:none !important } }` — exactly what Cuberto ships. — *keyboard:* `document.startViewTransition()` must be called from the same code path for click *and* keyboard activation (use a real `<a>`/`<button>` click handler, not a mouse handler). Also guard against transitions firing on load.
— *screenshot:* `.../H1-view-transition-spa.png` **NOT CAPTURED**.

#### H2. Cross-document view transition with a custom move
— source URL: `https://mdn.github.io/dom-examples/view-transitions/mpa/` — *how it works:* one at-rule opts both documents in, then old/new states get their own animations. Verbatim from the demo's `styles.css`:
```css
@view-transition { navigation: auto; }
::view-transition-group(root) { animation-duration: 0.5s; }
@keyframes move-out { from { transform: translateY(0%) }  to { transform: translateY(-100%) } }
@keyframes move-in  { from { transform: translateY(100%) } to { transform: translateY(0%) } }
::view-transition-old(root) { animation: 0.4s ease-in both move-out }
::view-transition-new(root) { animation: 0.4s ease-in both move-in }
```
— *when to use:* **only if the final architecture adds real routes.** SKU §5 is a single page, so this is *not* needed now — but it is the correct future path if ARCHIVE later grows. Do not add routes just to use this.
— *motion-safe:* unguarded in the demo (full-viewport `translateY` is a strong vestibular trigger) — gate with the same `::view-transition-*{animation:none}` block. — *keyboard:* cross-document transitions preserve focus history but can confuse reading position; keep `@view-transition` off until multi-page.
— *screenshot:* `.../H2-view-transition-mpa.png` **NOT CAPTURED**.

#### H3. View transitions with a reduced-motion kill switch
— source URL: `https://cuberto.com/` and `https://darkroom.engineering/` — *how it works:* both sites ship the same idea; verbatim from Cuberto:
```css
@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*),[data-astro-transition-scope]{animation:none!important}}
```
Darkroom pairs it with shortened transition durations: `::view-transition-old(root){animation-duration:.2s} ::view-transition-new(root){animation-duration:.2s}`.
— *when to use:* **adopt verbatim in ARCHIVE's global stylesheet** if H1 is implemented. This is the single most commonly-forgotten guard in modern CSS. — *motion-safe:* this *is* the guard. — *keyboard:* n/a. — *screenshot:* n/a (global rule).

#### H4. Skeleton / shimmer loading states
— source URL: `https://www.tate.org.uk/` (`@keyframes shimmer`, `@keyframes animate-in-card`), `https://www.artic.edu/` (`@keyframes ajax-loader`), `https://www.moma.org/` (`@keyframes progress-loading`), `https://www.nationalgallery.org.uk/` (`@keyframes placeholder-glow`, `placeholder-wave`) — *how it works:* a placeholder shape pulses opacity while real content loads. — *when to use:* SKU 03 archive imagery. **But** the SKU also demands optimised imagery and lazy loading — if `loading="lazy"` works properly (214 lazy images on `https://theconversation.com/`, 44 on V&A, 27 on The Pudding) a shimmer should rarely be seen. Ship a *static* neutral placeholder plus `width`/`height` attributes (all 39 audited sites use `srcset`: 214, 104, 63…) to prevent layout shift; skip the shimmer. — *motion-safe:* shimmer is infinite motion — gate it. Bootstrap's `placeholder-glow`/`placeholder-wave` (present on National Gallery) animate continuously. — *keyboard:* placeholders must not be focusable or announced. — *screenshot:* `.../H4-skeleton.png` **NOT CAPTURED**.

#### H5. `rel="expect"` to guarantee a stable first paint
— source URL: `https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API` — *how it works:* MDN documents `<link rel="expect">` as identifying the most critical content so rendering is blocked until it is parsed, "ensuring a consistent first paint — and therefore, view transition — across all supporting browsers". — *when to use:* SKU 02, **instead of** a JS loader. It is the standards-based way to avoid a flash of unstyled hero without adding a spinner — which is precisely what the SKU's "purpose clear within the first few seconds" needs. — *motion-safe:* n/a (no animation). — *keyboard:* n/a; it also protects against focus jumping into a half-painted document. — *screenshot:* n/a (technical).

---

### I. Section-to-section motion

#### I1. Per-item sequencing from a single scroll timeline (the technique to master) — **primary recommendation for SKU 05**
— source URL: `https://scroll-driven-animations.style/demos/carousel-with-markers/css/` — *how it works:* one `scroll-timeline` is shared via `timeline-scope`; each child computes its own slice of the range from an `--i` custom property; response is a chain of markers lighting up in order as one continuous gesture. Verbatim:
```css
@supports(animation-timeline: view()) {
  @keyframes colorize-dot { 0%,100% { background:#ff00fa } }
  [data-component="carousel"] {
    timeline-scope: --carousel;
    .entries { scroll-timeline: --carousel x; }
    .markers a {
      animation: colorize-dot linear;
      animation-timeline: --carousel;
      animation-range: calc((var(--i) - 1) * 20%) calc(var(--i) * 20% + 1px);
    }
  }
}
```
— *when to use:* **SKU 05 — an era rail where 6–8 markers activate in sequence as you scroll, with the section counter advancing.** `calc((var(--i) - 1) * 20%)` is the whole trick: one timeline, N children, zero JS. Scale the percentages to the number of items.
— *motion-safe:* no guard in the demo (verified). Under `reduce`, drop the animation and mark the *current* item via an `IntersectionObserver` toggling an attribute — the state survives, the motion does not.
— *keyboard:* the markers must be `<a>`s (they are, in the demo) so they are tabbable and give `:focus-visible` a target; the scroll-linked colour must not be the only indicator of "current" (use `aria-current="step"` — `aria-current` is used 8× on LoC, 3× on Are.na, 3× on National Gallery).
— *screenshot:* `.../I1-sequence-markers.png` **NOT CAPTURED**.

#### I2. Asymmetric two-speed transition (the house motion signature)
— source URL: `https://www.are.na/` — *how it works:* transform and opacity run at different speeds with a delay: `transition:transform 250ms ease-out, opacity 125ms 125ms ease-in`. Position and presence are deliberately out of step. — *when to use:* define this as ARCHIVE's *house curve* — one asymmetric pair applied to every reveal. Consistency of motion is what makes a build feel authored; the SKU's "one coherent visual identity" applies to motion too. Cuberto uses a similarly long, soft curve as its signature: `transition:transform 1.2s cubic-bezier(.16,1,.3,1)`.
— *motion-safe:* point your durations at a variable (see K1) so one media query collapses all of them. — *keyboard:* identical for keyboard and pointer because it is CSS state, not JS — which is exactly why CSS-driven reveals are preferable here. — *screenshot:* not meaningful — omit.

#### I3. Reverse-scrolling columns for layered editorial
— source URL: `https://scroll-driven-animations.style/demos/reverse-scroll/css/` — *how it works:* a centre column scrolls normally while flanking columns translate in the opposite direction, driven by `scroll(root block)`; feels like strata moving past each other. Verbatim: `.column-reverse{animation:adjust-position linear forwards; animation-timeline:scroll(root block)}` with keyframes from `translateY(calc(-100% + 100vh))` to `translateY(calc(100% - 100vh))`.
— *when to use:* SKU 06 spotlight — a montage where a photograph column and a text column drift past each other. High risk of nausea; use a **very** small differential (10–15 %), never full-speed opposition. — *motion-safe:* **remove entirely under `reduce`.** Opposite-direction scrolling is one of the most provocative kinematic patterns available. — *keyboard:* content order must remain logical in the DOM; visual columns are a presentation layer only. — *screenshot:* `.../I3-reverse-scroll.png` **NOT CAPTURED**.

#### I4. Blend-mode crossfade between two states
— source URL: `https://cuberto.com/` — *how it works:* Astro's transition keyframes fade with `mix-blend-mode:plus-lighter` at both ends, which makes a cross-dissolve additive rather than a dip through grey; verbatim:
```css
@keyframes astroFadeOut { 0% { opacity:1; mix-blend-mode:plus-lighter } to { opacity:0; mix-blend-mode:plus-lighter } }
```
Cuberto also uses `mix-blend-mode:exclusion` as a hover treatment, Are.na exposes `mix-blend-mode:var(--colors-blend)` (13 occurrences), Tate uses `mix-blend-mode:screen`, MoMA `mix-blend-mode:difference`, Letterform Archive `mix-blend-mode:difference`.
— *when to use:* **a strong idea for the "past → present" crossfade** — two archival states (or a grayscale and a colour version of the same image) crossfading through `plus-lighter`/`difference` rather than a plain opacity fade. Do not use it in the base layer: as V&A demonstrates with `.header--grayscale`, blend modes on headers create stacking contexts that can break sticky positioning.
— *motion-safe:* a cross-dissolve is not a vestibular trigger; this pattern can survive `reduce` with its duration collapsed — making it the **best candidate for ARCHIVE's signature transition**. — *keyboard:* orthogonal. — *screenshot:* `.../I4-blend-crossfade.png` **NOT CAPTURED**.

#### I5. Section-level sticky scrub (what not to over-use)
Pinned/section-scrub patterns B2, B3, I3 and A3 all share one failure mode visible across the corpus: they all depend on `position: sticky` plus long section heights, and they all measured **zero** reduced-motion gating in their canonical demos. **Budget at most one pinned section per page.** One is a chapter break; three is a theme park.

---

### J. Archive material made interactive *(SKU 03 — the brief's core opportunity)*

#### J1. Deep-zoom on an archival image (OpenSeadragon + IIIF) — **highest-value archive interaction**
— source URL: `https://www.artic.edu/` (verified in the live bundle: OpenSeadragon's `MouseTracker` internals, alongside `cursor:none`) and `https://www.rijksmuseum.nl/en` (`.zoomable-micrio` in the shipped CSS). Library home: `https://openseadragon.github.io/` (v6.1.1, "an open-source, web-based viewer for high-resolution zoomable images, implemented in pure JavaScript") with first-class IIIF support: `https://openseadragon.github.io/examples/tilesource-iiif/`. Protocol: `https://iiif.io/`.
— *how it works:* the image is served as a tile pyramid (IIIF `Image API` / DZI); the viewer fetches only the tiles in view; zoom/pan feels instantaneous at any resolution. `OpenSeadragonCollection`/sequence modes give multi-image navigation, and the **Image Reference Strip** gives a thumbnail rail.
— *when to use:* **SKU 03 and 06.** This is *the* interaction that makes an archive feel alive: a viewer able to zoom into the weave of an adire cloth or the grain of a studio portrait treats the artefact as an object, not a picture. It is also the most **rights-conscious** option in this document — IIIF lets you serve a low-resolution public tier and a high-resolution restricted tier from the same endpoint, which suits SKU §8's "label anything uncertain; never imply rights we do not have".
— *motion-safe:* zoom/pan are **user-driven**, not automatic, so they are generally acceptable under `prefers-reduced-motion`; the risk is *animated* camera moves (`viewer.viewport.fitBounds(..., true)` — the `immediately` parameter). Pass `true` to animate; pass `false` under reduced motion. Also disable any idle "Ken Burns" auto-pan.
— *keyboard:* **this is where most implementations fail.** OpenSeadragon ships an explicit `Keyboard Navigation` example (`https://openseadragon.github.io/examples/ui-keyboard-navigation/`) precisely because bindings must be configured; and its `Toolbar`/`Viewport Navigator` elements are `button`-based and focusable. Requirements: keyboard-operable zoom/pan, a visible focus ring inside the viewer, an escape route back to the page, and — critically — **a static high-quality image fallback** so a keyboard-only or low-bandwidth user still sees the artefact. Chicago and Rijksmuseum both pair the viewer with a static hero image; do the same.
— *screenshot:* `.../J1-deepzoom.png` **NOT CAPTURED** (capture: initial fit and zoomed-to-detail).

#### J2. Then/now comparison slider — **the literal "past becoming present"**
— source URL: `https://juxtapose.knightlab.com/` — *how it works:* two images are stacked and revealed by a draggable handle; verbatim from the site: *"Juxtapose helps storytellers compare two pieces of similar media… It's ideal for highlighting then/now stories that explain slow changes over time"*. The README documents `data-label`, `data-credit`, `data-startingposition="35%"` and — crucially — **`data-animate="false"`**, plus `slider.updateSlider(percentage, animate)`.
— *when to use:* **SKU 03 or 06.** For Nigeria's creative history this is the single most literal expression of the brief: a Lagos street in 1977 beside the same street today; an adire motif beside its contemporary reinterpretation. It is also *interactive without being decorative* — the user performs the reveal, so the meaning is theirs.
— *motion-safe:* Juxtapose animates the handle to its starting position by default; set `animate:false` / `data-animate="false"` under `prefers-reduced-motion`. Its own site ships **zero** reduced-motion rules (verified), so the guard is on you.
— *keyboard:* **Juxtapose's slider is pointer-driven; treat keyboard operation as unverified.** Two options: (a) prefer a native `<input type="range">` bound to a `clip-path` inset — natively keyboard-operable with arrow keys, labelled, and requires no library; (b) if using Juxtapose, ship a visible range input *in addition* and sync it. Note the README's explicit security caveat: *"it renders a 'credit' as HTML… this exposes an XSS vulnerability"* — for ARCHIVE's mandatory on-page credits, sanitise the credit string.
— *screenshot:* `.../J2-juxtapose.png` **NOT CAPTURED**.

#### J3. Timeline as a navigable spine
— source URL: `https://timeline.knightlab.com/` — *how it works:* TimelineJS builds a horizontal, scrollable timeline from a spreadsheet, with media (images, audio, video) attached to each moment; the reader moves along one axis. — *when to use:* SKU 05. **Assessment: use the *idea*, not the library.** TimelineJS's own homepage ships **zero** `prefers-reduced-motion` rules (verified), it is iframe-embedded, and its keyboard story is unclear — the same reasons it produces the "standard museum template" feel the SKU bans. The interaction library's recommendation is instead **B2 + I1**: a CSS `sticky` horizontal rail with per-item sequencing, plus a real `<ol>` of eras for keyboard users.
— *motion-safe:* n/a (library not adopted). — *keyboard:* n/a. — *screenshot:* `.../J3-timelinejs-reference.png` **NOT CAPTURED** (capture for comparison only).

#### J4. Thumbnail reference strip + sequence mode
— source URL: `https://openseadragon.github.io/` (features list: *Sequence Mode* `/examples/tilesource-sequence/`, *Image Reference Strip* `/examples/ui-reference-strip/`, *Collection Mode*, *Full Multi-Image*) — *how it works:* a parallel thumbnail rail stays synchronised with the active image, and "sequence mode" loads images one at a time for speed. — *when to use:* SKU 03 — a Featured Archive where 6–10 artefacts are viewed in sequence with a persistent thumbnail rail. This is the museum-native alternative to a carousel. — *motion-safe:* the strip itself is static; ensure the active-thumb indicator is not scroll-animated. — *keyboard:* the strip is a list of focusable items; arrow-key movement between them is the expected convention. — *screenshot:* `.../J4-reference-strip.png` **NOT CAPTURED**.

#### J5. Annotate the artefact (region overlays)
— source URL: `https://openseadragon.github.io/` (plugin list: *OpenSeadragonAnnotations* — *"draw in an SVG overlay that scales with the image. Useful to annotate and highlight regions"*; *Annotorious* — W3C Web Annotation format; *SVG Overlay*; *Overlay*; *HTML Overlay*) — *how it works:* hotspots are attached in image coordinates, so they stay registered to the artwork at every zoom level. — *when to use:* **strong fit for SKU 06** — one artefact with 3–5 hoverable regions, each revealing a credit line or a historical note. It converts a beautiful image into *evidence*, which is exactly what distinguishes a museum from a moodboard, and it satisfies the SKU's "credible leads, named figures, verifiable sources". — *motion-safe:* hover reveals should be opacity/`visibility` only. — *keyboard:* hotspots must be real buttons in DOM order with `aria-label`s; an SVG-only overlay is not keyboard-reachable. — *screenshot:* `.../J5-annotations.png` **NOT CAPTURED**.

#### J6. Blurred/zoomed lightbox over the archive
— source URL: `https://www.loc.gov/` (`@keyframes f-throwOutUp` / `f-zoomInUp`, Fancybox-style transitions, `will-change:transform,width,height`) and `https://www.rijksmuseum.nl/en` (`transition:transform .8s ease,opacity .4s ease` on the zoomable). — *how it works:* the clicked thumbnail's box animates to full-screen dimensions while opacity settles — a "from here to there" rather than a fade-in. — *when to use:* SKU 03, if H1 (view transitions) is not adopted; H1 is preferable because the browser does the interpolation. — *motion-safe:* a zoom-to-full-screen is a strong vestibular trigger (MDN names scaling large objects explicitly). Gate it; under `reduce`, cross-fade at full size. — *keyboard:* focus must move into the dialog and return to the trigger on close; `role="dialog"` appears 6× on Tate, 3× on Whitney, 1× on LoC and National Gallery and Rijksmuseum. Use `<dialog>` + `showModal()` for built-in focus/`Escape` handling. — *screenshot:* `.../J6-lightbox.png` **NOT CAPTURED**.

---

### K. Time-based / "past → present" motion *(the brief's central idea)*

#### K1. Collapse all motion to a variable under reduced motion — **adopt as the global mechanism**
— source URL: `https://pudding.cool/` — *how it works:* reduced motion is handled by making durations *tokens that resolve to zero*, so no component needs its own media query. Verbatim:
```css
@media screen and (prefers-reduced-motion: no-preference) { :root { --1s: 1s } }
/* consumers */
transition: transform var(--transition-medium);
transition: transform calc(var(--1s) * .25);
```
— *when to use:* **the global foundation for ARCHIVE.** Define `--dur-1 / --dur-2 / --dur-3` as `0s`-resolving tokens and write every transition in terms of them. Every pattern in this document then becomes reduced-motion-correct in one place, and new components inherit correctness by default. This is the single highest-leverage technical decision in the library.
— *motion-safe:* this *is* the mechanism. Note The Pudding's choice of `no-preference` (opt-in) rather than `reduce` (opt-out) — the default state is reduced motion and the enhancement is opt-in. **Copy that default.**
— *keyboard:* n/a — but it prevents the common bug where hover/focus durations are shortened for pointer and not keyboard.
— *screenshot:* n/a (global rule).

#### K2. Time as an axis the visitor scrubs (era rail)
— source URL: composition of `https://scroll-driven-animations.style/demos/horizontal-section/css/` (B2) + `https://scroll-driven-animations.style/demos/carousel-with-markers/css/` (I1) + `https://www.loc.gov/` thumbnail-progress (B5). — *how it works:* vertical scroll maps to horizontal travel through decades; a marker row and a section indicator advance in step from a single `timeline-scope`. — *when to use:* **the primary treatment for SKU 05.** Motion carries the *meaning* (movement along an axis = movement through time) rather than decorating the page — which is the SKU's stated opportunity ("Motion and scroll can carry the 'past → present' narrative").
— *motion-safe:* under `reduce`, present the same content as a static, natively scrollable rail with all eras visible and `aria-current` on the active one. No information is lost.
— *keyboard:* every era is a link in an `<ol>`; `aria-current="step"`; the rail must not be the only way to reach an era.
— *screenshot:* `.../K2-era-rail.png` **NOT CAPTURED**.

#### K3. Two archival states crossfading (colour recovery)
— source URL: `https://www.vam.ac.uk/` (grayscale via `backdrop-filter: grayscale()`; `.header--grayscale .header__bg::after{backdrop-filter:grayscale(100%)}`) combined with `https://cuberto.com/` `mix-blend-mode` crossfade keyframes. — *how it works:* the artefact sits desaturated; on hover/focus/scroll-into-view it recovers colour through a blend-mode dissolve rather than a flat fade. Trigger → response → feel: **the past becomes present in front of you, and it is not a movement — it is a colour returning.** — *when to use:* **ARCHIVE's signature effect.** Two reasons it beats everything else in this library for this brief: (1) it is a *metaphor* rather than a decoration, matching the SKU's guiding principle verbatim; (2) **it is not motion**, so it needs no reduced-motion fallback — it survives `prefers-reduced-motion` completely, and keyboard users get it via `:focus-visible` for free.
— *motion-safe:* nothing to guard (only the dissolve duration collapses to 0). This is the rare interaction that is fully accessible by construction.
— *keyboard:* bind to `:focus-visible` and `:focus-within`, not `onMouseEnter`.
— *screenshot:* `.../K3-colour-return.png` **NOT CAPTURED** (capture: same image desaturated and recovered).

#### K4. Attribute-driven reduced motion as a user preference
— source URL: `https://www.are.na/` — *how it works:* the site honours the OS setting **and** exposes its own switch; the root carries `html[data-reduced-motion="true"]` (14 occurrences) and every animated component resets `will-change` too; verbatim:
```css
html[data-reduced-motion="true"] *, html[data-reduced-motion="true"] ::before, html[data-reduced-motion="true"] ::after
  { transition:none !important; animation:none !important }
@media (prefers-reduced-motion: reduce) { *, ::before, ::after { transition:none !important; animation:none !important } }
@media (prefers-reduced-motion: reduce) { .PJLV-igFmcWQ-css { animation:none; will-change:auto } }
```
Note `will-change:auto` — releasing the compositor hint is a detail almost everyone forgets.
— *when to use:* **SKU 02 or 08 — a visible "reduce motion" toggle.** The SKU's audience includes cultural institutions and researchers; a museum that offers an explicit motion preference signals institutional seriousness, and it also covers users whose OS setting is unavailable (some browsers, some kiosks). Low cost: one attribute + the block above.
— *motion-safe:* this is the escape hatch for users who need one.
— *keyboard:* it must be a real `<button>` (or checkbox) with `aria-pressed`/`checked`, in the tab order, and it must persist (localStorage).
— *screenshot:* `.../K4-reduce-motion-toggle.png` **NOT CAPTURED**.

---

### L. Reduced-motion & accessibility technique (cross-cutting)

#### L1. The blanket kill switch (and its cost)
— source URL: `https://www.clevelandart.org/` — verbatim:
```css
@media screen and (prefers-reduced-motion:reduce){
  *{animation-duration:.01ms!important; animation-iteration-count:1!important;
    transition-duration:.01ms!important; scroll-behavior:auto!important}}
```
— *assessment:* three lines, covers everything, and actively used by a major museum. Its cost is that it removes *good* motion too, and `.01ms` still fires `transitionend`. **Use as a safety net, but layer K1 on top** so that the intended reduced-motion experience is designed rather than merely truncated.
— *motion-safe / keyboard:* both satisfied — note the `scroll-behavior:auto!important`, which correctly cancels the smooth scrolling from A5.

#### L2. Keep the informative transitions, kill the movement
— source URL: `https://darkroom.engineering/` — verbatim (quoted in full under F5): it restricts `transition-property` to `opacity,color,background-color,border-color,text-decoration-color,fill,stroke` and sets `animation-duration:.01ms`. — *assessment:* **the most thoughtful reduced-motion block found.** It preserves every state change that communicates (colour, underline) and removes every state change that moves. This is the one to imitate in ARCHIVE's base stylesheet, alongside K1's tokens.

#### L3. Framework-level `motion-safe` / `motion-reduce`
— source URL: `https://www.clevelandart.org/` (`.motion-reduce\:transition-none`), `https://theconversation.com/` (`.motion-safe\:animate-spin`, `.motion-safe\:transition-all` inside `@media (prefers-reduced-motion:no-preference)`), `https://www.nationalgallery.org.uk/` (Bootstrap) — *how it works:* the opt-in `no-preference` variant is emitted for each utility. — *assessment:* good hygiene if ARCHIVE's build uses Tailwind; otherwise use K1's tokens. Either way, **prefer the `no-preference` opt-in direction**.

#### L4. Reduced motion decided in JS where CSS cannot reach
— source URL: `https://whitney.org/` — `getReducedMotion()` is imported and used to **not create** the effect at all (`if(getReducedMotion() || navigator.maxTouchPoints>0 || ...) return;`), while a `.reduced-motion` class is also applied to the document for CSS to key off. — *when to use:* any JS-driven effect — a cursor (G1), a scroll-jacking library, a video (C5, F1), a canvas. CSS cannot stop a video from playing or a Lenis instance from running. Whitney's `ignoreUserPreferences` export shows they also manage a *user-level* override, matching K4.

#### L5. `@supports` progressive enhancement for every scroll-driven effect
— source URL: `https://scroll-driven-animations.style/demos/horizontal-section/css/` (`@supports (animation-timeline: view())`), `.../stacking-cards/css/` (same), `.../scroll-shadows/css/` (`@supports (animation-timeline: scroll())`), `.../cover-to-fixed-header/css/` (`@supports(animation-range: 0vh 90vh)`) and `https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations` (which also shows the inverse: `@supports not (scroll-timeline: --main-timeline){ body::before{content:"Your browser doesn't support scroll-driven animations."} }`). — *when to use:* **every scroll-driven rule in the build.** Declare the *static, readable layout first*, then wrap enhancements in `@supports`. This is not optional: `animation-timeline` is not universally supported and an unguarded demo collapses to zero animation with no fallback content.

#### L6. Never let motion be the only carrier of meaning
— source URL: `https://www.w3.org/WAI/` (ARIA Authoring Practices — **could not load in this environment**, so I am citing it as the standard rather than as a verified page) — *how it works:* requested behaviour, per the SKU's own non-negotiable "Accessible, keyboard-operable interactions". — *assessment:* across the whole corpus, **no site audited made motion the sole indicator of state**, and the ones that came closest (Are.na's scroll-driven reveals) always paired it with `aria-current` and a visible focus ring. ARCHIVE's rule: if a state is only visible while moving, it is not visible.

---

## 3. Recommended set for this project

Mapped to the SKU §5 page structure. **Tier 1 = build; Tier 2 = build if time allows; explicitly excluded items listed last.**

### 01 · Navigation
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| Minimal sticky type-led bar; **conventional nav retained** (see A1) | A1 | n/a | Landmarks + `aria-expanded`/`aria-controls` (A6) |
| Cover-to-fixed-header morph, `min-width: 48rem` only | **A3** | Drop the timeline, render final state | No focus movement; keep skip link in view |
| Scroll-shrink header + shadow after 8 rem | A2 | `animation:none` under `reduce` | Visual only |
| In-page anchor links with **opt-in** smooth scroll | A5 | `no-preference` guard (copy verbatim) | `scroll-margin-top` for sticky header |
| State as data attributes, not classes | A6 | `will-change:auto` on close | `aria-expanded` + `Escape` |

### 02 · Hero
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| **Grayscale → colour recovery on the hero artefact (signature effect)** | **K3** | **Nothing to guard** — it is not motion | `:focus-visible` + `:focus-within` |
| Typographic entry sequence for wordmark + tagline | C6 + K1 | Tokens resolve to `0s` | No motion carries meaning (L6) |
| `<link rel="expect">` for a stable first paint — **instead of a loader** | H5 | n/a | Prevents focus into a half-painted document |
| Functional cursor swap on the hero artefact | G2 | Inherently safe | Pair with a real zoom button |
| **Do not** ship: full-screen preloader (C4), autoplay video (C5), custom follow-cursor as the only cursor (G1) | C4/C5/G1 | — | — |

### 03 · Featured Archive
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| **Scroll-driven clip-path image reveal on every item** | **B1** | Remove crop, keep content visible | Safe; keep `alt` and caption uncropped |
| **Hover-to-play clip** where rights permit; otherwise a CSS micro-motion pair | **F1** | Play only if `!matchMedia('(prefers-reduced-motion: reduce)')` | Bind the same reveal to `:focus-visible`; `aria-hidden` video |
| **Deep zoom (OpenSeadragon + IIIF) with a static fallback** | **J1** | `fitBounds(..., false)` under `reduce`; no auto-pan | Explicit key bindings + focusable toolbar |
| Thumbnail reference strip as the nav for the set | J4 | Static | Focusable list |
| Element-scoped view transition thumb → large | **H1** | `::view-transition-*{animation:none}` | Trigger from click handler, not mouse handler |
| Restrained 1.02 / 0.8 s thumbnail breath | F4 | `1ms!important` reset (Rijksmuseum style) | Mirror on `:focus-visible` |
| Brightness lift to guarantee caption contrast | D7 | Apply end-state instantly | Mirror on `:focus-visible` |
| Copy-citation button with morph | D5 | Keep label change, drop the morph | `aria-live="polite"` confirmation |
| **Do not** ship: even 3×3 grid of cards (SKU §6 ban), shimmer loops on lazy images | F6/H4 | — | — |

### 04 · Explore the Disciplines
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| **`:focus-within` card with hover/focus parity — copy Inclusive Components verbatim** | **E1** | Inherently safe | One link per card, no `tabindex`, no `role="button"` |
| Focus-visible styled identically to hover | **E2** | Inherently safe | This *is* the keyboard behaviour |
| Two-tone high-contrast focus ring on all four cards | **E3** | n/a | Survives unknown image luminance |
| Inset-ring hover (no layout shift) | D6 | Collapse duration | Same rule on `:focus-visible` |
| Mobile: scroll-snap rail with `.no-transition` state | B6 | Toggle `.no-transition` under `reduce` | Native scroll; real `:focus-visible` |
| Device-gate all hover | **E5** | — | Ensure no information is mouse-only |

### 05 · Stories Through Time
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| **Horizontal era rail pinned by `sticky`, scroll-driven** | **B2 + K2** | Drop the 500 vh pin; serve a static snap rail | Real `<ol>` of eras above the rail; no scroll-jacking |
| **Per-item sequencing from one `timeline-scope` + `--i`** | **I1** | `IntersectionObserver` + attribute instead of timeline | `<a>` per marker; `aria-current="step"` |
| **Editorial index with CSS-variable hover** (the anti-card-grid) | **F5** | Zero the travel; keep the visibility change | `:focus-visible` on the same rules |
| Reading-progress indicator, scoped to this section only | B4 | Replace with "Section 3 of 6" text | `aria-hidden`, or one real progressbar — not both |
| Asymmetric two-speed house curve for every reveal | I2 | Point at K1 tokens | Identical for pointer and keyboard |
| **Global: K1 duration tokens + L2 selective kill switch** | **K1 + L2** | The mechanism | Prevents pointer/keyboard drift |

### 06 · Featured Creator / Cultural Moment
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| **Region annotations on a single deep-zoomed artefact** | **J5** | Opacity/visibility only | Real buttons in DOM order with `aria-label` |
| **Then/now comparison slider** | **J2** | `animate:false` / `data-animate="false"` | **Prefer a native `<input type="range">` + `clip-path`**; sanitise `data-credit` (XSS) |
| Cursor-attached media preview over an image index | G4 | Pin or drop the follow; keep the swap | **Inline thumbnail on `:focus-visible`** |
| Asymmetric columns with a *small* reverse drift | I3 | **Remove entirely** | DOM order stays logical |
| Local cinematic scrub | I5 | — | — |
| **Budget: one pinned section on the whole page** | I5 | — | — |

### 07 · Closing
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| Two-layer directional wipe CTA | **D1** | Keep shortened; ensure end state is the same | Fire on `:focus-visible` too |
| One rolling ticker label, maximum | D2 | `no-preference` only | Single accessible name; copies `aria-hidden` |
| Underline-draw links | D3 | Safe to keep | Real `text-decoration` on `:focus-visible` |
| **Visible "reduce motion" toggle** | **K4** | The escape hatch | Real button, `aria-pressed`, persisted |

### 08 · Footer
| Interaction | Library ref | Motion-safe | Keyboard |
| --- | --- | --- | --- |
| Editorial link list with CSS-variable hover | F5 | Zero the travel | `:focus-visible` parity |
| Skip link (first focusable element in the DOM) | A4 | Inherently safe | Mandatory |
| Real credits, each with a copy action | D5 | — | `aria-live` confirmation |

### Global foundation (all sections, before any of the above)
1. **K1 duration tokens** — `--dur-1/2/3` resolving to `0s` under `reduce`, opt-in via `no-preference`.
2. **L2 selective kill switch** — preserve colour/opacity, remove movement.
3. **E3 two-tone focus ring** — one rule, applied globally.
4. **E2 hover/focus parity** — a written rule for the build: every `:hover` gets its `:focus-visible` twin in the same block.
5. **L5 `@supports` around every scroll-driven rule**, with the static layout as the base case.
6. **L4 JS check** before creating any cursor, video, or scroll library.

### Excluded on purpose
| Rejected | Why |
| --- | --- |
| Full-screen JS preloader (C4) | Fights "purpose clear within seconds"; blocks the skip link |
| Autoplay hero video (C5) | SKU §8 rights; unguarded on the source site; `prefers-reduced-motion` does not stop autoplay |
| Custom cursor replacing the native one (G1/G3) | Only acceptable as an *addition*; Whitney's design (system cursor retained) is the ceiling |
| Reverse-scroll columns at full speed (I3) | Nausea risk; SKU requires motion that "supports the story without hurting usability" |
| Multiple pinned sections (I5) | One is a chapter break; more is a theme park |
| TimelineJS as shipped (J3) | Zero reduced-motion rules; iframe; produces the banned "museum template" form — take the *idea*, build B2 + I1 |
| Even grid-of-cards (F6) | Explicitly banned by SKU §6 |
| Shimmer skeleton loops (H4) | Infinite motion for a problem that `loading="lazy"` + dimensions already solve |
| View transitions across documents (H2) | SKU §5 is a single page — no routes to transition between |

---

## 4. Sources

**All URLs below were fetched and their shipped assets read during this research (15 Oct 2026).**

**Museums, archives and institutions**
- https://www.vam.ac.uk/ — hero parallax via `--translate-x`; two-tone focus ring; `backdrop-filter` grayscale
- https://www.moma.org/ — motion design tokens; `clip-path` polygon morph; `data-mobile-menu-expanded`; 0 reduced-motion rules in scanned payload
- https://www.rijksmuseum.nl/en — 45 reduced-motion blocks; `.zoomable-micrio`; `scale(1.02)` thumbnail breath
- https://www.loc.gov/ — 33 reduced-motion blocks; opt-in smooth scroll; parallax thumbnail `clip-path` progress; gallery lightbox keyframes
- https://www.clevelandart.org/ — blanket reduced-motion kill switch; `cursor:none`; glow hover; copy-link morph
- https://www.tate.org.uk/ — functional cursor swap (zoom/expand/collapse); 81 focus-visible rules; `role="dialog"`
- https://whitney.org/ — accessible custom cursor `setupB26Cursor()`; ticker button; scroll-snap carousel; loading bar
- https://www.artic.edu/ — OpenSeadragon `MouseTracker` + `cursor:none`; 132 `aria-expanded`; backdrop-filter overlays
- https://www.nationalgallery.org.uk/ — 32 reduced-motion blocks; Bootstrap `placeholder-glow/wave`; polygon clip-paths
- https://letterformarchive.org/ — 141 focus-visible rules; swiper; `mix-blend-mode:difference`
- https://www.cooperhewitt.org/ — directional underline draw; `cursor:url(grabbing.png)`
- https://www.designmuseum.org/ — `@keyframes marquee`; hotspot / glasspane / modal keyframes
- https://www.smk.dk/en/ — two-layer directional wipe button; inset-ring hover
- https://www.magnumphotos.com/ — `preloaderAnim` (used as a counter-example); `_earlyPrefetch` on hover
- https://artxlagos.com/ — modern Nigerian arts-platform nav + focus-visible baseline
- https://www.reuters.com/graphics/ — scroll-driven clip-path reveals; copy-link morph; scroll containment

**Editorial / scroll storytelling**
- https://pudding.cool/ — **`--1s` reduced-motion token collapse**; focus-visible-only outlines; hover image tilt
- https://theconversation.com/ — `motion-safe:` layer; `:has(:focus-visible)`; 214 lazy + 214 srcset

**Interaction craft**
- https://cuberto.com/ — **hover-to-play video card**; `pointer:fine` gating; view-transition reduced-motion kill switch; persistent Loader
- https://www.darkroom.engineering/ — **best-argued reduced-motion block**; CSS-variable editorial list hover; Lenis; view-transition durations

**Web-platform references and demos**
- https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations — `scroll()`/`view()`, timeline range names, `timeline-scope`, `@supports` fallbacks
- https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API — API surface, `rel="expect"`, MDN demo links
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion — definition; names scaling/panning large objects as vestibular triggers; `pulse` → `dissolve` substitution example
- https://scroll-driven-animations.style/ — index of all nine demos and tools
- https://scroll-driven-animations.style/demos/image-reveal/css/ — **B1 code**
- https://scroll-driven-animations.style/demos/horizontal-section/css/ — **B2 code**
- https://scroll-driven-animations.style/demos/stacking-cards/css/ — **B3 code**
- https://scroll-driven-animations.style/demos/progress-bar/css/ — **B4 code**
- https://scroll-driven-animations.style/demos/carousel-with-markers/css/ — **I1 code**
- https://scroll-driven-animations.style/demos/cover-to-fixed-header/css/ — **A3 code**
- https://scroll-driven-animations.style/demos/reverse-scroll/css/ — I3 code
- https://scroll-driven-animations.style/demos/scroll-shadows/css/ — B7
- https://scroll-driven-animations.style/demos/shrinking-header-shadow/css/ — A2
- https://mdn.github.io/dom-examples/view-transitions/spa/ — **H1 code** (`style.css`, `script.js`)
- https://mdn.github.io/dom-examples/view-transitions/mpa/ — **H2 code** (`styles.css`)
- https://http203-playlist.netlify.app/ — SPA view transitions in a real app (5 `view-transition-name` usages)
- https://openseadragon.github.io/ — deep-zoom viewer; tile sources incl. IIIF/DZI; keyboard, reference strip, sequence and collection modes; annotation plugins
- https://openseadragon.github.io/examples/ui-keyboard-navigation/ — keyboard bindings for the viewer
- https://openseadragon.github.io/examples/tilesource-iiif/ — IIIF tile source
- https://iiif.io/ — International Image Interoperability Framework
- https://inclusive-components.design/cards/ — **E1 code and the hover/focus parity principle**
- https://juxtapose.knightlab.com/ — **J2**; README documents `data-animate="false"`, `data-credit` HTML/XSS caveat, `updateSlider(percentage, animate)`
- https://timeline.knightlab.com/ — J3, reviewed and not adopted

**Cited as standards, not verified by load** (they failed to fetch in this environment; listed so the claim is honest): W3C WAI ARIA Authoring Practices (`https://www.w3.org/WAI/ARIA/apg/patterns/`) and WCAG 2.2 §2.2.2 Pause/Stop/Hide. Where L6 refers to these, the platform behaviour was independently confirmed against the shipped implementations of the sites above, but the W3C pages themselves were **not** retrieved.

---

## 5. Open items for the Project Manager

1. **Screenshots are missing.** The browser was disconnected for the whole session. `_evidence/CAPTURE_CHECKLIST.md` is ready; a connected browser can produce all of them in one pass. The report does not depend on them — every claim is backed by fetched source — but the hub will look better with them.
2. **Web search was unavailable**, so discovery was limited to domains I could name in advance. A search-enabled pass could add: contemporary Nigerian institutional sites, other African digital-archive projects, and Codrops/Awwwards-class interaction demos.
3. **Three patterns are flagged as keyboard-*unverified*:** Juxtapose's slider (J2), the hover-to-play card's keyboard equivalent (F1), and TimelineJS (J3, not adopted). All three need a manual keyboard test before shipping, and J2/F1 have native-CSS alternatives that remove the risk.
4. **The "archive feels alive" idea is over-supplied, not under-supplied.** This library contains four independent candidates (F1 hover-to-play, J1 deep zoom, J2 then/now, K3 colour recovery). **K3 is my single recommendation** — it is a metaphor rather than a flourish, it is rights-cheap (one still, two treatments), it needs no reduced-motion fallback because it is not motion, and it is keyboard-operable for free. Choose one, not all four.
