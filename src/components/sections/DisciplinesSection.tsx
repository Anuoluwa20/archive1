"use client";

import React, { useState } from "react";
import { DISCIPLINES, type Discipline } from "@/data/disciplines";
import { ArrowRight, Sparkles, Layers, Users, Calendar, Bookmark } from "lucide-react";
import { artworkFor } from "@/lib/artwork";

interface DisciplinesSectionProps {
  onSelectDisciplineFilter: (slug: 'photography' | 'music' | 'fashion' | 'design') => void;
}

export function DisciplinesSection({ onSelectDisciplineFilter }: DisciplinesSectionProps) {
  const [activeTab, setActiveTab] = useState<Discipline>(DISCIPLINES[0]);

  const handleFilterCollection = (slug: 'photography' | 'music' | 'fashion' | 'design') => {
    onSelectDisciplineFilter(slug);
    const el = document.getElementById("collection");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="disciplines"
      className="relative py-24 px-4 md:px-8 border-t border-white/[0.08] bg-archival-950 registration-crosshair"
      aria-labelledby="disciplines-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="space-y-2">
            <span className="inline-block px-2.5 py-0.5 bg-bronze/10 border border-bronze/30 font-mono text-[11px] uppercase tracking-widest text-bronze font-bold rounded-xs">
              03 // Creative Matrix
            </span>
            <h2 id="disciplines-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              FOUR DISCIPLINES
            </h2>
          </div>
          <p className="font-serif text-archival-400 max-w-md text-sm md:text-base leading-relaxed">
            Distinct yet inseparable expressions of Nigerian cultural memory. Select a discipline to inspect its pioneers and representative artifacts.
          </p>
        </div>

        {/* Matrix Container: Left Selector & Right Dynamic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive 4-Discipline Cards / Tabs */}
          <div className="lg:col-span-5 space-y-3" role="tablist" aria-label="Select creative discipline">
            {DISCIPLINES.map((item) => {
              const isActive = activeTab.id === item.id;
              return (
                <button
                  key={item.id}
                  role="tab"
                  id={`tab-${item.slug}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${item.slug}`}
                  onClick={() => setActiveTab(item)}
                  type="button"
                  className={`w-full text-left p-5 rounded-xs border transition-all duration-200 flex items-start justify-between group ${
                    isActive
                      ? "bg-archival-850/90 border-bronze/60 shadow-glowBronze translate-x-1"
                      : "bg-archival-900 border-white/[0.06] hover:border-white/20 hover:bg-archival-850/50"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 font-mono text-xs">
                      <span className={isActive ? "text-terracotta font-bold" : "text-archival-500"}>
                        {item.number}
                      </span>
                      <span className="text-archival-600">/</span>
                      <span className="text-bronze italic font-serif">
                        {item.yorubaTerm}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold tracking-tight text-white group-hover:text-bronze-light transition-colors">
                      {item.title}
                    </h3>

                    <p className="font-mono text-[11px] text-archival-400 line-clamp-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <span
                    className={`mt-1 font-mono text-[10px] px-2.5 py-0.5 rounded-xs tracking-wider uppercase transition-colors ${
                      isActive ? "bg-terracotta text-white font-bold" : "text-archival-500 group-hover:text-white"
                    }`}
                  >
                    Active
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Deep Showcase Window */}
          <div
            id={`panel-${activeTab.slug}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.slug}`}
            className="lg:col-span-7 bg-archival-850/90 rounded-sm border border-white/[0.12] p-6 md:p-8 space-y-8 animate-in fade-in duration-200 glass-panel-elevated"
          >
            {/* Top Showcase Banner with Image Plate */}
            <div className="relative h-64 sm:h-72 w-full rounded-xs overflow-hidden border border-white/10 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artworkFor(activeTab.id, activeTab.slug, 1200, 700)}
                alt={activeTab.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-archival-950 via-archival-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-bronze font-bold block">
                    Seminal Period
                  </span>
                  <span className="font-display text-lg font-bold text-white">
                    {activeTab.seminalEra}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-right font-mono text-xs text-white">
                  {activeTab.stats.map((s, idx) => (
                    <div key={idx} className="hidden sm:block">
                      <span className="block text-[10px] text-archival-400">{s.label}</span>
                      <span className="font-bold text-bronze-light">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Curatorial Quote & Core Narrative */}
            <div className="space-y-4">
              <blockquote className="font-editorial text-lg md:text-xl text-white italic border-l-2 border-bronze pl-4 leading-snug">
                "{activeTab.quote}"
                <footer className="font-mono text-xs not-italic text-archival-400 mt-2">
                  — {activeTab.quoteAuthor}
                </footer>
              </blockquote>

              <p className="font-serif text-sm md:text-base leading-relaxed text-archival-300">
                {activeTab.description}
              </p>
            </div>

            {/* Pioneers & Movements Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="space-y-2">
                <span className="text-bronze uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Users className="w-3.5 h-3.5 text-terracotta" /> Pioneers & Innovators
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeTab.pioneers.map((pioneer) => (
                    <span
                      key={pioneer}
                      className="px-2.5 py-1 bg-archival-900 border border-white/10 text-archival-200 rounded-xs text-[11px]"
                    >
                      {pioneer}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-bronze uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Layers className="w-3.5 h-3.5 text-terracotta" /> Seminal Movements
                </span>
                <ul className="space-y-1 text-archival-300 text-[11px]">
                  {activeTab.keyMovements.map((move) => (
                    <li key={move} className="flex items-center gap-1.5">
                      <span className="text-terracotta">•</span>
                      <span>{move}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-archival-400 hidden sm:inline">
                {activeTab.curatorialPrompt}
              </span>

              <button
                onClick={() => handleFilterCollection(activeTab.slug)}
                type="button"
                className="flex items-center gap-2 px-6 py-3 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase tracking-wider rounded-xs font-bold transition-all shadow-glowTerracotta ml-auto"
              >
                <span>Filter Collection by {activeTab.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
