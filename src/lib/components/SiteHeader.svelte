<script lang="ts">
	import { base } from '$app/paths';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { siteConfig } from '$lib/config/site';

	const { title } = siteConfig;

	const resolveHref = (href: string) => {
		if (/^https?:\/\//.test(href) || href.startsWith('mailto:')) {
			return href;
		}

		if (href === '/') {
			return base || '/';
		}

		return `${base}${href}`;
	};

</script>

<header class="border-b bg-base-100/90 backdrop-blur">
	<div class="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
		<a href={resolveHref('/')} class="text-4xl font-serif text-primary">
			{title}
		</a>
		<nav class="items-center gap-2 text-4xl sm:flex" aria-label="Primary">
			<ThemeToggle />
		</nav>
	</div>
</header>

<style>
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}
</style>
