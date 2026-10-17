"use client";

import React from "react";
import { Quote, Feather, Sparkles } from "lucide-react";

export function ManifestoSection() {
  const seminalQuotes = [
    {
      author: "Fela Anikulapo Kuti",
      discipline: "Music & Resistance",
      year: "1977",
      text: "Music is not for enjoyment alone. Music is for spiritual upliftment and revolutionary consciousness. It is the weapon of the future.",
    },
    {
      author: "J.D. 'Okhai Ojeikere",
      discipline: "Photography & Form",
      year: "1974",
      text: "Hairstyles are monuments created in the morning and washed away by evening. My camera makes these architectural crowns immortal.",
    },
    {
      author: "Chief Shade Thomas-Fahm",
      discipline: "Fashion & Modernity",
      year: "1968",
      text: "Why should a Nigerian woman wear Western wool coats in the Lagos heat when our own Aso-Oke and Adire carry the dignity of kings?",
    },
  ];

  return (
    <section
      id="manifesto"
      className="relative py-24 px-4 md:px-8 theme-paper border-t-[3px] border-ink"
      aria-labelledby="manifesto-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-terracotta font-bold">
          <span>02</span>
          <span>/</span>
          <h2 id="manifesto-heading" className="text-white">
            Editorial Manifesto
          </h2>
        </div>

        {/* The Core Manifesto Proclamation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <blockquote className="font-editorial text-3xl sm:text-4xl md:text-5xl text-white leading-tight font-normal">
              “Before it became a movement, <br className="hidden sm:inline" />
              it was a moment. <br />
              <span className="italic text-terracotta font-serif">A photograph.</span>{" "}
              <span className="italic text-ochre font-serif">A record.</span>{" "}
              <span className="italic text-blue-400 font-serif">A garment.</span>{" "}
              <span className="italic text-emerald-400 font-serif">A mark on paper.</span>”
            </blockquote>

            <div className="space-y-4 font-serif text-base md:text-lg text-archival-300 leading-relaxed max-w-2xl pt-4">
              <p>
                History in Nigeria has never been an inanimate relic safely sealed inside foreign museum glass. It is a live, pulsating current. The choices made by studio photographers in 1960s Yaba, textile weavers in Ilorin, graphic pamphleteers in Ibadan, and Afrobeat horn players at the Afrika Shrine were not passive cultural expressions—they were radical declarations of sovereignty.
              </p>
              <p>
                ARCHIVE exists to reject nostalgia. Nostalgia looks backward with longing; ARCHIVE looks backward for ammunition. The past is not past: it lives in the syncopated kick drum of today’s music, the architectural drape of contemporary garments, and the fearless composition of our visual storytellers.
              </p>
            </div>
          </div>

          {/* Right Rail: Curatorial Principles */}
          <div className="lg:col-span-4 bg-archival-850 p-6 md:p-8 rounded-sm border border-white/10 space-y-6">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-terracotta">
              <Feather className="w-4 h-4" />
              <span>Institutional Thesis</span>
            </div>

            <ul className="space-y-4 font-mono text-xs text-archival-300">
              <li className="flex items-start gap-3">
                <span className="text-terracotta font-bold">01.</span>
                <span>Provenance over folklore. Every asset verified against authentic historical records.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta font-bold">02.</span>
                <span>Discipline continuity. Photography, music, clothing, and design inform one another.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta font-bold">03.</span>
                <span>Rejection of pan-African cliché. Honoring Yoruba, Igbo, Hausa, Edo, and regional nuance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-terracotta font-bold">04.</span>
                <span>Living lineage. Connecting 1950s pioneers directly to 2020s global creators.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Seminal Practitioner Voice Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
          {seminalQuotes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-archival-850/70 rounded-sm border border-white/5 space-y-3 flex flex-col justify-between hover:border-white/20 transition-colors"
            >
              <Quote className="w-6 h-6 text-terracotta/40" />
              <p className="font-editorial text-base text-archival-200 italic leading-snug">
                "{item.text}"
              </p>
              <div className="pt-3 border-t border-white/5 font-mono text-xs">
                <span className="block font-bold text-white">{item.author}</span>
                <span className="text-archival-500 text-[11px] uppercase tracking-wider">
                  {item.discipline} • {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
