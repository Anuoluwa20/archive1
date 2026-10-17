export interface CulturalStory {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  creator: string;
  datesActive: string;
  discipline: 'photography' | 'fashion' | 'design';
  heroImage: string;
  curatorialLead: string;
  historicalEssay: string[];
  keyArtifacts: {
    title: string;
    yorubaName: string;
    year: number;
    meaning: string;
    medium: string;
  }[];
  provenanceDetails: {
    label: string;
    value: string;
  }[];
  audioTranscript: string;
  citation: string;
}

export const FEATURED_STORY: CulturalStory = {
  id: "story-ojeikere",
  slug: "ojeikere-architecture-of-the-crown",
  title: "Architecture of the Crown",
  subtitle: "J.D. 'Okhai Ojeikere's 30-Year Documentation of Nigerian Hair as Living Sculpture",
  creator: "Johnson Donatus Aihumekeokhai Ojeikere (1930–2014)",
  datesActive: "1968 – 1999 (Lagos, Nigeria)",
  discipline: "photography",
  heroImage: "",
  curatorialLead:
    "Beginning in 1968 in the vibrant streets and studios of post-independence Lagos, J.D. 'Okhai Ojeikere embarked on one of the most ambitious documentary photography projects in African history. Over three decades, he systematically photographed more than 1,000 distinct Nigerian hairstyles, isolating them against neutral backdrops to reveal their mathematical complexity, social hierarchy, and sculptural grandeur.",
  historicalEssay: [
    "In traditional Nigerian societies—particularly among Yoruba, Igbo, and Hausa-Fulani peoples—hairstyles were never merely ornamental. They served as complex visual codes indicating royal status, family lineage, geographic origin, marital state, or bereavement. Following national independence in 1960, a sudden surge of pride sparked a creative explosion in hair design across West Africa.",
    "Ojeikere recognized that these ephemeral masterworks, painstakingly braided over hours by master stylists on street verandas and in parlor salons, would vanish with the washing or re-braiding of the hair. Armed with his Rolleiflex and Hasselblad cameras and loaded with Kodak Tri-X black-and-white film, he systematically approached women at social functions, wedding ceremonies, and street markets.",
    "Crucially, Ojeikere made a deliberate artistic choice: he photographed almost entirely from the back, side, and elevated angles, rarely showing the subject's face. By removing individual facial identity, he elevated the hairstyles into pure abstract sculpture—monuments of living architecture celebrating African womanhood and intellectual geometry.",
  ],
  keyArtifacts: [
    {
      title: "Skyscraper / Towering Crown",
      yorubaName: "Onile Gogoro",
      year: 1970,
      meaning: "Created to celebrate the arrival of the first modern multi-story skyscrapers on Lagos Island following independence.",
      medium: "Silver gelatin photographic print, 50 × 50 cm",
    },
    {
      title: "The Clapped Hands",
      yorubaName: "Patewo",
      year: 1974,
      meaning: "Braided in two mirroring halves that meet at the crown like hands folded in prayer or festive clapping.",
      medium: "Silver gelatin photographic print, 50 × 50 cm",
    },
    {
      title: "The Royal Knot / Topknot",
      yorubaName: "Suku",
      year: 1968,
      meaning: "Historically reserved for royal princesses and wives of Yoruba Obas; braids gather upward into a regal central crest.",
      medium: "Silver gelatin photographic print, 50 × 50 cm",
    },
    {
      title: "Rubber Thread Sculpture",
      yorubaName: "Kiko",
      year: 1982,
      meaning: "Intricate black thread wrapping technique that produces rigid, gravity-defying architectural spires.",
      medium: "Silver gelatin photographic print, 50 × 50 cm",
    },
  ],
  provenanceDetails: [
    { label: "Accession Series", value: "ARC-PH-OJE-1968-1999" },
    { label: "Medium", value: "Silver gelatin contact sheets & 120mm negatives" },
    { label: "Primary Custodian", value: "J.D. 'Okhai Ojeikere Estate / CAAC Collection Paris" },
    { label: "Exhibition Lineage", value: "55th Venice Biennale (2013), Documenta 12 (2007), Tate Modern (2014)" },
    { label: "Licensing Status", value: "Courtesy of Estate / Curatorial Educational Review" },
  ],
  audioTranscript:
    "\"All these hairstyles are ephemeral... I wanted to record moments of beauty before they were overtaken by foreign wigs and chemical relaxers. When I look at a woman's crown, I do not see hair; I see an architect carving sovereignty into the sky.\" — J.D. 'Okhai Ojeikere, Lagos, 1995",
  citation:
    "Ojeikere, J.D. 'Okhai. 'Hairstyles (1968–1999).' Curated by André Magnin. Fondation Cartier pour l'art contemporain, Paris, 2000.",
};
