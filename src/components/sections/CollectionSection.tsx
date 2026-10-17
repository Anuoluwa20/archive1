"use client";

import React, { useState, useMemo, forwardRef } from "react";
import { ARTIFACTS, type Artifact } from "@/data/artifacts";
import { Search, Filter, RotateCcw, Eye, ShieldCheck, Tag } from "lucide-react";
import { artworkFor } from "@/lib/artwork";

interface CollectionSectionProps {
  onSelectArtifact: (artifact: Artifact) => void;
  activeDisciplineFilter: string;
  setActiveDisciplineFilter: (d: string) => void;
  activeEraFilter: string;
  setActiveEraFilter: (e: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
}

export function CollectionSection({
  onSelectArtifact,
  activeDisciplineFilter,
  setActiveDisciplineFilter,
  activeEraFilter,
  setActiveEraFilter,
  searchInputRef,
}: CollectionSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const disciplines = [
    { label: "All Disciplines", value: "all" },
    { label: "01 Photography", value: "photography" },
    { label: "02 Music", value: "music" },
    { label: "03 Fashion", value: "fashion" },
    { label: "04 Design", value: "design" },
  ];

  const eras = [
    { label: "All Eras", value: "all" },
    { label: "1950s Sovereignty", value: "1950s" },
    { label: "1960s Independence", value: "1960s" },
    { label: "1970s FESTAC & Golden", value: "1970s" },
    { label: "1980s Cassettes & Jùjú", value: "1980s" },
    { label: "1990s Underground", value: "1990s" },
    { label: "2000s+ Contemporary", value: "2000s+" },
  ];

  // Client-side instant filter engine
  const filteredArtifacts = useMemo(() => {
    return ARTIFACTS.filter((item) => {
      // Discipline filter
      if (activeDisciplineFilter !== "all" && item.discipline !== activeDisciplineFilter) {
        return false;
      }
      // Era filter
      if (activeEraFilter !== "all" && item.era !== activeEraFilter) {
        return false;
      }
      // Search query filter (fuzzy match across title, creator, medium, tags, notes)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCreator = item.creator.toLowerCase().includes(query);
        const matchesMedium = item.medium.toLowerCase().includes(query);
        const matchesOrigin = item.origin.toLowerCase().includes(query);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(query));
        const matchesNote = item.curatorialNote.toLowerCase().includes(query);

        if (!matchesTitle && !matchesCreator && !matchesMedium && !matchesOrigin && !matchesTags && !matchesNote) {
          return false;
        }
      }
      return true;
    });
  }, [activeDisciplineFilter, activeEraFilter, searchQuery]);

  const displayedArtifacts = useMemo(() => {
    return filteredArtifacts.slice(0, visibleCount);
  }, [filteredArtifacts, visibleCount]);

  const handleResetFilters = () => {
    setActiveDisciplineFilter("all");
    setActiveEraFilter("all");
    setSearchQuery("");
    setVisibleCount(12);
  };

  return (
    <section
      id="collection"
      className="relative py-24 px-4 md:px-8 theme-paper border-t-[3px] border-ink"
      aria-labelledby="collection-heading"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
              06 / The Living Vault
            </span>
            <h2 id="collection-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              THE COLLECTION
            </h2>
          </div>
          <div className="font-mono text-xs text-archival-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Displaying {displayedArtifacts.length} of {filteredArtifacts.length} Matching Records</span>
            <span className="text-archival-600">({ARTIFACTS.length} Total Registered)</span>
          </div>
        </div>

        {/* Facet Toolbar: Search Bar, Discipline Filter, Era Filter */}
        <div className="bg-archival-850 p-4 md:p-6 rounded-sm border border-white/15 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
            {/* Search Input Field */}
            <div className="md:col-span-6 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-terracotta" />
              <input
                ref={searchInputRef as React.RefObject<HTMLInputElement>}
                type="text"
                placeholder="Search across title, creator, tags, medium (e.g. Fela, Ojeikere, Aso-Oke, FESTAC)..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full pl-10 pr-4 py-2.5 bg-archival-950 border border-white/15 rounded-xs text-white placeholder:text-archival-500 font-mono text-xs focus:border-terracotta focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  type="button"
                  aria-label="Clear search query"
                  className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-xs text-archival-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Era Filter Dropdown */}
            <div className="md:col-span-4">
              <select
                value={activeEraFilter}
                onChange={(e) => {
                  setActiveEraFilter(e.target.value);
                  setVisibleCount(12);
                }}
                className="w-full px-3.5 py-2.5 bg-archival-950 border border-white/15 rounded-xs text-archival-200 font-mono text-xs focus:border-terracotta focus:outline-none"
              >
                {eras.map((era) => (
                  <option key={era.value} value={era.value}>
                    {era.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset Filters CTA */}
            <div className="md:col-span-2">
              <button
                onClick={handleResetFilters}
                type="button"
                className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/5 hover:bg-white/10 text-archival-300 hover:text-white border border-white/10 rounded-xs font-mono text-xs uppercase tracking-wider transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5 text-terracotta" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Discipline Filter Horizontal Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10 font-mono text-xs">
            <span className="text-archival-500 uppercase tracking-widest text-[10px] mr-1 hidden sm:inline">
              Filter Discipline:
            </span>
            {disciplines.map((d) => {
              const isSelected = activeDisciplineFilter === d.value;
              return (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => {
                    setActiveDisciplineFilter(d.value);
                    setVisibleCount(12);
                  }}
                  className={`px-3 py-1.5 rounded-xs transition-all tracking-wider uppercase text-[11px] ${
                    isSelected
                      ? "bg-terracotta text-white font-bold shadow-md"
                      : "bg-archival-900 text-archival-400 hover:text-white border border-white/10 hover:border-white/25"
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Collection Grid Container */}
        {displayedArtifacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedArtifacts.map((artifact) => (
              <div
                key={artifact.id}
                onClick={() => onSelectArtifact(artifact)}
                className="group relative bg-archival-850 rounded-sm border border-white/10 hover:border-bronze overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:rotate-[-0.4deg] shadow-lg hover:shadow-glowBronze"
              >
                {/* Top Accession & Discipline Badge Bar */}
                <div className="flex items-center justify-between p-3 font-mono text-[10px] tracking-widest border-b border-white/10 bg-archival-950/60 text-archival-400">
                  <span className="truncate max-w-[60%]">{artifact.accessionNumber}</span>
                  <span className="capitalize px-1.5 py-0.5 rounded-xs bg-terracotta/10 text-terracotta border border-terracotta/20 font-bold">
                    {artifact.discipline}
                  </span>
                </div>

                {/* Aspect Ratio 4:5 Image Box */}
                <div className="crop-marks relative aspect-[4/5] w-full overflow-hidden bg-archival-950">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={artworkFor(artifact.accessionNumber, artifact.discipline)}
                    alt={artifact.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter contrast-105 saturate-[0.9] group-hover:saturate-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-archival-950 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Hover Inspect Pill Button */}
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="flex items-center gap-1.5 px-3 py-1.5 bg-terracotta text-white font-mono text-[11px] font-bold uppercase rounded-xs shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                {/* Card Details & Colophon */}
                <div className="p-4 space-y-2 flex-grow flex flex-col justify-between bg-archival-850">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-archival-400 block">
                      {artifact.year} • {artifact.origin}
                    </span>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-terracotta transition-colors line-clamp-1">
                      {artifact.title}
                    </h3>
                    <p className="font-editorial text-xs italic text-archival-300 line-clamp-1">
                      By {artifact.creator}
                    </p>
                  </div>

                  <p className="vellum font-editorial text-xs leading-relaxed line-clamp-3 px-2.5 py-2 mt-1 rounded-xs">
                    {artifact.curatorialNote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-archival-850 rounded-sm border border-white/10 space-y-4">
            <Tag className="w-10 h-10 text-archival-500 mx-auto" />
            <h3 className="font-display text-xl font-bold text-white">
              No Archival Records Found
            </h3>
            <p className="font-serif text-sm text-archival-400 max-w-md mx-auto">
              No artifacts matched your current filter criteria or search query. Try broadening your terms or resetting filters.
            </p>
            <button
              onClick={handleResetFilters}
              type="button"
              className="px-5 py-2.5 bg-terracotta text-white font-mono text-xs uppercase tracking-wider rounded-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Load More Pagination Button */}
        {displayedArtifacts.length < filteredArtifacts.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              type="button"
              className="px-8 py-3.5 bg-archival-850 hover:bg-terracotta border border-white/20 hover:border-terracotta text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xs transition-all shadow-md"
            >
              Load Additional Archival Records ({filteredArtifacts.length - displayedArtifacts.length} Remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
