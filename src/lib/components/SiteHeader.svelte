<script lang="ts">
	import { resolve } from "$app/paths";
	import { siteConfig } from "../config/site";
	import ThemeToggle from "./ThemeToggle.svelte";

	const { title } = siteConfig;

</script>

<header class="border-b bg-base-100/90 backdrop-blur">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
		<a href={resolve('/')} class="text-4xl font-serif text-primary">
			{title}
		</a>
		<nav class="items-center gap-2 text-4xl sm:flex" aria-label="Primary">
			<ThemeToggle />
		</nav>
	</div>
</header>

