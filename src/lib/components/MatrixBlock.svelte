<script lang="ts">
	export type MatrixCategory = {
		title: string;
		skills: string[];
	};

	export let category: MatrixCategory;
	export let index = 0;
</script>

<section class="matrix-block editorial-surface editorial-veil reveal-up" data-delay={String(Math.min(3, index % 4))}>
	<header class="matrix-block__header">
		<p class="matrix-block__label">Capability</p>
		<h3 class="matrix-block__title">{category.title}</h3>
	</header>

	<ul class="matrix-block__grid" aria-label={`${category.title} skills`}>
		{#each category.skills as skill}
			<li class="matrix-block__item">{skill}</li>
		{/each}
	</ul>
</section>

<style>
	.matrix-block {
		border-radius: 1.25rem;
		padding: clamp(1.1rem, 2.4vw, 1.7rem);
		display: grid;
		gap: 1rem;
		position: relative;
		overflow: hidden;
	}

	.matrix-block::before {
		content: "";
		position: absolute;
		inset: -30% auto auto -18%;
		width: 70%;
		height: 80%;
		background: radial-gradient(closest-side, var(--signal), transparent 72%);
		opacity: 0.42;
		transform: rotate(-6deg);
		pointer-events: none;
	}

	.matrix-block__header {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
		position: relative;
		z-index: 1;
	}

	.matrix-block__label {
		font-family: var(--font-mono);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--ink-muted);
	}

	.matrix-block__title {
		font-size: clamp(1.25rem, 2.1vw, 1.7rem);
		color: var(--ink);
	}

	.matrix-block__grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.5rem 0.7rem;
		position: relative;
		z-index: 1;
	}

	.matrix-block__item {
		border: 1px solid var(--edge);
		border-radius: 0.9rem;
		padding: 0.5rem 0.7rem;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--ink-muted);
		background: color-mix(in srgb, var(--paper-strong) 92%, transparent);
		transition:
			color 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	.matrix-block__item:hover {
		color: var(--ink);
		border-color: var(--signal-strong);
		transform: translateY(-2px);
	}

	@media (max-width: 520px) {
		.matrix-block__grid {
			grid-template-columns: 1fr;
		}
	}
</style>

