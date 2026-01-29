<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { navLinks, siteConfig } from '$lib/config/site';

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

	$: currentPath = (() => {
		const pathname = $page.url.pathname;
		if (pathname.startsWith(base)) {
			const sliced = pathname.slice(base.length) || '/';
			return sliced.startsWith('/') ? sliced : `/${sliced}`;
		}
		return pathname || '/';
	})();

	let mobileOpen = false;
	const toggleMobile = () => {
		mobileOpen = !mobileOpen;
	};
	const closeMobile = () => {
		mobileOpen = false;
	};
</script>

<header
	class="sticky top-0 z-20 border-b border-[color:var(--edge)] backdrop-blur-[14px] shadow-[0_20px_60px_-54px_var(--signal-strong)] [background:linear-gradient(180deg,color-mix(in_srgb,var(--paper)_92%,transparent),color-mix(in_srgb,var(--paper)_76%,transparent))]"
>
	<div class="editorial-container flex items-center justify-between gap-4 py-4">
		<a href={resolveHref('/')} class="inline-flex flex-col gap-1 no-underline">
			<span class="[font-family:var(--font-display)] text-[clamp(1.2rem,2.2vw,1.55rem)] font-bold tracking-[0.03em] text-[color:var(--ink)]">
				{title}
			</span>
			<span class="[font-family:var(--font-mono)] text-[0.66rem] font-bold uppercase tracking-[0.22em] text-[color:var(--ink-muted)]">
				ML Systems Dossier
			</span>
		</a>
		<nav class="hidden sm:inline-flex sm:items-center sm:gap-[0.6rem]" aria-label="Primary">
			<ThemeToggle />
		</nav>
		<div class="inline-flex items-center gap-2 sm:hidden">
			<ThemeToggle />
			<button
				type="button"
				class="inline-flex h-[2.35rem] w-[2.35rem] items-center justify-center rounded-[0.85rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_86%,transparent)] text-[color:var(--ink)] transition-all duration-150 ease-out hover:-translate-y-[1px] hover:border-[color:var(--signal-strong)]"
				on:click={toggleMobile}
				aria-expanded={mobileOpen}
				aria-controls="mobile-nav"
			>
				<span aria-hidden="true" class="inline-flex h-4 w-4 items-center justify-center">
					{#if mobileOpen}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
							<path d="M6.343 5.929a1 1 0 0 1 1.414 0L12 10.172l4.243-4.243a1 1 0 1 1 1.414 1.414L13.414 11.586l4.243 4.243a1 1 0 1 1-1.414 1.414L12 13l-4.243 4.243a1 1 0 0 1-1.414-1.414l4.243-4.243-4.243-4.243a1 1 0 0 1 0-1.414Z" />
						</svg>
					{:else}
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
							<path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1 5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z" />
						</svg>
					{/if}
				</span>
				<span class="sr-only">Toggle navigation</span>
			</button>
		</div>
	</div>
	{#if mobileOpen}
		<ul id="mobile-nav" class="editorial-container grid gap-2 pb-4">
			{#each navLinks as link}
				<li>
					<a
						href={resolveHref(link.href)}
						aria-current={currentPath === link.href ? 'page' : undefined}
						class={`inline-flex items-center rounded-[0.95rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_90%,transparent)] px-[0.9rem] py-[0.7rem] [font-family:var(--font-mono)] text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[color:var(--ink-muted)] no-underline transition-all duration-150 ease-out hover:-translate-y-[1px] hover:border-[color:var(--signal-strong)] hover:text-[color:var(--ink)] ${currentPath === link.href ? '-translate-y-[1px] border-[color:var(--signal-strong)] text-[color:var(--ink)]' : ''}`}
						on:click={closeMobile}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>
