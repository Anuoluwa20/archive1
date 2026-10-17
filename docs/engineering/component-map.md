# ARCHIVE — Component Hierarchy & Interface Map
**Document ID:** `ENG-CMP-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 03 — Full-Stack Engineer  

---

## 1. Top-Level Component Tree

```
<RootLayout>
 ├── <Navbar>
 │    ├── <BrandMark>
 │    ├── <NavLinks> (Desktop & Tablet)
 │    ├── <AudioController> (Web Audio synth toggle)
 │    └── <MobileMenuTrigger>
 ├── <main id="main-content">
 │    ├── <HeroSection> (Sec 01)
 │    │    ├── <StatusRail> (WAT clock, accession count)
 │    │    ├── <Headline> ("THE PAST IS NOT PAST")
 │    │    └── <HeroActions> (CTAs, scroll indicator)
 │    ├── <ManifestoSection> (Sec 02)
 │    │    ├── <ManifestoLead>
 │    │    └── <QuoteCardsGrid>
 │    ├── <DisciplinesSection> (Sec 03)
 │    │    ├── <DisciplineTabs>
 │    │    └── <DisciplineShowcase>
 │    ├── <FeaturedStorySection> (Sec 04)
 │    │    ├── <StoryImageZoom> (Ojeikere plate)
 │    │    ├── <CuratorialEssay>
 │    │    └── <AudioSnippetPlayer>
 │    ├── <TimelineSection> (Sec 05)
 │    │    ├── <TimelineScrubber>
 │    │    └── <MilestoneCard>
 │    ├── <CollectionSection> (Sec 06)
 │    │    ├── <FacetToolbar> (Discipline pills, era filter, search input)
 │    │    ├── <CollectionGrid>
 │    │    │    └── <ArtifactCard>[]
 │    │    └── <PaginationControls>
 │    ├── <ContinuitySection> (Sec 07)
 │    │    ├── <ComparisonSlider>
 │    │    └── <LineageNotes>
 │    └── <ClosingSection> (Sec 08)
 │         ├── <SubmissionTrigger>
 │         └── <DispatchForm>
 ├── <Footer> (Sec 09)
 ├── <ArtifactModal> (Global curatorial drawer)
 ├── <SubmissionModal> (Community archive submission form)
 └── <MobileMenu> (Fullscreen drawer)
```

---

## 2. Core Component Interfaces

### 2.1 `ArtifactCard` & `ArtifactModal`
```typescript
export interface Artifact {
  id: string;
  accessionNumber: string;
  title: string;
  creator: string;
  year: number;
  era: '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s+';
  discipline: 'photography' | 'music' | 'fashion' | 'design';
  medium: string;
  origin: string;
  provenance: string;
  curatorialNote: string;
  rightsStatus: string;
  tags: string[];
  imageSrc: string;
  audioPreview?: string;
  isFeatured?: boolean;
}

export interface ArtifactCardProps {
  artifact: Artifact;
  onSelect: (artifact: Artifact) => void;
  priority?: boolean;
}

export interface ArtifactModalProps {
  artifact: Artifact | null;
  isOpen: boolean;
  onClose: () => void;
}
```

### 2.2 `AudioController`
```typescript
export interface AudioControllerProps {
  className?: string;
}

export interface AudioEngineState {
  isPlaying: boolean;
  volume: number;
  toggle: () => void;
}
```

### 2.3 `ComparisonSlider`
```typescript
export interface ComparisonSliderProps {
  historicImage: string;
  historicTitle: string;
  historicDate: string;
  contemporaryImage: string;
  contemporaryTitle: string;
  contemporaryDate: string;
  discipline: string;
}
```
