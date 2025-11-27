# Baner Stays Website

Boutique hotel experience site for Baner Stays (Pune), built with **React + Vite**. It highlights hourly/overnight plans, facilities, contextual imagery, and direct booking/contact CTAs.

## Tech stack

- Vite 7 + React 19
- Vanilla CSS with modern layout primitives
- GitHub Actions for automated Vite builds to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Vite will expose the app at `http://localhost:5173` (or the next available port).

## Production build

```bash
npm run build
npm run preview   # optional: serve the dist folder locally
```

## GitHub Pages deployment

1. Push the project to a GitHub repository and enable **Pages** with “GitHub Actions” as the source.
2. The workflow in `.github/workflows/deploy.yml` automatically runs on every push to `master`.
3. The workflow sets `VITE_BASE_PATH` so the Vite build outputs assets under `/<repo-name>/`, which keeps routing correct on Pages.

## Asset management

- Real room/lobby/exterior images live in `src/assets/photos` under category sub-folders (`rooms/square`, `rooms/round`, `common/lobby`, `common/exterior`).
- `src/constants/hotelData.js` hardcodes the relative paths used by each section (hero, suites, gallery, etc.). To swap or add photos, drop files in the right folder and update the arrays in that constants file.
- UI sections live under `src/sections`, while reusable pieces (navigation, footer, media helpers) live under `src/components` for easier long-term maintenance.

> Need a different branch or custom domain? Adjust the trigger branch inside the workflow and configure the Pages custom domain in the repository settings.
