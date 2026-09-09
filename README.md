# Naren Groups — Website

Marketing website for **Naren Groups**, a ready-made precast compound wall
manufacturer serving Karnataka & Tamil Nadu.

Built with **React + Vite + Tailwind CSS**.

## Pages

| Route       | Page     | Notes |
|-------------|----------|-------|
| `/`         | Home     | Faithful port of the original `index.html` (hero slider, stats, case studies, about, product, process, gallery, clients, videos, contact). |
| `/about`    | About    | New design — story, vision/mission/promise, manufacturing strength, curing quality, stats, CTA. |
| `/product`  | Product  | New design — how it's built, advantages, use cases, 4-step process, CTA. |
| `/gallery`  | Gallery  | New design — masonry gallery with lightbox + **YouTube feature strip / channel link** + video grid. |
| `/contact`  | Contact  | New design — contact cards, WhatsApp, dark enquiry form, facilities. |

All pages share the same colour theme (red `#d0202d`, ink, steel, concrete, paper)
defined in `tailwind.config.js` and `src/index.css`.

## Features

- Floating **WhatsApp** button on every page (+ hero button, contact card).
- Floating **YouTube** button linking to `@narengroups`.
- Enquiry form submits to WhatsApp with details pre-filled.
- Scroll-reveal animations, animated hero banners, animated stacked-panel motif.
- Active nav highlighting, mobile hamburger menu, fully responsive.
- Respects `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (default http://localhost:5173).

## Build for production

```bash
npm run build      # outputs to ./dist
npm run preview    # preview the production build locally
```

## Deploy (cPanel / Apache)

1. Run `npm run build`.
2. Upload the **contents of `dist/`** to your web root (e.g. `public_html`).
3. The included `.htaccess` (bundled into `dist/` from `public/`) makes the
   sub-page routes work on direct load / refresh.
   - Deploying into a **subfolder** instead of the domain root? Change
     `RewriteBase /` in `.htaccess` to `RewriteBase /your-subfolder/` and set
     `base: '/your-subfolder/'` in `vite.config.js`, then rebuild.

## Editing content

Almost all text, contact details, gallery images, client logos, videos, stats,
advantages, use cases and process steps live in **`src/data/site.js`** — edit
there rather than hunting through components.

Images are in `public/assets/`. Replace the files (keep the same names) to swap
photos, or add new ones and reference them from `src/data/site.js`.
