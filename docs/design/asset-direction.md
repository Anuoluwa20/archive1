# ARCHIVE — Visual Asset Direction & Media Specification
**Document ID:** `DSN-AST-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 02 — Senior Product Designer  

---

## 1. Asset Strategy & Cultural Grounding

Visual assets within ARCHIVE are not decorative stock filler; they are primary cultural evidence. Every image, sound snippet, and vector graphic must withstand curatorial scrutiny.

### 1.1 Four Tiers of Archival Assets
1. **Tier 1: Authentic Historical Photographs & Scans:**
   - Sourced from documented archives (NCMM, National Archives of Nigeria, HSPACA, CAAC).
   - Treated with conservation-grade preservation: no artificial recoloring, no distortion of original cropping, no removal of studio stamps.
2. **Tier 2: Archival Vinyl Record Packaging & Ephemera:**
   - High-fidelity scans of original 12" LP jackets (Lemi Ghariokwu, Philips West Africa, Decca, Premier Music).
   - Displayed with tactile sleeve texture, paper seam lines, and center-label geometry.
3. **Tier 3: Textile & Sartorial Artifacts:**
   - High-resolution close-ups of handwoven Aso-Oke, Akwete, and Adire Eleko fabrics, accompanied by weave structure descriptions.
4. **Tier 4: Curatorial Digital Recreations:**
   - Where physical archival scans are legally restricted under private museum trusts, our studio generates high-fidelity typographic and graphic re-examinations (e.g. FESTAC '77 emblem, mid-century railway broadsheet posters).
   - Integrity Requirement: These are explicitly labeled as *"Curatorial Digital Re-examination"* in the metadata.

---

## 2. Media Optimization & Delivery Standards

* **Image Formats:** WebP with fallback JPEG/PNG; modern SVG for typographic marks and symbols.
* **Aspect Ratio Standards:**
  - Archival Cards: Standardized `4:5` portrait or `1:1` square aspect ratios with `object-fit: cover` to maintain grid alignment.
  - Panoramic Timeline Headers: `16:9` or `21:9`.
  - Contact Sheet Strips: Native 35mm film ratio (`3:2`).
* **Responsive Breakpoints & Sizes:**
  - Thumbnail: `320px` (for mobile cards).
  - Regular: `640px` (for 2-column and 3-column desktop grid).
  - High-Res Inspection: `1440px` (for modal zoom loupe).
* **Lazy Loading:** Native `loading="lazy"` on all below-the-fold media; `priority` loading reserved strictly for Section 01 hero images.

---

## 3. Audio Asset Direction (Web Audio API & Acoustic Snippets)

* **Ambient Atmosphere:** Opt-in synthesized tape warmth and vinyl surface hiss at low volume (-24dB) generated via Web Audio API oscillators and filtered white noise nodes (zero network overhead, instant load).
* **Archival Musical Snippets:** Brief 15-30 second educational listening excerpts embedded within Section 03 (Music) and Section 05 (Timeline), capturing seminal moments:
  - *Rex Lawson:* Horn lines and acoustic guitar phrasing.
  - *Fela Kuti & Africa 70:* Batá rhythm and saxophone counterpoint.
  - *King Sunny Ade:* Steel guitar glissandos and talking drum dialogue.
