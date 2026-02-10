# zerox.technology

Landing page for **zerox.technology** — a technology innovation lab focused on AI, distributed systems, blockchain and cybersecurity.

Live at: https://zerox.technology

## Tech Stack

- **React 18** + **TypeScript** + **Vite** (SWC plugin)
- **Tailwind CSS 3** with custom green palette override (`#00ff99`)
- **Radix UI** primitives: Dialog (cookie settings modal), Switch (cookie toggles)
- **CSS injection** via `<style>` tags for particle system, header, footer, responsive styles
- Deployed on **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)
- Custom domain configured via `CNAME` file

## Commands

```bash
npm run dev       # Dev server (port 8080)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint
```

## Project Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Router: /, /privacy, /cookies, /terms, /legal-notice, 404
├── index.css                   # Tailwind directives + CSS variables (shadcn base)
├── vite-env.d.ts
│
├── components/
│   ├── Header.tsx              # Logo, "TECHNOLOGY" title, language selector, description, action buttons
│   ├── Footer.tsx              # Company name, legal links, cookie settings link, copyright
│   ├── CookieBanner.tsx        # GDPR cookie consent banner (fixed bottom)
│   ├── CookieSettings.tsx      # Cookie preferences modal (Dialog + Switch)
│   ├── GlobalStyles.tsx        # Injects all CSS style strings into <style> tag
│   ├── LegalLayout.tsx         # Shared layout for legal pages (back link, title, content)
│   └── ui/
│       ├── dialog.tsx          # Radix Dialog (used by CookieSettings)
│       └── switch.tsx          # Radix Switch (used by CookieSettings)
│
├── pages/
│   ├── Index.tsx               # Main landing page (Header + particles + CRT effects + CookieBanner + Footer)
│   ├── PrivacyPolicy.tsx       # /privacy — GDPR privacy policy (4 languages)
│   ├── CookiePolicy.tsx        # /cookies — cookie policy (4 languages)
│   ├── Terms.tsx               # /terms — terms of service (4 languages)
│   ├── LegalNotice.tsx         # /legal-notice — legal notice (4 languages)
│   └── NotFound.tsx            # 404 page
│
├── hooks/
│   ├── useLanguage.ts          # Language state: currentLang, setLanguage(), languageOrder
│   ├── useCookieConsent.ts     # Cookie consent state + localStorage persistence
│   └── useParticleSystem.ts    # Particle physics engine (gravity, collisions, fade, recycling)
│
├── data/
│   └── languages.ts            # All multilingual content (EN, IT, ES, ZH)
│
├── styles/
│   ├── baseStyles.ts           # Body + footer CSS
│   ├── headerStyles.ts         # Header, logo, title, language selector, action buttons CSS
│   ├── particleStyles.ts       # Particle (.ascii-object) CSS
│   ├── responsiveStyles.ts     # Width breakpoints (320–1440px+) + height breakpoints (500–700px)
│   └── crtStyles.ts            # CRT monitor effects (scanlines, vignette, noise, interference)
│
└── lib/
    └── utils.ts                # cn() utility (clsx + tailwind-merge)

public/
├── assets/zerox-logo.png       # Main logo
├── favicon.svg                 # SVG favicon
├── favicon.ico                 # ICO favicon
└── robots.txt                  # Allow all crawlers
```

## Architecture Decisions

### Styling: Dual system
- **Tailwind CSS** for legal pages, cookie components, 404 page
- **CSS string injection** (via GlobalStyles) for the landing page (header, footer, particles, responsive). This is because the particle system creates DOM elements directly and needs global CSS classes.

### Particle System (`useParticleSystem.ts`)
DOM-based particle engine running in `requestAnimationFrame`. Key physics:
- Gravity, air drag, floor/wall bounce with restitution
- Inter-particle collisions (O(n^2) with early squared-distance check)
- Element collisions with buttons, footer, and cookie banner (AABB + minimum penetration)
- Rest detection: particles at rest for 2s auto-fade and get recycled
- Every 30th particle is a Bitcoin symbol (orange)
- Tunable constants at the top of the `useEffect`:
  - `maxParticles = 200`, `gravity = 0.35`, `floorFriction = 0.95`, `airDrag = 0.9991`

### Multi-language
- 4 languages: English, Italian (default), Spanish, Chinese
- Landing page: `useLanguage` hook with explicit language buttons in the header
- Legal pages: `?lang=xx` query parameter, fallback to English
- All text in `src/data/languages.ts` — single source of truth

### Cookie Consent (GDPR)
- Three categories: necessary (always on), analytics, marketing
- `localStorage` keys: `cookie-consent`, `cookie-preferences`, `cookie-consent-date`
- Banner appears until user makes a choice; settings accessible from footer anytime

## Conventions

- Brand name is always **zerox.technology** (lowercase, with dot) — never "Zerox Technology"
- Primary accent color: `#00ff99` / `rgb(0,255,153)` everywhere
- Font: `'Courier New', monospace` throughout
- Dark theme: `#1a1a1a` background for landing, `bg-black` for legal pages
- Button icons use ASCII characters: `@` (email), `>` (WhatsApp), `~` (voice agent)
- No unused imports, no dead code, no unused dependencies
- Build must pass (`npm run build`) before considering work done

## CRT Effects (`crtStyles.ts` + `Index.tsx`)

Background-only distortion effects that simulate an old CRT monitor, all at `z-index: 0` (behind content):
- **Scanlines** (`body::before`): 6 overlapping `repeating-linear-gradient` layers with prime-number spacings and slight angle offsets for irregular pattern. Animated with flicker + vertical drift.
- **Vignette** (`body::after`): Strong radial gradient darkening edges to near-black from 88% outward.
- **Noise** (`.crt-noise` div): Canvas-generated 128x128 grain texture (2px pixel size), tiled and animated with position shifts every 80ms.
- **Interference** (`.crt-interference` div): 300%-height gradient with ~20 irregular horizontal bands that scroll slowly.
- **Chromatic aberration** (`.crt-color-fringe` div): Subtle red/blue edge fringing with opacity animation.

## Deployment

Push to `main` triggers GitHub Actions → `npm ci` → `npm run build` → deploy `dist/` to GitHub Pages. The `CNAME` file is copied into `dist/` during the workflow.
