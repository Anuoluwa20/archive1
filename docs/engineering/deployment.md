# ARCHIVE — Deployment Guide & Production Notes
**Document ID:** `ENG-DEP-001`  
**Version:** `1.0.0`  
**Date:** 14 October 2026  
**Author:** Agent 03 — Full-Stack Engineer  

---

## 1. Build & Run Directives

### 1.1 Local Development
```bash
# Install dependencies
npm install

# Run development server with hot-reload
npm run dev

# Open local environment
http://localhost:3000
```

### 1.2 Production Build
```bash
# Generate optimized production build
npm run build

# Start production server
npm run start
```

### 1.3 Automated Verification
```bash
# Execute full integrity, data schema, and accessibility tests
npm test
```

---

## 2. Production Deployment Targets

1. **Vercel (Recommended):**
   - Zero-config deployment with automatic edge routing, image optimization, and global CDN delivery.
   - Framework preset: `Next.js`.
2. **Cloudflare Pages / Netlify:**
   - Static HTML export via `output: 'export'` or standard SSR edge worker adapter.
3. **Docker Container:**
   - Multi-stage Dockerfile using `node:24-alpine` for minimal container image footprint (<120MB).

---

## 3. Security Headers & Content Security Policy (CSP)

```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; media-src 'self' blob:; connect-src 'self';
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()
```

---

## 4. Known Limitations & Roadmap

1. **Audio Browser Policy:** In certain mobile browsers in strict low-power mode, the user must explicitly click the Audio Toggle icon to unlock the Web Audio API context.
2. **Offline Mode:** Future iterations will package a Service Worker for full progressive web app (PWA) offline exhibition viewing.
