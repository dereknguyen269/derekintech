# derekin.tech

Derek Nguyen’s personal portfolio, built with React 18 and Vite 5. The editorial redesign uses warm ivory, charcoal, orange accents, large project previews, and a responsive builder’s workspace illustration.

## Development

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

`npm run build` checks English/Vietnamese translation parity and builds both HTML entries into `dist/`. Deploy `dist/` with the existing static hosting configuration.

## Features

- English at `/` and Vietnamese at `/vi/`, with separate SEO metadata and reciprocal language links.
- App showcase with Web app / Extension filters, followed by open-source work, background, and contact.
- Persistent light/dark theme, mobile navigation with Escape dismissal, keyboard focus styles, and reduced-motion support.
- Email copying and the existing Web3Forms contact integration, including validation, sending, success, and error states.
- Existing inbound anchors `#apps`, `#projects`, and `#skills` continue to work.
- Optional analytics through `VITE_GA_MEASUREMENT_ID`, documented in `.env.example`.

## Structure

- `src/components/` — navigation, hero, toolkit, app showcase, open source, about, contact, footer.
- `src/i18n.js` — English and Vietnamese copy, selected by the current path.
- `src/hooks/index.js` — theme preference.
- `src/index.css` — visual tokens and responsive styles.
- `public/assets/` — project images, portrait, favicon, and self-hosted Manrope fonts.

Manrope is licensed under SIL OFL; see `public/assets/OFL-Manrope.txt`. Georgia uses the visitor’s system font. MarkLens and Sound Pilot showcase compositions are illustrations of their features rather than live screenshots. Thetoolover and Sheetback use existing product screenshots.
