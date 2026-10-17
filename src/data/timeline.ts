export interface TimelineEra {
  id: string;
  era: '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s+';
  years: string;
  title: string;
  subtitle: string;
  historicalContext: string;
  creativeMilestone: string;
  primaryDiscipline: string;
  representativeArtifact: {
    title: string;
    creator: string;
    medium: string;
    accession: string;
  };
  keyFigures: string[];
  themeColor: string;
  imageSrc: string;
}

export const TIMELINE_ERAS: TimelineEra[] = [
  {
    id: "era-1950s",
    era: "1950s",
    years: "1950 – 1959",
    title: "The Dawn of Sovereignty",
    subtitle: "Anticolonial Press, Early Highlife & The Natural Synthesis Manifesto",
    historicalContext:
      "As agitation for self-determination swept through Nigeria, creative pioneers weaponized visual print, photo studios, and ballroom dance orchestras. In Zaria, young art students formed the 1958 Zaria Rebels, demanding 'Natural Synthesis'—the fusion of indigenous African forms with modern technique.",
    creativeMilestone:
      "Formation of the Zaria Art Society (1958) and the explosion of early highlife big bands in Lagos and Ibadan hotels.",
    primaryDiscipline: "Music & Graphic Culture",
    representativeArtifact: {
      title: "Natural Synthesis Manifesto & Early Woodcut Prints",
      creator: "Bruce Onobrakpeya & Uche Okeke",
      medium: "Relief print and letterpress",
      accession: "ARC-DS-1958-003",
    },
    keyFigures: [
      "E.T. Mensah",
      "Bruce Onobrakpeya",
      "Uche Okeke",
      "Michael Crowder",
      "Bobby Benson",
    ],
    themeColor: "#D4A373",
    imageSrc: "",
  },
  {
    id: "era-1960s",
    era: "1960s",
    years: "1960 – 1969",
    title: "Post-Independence Euphoria",
    subtitle: "Sovereignty Celebrations, Modernized Fashion & Rex Lawson's Horns",
    historicalContext:
      "1 October 1960 unleashed a tidal wave of creative confidence. In Lagos, Shade Thomas-Fahm opened the country's first modern fashion boutique, revolutionizing traditional women's clothing. Cardinal Rex Jim Lawson and Victor Olaiya filled nightlife ballrooms with highlife melodies of hope, even as political tensions foreshadowed the civil war.",
    creativeMilestone:
      "Shade Thomas-Fahm invents the modernized pre-stitched wrap skirt (Iro) with zippers and designs the global boubou.",
    primaryDiscipline: "Fashion & Photography",
    representativeArtifact: {
      title: "Yellow Sisi Master Tape & Philips 45 RPM Sleeve",
      creator: "Cardinal Rex Jim Lawson & His Mayors Band",
      medium: "Vinyl 7-inch & letterpress sleeve",
      accession: "ARC-MU-1962-014",
    },
    keyFigures: [
      "Shade Thomas-Fahm",
      "Cardinal Rex Lawson",
      "Dr. Victor Olaiya",
      "Peter Obe",
      "J.D. Ojeikere",
    ],
    themeColor: "#E09F3E",
    imageSrc: "",
  },
  {
    id: "era-1970s",
    era: "1970s",
    years: "1970 – 1979",
    title: "The Golden Decade & FESTAC '77",
    subtitle: "Fela's Kalakuta Republic, Black World Unity & Ojeikere's Hairstyle Archive",
    historicalContext:
      "Fueled by the oil boom and cultural sovereignty, Lagos became the creative capital of the Black world. In 1977, FESTAC brought 16,000 artists from 56 nations under the banner of the 16th-century Benin Queen Idia mask. Simultaneously, Fela Kuti established Kalakuta Republic, turning Afrobeat into an uncompromising voice against military corruption.",
    creativeMilestone:
      "FESTAC '77 international celebration and J.D. 'Okhai Ojeikere's systematic documentation of over 1,000 Nigerian hairstyles.",
    primaryDiscipline: "Music, Design & Photography",
    representativeArtifact: {
      title: "Official FESTAC '77 Visual Identity & Ivory Mask Emblem",
      creator: "Erhabor Emokpae",
      medium: "Silk-screened heraldic emblem & typography",
      accession: "ARC-DS-1977-001",
    },
    keyFigures: [
      "Fela Anikulapo Kuti",
      "Erhabor Emokpae",
      "Lemi Ghariokwu",
      "J.D. 'Okhai Ojeikere",
      "Tony Allen",
    ],
    themeColor: "#C84B31",
    imageSrc: "",
  },
  {
    id: "era-1980s",
    era: "1980s",
    years: "1980 – 1999",
    title: "Military Resistance & Street Cassettes",
    subtitle: "Jùjú Synchrony, Fuji Street Explosion & Cassette Tape Graphics",
    historicalContext:
      "Facing economic austerity and military regimes, Nigerian creatives decentralized into grassroots networks. King Sunny Ade brought Jùjú talking drums to worldwide acclaim with Island Records, while Alhaji Sikuru Ayinde Barrister established Fuji music as the roaring voice of the Lagos working class, distributed through millions of colorful audio cassettes.",
    creativeMilestone:
      "Global crossover of King Sunny Ade's 'Synchro System' and the establishment of Fuji music as the dominant indigenous urban genre.",
    primaryDiscipline: "Music & Vernacular Typography",
    representativeArtifact: {
      title: "Synchro System Gatefold Vinyl Artwork",
      creator: "King Sunny Ade & Island Records Art Dept",
      medium: "Full color lithograph 12-inch sleeve",
      accession: "ARC-MU-1983-028",
    },
    keyFigures: [
      "King Sunny Ade",
      "Alhaji Sikuru Ayinde Barrister",
      "Ebenezer Obey",
      "Hakeem Shitta",
      "Tam Fiofori",
    ],
    themeColor: "#2A9D8F",
    imageSrc: "",
  },
  {
    id: "era-2000s+",
    era: "2000s+",
    years: "2000 – Present",
    title: "Contemporary Renaissance & Global Reconnection",
    subtitle: "Lagos Fashion Week, Afrobeats Dominance & Archival Digitization",
    historicalContext:
      "The return of civilian democracy sparked a monumental renaissance. Contemporary designers like Kenneth Ize revived ancient Aso-Oke weaving on Paris runways, Stephen Tayo and Ruth Ossai reimagined portraiture, and Nigerian pop sound conquered global stadiums—proving decisively that the creative choices of earlier generations remain living forces.",
    creativeMilestone:
      "Global mainstreaming of Nigerian creative industries across fashion, music, visual arts, and digital archiving.",
    primaryDiscipline: "All Disciplines Unified",
    representativeArtifact: {
      title: "Hand-Loomed Multicolored Aso-Oke Tailored Coat",
      creator: "Kenneth Ize Studio (Kwara Weavers Guild)",
      medium: "Handwoven raw silk, cotton and metallic threads",
      accession: "ARC-FA-2021-089",
    },
    keyFigures: [
      "Kenneth Ize",
      "Stephen Tayo",
      "Ruth Ossai",
      "Adebayo Oke-Lawal",
      "The Cavemen",
    ],
    themeColor: "#5A82B8",
    imageSrc: "",
  },
];
