/**
 * ARCHIVE — Web Audio API Synthesized Ambient Soundscape Engine
 * 
 * Generates an organic, warm archival analog soundscape (vinyl warmth, gentle tape hiss,
 * and low harmonic acoustic drone) in real time without downloading multi-megabyte audio files.
 * Adheres strictly to browser autoplay policies by initializing only on user interaction.
 */

class SoundscapeEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private noiseNode: AudioNode | null = null;
  private droneOsc: OscillatorNode | null = null;
  private lfoOsc: OscillatorNode | null = null;
  private isRunning: boolean = false;
  private listeners: Set<(playing: boolean) => void> = new Set();

  private initContext() {
    if (this.ctx) return;
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtxClass();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    this.buildArchivalSynthGraph();
  }

  private buildArchivalSynthGraph() {
    if (!this.ctx || !this.masterGain) return;

    // 1. Vinyl Surface Texture (Filtered Noise)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    // Pink noise generation algorithm (Paul Kellet's filtered method)
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter noise to sound like warm 1970s tape / vinyl
    const bandpass = this.ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.setValueAtTime(420, this.ctx.currentTime);
    bandpass.Q.setValueAtTime(1.2, this.ctx.currentTime);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(0.18, this.ctx.currentTime);

    whiteNoise.connect(bandpass);
    bandpass.connect(noiseGain);
    noiseGain.connect(this.masterGain);
    whiteNoise.start(0);
    this.noiseNode = whiteNoise;

    // 2. Harmonic Room Drone (Warm African Wood & Brass Resonance)
    this.droneOsc = this.ctx.createOscillator();
    this.droneOsc.type = "sine";
    this.droneOsc.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 fundamental

    const droneFilter = this.ctx.createBiquadFilter();
    droneFilter.type = "lowpass";
    droneFilter.frequency.setValueAtTime(220, this.ctx.currentTime);

    const droneGain = this.ctx.createGain();
    droneGain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    // LFO for organic breathing pulsation (approx 12 breaths/minute = 0.2Hz)
    this.lfoOsc = this.ctx.createOscillator();
    this.lfoOsc.type = "sine";
    this.lfoOsc.frequency.setValueAtTime(0.18, this.ctx.currentTime);

    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(0.015, this.ctx.currentTime);

    this.lfoOsc.connect(lfoGain);
    lfoGain.connect(droneGain.gain);

    this.droneOsc.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(this.masterGain);

    this.droneOsc.start(0);
    this.lfoOsc.start(0);
  }

  // Play subtle analog needle drop micro-cue
  private playNeedleDrop() {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(80, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, this.ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(this.ctx.currentTime);
    osc.stop(this.ctx.currentTime + 0.09);
  }

  public async toggle(): Promise<boolean> {
    this.initContext();
    if (!this.ctx || !this.masterGain) return false;

    if (this.ctx.state === "suspended") {
      await this.ctx.resume();
    }

    if (this.isRunning) {
      // Fade out
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);
      this.isRunning = false;
    } else {
      // Fade in + needle click
      this.playNeedleDrop();
      this.masterGain.gain.linearRampToValueAtTime(0.45, this.ctx.currentTime + 0.8);
      this.isRunning = true;
    }

    this.notify();
    return this.isRunning;
  }

  public getIsPlaying(): boolean {
    return this.isRunning;
  }

  public subscribe(fn: (playing: boolean) => void): () => void {
    this.listeners.add(fn);
    fn(this.isRunning);
    return () => this.listeners.delete(fn);
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isRunning));
  }
}

export const soundscape = typeof window !== "undefined" ? new SoundscapeEngine() : null;
