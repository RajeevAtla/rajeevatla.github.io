<script lang="ts">
	import { base } from '$app/paths';
	import { DossierCard, PageSection, projects, siteConfig } from '$lib';

	const resolve = (path: string) => `${base}${path}`;
</script>

<svelte:head>
	<title>Projects | {siteConfig.title}</title>
	<meta name="description" content={`Projects and case studies by ${siteConfig.title}.`} />
</svelte:head>

<section class="projects-hero editorial-container">
	<div class="projects-hero__frame editorial-surface editorial-veil reveal-up">
		<p class="editorial-label">Archive</p>
		<h1 class="projects-hero__title">All projects</h1>
		<p class="projects-hero__summary">
			A complete view of recent work across ML systems, developer tooling, and applied AI.
		</p>
		<a class="projects-hero__back" href={resolve('/')}>Back to the homepage</a>
	</div>
</section>

<PageSection
	eyebrow="Projects"
	title="Full dossier"
	description="Selected work spanning research, tooling, and production-ready ML systems."
	variant="dossier"
>
	<div class="projects-grid">
		{#each projects as project, i}
			<DossierCard {project} index={i} />
		{/each}
	</div>
</PageSection>

<style>
	.projects-hero {
		padding-block: clamp(4rem, 9vw, 6.8rem) clamp(2.6rem, 7vw, 5rem);
	}

	.projects-hero__frame {
		border-radius: clamp(1.5rem, 4vw, 2.4rem);
		padding: clamp(1.5rem, 4vw, 3rem);
		display: grid;
		gap: 0.9rem;
		max-width: 70ch;
	}

	.projects-hero__title {
		font-size: clamp(3rem, 7vw, 5rem);
		color: var(--ink);
		text-wrap: balance;
	}

	.projects-hero__summary {
		color: var(--ink-muted);
		font-size: clamp(1.04rem, 2.1vw, 1.2rem);
		max-width: 60ch;
	}

	a.projects-hero__back {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		margin-top: 0.6rem;
		border: 1px solid var(--edge-strong);
		border-radius: 1rem;
		padding: 0.8rem 1.05rem;
		font-family: var(--font-mono);
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--ink);
		background: color-mix(in srgb, var(--paper-strong) 92%, transparent);
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			color 180ms ease;
	}

	a.projects-hero__back:hover {
		transform: translateY(-2px);
		border-color: var(--signal-strong);
		color: var(--accent-strong);
	}

	.projects-grid {
		display: grid;
		gap: clamp(1rem, 2.4vw, 1.7rem);
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	@media (min-width: 760px) {
		.projects-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
