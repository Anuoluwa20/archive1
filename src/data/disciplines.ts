export interface Discipline {
  id: string;
  number: string;
  slug: 'photography' | 'music' | 'fashion' | 'design';
  title: string;
  yorubaTerm: string;
  subtitle: string;
  quote: string;
  quoteAuthor: string;
  description: string;
  seminalEra: string;
  pioneers: string[];
  keyMovements: string[];
  accentColor: string;
  badgeBorder: string;
  heroImage: string;
  stats: {
    label: string;
    value: string;
  }[];
  curatorialPrompt: string;
}

export const DISCIPLINES: Discipline[] = [
  {
    id: "disc-01",
    number: "01",
    slug: "photography",
    title: "PHOTOGRAPHY",
    yorubaTerm: "Aworan",
    subtitle: "Dignity, Silver Gelatin & The Architecture of Presence",
    quote: "To photograph a hairstyle is to carve an ephemeral monument that outlives the head that wore it.",
    quoteAuthor: "J.D. 'Okhai Ojeikere (1930–2014)",
    description:
      "From post-independence studio portraiture in Lagos and Ibadan to photojournalism documenting political sovereignty, Nigerian photography rejected colonial ethnographic gaze. Masters like J.D. 'Okhai Ojeikere, Peter Obe, and Tam Fiofori turned the darkroom into a laboratory of national self-definition.",
    seminalEra: "1960–1985 (Studio & Independence Renaissance)",
    pioneers: [
      "J.D. 'Okhai Ojeikere",
      "Peter Obe",
      "Tam Fiofori",
      "Hakeem Shitta",
      "Stephen Tayo",
    ],
    keyMovements: [
      "Commercial Studio Portraiture",
      "The Hairstyle Architectural Archive",
      "Press Photojournalism",
      "Modern Street Documentary",
    ],
    accentColor: "#F4F1EA",
    badgeBorder: "border-stone-400/40",
    heroImage: "",
    stats: [
      { label: "Documented Works", value: "1,200+" },
      { label: "Preserved Negatives", value: "35,000" },
      { label: "Active Archives", value: "4 Regional" },
    ],
    curatorialPrompt:
      "Explore silver gelatin prints, darkroom contact sheets, and the monumental hairstyle archive.",
  },
  {
    id: "disc-02",
    number: "02",
    slug: "music",
    title: "MUSIC",
    yorubaTerm: "Orin & Ilu",
    subtitle: "Highlife Horns, Afrobeat Resistance & Sonic Polyrhythm",
    quote: "Music is the weapon of the future. With music, we speak truth to power and reclaim our spirit.",
    quoteAuthor: "Fela Anikulapo Kuti (1938–1997)",
    description:
      "Nigerian sonic history is the pulse of African liberation. In the 1950s and 60s, Highlife orchestras led by Victor Olaiya and Rex Lawson soundtracked national independence. In the 1970s, Fela Kuti and Tony Allen fused Yoruba Batá drums with jazz and funk to forge Afrobeat at the Kalakuta Republic.",
    seminalEra: "1955–1989 (Highlife to Afrobeat Explosion)",
    pioneers: [
      "Fela Anikulapo Kuti",
      "Cardinal Rex Jim Lawson",
      "Dr. Victor Olaiya",
      "King Sunny Ade",
      "Ebenezer Obey",
      "Tony Allen",
    ],
    keyMovements: [
      "Palmwine Acoustic Guitar",
      "Mid-Century Highlife Big Bands",
      "Afrobeat Revolution",
      "Jùjú & Fuji Street Rhythms",
    ],
    accentColor: "#E09F3E",
    badgeBorder: "border-amber-500/40",
    heroImage: "",
    stats: [
      { label: "Cataloged Vinyl LPs", value: "480+" },
      { label: "Recorded Master Tapes", value: "1,800" },
      { label: "Rhythm Genealogies", value: "7 Traditions" },
    ],
    curatorialPrompt:
      "Listen to historic master recordings, vinyl gatefold art, and political sound manifests.",
  },
  {
    id: "disc-03",
    number: "03",
    slug: "fashion",
    title: "FASHION",
    yorubaTerm: "Aso & Ewa",
    subtitle: "Woven Sovereignty, Structural Gele & Bespoke Modernity",
    quote: "Our clothes were never mere coverings; they were genealogies of family, dignity, and civic power.",
    quoteAuthor: "Chief Shade Thomas-Fahm (b. 1933)",
    description:
      "Centuries of indigenous textile mastery—from Yoruba Aso-Oke and indigo Adire to Igbo Akwete weaving—converged in the 1960s when pioneers like Shade Thomas-Fahm modernized traditional garments with zippers, creating the contemporary boubou. Today's global runway visionaries build on this unbroken structural lineage.",
    seminalEra: "1960–Present (Modern Tailoring to Global Runway)",
    pioneers: [
      "Shade Thomas-Fahm",
      "Chief Nike Davies-Okundaye",
      "Deola Sagoe",
      "Kenneth Ize",
      "Adebayo Oke-Lawal",
    ],
    keyMovements: [
      "Hand-Loomed Aso-Oke Weaving",
      "Adire Indigo Resist Dyeing",
      "Post-Independence Bespoke Tailoring",
      "Contemporary Architectural Couture",
    ],
    accentColor: "#5A82B8",
    badgeBorder: "border-blue-400/40",
    heroImage: "",
    stats: [
      { label: "Textile Typologies", value: "64 Weaves" },
      { label: "Historic Garments", value: "320 Preserved" },
      { label: "Artisan Guilds", value: "12 Lineages" },
    ],
    curatorialPrompt:
      "Inspect hand-loomed warp and weft fibers, iconic boubou silhouettes, and sculptural headwear.",
  },
  {
    id: "disc-04",
    number: "04",
    slug: "design",
    title: "DESIGN",
    yorubaTerm: "Apejuwe",
    subtitle: "Natural Synthesis, Anti-Colonial Print & Monumental Identity",
    quote: "We must synthesize the traditions of our ancestors with the technologies of today.",
    quoteAuthor: "Bruce Onobrakpeya / Zaria Art Society (1958)",
    description:
      "Nigerian graphic and spatial design broke free through the 'Natural Synthesis' movement in 1958. From Erhabor Emokpae's world-famous FESTAC '77 visual identity and Lemi Ghariokwu's hand-lettered LP protest art, to modernist architectural wonders like the National Theatre Iganmu, Nigerian design created a visual language of absolute cultural sovereignty.",
    seminalEra: "1958–1980 (Natural Synthesis & FESTAC Era)",
    pioneers: [
      "Erhabor Emokpae",
      "Lemi Ghariokwu",
      "Bruce Onobrakpeya",
      "Uche Okeke",
      "Demas Nwoko",
    ],
    keyMovements: [
      "Zaria Rebels 'Natural Synthesis'",
      "FESTAC '77 Identity System",
      "Protest Vinyl Sleeve Typography",
      "Post-Colonial Modernist Architecture",
    ],
    accentColor: "#C84B31",
    badgeBorder: "border-red-500/40",
    heroImage: "",
    stats: [
      { label: "Design Ephemera", value: "510+ Items" },
      { label: "Original Posters", value: "210 Scans" },
      { label: "Type Specimens", value: "45 Restored" },
    ],
    curatorialPrompt:
      "Discover hand-set letterpress posters, political vinyl covers, and modernist civic identities.",
  },
];
