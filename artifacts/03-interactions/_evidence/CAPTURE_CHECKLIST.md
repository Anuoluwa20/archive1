# Screenshot capture checklist — Stage 04 interaction library

**Status: NOT RUN.** During the Stage 04 session no desktop browser was connected
(`[browser.disconnected] No desktop browser is connected to this session`), and web
search was unavailable. Every finding in `INTERACTION_LIBRARY.md` was therefore
verified by fetching and reading the live HTML/CSS/JS instead of by screenshot.

This file exists so the capture pass can be run in one sitting once a browser is
connected (desktop app open, session connected, window visible).

## How to run

For each row: open the URL in a tab, `browser.tabs.focus`, set the state, then
`browser.screenshot` into `artifacts/03-interactions/screenshots/<file>`.
Prefer `format: "jpeg", quality: 70, maxWidth: 1440` for speed; use `fullPage: true`
only where noted. Capture at 1440×900 desktop unless a mobile state is specified.

## Capture list

| # | File | URL | State to capture |
| --- | --- | --- | --- |
| A2 | `A2-shrinking-header.png` | https://scroll-driven-animations.style/demos/shrinking-header-shadow/css/ | top, then scrolled ~200 px — two shots |
| A3 | `A3-cover-to-fixed-header.png` | https://scroll-driven-animations.style/demos/cover-to-fixed-header/css/ | 0 %, ~50 %, ~100 % scroll — three shots |
| A4 | `A4-skip-link.png` | https://www.nationalgallery.org.uk/ | press `Tab` once from page load |
| A6 | `A6-mobile-nav-open.png` | https://www.moma.org/ | 390 px viewport, menu expanded |
| A7 | `A7-scroll-contain.png` | https://www.reuters.com/graphics/ | a gallery strip mid-horizontal-scroll |
| B1 | `B1-image-reveal.png` | https://scroll-driven-animations.style/demos/image-reveal/css/ | ~25 %, ~50 %, ~100 % through the reveal — three shots |
| B2 | `B2-horizontal-section.png` | https://scroll-driven-animations.style/demos/horizontal-section/css/ | entry, mid-pin, exit — three shots |
| B3 | `B3-stacking-cards.png` | https://scroll-driven-animations.style/demos/stacking-cards/css/ | mid-stack (3 of 4 cards overlapped) |
| B4 | `B4-progress-bar.png` | https://scroll-driven-animations.style/demos/progress-bar/css/ | ~60 % scroll |
| B5 | `B5-thumb-progress.png` | https://www.loc.gov/ | a gallery/collection view with the thumbnail rail mid-way |
| B6 | `B6-snap-carousel.png` | https://whitney.org/ | 390 px viewport, carousel mid-snap |
| B7 | `B7-scroll-shadows.png` | https://scroll-driven-animations.style/demos/scroll-shadows/css/ | scroller mid-way (both shadow edges visible) |
| C1 | `C1-loader.png` | https://cuberto.com/ | cold load, first ~300 ms |
| C2 | `C2-hero-parallax.png` | https://www.vam.ac.uk/ | hero at top, then scrolled — two shots |
| C3 | `C3-loading-bar.png` | https://whitney.org/ | cold load with the progress element visible |
| C4 | `C4-preloader-antipattern.png` | https://www.magnumphotos.com/ | cold load (counter-example) |
| C5 | `C5-hero-video.png` | https://cuberto.com/ | hero video playing |
| D1 | `D1-wipe-button.png` | https://www.smk.dk/en/ | button resting, then hovered — two shots |
| D2 | `D2-ticker-button.png` | https://whitney.org/ | ticker button mid-step |
| D3 | `D3-underline-draw.png` | https://www.rijksmuseum.nl/en | inline link resting, then hovered |
| D4 | `D4-glow-hover.png` | https://www.clevelandart.org/ | link on an image ground, hovered |
| D5 | `D5-copy-morph.png` | https://www.clevelandart.org/ | copy-link button before/after activation |
| D7 | `D7-brightness-hover.png` | https://www.magnumphotos.com/ | thumbnail resting, then hovered |
| E1 | `E1-focus-within-card.png` | https://inclusive-components.design/cards/ | card hovered, then focused via keyboard — two shots |
| E2 | `E2-focus-parity.png` | https://www.are.na/ | a list item hovered, then focused — two shots |
| E3 | `E3-focus-ring.png` | https://www.vam.ac.uk/ | a header link focused via `Tab` (two-tone ring) |
| E5 | `E5-pointer-fine.png` | https://cuberto.com/ | 390 px viewport (hover effects absent on touch) |
| F1 | `F1-hover-to-play.png` | https://cuberto.com/ | project grid: still, then hovered and playing — two shots |
| F2 | `F2-stagger-reveal.png` | https://www.are.na/ | card overlay mid-reveal (~125 ms after hover) |
| F3 | `F3-clip-morph.png` | https://www.moma.org/ | morphing element resting, then hovered |
| F4 | `F4-thumb-breath.png` | https://www.rijksmuseum.nl/en | thumbnail resting, then hovered |
| F5 | `F5-editorial-list-hover.png` | https://www.darkroom.engineering/ | list row resting, then hovered — two shots |
| G1 | `G1-custom-cursor.png` | https://whitney.org/ | pointer moving (cursor visible in frame) |
| G3 | `G3-deepzoom-cursor.png` | https://www.artic.edu/ | deep-zoom viewer open, zoom cursor over it |
| G4 | `G4-cursor-media.png` | https://cuberto.com/ | list hovered with media attached to the cursor |
| H1 | `H1-view-transition-spa.png` | https://mdn.github.io/dom-examples/view-transitions/spa/ | mid-transition (click a thumbnail, shoot within ~250 ms) |
| H2 | `H2-view-transition-mpa.png` | https://mdn.github.io/dom-examples/view-transitions/mpa/ | mid-transition between the two pages |
| H4 | `H4-skeleton.png` | https://www.nationalgallery.org.uk/ | skeleton/placeholder state during load |
| I1 | `I1-sequence-markers.png` | https://scroll-driven-animations.style/demos/carousel-with-markers/css/ | markers 2/4/6 active as the carousel advances — three shots |
| I3 | `I3-reverse-scroll.png` | https://scroll-driven-animations.style/demos/reverse-scroll/css/ | columns at opposed positions |
| I4 | `I4-blend-crossfade.png` | https://cuberto.com/ | mid-crossfade between two states |
| J1 | `J1-deepzoom.png` | https://www.artic.edu/ | one artwork at fit, then zoomed to detail — two shots |
| J2 | `J2-juxtapose.png` | https://juxtapose.knightlab.com/ | then/now slider at 35 % and at 65 % — two shots |
| J3 | `J3-timelinejs-reference.png` | https://timeline.knightlab.com/ | a TimelineJS instance (comparison only) |
| J4 | `J4-reference-strip.png` | https://openseadragon.github.io/ | Image Reference Strip / sequence mode demo |
| J5 | `J5-annotations.png` | https://openseadragon.github.io/ | an annotation overlay demo |
| J6 | `J6-lightbox.png` | https://www.loc.gov/ | a gallery lightbox open |
| K2 | `K2-era-rail.png` | (composite of B2 + I1) | capture from the ARCHIVE build once Stage 05 exists |
| K3 | `K3-colour-return.png` | https://www.vam.ac.uk/ | `.header--grayscale` state, then recovered — two shots |
| K4 | `K4-reduce-motion-toggle.png` | https://www.are.na/ | the reduced-motion preference control in context |

## Also worth capturing (not referenced in the report)

- Any **Nigerian / West African** institutional or archive site that becomes reachable —
  the corpus is thin here: `artxlagos.com` loaded, but `cca-lagos.org`,
  `nikeartgallery.com` (404), `digitalbenin.org` (503), `africa.si.edu` (403),
  `lagosphotofestival.com`, `metmuseum.org` (429) and `britishmuseum.org` all failed.
  A local/regional reference is a real gap in this research.
- `prefers-reduced-motion` proof shots: reload any of the sites above with the OS
  reduce-motion setting on, and capture the same components again. That pair
  (motion on / motion off) is the most persuasive artefact this stage can produce.

## Note for the hub

Screenshots are the only part of Stage 04 that is missing. The written library does not
depend on them — every claim is sourced to fetched code — but the hub presentation of
this stage will be text-only until the capture pass runs.
