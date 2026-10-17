"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundscape } from "@/lib/audio-engine";

export function AudioController({ className = "" }: { className?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!soundscape) return;
    const unsub = soundscape.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return unsub;
  }, []);

  const handleToggle = async () => {
    if (!soundscape) return;
    await soundscape.toggle();
  };

  if (!mounted) {
    return (
      <div className={`flex items-center gap-2 h-9 px-3 rounded-full border border-white/10 ${className}`}>
        <VolumeX className="w-3.5 h-3.5 text-archival-500" />
        <span className="font-mono text-[11px] tracking-wider text-archival-500 uppercase">Ambience Off</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-pressed={isPlaying}
      aria-label={isPlaying ? "Mute ambient analog soundscape" : "Enable ambient analog soundscape"}
      className={`group flex items-center gap-2.5 h-9 px-3.5 rounded-full border transition-all duration-200 ${
        isPlaying
          ? "border-terracotta bg-terracotta/10 text-terracotta"
          : "border-white/15 bg-white/5 text-archival-300 hover:border-white/30 hover:text-white"
      } ${className}`}
      title={isPlaying ? "Mute ambient soundscape" : "Enable tape & vinyl soundscape"}
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 animate-pulseSubtle" />
      ) : (
        <VolumeX className="w-4 h-4 text-archival-400 group-hover:text-white" />
      )}

      {/* Visualizer bars */}
      <div className="flex items-end gap-[2px] h-3 w-4" aria-hidden="true">
        <span
          className={`w-[2px] rounded-full transition-all duration-300 ${
            isPlaying ? "bg-terracotta h-3 animate-pulse" : "bg-archival-600 h-1"
          }`}
        />
        <span
          className={`w-[2px] rounded-full transition-all duration-300 ${
            isPlaying ? "bg-terracotta h-2 animate-pulse [animation-delay:150ms]" : "bg-archival-600 h-1.5"
          }`}
        />
        <span
          className={`w-[2px] rounded-full transition-all duration-300 ${
            isPlaying ? "bg-terracotta h-3.5 animate-pulse [animation-delay:300ms]" : "bg-archival-600 h-1"
          }`}
        />
      </div>

      <span className="font-mono text-[10px] tracking-widest uppercase font-medium">
        {isPlaying ? "Tape On" : "Sound"}
      </span>
    </button>
  );
}
