"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, Copy, Check, ExternalLink, ShieldCheck, MapPin, Calendar, Tag, Volume2 } from "lucide-react";
import type { Artifact } from "@/data/artifacts";
import { artworkFor } from "@/lib/artwork";

interface ArtifactModalProps {
  artifact: Artifact | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ArtifactModal({ artifact, isOpen, onClose }: ArtifactModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [copied, setCopied] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Focus trap & Escape key handler
  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      previousActiveElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !artifact) return null;

  const handleCopyCitation = () => {
    const citation = `${artifact.creator}. "${artifact.title}" (${artifact.year}). ${artifact.medium}. Accession: ${artifact.accessionNumber}. ARCHIVE Digital Museum.`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-black/85 backdrop-blur-md transition-all duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-artifact-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col lg:flex-row bg-archival-paper text-archival-inverse rounded-sm shadow-2xl overflow-hidden border border-archival-700/30 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          onClick={onClose}
          type="button"
          aria-label="Close curatorial detail drawer"
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-archival-900/10 text-archival-900 hover:bg-terracotta hover:text-white transition-colors duration-150"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Visual Plate & Darkroom Border */}
        <div className="relative w-full lg:w-1/2 bg-archival-950 flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-archival-200/50 overflow-hidden group">
          {/* Top Film Frame Inscription */}
          <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-widest text-archival-400 mb-3 px-1 select-none">
            <span>{artifact.accessionNumber}</span>
            <span>KODAK TRI-X 400 • FRAME {artifact.year % 50}</span>
          </div>

          <div
            onClick={() => setIsZoomed(!isZoomed)}
            className={`relative w-full max-h-[50vh] lg:max-h-[70vh] flex items-center justify-center overflow-hidden cursor-zoom-in rounded-sm transition-all duration-300 ${
              isZoomed ? "scale-110" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={artworkFor(artifact.accessionNumber, artifact.discipline)}
              alt={artifact.title}
              className="w-full h-full object-contain max-h-[60vh] select-none"
            />
          </div>

          <div className="w-full flex items-center justify-between text-[10px] font-mono text-archival-400 mt-3 px-1">
            <span className="capitalize">{artifact.discipline} Archive</span>
            <span className="text-archival-400/80">Click image to toggle zoom loupe</span>
          </div>
        </div>

        {/* Right Column: Curatorial Dossier & Provenance Ledger */}
        <div className="w-full lg:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[75vh] lg:max-h-[92vh] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Category & Status Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-block px-2.5 py-1 text-[11px] font-mono uppercase tracking-widest bg-terracotta text-white rounded-xs font-semibold">
                {artifact.discipline}
              </span>
              <span className="inline-block px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider bg-black/5 text-archival-700 border border-black/10 rounded-xs">
                Era: {artifact.era}
              </span>
              <span className="inline-block px-2.5 py-1 text-[11px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-xs">
                Verified Provenance
              </span>
            </div>

            {/* Title & Creator */}
            <div>
              <h2 id="modal-artifact-title" className="font-display text-2xl md:text-3xl font-bold tracking-tight text-archival-inverse leading-tight">
                {artifact.title}
              </h2>
              <p className="font-editorial text-lg text-archival-700 mt-1 italic">
                By {artifact.creator} • {artifact.year}
              </p>
            </div>

            {/* Curatorial Note */}
            <div className="space-y-2 border-l-2 border-terracotta pl-4 py-1">
              <h3 className="font-mono text-xs uppercase tracking-widest text-archival-500 font-bold">
                Curatorial Context
              </h3>
              <p className="font-serif text-sm leading-relaxed text-archival-800">
                {artifact.curatorialNote}
              </p>
            </div>

            {/* Technical Specifications Ledger Table */}
            <div className="space-y-2.5 bg-black/[0.03] p-4 rounded-sm border border-black/5 font-mono text-xs">
              <div className="flex items-start justify-between py-1 border-b border-black/5">
                <span className="text-archival-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Date / Year
                </span>
                <span className="text-archival-900 font-medium">{artifact.year} ({artifact.era})</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-black/5">
                <span className="text-archival-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Origin
                </span>
                <span className="text-archival-900 font-medium">{artifact.origin}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-black/5">
                <span className="text-archival-500 uppercase tracking-wider">Medium</span>
                <span className="text-archival-900 font-medium text-right max-w-[65%]">{artifact.medium}</span>
              </div>
              <div className="flex items-start justify-between py-1 border-b border-black/5">
                <span className="text-archival-500 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Rights Status
                </span>
                <span className="text-archival-900 font-medium text-right max-w-[65%]">{artifact.rightsStatus}</span>
              </div>
              <div className="pt-1">
                <span className="text-archival-500 uppercase tracking-wider block mb-1">Provenance Lineage</span>
                <p className="text-archival-700 font-sans text-xs leading-normal">{artifact.provenance}</p>
              </div>
            </div>

            {/* Semantic Tags */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <Tag className="w-3.5 h-3.5 text-archival-400" />
              {artifact.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 bg-white border border-black/10 rounded-xs text-archival-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 mt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={handleCopyCitation}
              type="button"
              className="flex items-center gap-2 px-3.5 py-2 font-mono text-xs uppercase tracking-wider rounded-xs border border-black/20 hover:border-black/50 text-archival-900 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copied ? "Citation Copied" : "Copy Scholarly Citation"}
            </button>

            <button
              onClick={onClose}
              type="button"
              className="px-5 py-2 bg-archival-900 hover:bg-terracotta text-white font-mono text-xs uppercase tracking-wider rounded-xs transition-colors"
            >
              Return to Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
