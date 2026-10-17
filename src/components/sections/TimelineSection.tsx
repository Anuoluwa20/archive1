"use client";

import React, { useState } from "react";
import { TIMELINE_ERAS, type TimelineEra } from "@/data/timeline";
import { Calendar, ArrowRight, Shield, Award } from "lucide-react";
import { artworkFor } from "@/lib/artwork";

interface TimelineSectionProps {
  onSelectEraFilter: (era: '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s+') => void;
}

export function TimelineSection({ onSelectEraFilter }: TimelineSectionProps) {
  const [activeEra, setActiveEra] = useState<TimelineEra>(TIMELINE_ERAS[2]); // Default 1970s (Golden Decade)

  const handleFilterCollection = (era: '1950s' | '1960s' | '1970s' | '1980s' | '1990s' | '2000s+') => {
    onSelectEraFilter(era);
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="timeline"
      className="relative py-24 px-4 md:px-8 border-t border-white/10 bg-archival-950"
      aria-labelledby="timeline-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
              05 / Chronological Horizon
            </span>
            <h2 id="timeline-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              THROUGH THE YEARS
            </h2>
          </div>
          <p className="font-serif text-archival-400 max-w-md text-sm md:text-base">
            Trace the evolution of Nigerian creative movements across 5 seminal eras. Grounded in primary documents, recordings, and dates.
          </p>
        </div>

        {/* Timeline Horizontal Scrubber / Era Switcher */}
        <div className="space-y-4">
          <div className="flex items-center justify-between overflow-x-auto pb-4 gap-2 scrollbar-none border-b border-white/10" role="tablist" aria-label="Timeline Eras">
            {TIMELINE_ERAS.map((eraItem) => {
              const isSelected = activeEra.id === eraItem.id;
              return (
                <button
                  key={eraItem.id}
                  role="tab"
                  id={`timeline-tab-${eraItem.era}`}
                  aria-selected={isSelected}
                  onClick={() => setActiveEra(eraItem)}
                  type="button"
                  className={`flex-shrink-0 px-5 py-3 rounded-xs border font-mono text-xs uppercase tracking-wider transition-all duration-200 text-left ${
                    isSelected
                      ? "bg-terracotta text-white border-terracotta font-bold shadow-lg"
                      : "bg-archival-900 border-white/10 text-archival-300 hover:border-white/25 hover:text-white"
                  }`}
                >
                  <span className="block text-[10px] opacity-75">{eraItem.years}</span>
                  <span className="font-display text-sm font-bold">{eraItem.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Era Milestone Deep Presentation Card */}
        <div className="bg-archival-850 rounded-sm border border-white/15 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
          {/* Left Column: Era Imagery & Representative Accession Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative w-full aspect-[4/3] rounded-xs overflow-hidden border border-white/10 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artworkFor(activeEra.id, "photography")}
                alt={activeEra.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 font-mono text-xs text-white">
                <span className="block text-[10px] text-terracotta font-bold uppercase tracking-wider">
                  Key Movement
                </span>
                <span className="font-display text-base font-bold">
                  {activeEra.subtitle}
                </span>
              </div>
            </div>

            {/* Representative Physical Artifact Box */}
            <div className="p-4 bg-archival-900 rounded-xs border border-white/10 space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-archival-400">
                <span className="text-terracotta font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Landmark Artifact
                </span>
                <span className="text-[10px]">{activeEra.representativeArtifact.accession}</span>
              </div>
              <h4 className="font-display text-sm font-bold text-white">
                {activeEra.representativeArtifact.title}
              </h4>
              <p className="text-archival-400 text-xs">
                By {activeEra.representativeArtifact.creator} • {activeEra.representativeArtifact.medium}
              </p>
            </div>
          </div>

          {/* Right Column: Historical Narrative & Key Figures */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-white/10 border border-white/15 text-white font-mono text-xs uppercase font-bold rounded-xs">
                  {activeEra.years}
                </span>
                <span className="font-mono text-xs text-terracotta uppercase tracking-wider">
                  Discipline: {activeEra.primaryDiscipline}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                {activeEra.title}
              </h3>
              <p className="font-editorial text-lg text-archival-300 italic">
                {activeEra.subtitle}
              </p>
            </div>

            <div className="space-y-4 font-serif text-sm sm:text-base text-archival-300 leading-relaxed border-l-2 border-terracotta pl-4">
              <p>{activeEra.historicalContext}</p>
              <p className="text-white font-medium">
                <strong className="text-terracotta font-mono text-xs uppercase tracking-wider block font-bold mb-1">
                  Creative Milestone:
                </strong>
                {activeEra.creativeMilestone}
              </p>
            </div>

            {/* Key Figures Ledger */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-xs text-archival-400 uppercase tracking-widest block font-bold">
                Seminal Figures of this Era:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeEra.keyFigures.map((fig) => (
                  <span
                    key={fig}
                    className="px-2.5 py-1 bg-archival-900 border border-white/10 rounded-xs font-mono text-xs text-archival-200"
                  >
                    {fig}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Trigger to Filter Collection */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-archival-500 hidden sm:inline">
                Accession items cataloged under {activeEra.era}
              </span>
              <button
                onClick={() => handleFilterCollection(activeEra.era)}
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase tracking-wider rounded-xs font-bold transition-colors ml-auto"
              >
                <span>View {activeEra.years} In Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
