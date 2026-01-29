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

<header class="site-header">
	<div class="site-header__inner editorial-container">
		<a href={resolveHref('/')} class="site-header__brand">
			<span class="site-header__title">{title}</span>
			<span class="site-header__subtitle">ML Systems Dossier</span>
		</a>
		<nav class="site-header__nav" aria-label="Primary">
			<ThemeToggle />
		</nav>
		<div class="site-header__mobile">
			<ThemeToggle />
			<button
				type="button"
				class="site-header__menu-btn"
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
		<ul id="mobile-nav" class="site-header__mobile-nav editorial-container">
			{#each navLinks as link}
				<li>
					<a
						href={resolveHref(link.href)}
						aria-current={currentPath === link.href ? 'page' : undefined}
						class={`site-header__mobile-link ${currentPath === link.href ? 'is-active' : ''}`}
						on:click={closeMobile}
					>
						{link.title}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</header>

<style>
	.site-header {
		position: sticky;
		top: 0;
		z-index: 20;
		backdrop-filter: blur(14px);
		background:
			linear-gradient(
				180deg,
				color-mix(in srgb, var(--paper) 92%, transparent),
				color-mix(in srgb, var(--paper) 76%, transparent)
			);
		border-bottom: 1px solid var(--edge);
		box-shadow: 0 20px 60px -54px var(--signal-strong);
	}

	.site-header__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 1rem;
		gap: 1rem;
	}

	a.site-header__brand {
		display: inline-flex;
		flex-direction: column;
		gap: 0.25rem;
		text-decoration: none;
	}

	.site-header__title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.2rem, 2.2vw, 1.55rem);
		color: var(--ink);
		letter-spacing: 0.03em;
	}

	.site-header__subtitle {
		font-family: var(--font-mono);
		font-size: 0.66rem;
		font-weight: 700;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--ink-muted);
	}

	.site-header__nav {
		display: none;
	}

	.site-header__mobile {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
	}

	.site-header__menu-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.35rem;
		height: 2.35rem;
		border-radius: 0.85rem;
		border: 1px solid var(--edge);
		background: color-mix(in srgb, var(--paper-strong) 86%, transparent);
		color: var(--ink);
		transition:
			border-color 160ms ease,
			transform 160ms ease;
	}

	.site-header__menu-btn:hover {
		border-color: var(--signal-strong);
		transform: translateY(-1px);
	}

	.site-header__mobile-nav {
		display: grid;
		gap: 0.5rem;
		padding-bottom: 1rem;
	}

	a.site-header__mobile-link {
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--edge);
		border-radius: 0.95rem;
		padding: 0.7rem 0.9rem;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--ink-muted);
		background: color-mix(in srgb, var(--paper-strong) 90%, transparent);
		transition:
			color 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	a.site-header__mobile-link:hover,
	a.site-header__mobile-link.is-active {
		color: var(--ink);
		border-color: var(--signal-strong);
		transform: translateY(-1px);
	}

	@media (min-width: 640px) {
		.site-header__nav {
			display: inline-flex;
			align-items: center;
			gap: 0.6rem;
		}

		.site-header__mobile {
			display: none;
		}
	}

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
