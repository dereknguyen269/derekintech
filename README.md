# derekin.tech — React port

Runnable **React 18 + Vite 5** port of the OpenDesign artifact `index.html`
(dark/light "Agentic" personal landing page). The original static HTML/CSS/JS
is preserved untouched at the project root; this app reproduces its design 1:1.

## Stack conflict note
The source artifact is plain HTML + vanilla JS (no framework). The OpenDesign
target stack was React, so this port was created in `react-app/` while the
original `index.html` remains the source of truth for visuals and content.

## What's preserved (port fidelity)
- **100% of the CSS** — extracted verbatim from `index.html` into `src/index.css`
  (layout primitives, theme variables, marquee, tooltips, reveal system).
- **All markup structure & classes** — `.reveal`/variant classes contract kept via
  `src/components/Reveal.jsx` + `useReveal` hook.
- **All vanilla behaviors, ported to hooks/components:**
  - Scroll progress bar (`ScrollProgress` in `src/App.jsx`)
  - IntersectionObserver scroll reveals with staggers
  - Terminal card typing animation (`Hero.jsx` → `useTypedLines`)
  - Hero terminal parallax (`useParallax`)
  - Theme toggle with `localStorage` + `prefers-color-scheme` (`useTheme`)
  - Infinite stack marquee with proficiency tooltips (CSS-driven, hover-pause)
  - Live GitHub star counters: fetch + sessionStorage cache (30 min) + count-up
    animation (`useGithubStars`)
  - Web3Forms AJAX contact form with spinner + success/error status (`Contact.jsx`)

## Structure
```
react-app/
├── index.html              # head: fonts, meta (root div + /src/main.jsx)
├── public/assets/          # copied from ../assets (screenshots, SVGs)
├── src/
│   ├── index.css           # verbatim CSS from index.html
│   ├── main.jsx            # React root
│   ├── App.jsx             # composition + ScrollProgress
│   ├── hooks/index.js      # useReveal, useRafScroll, useParallax, useTheme, useGithubStars
│   └── components/         # Header, Hero, Marquee, Sections, Contact, Footer,
│                           #   Reveal (shared), icons.jsx, data.jsx (content)
```

## Commands
```bash
cd react-app
npm install        # once
npm run dev        # dev server (default http://localhost:5173/)
npm run build      # production build → dist/
npm run preview    # serve the production build
```

Note: on this machine Vite binds IPv6 (`http://[::1]:5173/`) — if
`localhost` resolves to IPv4 and another app owns that port, use the
bracketed IPv6 URL `http://[::1]:5173/`.
