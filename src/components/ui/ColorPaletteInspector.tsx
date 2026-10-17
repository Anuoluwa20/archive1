"use client";

import React, { useState } from "react";
import { Palette, Copy, Check, Sparkles } from "lucide-react";

interface ColorSwatch {
  name: string;
  yorubaName: string;
  hex: string;
  cmyk: string;
  source: string;
  description: string;
  discipline: string;
}

export function ColorPaletteInspector() {
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [activeSwatch, setActiveSwatch] = useState<number>(0);

  const swatches: ColorSwatch[] = [
    {
      name: "Nok Terracotta / Camwood",
      yorubaName: "Osun & Amo",
      hex: "#D9532F",
      cmyk: "C:8 M:80 Y:92 K:1",
      source: "Ancient Nok Terracotta (500 BC) & Yoruba Camwood Wedding Paste",
      description: "A sacred ceremonial pigment ground from the Pterocarpus soyauxii tree, symbolizing vitality, celebration, and spiritual protection.",
      discipline: "Design & Cultural Heritage",
    },
    {
      name: "Royal Benin Bronze & Brass",
      yorubaName: "Igun Eronmwon",
      hex: "#D4AF37",
      cmyk: "C:18 M:27 Y:86 K:1",
      source: "16th-Century Benin Royal Court Commemorative Heads & Queen Idia",
      description: "Lost-wax cast bronze alloy revered in the Kingdom of Benin as an imperishable metal that reflects divine royal presence.",
      discipline: "Sculpture & Visual Identity",
    },
    {
      name: "Abeokuta Indigo Vat",
      yorubaName: "Elu Aro",
      hex: "#1B2A4A",
      cmyk: "C:90 M:75 Y:38 K:34",
      source: "Traditional Adire Eleko Indigo Dyeing Vats of Abeokuta & Osogbo",
      description: "Fermented from the leaves of the wild indigo plant, producing deeply saturated shades that range from twilight azure to midnight blue.",
      discipline: "Fashion & Textile",
    },
    {
      name: "Lagos Highlife Brass Ochre",
      yorubaName: "Idẹ & Wura",
      hex: "#E09F3E",
      cmyk: "C:10 M:40 Y:85 K:1",
      source: "1960s Ballroom Trumpet Brass & Lagos Lagoon Sunset",
      description: "The radiant golden tone of Cardinal Rex Lawson's trumpet bell and the shimmering waters of the Lagos Island marina at dusk.",
      discipline: "Music & Sonic Culture",
    },
    {
      name: "Unbleached Calico Vellum",
      yorubaName: "Aso Funfun",
      hex: "#F8F5EE",
      cmyk: "C:2 M:2 Y:5 K:0",
      source: "Mid-Century Archival Letterpress Paper & Raw Cotton Fiber",
      description: "Soft unbleached rag paper offering pristine 16.8:1 contrast against carbon ink without the digital glare of clinical white.",
      discipline: "Printing & Preservation",
    },
    {
      name: "Museum Obsidian Carbon",
      yorubaName: "Dudu & Igi Ebi",
      hex: "#08080A",
      cmyk: "C:70 M:65 Y:60 K:88",
      source: "Darkroom Silver Halide Emulsion & Carved Yoruba Ebony",
      description: "The deep, velvety black of silver gelatin negatives and ancient hardwood masquerade carvings, absorbing light with gravitas.",
      discipline: "Photography & Spatial Canvas",
    },
  ];

  const handleCopy = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const selected = swatches[activeSwatch];

  return (
    <div className="bg-archival-850/80 rounded-sm border border-white/10 p-6 md:p-8 space-y-6 glass-panel-elevated">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-xs bg-terracotta/20 border border-terracotta/40 flex items-center justify-center text-terracotta">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-bronze block font-bold">
              Living Chromatic Architecture
            </span>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Indigenous Pigment & Color System
            </h3>
          </div>
        </div>
        <span className="font-mono text-xs text-archival-400">
          Click swatch to inspect cultural lineage
        </span>
      </div>

      {/* Swatches Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {swatches.map((swatch, idx) => {
          const isSelected = activeSwatch === idx;
          return (
            <button
              key={swatch.hex}
              onClick={() => setActiveSwatch(idx)}
              type="button"
              className={`p-3 rounded-xs border text-left transition-all duration-200 flex flex-col justify-between h-28 group ${
                isSelected
                  ? "border-bronze bg-white/[0.08] shadow-glowBronze -translate-y-1"
                  : "border-white/10 bg-archival-900/60 hover:border-white/30 hover:bg-white/[0.03]"
              }`}
            >
              <div
                className="w-full h-8 rounded-xs border border-white/20 shadow-inner transition-transform group-hover:scale-105"
                style={{ backgroundColor: swatch.hex }}
              />
              <div className="space-y-0.5 pt-2">
                <span className="font-mono text-[10px] text-white font-bold block truncate">
                  {swatch.name.split("/")[0]}
                </span>
                <span className="font-mono text-[11px] text-archival-300 block font-medium">
                  {swatch.hex}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Specimen Card */}
      <div className="bg-archival-900/90 p-5 rounded-xs border border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-4 flex items-center gap-4">
          <div
            className="w-16 h-16 rounded-xs border-2 border-white/30 shadow-2xl flex-shrink-0"
            style={{ backgroundColor: selected.hex }}
          />
          <div className="space-y-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-bronze font-bold block">
              Yoruba Heritage: {selected.yorubaName}
            </span>
            <h4 className="font-display text-base font-bold text-white">
              {selected.name}
            </h4>
            <span className="font-mono text-[10px] text-archival-400 block">
              {selected.discipline}
            </span>
          </div>
        </div>

        <div className="md:col-span-5 border-l-0 md:border-l border-white/10 md:pl-5 space-y-1">
          <span className="font-mono text-[10px] uppercase text-archival-400 block font-bold">
            Archaeological & Cultural Provenance
          </span>
          <p className="font-serif text-xs text-archival-200 leading-relaxed">
            {selected.description}
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col justify-center items-start md:items-end gap-2 font-mono text-xs">
          <div className="text-[11px] text-archival-400">
            <span>CMYK: </span>
            <span className="text-white font-medium">{selected.cmyk}</span>
          </div>
          <button
            onClick={() => handleCopy(selected.hex)}
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-bronze hover:text-archival-950 text-white rounded-xs border border-white/20 transition-all font-mono text-[11px] font-bold"
          >
            {copiedHex === selected.hex ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hex Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy {selected.hex}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
