# Aurora Vista Hotel Website

Luxury hotel microsite built with **React + Vite** showcasing suites, bespoke services, and contact information for Aurora Vista Hotel’s launch campaign.

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
2. The workflow in `.github/workflows/deploy.yml` automatically runs on every push to `main`.
3. The workflow sets `VITE_BASE_PATH` so the Vite build outputs assets under `/<repo-name>/`, which keeps routing correct on Pages.

> Need a different branch or custom domain? Adjust the trigger branch inside the workflow and configure the Pages custom domain in the repository settings.
