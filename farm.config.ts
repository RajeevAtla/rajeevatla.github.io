import { defineConfig } from "@farmfe/core";
import postcss from "@farmfe/js-plugin-postcss";
import { svelte } from "@sveltejs/vite-plugin-svelte";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const inferredBase = repoName ? `/${repoName}/` : "/";
const basePath =
	process.env.BASE_PATH ?? (process.env.GITHUB_PAGES ? inferredBase : "/");
const publicPath = basePath.endsWith("/") ? basePath : `${basePath}/`;

export default defineConfig({
	vitePlugins: [svelte()],
	plugins: [postcss()],
	compilation: {
		output: {
			path: "build",
			publicPath,
		},
		persistentCache: false,
	},
});
