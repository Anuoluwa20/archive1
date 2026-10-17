"use client";

import React, { useState } from "react";
import { Landmark, Mail, Send, CheckCircle2, MessageSquareQuote } from "lucide-react";

interface ClosingSectionProps {
  onOpenSubmission: () => void;
}

export function ClosingSection({ onOpenSubmission }: ClosingSectionProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [guestName, setGuestName] = useState("");
  const [guestCity, setGuestCity] = useState("");
  const [guestNote, setGuestNote] = useState("");
  const [guestEntries, setGuestEntries] = useState([
    {
      name: "Tayo Adeleke",
      city: "Lagos, Nigeria",
      date: "October 2026",
      note: "Seeing Ojeikere's contact sheets alongside Lemi Ghariokwu's covers gave me goosebumps. This is our real canon.",
    },
    {
      name: "Amina Okonjo-Burt",
      city: "London, UK",
      date: "October 2026",
      note: "My grandmother in Ibadan wore Shade Thomas-Fahm dresses in the 60s. Thank you for treating this history with sacred dignity.",
    },
  ]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  const handleAddGuestbook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestNote) return;
    setGuestEntries([
      {
        name: guestName,
        city: guestCity || "Global Diaspora",
        date: "Just now",
        note: guestNote,
      },
      ...guestEntries,
    ]);
    setGuestName("");
    setGuestCity("");
    setGuestNote("");
  };

  return (
    <section
      id="closing-invitation"
      className="relative py-24 px-4 md:px-8 border-t border-white/10 bg-archival-900"
      aria-labelledby="closing-heading"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Monumental Statement */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-terracotta font-bold">
            08 / Ongoing Legacy
          </span>
          <h2 id="closing-heading" className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-monumental uppercase">
            HISTORY IS STILL BEING MADE.
          </h2>
          <p className="font-editorial text-lg sm:text-2xl text-archival-300 italic max-w-2xl mx-auto leading-relaxed">
            The archive is not a tomb; it is an open ledger. Help safeguard Nigeria's creative memory for the generations yet unborn.
          </p>
        </div>

        {/* Dual Interaction Cards: Archival Intake Portal & Curatorial Dispatch */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card: Archival Contribution Portal Trigger */}
          <div className="bg-archival-850 p-8 rounded-sm border border-white/15 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-terracotta/20 border border-terracotta/40 flex items-center justify-center text-terracotta">
                <Landmark className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Archival Intake Portal
              </h3>
              <p className="font-serif text-sm leading-relaxed text-archival-300">
                Do you hold family photo negatives, vintage vinyl records, post-independence theatrical posters, or handwoven Aso-Oke textiles in your family estate? Submit them for high-resolution digitization and curatorial accessioning.
              </p>
            </div>

            <button
              onClick={onOpenSubmission}
              type="button"
              className="w-full py-4 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase tracking-widest font-bold rounded-xs transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <Landmark className="w-4 h-4" />
              <span>Open Archival Submission Form</span>
            </button>
          </div>

          {/* Right Card: Curatorial Dispatch (Newsletter) */}
          <div className="bg-archival-850 p-8 rounded-sm border border-white/15 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-ochre/20 border border-ochre/40 flex items-center justify-center text-ochre">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                The Curatorial Dispatch
              </h3>
              <p className="font-serif text-sm leading-relaxed text-archival-300">
                Receive our monthly scholarly bulletin featuring newly digitized studio negatives, vinyl restoration liner notes, and curatorial essays on West African modernism. Zero spam.
              </p>
            </div>

            {subscribed ? (
              <div className="p-4 bg-emerald-950/60 border border-emerald-500/40 rounded-xs flex items-center gap-3 text-emerald-300 font-mono text-xs">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Subscription confirmed. Welcome to the ARCHIVE Curation Circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-grow px-4 py-3 bg-archival-950 border border-white/15 rounded-xs text-white placeholder:text-archival-500 font-mono text-xs focus:border-terracotta focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white hover:bg-terracotta text-archival-950 hover:text-white font-mono text-xs uppercase tracking-wider font-bold rounded-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="font-mono text-[10px] text-archival-500 block">
                  Free open-access educational dispatch. Unsubscribe at any time.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Digital Museum Visitor Book / Dedications */}
        <div className="bg-archival-950 p-6 md:p-8 rounded-sm border border-white/10 space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-terracotta" />
              <h3 className="font-display text-xl font-bold text-white">
                Visitor Reflections & Community Ledger
              </h3>
            </div>
            <span className="font-mono text-xs text-archival-500">
              {guestEntries.length} Inscriptions Logged
            </span>
          </div>

          {/* Quick Dedication Entry Form */}
          <form onSubmit={handleAddGuestbook} className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <input
              type="text"
              required
              placeholder="Your name..."
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="sm:col-span-4 px-3.5 py-2 bg-archival-900 border border-white/15 rounded-xs text-white font-mono text-xs focus:border-terracotta focus:outline-none"
            />
            <input
              type="text"
              placeholder="City / Location..."
              value={guestCity}
              onChange={(e) => setGuestCity(e.target.value)}
              className="sm:col-span-3 px-3.5 py-2 bg-archival-900 border border-white/15 rounded-xs text-white font-mono text-xs focus:border-terracotta focus:outline-none"
            />
            <input
              type="text"
              required
              placeholder="Write a reflection or family dedication..."
              value={guestNote}
              onChange={(e) => setGuestNote(e.target.value)}
              className="sm:col-span-4 px-3.5 py-2 bg-archival-900 border border-white/15 rounded-xs text-white font-mono text-xs focus:border-terracotta focus:outline-none"
            />
            <button
              type="submit"
              className="sm:col-span-1 px-3 py-2 bg-terracotta hover:bg-terracotta-light text-white font-mono text-xs uppercase font-bold rounded-xs transition-colors flex items-center justify-center"
              title="Post Dedication"
            >
              Post
            </button>
          </form>

          {/* Guestbook List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {guestEntries.map((entry, idx) => (
              <div key={idx} className="p-4 bg-archival-900 rounded-xs border border-white/5 space-y-1">
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-white font-bold">{entry.name}</span>
                  <span className="text-archival-500">{entry.city} • {entry.date}</span>
                </div>
                <p className="font-serif text-xs text-archival-300 italic">
                  "{entry.note}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
