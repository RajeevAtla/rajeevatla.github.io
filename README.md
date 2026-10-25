# Personal Website

[![Biome](https://github.com/RajeevAtla/rajeevatla.github.io/actions/workflows/biome.yml/badge.svg)](https://github.com/RajeevAtla/rajeevatla.github.io/actions/workflows/biome.yml)
[![Build and deploy](https://github.com/RajeevAtla/rajeevatla.github.io/actions/workflows/build.yml/badge.svg)](https://github.com/RajeevAtla/rajeevatla.github.io/actions/workflows/build.yml)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)
[![Linted with Biome](https://img.shields.io/badge/Linted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)
[![Checked with Biome](https://img.shields.io/badge/Checked_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev)

Personal portfolio built with SvelteKit 3, Svelte 5, TypeScript 6, Tailwind CSS 4, and daisyUI 5. The homepage is prerendered with `@sveltejs/adapter-static` and deployed to GitHub Pages.

## Features

- Fully static build served via GitHub Pages using `@sveltejs/adapter-static`
- A homepage with education and skills driven by structured data in `src/lib/data`
- Global layout with a light/dark theme toggle that persists the user's preference
- Reusable UI primitives (`SiteHeader`, `PageSection`, `SiteFooter`) for consistent styling
- Tailwind v4 design tokens and gradients configured in `src/app.css`

## Tech Stack

- SvelteKit 3 and Vite 8
- Tailwind CSS v4 (via `@tailwindcss/postcss`) and daisyUI 5
- TypeScript
- GitHub Actions for automated builds and deployments

## Getting Started

Use Node.js 22.17 or newer (CI uses Node 24) and Bun.

```bash
bun install
bun run dev
```

Visit the printed localhost URL to view the site. Edits to Svelte components, Tailwind classes, or data files hot-reload immediately.

## Project Structure

- `src/lib/config/site.ts` - Global metadata (name, tagline, socials, contact email)
- `src/lib/data` - Structured skills data
- `src/lib/components` - Shared UI components and the theme toggle
- `src/routes/+page.svelte` - Homepage
- `src/routes/+layout.svelte` - Shared app shell, global CSS, metadata, and favicon
- `src/routes/+layout.ts` - Prerendering and trailing-slash options
- `src/app.html` - HTML template, early theme selection, and AdSense script
- `public/` - Fonts, `robots.txt`, and `ads.txt`; configured as SvelteKit's asset directory
- `vite.config.ts` - SvelteKit configuration and static adapter
- `src/lib/stores/theme.ts` - Handles light/dark mode persistence and system preference detection

## Useful Commands

- `bun run dev` - Start the Vite/SvelteKit development server
- `bun run check` - Synchronize SvelteKit types and run `svelte-check`
- `bun run biome:check` - Check formatting and lint rules
- `bun run biome:format` - Format the repository
- `bun run build` - Produce a prerendered static build in `build/`
- `bun run preview` - Preview the production build locally

Run `bun run check`, `bun run biome:check`, and `bun run build` before merging.

## Deployment

GitHub Actions (`.github/workflows/build.yml`) runs the type checks and builds the static site.
The `build/` output is published to GitHub Pages automatically on pushes to `main`.

The site is configured for hosting at the domain root, either as a GitHub Pages user site or on a custom domain. For a custom domain, configure the domain in GitHub Pages settings. If a `CNAME` file is needed, put it in `public/`.

Validate fonts, favicon, navigation, and themes in the production preview. The page content is present in the generated HTML; JavaScript enables the theme toggle and client navigation.
