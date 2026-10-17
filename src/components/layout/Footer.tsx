"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Clock, Globe, Shield, BookOpen, ExternalLink } from "lucide-react";

export function Footer() {
  const [lagosTime, setLagosTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      // Lagos is West Africa Time (WAT) = UTC+1
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLagosTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-archival-950 text-archival-100 border-t border-white/10 pt-16 pb-12 overflow-hidden" role="contentinfo">
      {/* Background Archival Grain */}
      <div className="absolute inset-0 archival-grain pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Top Tier: Monogram, Mission & Live Time */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xs bg-terracotta flex items-center justify-center text-white font-mono font-bold text-sm">
                A
              </div>
              <span className="font-display text-2xl font-extrabold tracking-tight text-white">
                ARCHIVE / NIGERIA
              </span>
            </div>
            <p className="font-serif text-sm leading-relaxed text-archival-400 max-w-md">
              A digital cultural institution celebrating the unbroken continuity of Nigerian creative history across Photography, Music, Fashion, and Design. Preserving yesterday's radical choices as today's living catalysts.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full font-mono text-[11px] text-archival-300">
              <Clock className="w-3.5 h-3.5 text-terracotta" />
              <span>Lagos Time (WAT / UTC+1):</span>
              <span className="font-bold text-white tabular-nums">{lagosTime || "12:00:00"}</span>
            </div>
          </div>

          {/* Directory Column 1: Disciplines */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-terracotta font-bold text-[11px]">
              Disciplines
            </h4>
            <ul className="space-y-2 text-archival-400">
              <li><a href="#disciplines" className="hover:text-white transition-colors">01 Photography</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">02 Music</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">03 Fashion</a></li>
              <li><a href="#disciplines" className="hover:text-white transition-colors">04 Design</a></li>
              <li><a href="#collection" className="hover:text-white transition-colors">The Collection</a></li>
            </ul>
          </div>

          {/* Directory Column 2: Partner Archives */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-terracotta font-bold text-[11px]">
              Partner Registries
            </h4>
            <ul className="space-y-2 text-archival-400">
              <li>
                <a href="https://collection.museum.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>NCMM National Museums</span>
                  <ExternalLink className="w-3 h-3 text-archival-500" />
                </a>
              </li>
              <li>
                <a href="https://nationalarchives.gov.ng/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>National Archives of Nigeria</span>
                  <ExternalLink className="w-3 h-3 text-archival-500" />
                </a>
              </li>
              <li>
                <a href="https://hspaca.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>HSPACA Cultural Archive</span>
                  <ExternalLink className="w-3 h-3 text-archival-500" />
                </a>
              </li>
              <li>
                <a href="https://digitalbenin.org/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">
                  <span>Digital Benin Initiative</span>
                  <ExternalLink className="w-3 h-3 text-archival-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Directory Column 3: Governance */}
          <div className="md:col-span-2 space-y-3 font-mono text-xs">
            <h4 className="uppercase tracking-widest text-terracotta font-bold text-[11px]">
              Governance
            </h4>
            <ul className="space-y-2 text-archival-400">
              <li><span className="text-archival-300">Open Access Policy</span></li>
              <li><span className="text-archival-300">Curatorial Board</span></li>
              <li><span className="text-archival-300">Rights & Licensing</span></li>
              <li><span className="text-archival-300">WCAG 2.1 AA Compliant</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Back to Top & Institutional Statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-archival-500">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 ARCHIVE Museum Trust. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Educational Curatorial Blueprint</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-emerald-400/90 flex items-center gap-1">
              <Shield className="w-3 h-3" /> Integrity Verified
            </span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            aria-label="Scroll back to top of page"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/30 text-archival-300 hover:text-white transition-colors"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
