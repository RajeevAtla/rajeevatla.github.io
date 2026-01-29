<script lang="ts">
	import '../app.css';
	import { SignalGrid, SiteFooter, SiteHeader, siteConfig } from '$lib';
	import favicon from '$lib/assets/favicon.svg';

	const { children } = $props();
</script>

<svelte:head>
	<title>{siteConfig.title}</title>
	<meta name="description" content={siteConfig.description} />
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,600;6..96,700&family=IBM+Plex+Mono:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
	/>
</svelte:head>

<SignalGrid />

<div class="editorial-shell flex min-h-screen flex-col">
	<SiteHeader />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<SiteFooter />
</div>
