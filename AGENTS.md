# Repository Guidelines

## Project Structure & Module Organization
This repo is a Svelte app built on Farm. Source code lives in `src/`, with the app shell in `src/App.svelte`, the entry point in `src/main.ts`, shared UI in `src/lib/components/`, and app state in `src/lib/stores/`. Static files are served from `public/`, including fonts in `public/fonts/` and `robots.txt`. Farm configuration is in `farm.config.ts`. Keep route-level UI in `src/routes/+page.svelte` unless a new component is reusable.

## Build, Test, and Development Commands
- `bun install`: install dependencies.
- `bun run dev`: start the Farm dev server.
- `bun run build`: create a production build in `build/`.
- `bun run preview`: serve the production build locally.
- `bun run check`: run `svelte-check` against `tsconfig.json`.
- `bun run biome:check`: run Biome checks on the app and config files.
- `bun run biome:format`: format the repository with Biome.

## Coding Style & Naming Conventions
Use TypeScript and Svelte with 4-space indentation where existing files already use it. Prefer relative imports inside `src/` unless a local alias already exists. Use PascalCase for Svelte components, camelCase for functions and variables, and `+page.svelte`/`+layout.svelte` naming only where Farm-compatible Svelte routing files are actually needed. Keep edits consistent with Biome formatting.

## Testing Guidelines
There is no dedicated unit test suite yet. Treat `bun run check` and `bun run biome:check` as the required validation before merging changes. When UI behavior changes, build with `bun run build` and verify the generated output in `build/`. Add targeted tests only if the repo grows a test harness.

## Commit & Pull Request Guidelines
Recent history uses short, imperative commit messages such as `fix button` and `update deps`. Keep commits similarly concise and focused. Pull requests should summarize the user-visible change, note any configuration or asset moves, and include screenshots for UI updates when relevant.

## Asset Handling
Place downloadable or browser-served assets under `public/`, not `static/`. If you add fonts or images, reference them from `src/app.css` or components using paths that work with Farm’s `publicPath` output.
