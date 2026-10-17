"use client";

import React, { useState, useRef, useCallback } from "react";
import type { ContinuityPair } from "@/data/continuities";
import { GitCompare, Sparkles } from "lucide-react";
import { artworkFor } from "@/lib/artwork";

export function ComparisonSlider({ pair }: { pair: ContinuityPair }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="space-y-5">
      {/* Discipline Tag & Lineage Header */}
      <div className="flex items-center justify-between font-mono text-xs text-archival-400">
        <div className="flex items-center gap-2">
          <span className="uppercase tracking-widest px-3 py-1 bg-terracotta/15 border border-terracotta/40 rounded-xs text-terracotta font-bold">
            {pair.disciplineLabel}
          </span>
          <span className="text-bronze font-bold hidden sm:inline text-[11px]">
            Genealogical Lineage
          </span>
        </div>
        <span className="text-[11px] text-archival-400 font-medium">
          Drag golden divider to compare eras
        </span>
      </div>

      {/* Interactive Split Frame */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[420px] md:h-[500px] rounded-sm overflow-hidden border border-white/[0.12] select-none cursor-ew-resize bg-archival-950 shadow-2xl"
      >
        {/* Right / Contemporary Background Layer */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artworkFor(pair.id + "-now", "fashion")}
          alt={pair.contemporaryTitle}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 z-10 bg-archival-950/85 backdrop-blur-md px-4 py-2 rounded-xs border border-emerald-500/30 text-right shadow-xl">
          <span className="font-mono text-[10px] uppercase tracking-widest text-emerald-400 block font-bold">
            Contemporary Successor
          </span>
          <span className="font-display text-sm md:text-base font-bold text-white block">
            {pair.contemporaryCreator}
          </span>
          <span className="font-mono text-[11px] text-archival-300 block">
            {pair.contemporaryYear}
          </span>
        </div>

        {/* Left / Historic Foreground Layer with Clip-path */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={artworkFor(pair.id + "-then", "photography")}
            alt={pair.historicTitle}
            className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 brightness-95"
          />
          <div className="absolute top-4 left-4 z-10 bg-archival-950/85 backdrop-blur-md px-4 py-2 rounded-xs border border-terracotta/40 text-left shadow-xl">
            <span className="font-mono text-[10px] uppercase tracking-widest text-terracotta block font-bold">
              Archival Precursor
            </span>
            <span className="font-display text-sm md:text-base font-bold text-white block">
              {pair.historicCreator}
            </span>
            <span className="font-mono text-[11px] text-archival-300 block">
              {pair.historicYear}
            </span>
          </div>
        </div>

        {/* Vertical Divider Line with Golden Bronze Handle */}
        <div
          className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-bronze via-white to-bronze z-20 shadow-[0_0_15px_rgba(212,175,55,0.7)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-bronze text-archival-950 shadow-glowBronze flex items-center justify-center font-mono text-xs font-bold border-2 border-white cursor-ew-resize">
            ⇄
          </div>
        </div>
      </div>

      {/* Accessible Range Input for Keyboard & Screen Readers */}
      <div className="flex items-center gap-3">
        <label htmlFor={`slider-${pair.id}`} className="sr-only">
          Compare {pair.historicCreator} and {pair.contemporaryCreator}
        </label>
        <input
          id={`slider-${pair.id}`}
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full h-1.5 bg-archival-700 rounded-lg appearance-none cursor-pointer accent-bronze"
        />
      </div>

      {/* Curatorial Lineage Synthesis Box */}
      <div className="p-5 bg-archival-850 rounded-sm border border-white/10 space-y-2 glass-panel">
        <div className="flex items-baseline justify-between border-b border-white/10 pb-2">
          <h4 className="font-display text-sm md:text-base font-bold text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-bronze" />
            <span>Lineage Continuity Analysis</span>
          </h4>
          <span className="font-mono text-[10px] text-bronze uppercase font-bold tracking-wider">
            Curatorial Synthesis
          </span>
        </div>
        <p className="font-serif text-sm md:text-base leading-relaxed text-archival-200 pt-1">
          {pair.lineageAnalysis}
        </p>
      </div>
    </div>
  );
}
