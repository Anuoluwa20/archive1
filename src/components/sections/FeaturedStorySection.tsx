"use client";

import React, { useState } from "react";
import { FEATURED_STORY } from "@/data/stories";
import { ZoomIn, Volume2, ShieldCheck, ExternalLink, BookmarkCheck } from "lucide-react";
import { artworkFor } from "@/lib/artwork";

export function FeaturedStorySection() {
  const [activeHairstyle, setActiveHairstyle] = useState(FEATURED_STORY.keyArtifacts[0]);
  const [showAudioTranscript, setShowAudioTranscript] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section
      id="featured-story"
      className="relative py-24 px-4 md:px-8 theme-indigo border-t-[3px] border-bronze"
      aria-labelledby="featured-story-heading"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
              04 / Featured Curatorial Monograph
            </span>
            <h2 id="featured-story-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              ARCHITECTURE OF THE CROWN
            </h2>
          </div>
          <div className="font-mono text-xs text-archival-400">
            <span className="text-white font-bold">{FEATURED_STORY.creator}</span>
            <span className="block text-archival-500">{FEATURED_STORY.datesActive}</span>
          </div>
        </div>

        {/* Deep Curatorial Exhibition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: High-Res Darkroom Photographic Plate with Loupe */}
          <div className="lg:col-span-6 bg-archival-950 p-6 md:p-8 rounded-sm border border-white/15 space-y-4">
            {/* Film Margins & Darkroom Perforations */}
            <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-archival-400 border-b border-white/10 pb-3">
              <span>SERIES: ARC-PH-OJEIKERE-1970</span>
              <span>120MM HASSELBLAD • KODAK TRI-X</span>
            </div>

            <div
              onClick={() => setIsZoomed(!isZoomed)}
              className="relative w-full aspect-square bg-archival-900 rounded-xs overflow-hidden cursor-zoom-in group border border-white/5"
              title="Click to toggle inspection zoom"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={artworkFor("OJEIKERE-CROWN", "photography", 1200, 1000)}
                alt="J.D. Okhai Ojeikere hairstyle study"
                className={`w-full h-full object-cover transition-transform duration-500 filter grayscale contrast-125 ${
                  isZoomed ? "scale-125" : "group-hover:scale-105"
                }`}
              />

              {/* Curatorial watermark badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded-xs border border-white/20 font-mono text-[10px] text-archival-300 flex items-center gap-1.5">
                <ZoomIn className="w-3 h-3 text-terracotta" />
                <span>{isZoomed ? "Zoomed 125%" : "Inspect Silver Gelatin Grain"}</span>
              </div>
            </div>

            {/* Active Hairstyle Detail Badge */}
            <div className="p-4 bg-archival-900 rounded-xs border border-white/10 space-y-1.5">
              <div className="flex items-baseline justify-between font-mono text-xs">
                <span className="text-terracotta font-bold text-sm">
                  {activeHairstyle.title}
                </span>
                <span className="text-archival-400 italic">
                  Yoruba: {activeHairstyle.yorubaName} ({activeHairstyle.year})
                </span>
              </div>
              <p className="font-serif text-xs md:text-sm text-archival-300 leading-relaxed">
                {activeHairstyle.meaning}
              </p>
              <span className="font-mono text-[10px] text-archival-500 block pt-1">
                Medium: {activeHairstyle.medium}
              </span>
            </div>

            {/* 4 Hairstyle Typology Selectors */}
            <div className="space-y-2 pt-2">
              <span className="font-mono text-[11px] text-archival-400 uppercase tracking-widest block font-bold">
                Select Hairstyle Typology Specimen:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs">
                {FEATURED_STORY.keyArtifacts.map((art) => (
                  <button
                    key={art.yorubaName}
                    type="button"
                    onClick={() => setActiveHairstyle(art)}
                    className={`p-2 rounded-xs border text-center transition-all ${
                      activeHairstyle.yorubaName === art.yorubaName
                        ? "bg-terracotta text-white border-terracotta font-bold shadow-md"
                        : "bg-archival-900 border-white/10 text-archival-300 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="block font-bold text-[11px]">{art.yorubaName}</span>
                    <span className="block text-[9px] opacity-80">{art.year}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative Essay & Audio Voice Snippet */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 bg-terracotta/10 border border-terracotta/30 text-terracotta rounded-xs font-mono text-xs uppercase tracking-widest font-bold">
                Monograph Study • 1968–1999
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white leading-snug">
                {FEATURED_STORY.subtitle}
              </h3>
            </div>

            <div className="space-y-4 font-serif text-archival-300 text-sm sm:text-base leading-relaxed border-l-2 border-white/15 pl-5">
              {FEATURED_STORY.historicalEssay.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Oral History / Audio Narration Snippet */}
            <div className="p-5 bg-archival-850 rounded-xs border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-mono text-xs text-white font-bold uppercase tracking-wider">
                  <Volume2 className="w-4 h-4 text-terracotta" />
                  <span>Oral History Archive Snippet</span>
                </div>
                <button
                  onClick={() => setShowAudioTranscript(!showAudioTranscript)}
                  type="button"
                  className="font-mono text-xs text-terracotta hover:underline"
                >
                  {showAudioTranscript ? "Hide Transcript" : "Read Transcript"}
                </button>
              </div>

              {showAudioTranscript && (
                <blockquote className="font-editorial text-sm italic text-archival-200 bg-archival-900 p-3 rounded-xs border-l-2 border-terracotta">
                  {FEATURED_STORY.audioTranscript}
                </blockquote>
              )}
            </div>

            {/* Provenance Ledger & Citation */}
            <div className="p-5 bg-archival-950 rounded-xs border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2 text-white font-bold uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Provenance & Rights Register</span>
              </div>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-archival-400 pt-1">
                {FEATURED_STORY.provenanceDetails.map((detail, idx) => (
                  <div key={idx} className="border-b border-white/5 pb-1">
                    <dt className="text-archival-500 uppercase">{detail.label}</dt>
                    <dd className="text-archival-200 font-medium">{detail.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="pt-2 text-[10px] text-archival-500 border-t border-white/5">
                <span className="font-bold uppercase text-archival-400">Scholarly Citation: </span>
                <span>{FEATURED_STORY.citation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
