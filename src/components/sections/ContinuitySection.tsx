"use client";

import React, { useState } from "react";
import { CONTINUITY_PAIRS, type ContinuityPair } from "@/data/continuities";
import { ComparisonSlider } from "@/components/ui/ComparisonSlider";
import { GitCompare, Sparkles } from "lucide-react";

export function ContinuitySection() {
  const [activePair, setActivePair] = useState<ContinuityPair>(CONTINUITY_PAIRS[0]);

  return (
    <section
      id="continuity"
      className="relative py-24 px-4 md:px-8 border-t border-white/10 bg-archival-950"
      aria-labelledby="continuity-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
              07 / Living Lineages
            </span>
            <h2 id="continuity-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              THE CONTINUING STORY
            </h2>
          </div>
          <p className="font-serif text-archival-400 max-w-md text-sm md:text-base">
            Connecting mid-century Nigerian innovators directly to 21st-century global practitioners. The past is active fuel for today’s imagination.
          </p>
        </div>

        {/* Continuity Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Select lineage comparison">
          {CONTINUITY_PAIRS.map((pair) => {
            const isSelected = activePair.id === pair.id;
            return (
              <button
                key={pair.id}
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActivePair(pair)}
                type="button"
                className={`flex-shrink-0 px-4 py-2.5 rounded-xs border font-mono text-xs uppercase tracking-wider transition-all ${
                  isSelected
                    ? "bg-terracotta text-white border-terracotta font-bold shadow-md"
                    : "bg-archival-900 border-white/10 text-archival-300 hover:border-white/30 hover:text-white"
                }`}
              >
                <span>{pair.disciplineLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Active Comparison Slider Container */}
        <div className="bg-archival-900 rounded-sm border border-white/15 p-6 md:p-8 animate-in fade-in duration-200">
          <ComparisonSlider pair={activePair} />
        </div>
      </div>
    </section>
  );
}
