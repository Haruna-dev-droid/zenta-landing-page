# zenta. — Landing Page

A pixel-accurate React + Tailwind build of the ZENTA landing page from Figma
(`https://www.figma.com/design/06v8V2acSw7CwWmGrtbBix/ZENTA-LANDING-PAGE`),
with a heavier motion layer built on **Framer Motion**.

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Stack

- **React 18 + Vite** — app shell / bundler
- **Tailwind CSS** — styling, with brand tokens (colors, keyframes) defined in `tailwind.config.js`
- **Framer Motion** — every animation: scroll parallax, magnetic buttons, 3D tilt cards,
  split-text reveals, the custom cursor, marquee, etc.
- **lucide-react** — utility icons (nav, footer socials, mobile menu)

## Brand tokens (exact, from Figma)

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#f2f6f5` | page background |
| `mint` | `#d5ffec` | soft gradient stop |
| `green` | `#00ea80` | primary accent, CTAs |
| `brightgreen` | `#03ea82` | large section headlines |
| `forest` | `#004238` | dark buttons, deep text |
| `ink` | `#141515` | nav text, body copy |

> Your brief mentioned `#00428` — that's not a valid 6-digit hex, so I used
> the real value pulled straight from the Figma file's dark-green fills:
> `#004238`.

## Typography

The Figma file uses **Code Next** (Fontfabric), which is a paid/trial
commercial font — not redistributable via a CDN link. I substituted
**Plus Jakarta Sans** from Google Fonts as the closest free geometric match
(loaded in `index.html`). If you own a Code Next license, drop the font
files in `public/fonts/` and swap the `font-family` in `tailwind.config.js`.

## Images & icons

All photography, icons, and decorative SVGs live in `src/assets/img/` and
are imported in `src/assets/figmaAssets.js` so Vite hashes and ships them
with the build. Do not point production at Figma MCP CDN links
(`figma.com/api/mcp/asset/...`) — they expire after ~7 days and 404.

## Footer

The Figma file's last frame (`Frame 6`) is just a decorative gradient +
faded logo-mark background — there's no footer copy in the design. I built
original footer content (link columns, newsletter, socials, marquee of
stay categories, legal bar) that keeps the same visual system: same
background gradient, same decorative mark, same green/forest palette.

## Motion notes

- Respects `prefers-reduced-motion` globally (see `src/index.css`).
- The custom cursor and cursor-following effects only activate on
  fine-pointer (mouse) devices — untouched on mobile/touch.
- Every scroll-reveal uses `viewport={{ once: true }}` so re-scrolling
  past a section doesn't re-trigger it.
