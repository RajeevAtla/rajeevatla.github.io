<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let project: Project;
	export let index = 0;

	const delay = String(Math.min(3, (index % 4))) as '0' | '1' | '2' | '3';
</script>

<article class="dossier-card editorial-surface editorial-veil reveal-up" data-delay={delay}>
	<header class="dossier-card__header">
		<div class="dossier-card__title-block">
			<p class="editorial-label">Case File</p>
			<h3 class="dossier-card__title">{project.title}</h3>
		</div>
		<span class="editorial-stamp">{project.period}</span>
	</header>

	<p class="dossier-card__summary">{project.summary}</p>

	<div class="dossier-card__tags" aria-label="Project tags">
		{#each project.tags as tag}
			<span class="dossier-card__tag">{tag}</span>
		{/each}
	</div>

	<footer class="dossier-card__links">
		{#each project.links as link}
			<a class="dossier-card__link" href={link.href} target="_blank" rel="noopener">
				<span>{link.title}</span>
				<span aria-hidden="true">↗</span>
			</a>
		{/each}
	</footer>
</article>

<style>
	.dossier-card {
		display: flex;
		flex-direction: column;
		gap: 1.1rem;
		border-radius: 1.35rem;
		padding: clamp(1.2rem, 2.6vw, 1.9rem);
		min-height: 100%;
		position: relative;
		overflow: clip;
		transition:
			transform 220ms ease,
			border-color 220ms ease,
			box-shadow 220ms ease;
	}

	.dossier-card::before {
		content: "";
		position: absolute;
		inset: -40% 50% auto -10%;
		height: 70%;
		background: radial-gradient(closest-side, var(--signal-strong), transparent 72%);
		opacity: 0.18;
		transform: rotate(-8deg);
		pointer-events: none;
	}

	.dossier-card:hover {
		transform: translate3d(0, -6px, 0);
		border-color: var(--edge-strong);
		box-shadow:
			0 60px 120px -90px var(--signal-strong),
			0 24px 60px -36px color-mix(in srgb, black 38%, transparent);
	}

	.dossier-card__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.dossier-card__title-block {
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
	}

	.dossier-card__title {
		font-size: clamp(1.45rem, 2.4vw, 1.9rem);
		color: var(--ink);
		text-wrap: balance;
	}

	.dossier-card__summary {
		color: var(--ink-muted);
		font-size: 0.98rem;
		max-width: 60ch;
	}

	.dossier-card__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.dossier-card__tag {
		border: 1px solid var(--edge);
		border-radius: 0.85rem;
		padding: 0.4rem 0.68rem;
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-muted);
		background: color-mix(in srgb, var(--paper-strong) 92%, transparent);
	}

	.dossier-card__links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.8rem;
		margin-top: auto;
		padding-top: 0.4rem;
	}

	a.dossier-card__link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border-bottom: 1px solid var(--signal-strong);
		padding-bottom: 0.15rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--accent-strong);
		text-decoration: none;
		transition:
			color 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	a.dossier-card__link:hover {
		color: var(--accent-warm);
		border-color: var(--accent-warm);
		transform: translateX(2px);
	}
</style>
