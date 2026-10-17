# ARCHIVE — Motion Direction & Kinetic Philosophy
**Document ID:** `MOT-DIR-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 04 — Motion & Graphics Director  
**Status:** Approved for Engineering Implementation  

---

## 1. Kinetic Philosophy: Motion as Living History

Motion within ARCHIVE is never decorative glitter. It embodies the core thesis: **"THE PAST IS NOT PAST."** History does not sit passively on a dusty pedestal; it pulses, reacts, and unfolds with tactile immediacy.

Our motion language is governed by **cinematic restraint** and **analog physics**:
- **Tactile Weight:** Transitions mimic physical darkroom processes: pulling a photographic plate from a developer bath, slipping an LP out of an embossed cardboard gatefold sleeve, or turning the dense rag paper of a museum accession ledger.
- **Responsive Snap:** When a user clicks or taps, feedback occurs within `50ms` using high-stiffness spring curves. There is zero sluggish lag.
- **No Scroll Hijacking:** We strictly preserve native browser scrolling behavior. We never lock the wheel, alter scroll friction, or force the user to sit through unskippable video splash intros.

---

## 2. Six Foundational Interaction Concepts

### 2.1 Archival Reveal
* **Concept:** Imagery and artifacts do not simply fade in; they emerge through purposeful rectangular crop masks, sliding shutter apertures, and multi-layered depth reveals.
* **Choreography:** As a section enters the viewport, an image's containing frame expands from `clip-path: inset(100% 0% 0% 0%)` to `inset(0% 0% 0% 0%)` over `0.65s` using an ease-out cubic curve (`cubic-bezier(0.16, 1, 0.3, 1)`), while the interior image scales gently from `1.08` down to `1.00`.

### 2.2 Living Contact Sheet
* **Concept:** Selecting an item from the curated collection or contact sheet activates an expansion sequence where the artifact steps forward into focus while companion frames subtly dim and reveal their accession frame numbers (`ARC-1974-KODAK-TX`).
* **Choreography:** Card elevates by `4px`, border brightens to `--accent-terracotta`, and the curatorial metadata drawer slides into position from the right margin with a damped spring.

### 2.3 Cultural Timeline Horizon
* **Concept:** In Section 05 (Through the Years), moving between eras (1950s to Contemporary) shifts historical visual context fluidly.
* **Choreography:** Selecting an era milestone scrubs the chronological ribbon horizontally with inertia, cross-fading the era overview card with a swift `0.35s` directional slide (`x: 20px ➔ 0px`, `opacity: 0 ➔ 1`).

### 2.4 Editorial Typography Pacing
* **Concept:** Headings and manifesto statements enter with controlled directional masking and subtle tracking expansion.
* **Choreography:** Lines of display text enter staggered by `0.08s` from beneath an invisible overflow mask (`translateY: 100% ➔ 0%`), conveying speech cadence and editorial authority.

### 2.5 Discipline Signatures
While sharing a common kinetic foundation, each discipline exhibits a tailored kinetic nuance:
- **Photography:** Crisp darkroom shutter aperture reveals, instant exposure flash micro-cue, contact sheet framing.
- **Music:** Subtle concentric vinyl rotation inertia, pulsating acoustic waveform equalizer bars, needle-drop haptic bump.
- **Fashion:** Fluid vertical fabric drape slide, subtle horizontal warp-and-weft texture weave expansion.
- **Design:** Architectural grid snapping, letterpress ink-stamp pressure pop, registration cross alignment.

### 2.6 Memory Transition
* **Concept:** In Section 07 (The Continuing Story), the juxtaposition of historic pioneers (e.g. Rex Lawson, Shade Thomas-Fahm) and modern creators (The Cavemen, Kenneth Ize) is navigated via an interactive split comparison slider.
* **Choreography:** Smooth bidirectional drag tracking with immediate cursor-attached divider, revealing historical continuity in real-time.
