"use client";

import React from "react";
import { ArrowDownRight, Compass, ShieldCheck, Sparkles, Eye, Film } from "lucide-react";
import { artworkFor } from "@/lib/artwork";

export function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const previewStrip = [
    {
      frame: "FR-01",
      title: "Ojeikere Hairstyles",
      image: artworkFor("FR-01", "photography", 200, 200),
      discipline: "Photography",
    },
    {
      frame: "FR-02",
      title: "Kalakuta LP Master",
      image: artworkFor("FR-02", "music", 200, 200),
      discipline: "Music",
    },
    {
      frame: "FR-03",
      title: "Thomas-Fahm Tailoring",
      image: artworkFor("FR-03", "fashion", 200, 200),
      discipline: "Fashion",
    },
    {
      frame: "FR-04",
      title: "FESTAC '77 Identity",
      image: artworkFor("FR-04", "design", 200, 200),
      discipline: "Design",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex flex-col justify-between pt-36 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Ambient Atmospheric Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-terracotta/30 via-bronze/20 to-transparent blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      {/* Top Status & Institutional Metric Rail */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bronze-metallic"></span>
          </span>
          <span className="text-white font-semibold uppercase tracking-widest text-[11px]">
            Permanent Exhibition Vault
          </span>
          <span className="hidden sm:inline text-archival-500">•</span>
          <span className="hidden sm:inline text-archival-300">
            510+ Verified Historical References
          </span>
        </div>

        <div className="flex items-center gap-3 text-archival-400 text-[11px] tracking-wider uppercase">
          <span>Lagos / Ibadan / Zaria / Diaspora</span>
          <span className="text-terracotta">•</span>
          <span className="text-bronze font-bold">EST. 1960 — RECLAIMED 2026</span>
        </div>
      </div>

      {/* Center Monumental Headline & Core Proposition */}
      <div className="relative z-10 my-auto py-10 md:py-14 space-y-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="inline-block px-2.5 py-0.5 bg-terracotta/15 border border-terracotta/30 font-mono text-[11px] uppercase tracking-[0.25em] text-terracotta font-bold rounded-xs">
              01 // Opening Statement
            </span>
            <span className="font-mono text-[11px] text-bronze uppercase tracking-widest hidden sm:inline">
              [ Curatorial Directive ]
            </span>
          </div>

          <h1
            id="hero-heading"
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-white tracking-monumental leading-[0.82] uppercase select-none drop-shadow-2xl"
          >
            THE PAST <br />
            <span className="text-transparent [-webkit-text-stroke:2px_#D9532F] hover:[-webkit-text-stroke:2px_#E5C378] transition-all duration-500">
              IS NOT PAST.
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pt-2">
          <p className="md:col-span-7 font-editorial text-xl sm:text-2xl md:text-3xl text-archival-200 leading-snug">
            An evolving digital museum of Nigerian <span className="text-white font-medium italic underline decoration-terracotta underline-offset-4">photography</span>, <span className="text-white font-medium italic underline decoration-ochre underline-offset-4">music</span>, <span className="text-white font-medium italic underline decoration-blue-400 underline-offset-4">fashion</span>, and <span className="text-white font-medium italic underline decoration-emerald-400 underline-offset-4">design</span>. The stories that shaped us. The creativity that still moves us.
          </p>

          <div className="md:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 justify-end">
            <button
              onClick={() => scrollTo("disciplines")}
              type="button"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xs shadow-glowTerracotta transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>ENTER THE ARCHIVE</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo("collection")}
              type="button"
              className="flex items-center justify-center gap-2 px-7 py-4 bg-white/[0.04] hover:bg-white/[0.08] text-archival-100 border border-white/20 hover:border-bronze font-mono text-xs uppercase tracking-widest font-bold rounded-xs transition-colors"
            >
              <Compass className="w-4 h-4 text-bronze" />
              <span>EXPLORE VAULT</span>
            </button>
          </div>
        </div>

        {/* Tactile Darkroom Contact Sheet Preview Ticker (Inspired by Dribbble/Behance Hero Studies) */}
        <div className="pt-6">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-archival-400 mb-2.5 px-1">
            <span className="flex items-center gap-1.5 text-bronze font-bold">
              <Film className="w-3.5 h-3.5" />
              <span>Curatorial Contact Sheet Stream</span>
            </span>
            <span className="hidden sm:inline text-archival-500">120mm Medium Format Negative Strips</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {previewStrip.map((item, idx) => (
              <div
                key={idx}
                onClick={() => scrollTo("collection")}
                className="group relative bg-archival-850 p-2.5 rounded-xs border border-white/10 hover:border-bronze transition-all cursor-pointer overflow-hidden flex items-center gap-3"
              >
                <div className="relative w-12 h-12 rounded-xs overflow-hidden flex-shrink-0 bg-archival-950 border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <span className="font-mono text-[9px] text-terracotta uppercase tracking-wider block font-bold">
                    {item.frame} • {item.discipline}
                  </span>
                  <span className="font-display text-xs font-bold text-white block truncate group-hover:text-bronze transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Live accession ticker */}
      <div className="ticker-wrap relative z-10 overflow-hidden border-y border-white/[0.08] py-2 my-4" aria-hidden="true">
        <div className="ticker-track font-mono text-[11px] uppercase tracking-[0.2em] text-archival-400">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-10 pr-10">
              {["ARC-PH-1970-001 · Onile Gogoro", "ARC-MU-1977-002 · Sorrow Tears and Blood", "Adire Eleko · Abeokuta", "FESTAC '77 · Lagos", "Aso-Oke Sányán · Iseyin", "Highlife · Brass & Guitar"].map((t) => (
                <span key={t} className="whitespace-nowrap"><span className="text-terracotta">◆</span> {t}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Curatorial Sub-ribbon with Corner Crosshairs */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/[0.08] pt-6 font-mono text-xs text-archival-400">
        <div>
          <span className="block text-[10px] uppercase text-archival-500 font-bold">Visual Identity</span>
          <span className="text-white font-medium">The Living Archive</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-archival-500 font-bold">Research Library</span>
          <span className="text-bronze font-bold">510+ Verified Records</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-archival-500 font-bold">Acoustic Engine</span>
          <span className="text-white font-medium">Synthesized Web Audio</span>
        </div>
        <div>
          <span className="block text-[10px] uppercase text-archival-500 font-bold">Accessibility</span>
          <span className="text-emerald-400 font-medium flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> WCAG 2.1 AA Compliant
          </span>
        </div>
      </div>
    </section>
  );
}
