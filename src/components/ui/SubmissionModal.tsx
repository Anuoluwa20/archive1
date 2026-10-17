"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, ArrowRight, ArrowLeft, Upload, FileCheck } from "lucide-react";

interface SubmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState({
    contributorName: "",
    contributorEmail: "",
    relationship: "Family Descendant",
    discipline: "photography",
    artifactTitle: "",
    estimatedYear: "",
    culturalOrigin: "",
    description: "",
    rightsConfirmed: false,
  });
  const [submissionId, setSubmissionId] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `ARC-SUB-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmissionId(generatedId);
    setStep(4);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="submission-modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-archival-850 text-archival-100 rounded-sm shadow-2xl border border-white/10 p-6 md:p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-terracotta">
              Archival Acquisition Portal
            </span>
            <h2 id="submission-modal-title" className="font-display text-2xl font-bold mt-1 text-white">
              Submit Cultural Ephemera
            </h2>
          </div>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close submission modal"
            className="p-2 rounded-full hover:bg-white/10 text-archival-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Step Indicators */}
        {step < 4 && (
          <div className="flex items-center justify-between mb-8 font-mono text-xs tracking-wider">
            <span className={step >= 1 ? "text-terracotta font-bold" : "text-archival-500"}>
              01 Contributor
            </span>
            <span className="text-archival-600">────</span>
            <span className={step >= 2 ? "text-terracotta font-bold" : "text-archival-500"}>
              02 Artifact
            </span>
            <span className="text-archival-600">────</span>
            <span className={step >= 3 ? "text-terracotta font-bold" : "text-archival-500"}>
              03 Rights
            </span>
          </div>
        )}

        {/* Form Body */}
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                  Full Name / Legal Custodian *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tayo Adeleke"
                  value={formData.contributorName}
                  onChange={(e) => setFormData({ ...formData, contributorName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white placeholder:text-archival-600 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                  Institutional / Personal Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="tayo@lagosarchive.ng"
                  value={formData.contributorEmail}
                  onChange={(e) => setFormData({ ...formData, contributorEmail: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white placeholder:text-archival-600 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                  Relationship to the Artifact
                </label>
                <select
                  value={formData.relationship}
                  onChange={(e) => setFormData({ ...formData, relationship: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white focus:border-terracotta focus:outline-none font-sans"
                >
                  <option value="Family Descendant">Family Descendant / Estate Trustee</option>
                  <option value="Independent Collector">Independent Record / Print Collector</option>
                  <option value="Cultural Researcher">Academic / Cultural Researcher</option>
                  <option value="Photographer / Artisan">Direct Artisan / Creator</option>
                </select>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!formData.contributorName || !formData.contributorEmail}
                  onClick={() => setStep(2)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-terracotta disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider rounded-xs font-semibold hover:bg-terracotta-light transition-colors"
                >
                  Proceed to Artifact Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                    Discipline
                  </label>
                  <select
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white focus:border-terracotta focus:outline-none"
                  >
                    <option value="photography">Photography</option>
                    <option value="music">Music / Vinyl</option>
                    <option value="fashion">Fashion / Textile</option>
                    <option value="design">Graphic Design / Print</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                    Estimated Year *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1974"
                    value={formData.estimatedYear}
                    onChange={(e) => setFormData({ ...formData, estimatedYear: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white placeholder:text-archival-600 focus:border-terracotta focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                  Artifact Title / Subject *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Victor Olaiya Hotel Stadium Concert Handbill"
                  value={formData.artifactTitle}
                  onChange={(e) => setFormData({ ...formData, artifactTitle: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white placeholder:text-archival-600 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                  Cultural / Geographic Origin
                </label>
                <input
                  type="text"
                  placeholder="e.g. Surulere, Lagos State"
                  value={formData.culturalOrigin}
                  onChange={(e) => setFormData({ ...formData, culturalOrigin: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-archival-900 border border-white/15 rounded-xs text-white placeholder:text-archival-600 focus:border-terracotta focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-archival-300 mb-1.5">
                  Historical Significance & Context
                </label>
                <textarea
                  rows={3}
                  placeholder="Briefly state provenance, how the item was safeguarded, and any known inscriptions..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 bg-archival-900 border border-white/15 rounded-xs text-white placeholder:text-archival-600 focus:border-terracotta focus:outline-none font-sans text-sm"
                />
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1.5 px-4 py-2 text-archival-400 hover:text-white font-mono text-xs uppercase"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="button"
                  disabled={!formData.artifactTitle || !formData.estimatedYear}
                  onClick={() => setStep(3)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-terracotta disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider rounded-xs font-semibold hover:bg-terracotta-light transition-colors"
                >
                  Review Terms <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="bg-archival-900 p-4 rounded-xs border border-white/10 space-y-3 font-mono text-xs text-archival-300">
                <div className="flex items-center gap-2 text-white font-bold">
                  <FileCheck className="w-4 h-4 text-terracotta" />
                  <span>Curatorial Review Declaration</span>
                </div>
                <p className="font-sans leading-relaxed text-archival-400">
                  By submitting this entry, you verify that you hold lawful custody or physical ownership of this material. The ARCHIVE Curation Board will evaluate high-resolution scanning options and accession protocols in partnership with Nigerian statutory archives.
                </p>
                <label className="flex items-start gap-3 pt-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.rightsConfirmed}
                    onChange={(e) => setFormData({ ...formData, rightsConfirmed: e.target.checked })}
                    className="mt-0.5 w-4 h-4 accent-terracotta"
                  />
                  <span className="text-white font-sans text-xs">
                    I confirm this item is an authentic historical artifact and agree to be contacted for digital documentation.
                  </span>
                </label>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex items-center gap-1.5 px-4 py-2 text-archival-400 hover:text-white font-mono text-xs uppercase"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.rightsConfirmed}
                  className="flex items-center gap-2 px-6 py-2.5 bg-terracotta disabled:opacity-50 text-white font-mono text-xs uppercase tracking-wider rounded-xs font-semibold hover:bg-terracotta-light transition-colors"
                >
                  <Upload className="w-4 h-4" /> Submit for Curatorial Appraisal
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
              <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto" />
              <h3 className="font-display text-2xl font-bold text-white">
                Archival Submission Registered
              </h3>
              <p className="font-sans text-sm text-archival-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{formData.contributorName}</span>. Your submission for{" "}
                <span className="text-white italic">"{formData.artifactTitle}"</span> has been logged into our curatorial intake ledger.
              </p>

              <div className="inline-block px-4 py-2 bg-archival-900 border border-terracotta/40 rounded-xs font-mono text-xs text-terracotta mt-2">
                Accession Tracking ID: <span className="font-bold text-white">{submissionId}</span>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-white text-archival-900 hover:bg-terracotta hover:text-white font-mono text-xs uppercase tracking-wider rounded-xs font-semibold transition-colors"
                >
                  Close & Return to Museum
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
