# ARCHIVE — Brand System (light edition)
Direction: **Indigo & Camwood.** Built from the adire dye tradition (indigo), camwood powder, palm-oil gold, kaolin clay, and calabash green, set against ink. Chosen after studying six user-supplied landing pages (Museum Studio, Ozeum, Pinterest coverflow, Good Move, Grape & Gold, Artfy).
## Colour
| Token | Name | Hex | Role |
| --- | --- | --- | --- |
| `--paper` | Kaolin | `#F5F0E6` | page ground, with fine paper grain |
| `--ink` | Ink | `#16152B` | text |
| `--blue` | Aro Indigo | `#2A30B8` | primary, links, duotone art |
| `--navy` | Deep Indigo | `#15154A` | dark bands, footer, plates room |
| `--camwood` | Camwood | `#C44A2A` | script accents, flags |
| `--ochre` | Palm Gold | `#E2A13A` | accents on dark |
| `--green` | Calabash | `#55705A` | tabbed promises panel |
## Type
Display **Fraunces** (variable serif, 600/800, italic for emphasis) · Script accent **Allura** (large display words only, never body) · UI/body **Bricolage Grotesque** · Meta **DM Mono**. Rule: one script word per section, always overlapping or under a serif headline (from Artfy / Grape & Gold).
## Contrast (computed)
| Pair | Colours | Ratio | Verdict |
| --- | --- | --- | --- |
| Ink on Kaolin | `#16152B` on `#F5F0E6` | 15.72:1 | AA |
| Indigo on Kaolin | `#2A30B8` on `#F5F0E6` | 8.35:1 | AA |
| Camwood on Kaolin | `#C44A2A` on `#F5F0E6` | 4.24:1 | AA large only |
| Palm Gold on Deep Indigo | `#E2A13A` on `#15154A` | 7.59:1 | AA |
| White on Indigo | `#FFFFFF` on `#2A30B8` | 9.49:1 | AA |
| White on Calabash | `#FFFFFF` on `#55705A` | 5.45:1 | AA |
| Pale text on Calabash (rejected) | `#DCE5D4` on `#55705A` | 4.21:1 | FAIL for body, so panel text is white (5.45:1) |
| White on Oxblood band | `#FFFFFF` on `#5A2218` | 12.52:1 | AA |
| Mute grey on Kaolin | `#5A5D70` on `#F5F0E6` | 5.72:1 | AA |
Camwood is therefore used only for large display script and flags, never body text.
## Motion
Easing `cubic-bezier(.16,1,.3,1)`. Scroll progress bar, header hides on scroll-down, hero pointer parallax, magnetic buttons, coverflow carousel, tab panel fade, drifting cloud blobs. All motion off under `prefers-reduced-motion`; parallax and magnetism only on fine pointers.
## Imagery rule
Original generated artwork only; no reproduction of archival works.
