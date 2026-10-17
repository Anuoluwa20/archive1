# ARCHIVE — Design System
Derived from direct review of 10 usable captures in `Design Inspiration/screenshots/`
(032c, The Gentlewoman, Letterform Archive, V&A Africa Fashion, MoMA, Tate, Public Domain
Review, Savee, Fonts In Use, Radio Garden). NYPL and Discogs captures are bot-challenge
pages and were not used; Tate's capture is partly covered by a consent banner.
Limit: this is a still-image review. Motion and hover behaviour were not observable.

## What the references do
| Reference | Observed | Taken |
| --- | --- | --- |
| MoMA, V&A Africa Fashion, Tate | Full-bleed image first; huge uppercase grotesque title; tiny nav; thick rule under header | Full-bleed hero plate, monumental caps, hairline rules |
| The Gentlewoman, 032c | Pale field, one object centred, almost no UI, small caps nav | Light "paper" sections with generous whitespace |
| Fonts In Use | Dense grid of specimens, **caption sits under each tile** (name + metadata) | Collection cards: image plate, caption beneath, not overlaid |
| Public Domain Review | Serif headlines, 3-column editorial, boxed side notes | Serif for essays, boxed provenance notes |
| Letterform Archive, V&A | One saturated accent per surface (red, orange, neon yellow) | One accent per section, not three |
| Radio Garden | A single flat saturated field with one action | One full-bleed indigo "moment" band |
| Savee | Dark, centred large sans, pill nav | Floating pill nav (built) |

## Decisions where references conflict
- **Dark vs light:** references split. Resolution: alternate. Dark = hero, featured, footer. Light paper = manifesto and collection. Never a mid-grey.
- **Photography vs rights rule:** references are photo-led, but `PROJECT_STATE.md` bars unlicensed archival imagery. Resolution: generated typographic/pattern plates in the photo's position, each captioned with the real work's title, date and holder.

## Tokens
Ink `#0D0D10` · Paper `#F4F1EA` · Accent terracotta `#BC3A18` · Indigo field `#1B2A4A` · Bronze rule `#C5A059`
Display: heavy grotesque, uppercase, tracking -0.04em, line-height 0.85. Body/essay: serif. Metadata: mono 10–11px caps.
Rules: 1px hairlines, one 3px rule under major headers. Radius ≤ 2px (except nav pill).
