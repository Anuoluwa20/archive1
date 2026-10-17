# ARCHIVE — Content Strategy & Editorial Taxonomy
**Document ID:** `DOC-PRD-005`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 01 — Product Manager  
**Status:** Approved for Implementation  

---

## 1. Editorial Voice & Principles

ARCHIVE speaks with the rigor of a leading cultural historian and the sharp aesthetic confidence of an avant-garde editorial magazine.

* **Authoritative, never pedantic:** State facts with historical precision without drowning the user in academic jargon.
* **Poetic, never melodramatic:** Frame cultural continuity with dignified emotional resonance rather than empty sentimentality.
* **Culturally Specific, never generic:** Speak in concrete terms—name the street (Broad Street, Lagos), the textile (Aso-Oke Etrù, Akwete cloth, Adire Eleko), the rhythm (Highlife guitarmanship, Batá drum syncopation, Sakara cadence), the studio (Central Photo Studio, Yaba).
* **Respectful of Intellectual Property:** Clearly credit photographers, illustrators, weavers, master printmakers, and record labels.

---

## 2. Archival Taxonomy & Cataloging Schema

Every artifact cataloged within ARCHIVE adheres to the following unified schema:

```typescript
interface ArchivalArtifact {
  id: string;               // Unique Accession ID, e.g., "ARC-PH-1974-001"
  title: string;            // Official catalog title
  creator: string;          // Artist, photographer, master artisan, or collective
  year: number;             // Precise creation year (or decade range)
  era: '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s+';
  discipline: 'photography' | 'music' | 'fashion' | 'design';
  medium: string;           // e.g., "Silver gelatin print", "Vinyl 12-inch LP", "Hand-woven cotton"
  dimensions?: string;      // Physical dimensions if known
  origin: string;           // City/Region, e.g., "Lagos, Nigeria", "Ibadan, Oyo State"
  provenance: string;       // Collection lineage or original publication source
  curatorialNote: string;   // 2-3 sentence curatorial analysis
  rightsStatus: 'Public Domain' | 'Creative Commons' | 'Courtesy of Estate' | 'Educational Exhibition Excerpt';
  tags: string[];           // Semantic search tags
  imageSrc: string;         // Asset path or verified URL
  audioSrc?: string;        // Audio preview URL (for music discipline)
  isFeatured?: boolean;     // Priority flag for home highlights
}
```

---

## 3. Discipline-Specific Curatorial Guidelines

### 3.1 Photography
- **Focus:** Studio portraiture (Central Photo Studio, Peter Obe, J.D. 'Okhai Ojeikere, Hakeem Shitta, Tam Fiofori), social documentation, street documentary, and ceremonial memory.
- **Integrity Rule:** Clearly distinguish between commercial studio portraits and photojournalism documenting political strife. Never crop out original studio stamps or border inscriptions when displaying historical scans.

### 3.2 Music
- **Focus:** Palmwine acoustic, Highlife (E.T. Mensah, Victor Olaiya, Cardinal Rex Jim Lawson), Jùjú (I.K. Dairo, King Sunny Ade, Ebenezer Obey), Afrobeat (Fela Anikulapo Kuti, Tony Allen, Africa 70), and Fuji (Alhaji Sikuru Ayinde Barrister, Kollington Ayinla).
- **Integrity Rule:** Accurately distinguish historical Afrobeat (the revolutionary political genre forged by Fela Kuti and Tony Allen at Afrika Shrine in the 1970s) from 21st-century contemporary Afrobeats (the global pop phenomenon).

### 3.3 Fashion
- **Focus:** Traditional structural textiles (Aso-Oke, Akwete, Adire Eleko, Ukara), bespoke mid-century tailoring (Shade Thomas-Fahm, the pioneer who modernized the traditional iro and buba with zippers and created the boubou), and contemporary architectural fashion (Kenneth Ize, Orange Culture).
- **Integrity Rule:** Do not treat Yoruba, Hausa-Fulani, Igbo, Efik, and Edo sartorial conventions as interchangeable. Attribute textile traditions to their specific cultural custodians.

### 3.4 Design & Visual Culture
- **Focus:** Hand-set print typography, literary covers (Mbari Club, Black Orpheus, Chinua Achebe's Heinemann African Writers Series covers), FESTAC '77 official visual identity by Erhabor Emokpae, vinyl album cover illustration (Lemi Ghariokwu’s iconic covers for Fela Kuti), and post-independence graphic identity.
- **Integrity Rule:** Celebrate the graphic designers and illustrators whose names were frequently omitted from record labels and commercial packaging.

---

## 4. Demonstrative vs. Authentic Content Protocol

Where primary archival rights are restricted under international museum copyrights, ARCHIVE utilizes:
1. Public domain historical photographs and documents.
2. Verified open-access educational collections (e.g., National Commission for Museums and Monuments, HSPACA archive public records).
3. Faithfully recreated, culturally grounded vector graphic identities and typographic specimens (specifically attributed as "Curatorial Digital Re-examination").
