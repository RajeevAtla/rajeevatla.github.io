<script lang="ts">
	export type TimelineItem = {
		period: string;
		title: string;
		detail: string;
	};

	export let items: TimelineItem[] = [];
</script>

<ol class="timeline editorial-surface">
	{#each items as item, i}
		<li class="timeline__item reveal-up" data-delay={String(Math.min(3, i))}>
			<div class="timeline__rail" aria-hidden="true">
				<span class="timeline__node"></span>
			</div>
			<div class="timeline__content editorial-veil">
				<p class="timeline__period">{item.period}</p>
				<h3 class="timeline__title">{item.title}</h3>
				<p class="timeline__detail">{item.detail}</p>
			</div>
		</li>
	{/each}
</ol>

<style>
	.timeline {
		list-style: none;
		margin: 0;
		padding: clamp(1.2rem, 2.8vw, 2.2rem);
		border-radius: 1.4rem;
		display: grid;
		gap: 1.1rem;
	}

	.timeline__item {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: clamp(0.9rem, 2vw, 1.4rem);
		align-items: stretch;
	}

	.timeline__rail {
		position: relative;
		width: 2.4rem;
		display: flex;
		justify-content: center;
	}

	.timeline__rail::before {
		content: "";
		position: absolute;
		top: 0.2rem;
		bottom: 0.2rem;
		width: 1px;
		background: linear-gradient(180deg, var(--signal-strong), var(--edge), transparent);
		opacity: 0.9;
	}

	.timeline__node {
		margin-top: 0.2rem;
		width: 0.95rem;
		height: 0.95rem;
		border-radius: 0.28rem;
		border: 1px solid var(--signal-strong);
		background:
			linear-gradient(160deg, color-mix(in srgb, var(--signal-strong) 66%, transparent), transparent),
			color-mix(in srgb, var(--paper-strong) 90%, transparent);
		box-shadow:
			0 0 0 4px color-mix(in srgb, var(--signal) 45%, transparent),
			0 16px 30px -22px var(--signal-strong);
		position: relative;
		z-index: 1;
	}

	.timeline__content {
		border: 1px solid var(--edge);
		border-radius: 1.1rem;
		padding: clamp(1rem, 2.4vw, 1.6rem);
		background: color-mix(in srgb, var(--paper-strong) 92%, transparent);
		display: grid;
		gap: 0.45rem;
		position: relative;
		overflow: hidden;
	}

	.timeline__content::before {
		content: "";
		position: absolute;
		inset: auto -20% -60% 30%;
		height: 120%;
		background: radial-gradient(closest-side, var(--signal), transparent 70%);
		opacity: 0.4;
		pointer-events: none;
	}

	.timeline__period {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--accent-strong);
	}

	.timeline__title {
		font-size: clamp(1.25rem, 2.2vw, 1.65rem);
		color: var(--ink);
	}

	.timeline__detail {
		color: var(--ink-muted);
		max-width: 65ch;
	}

	@media (max-width: 640px) {
		.timeline__rail {
			width: 1.8rem;
		}
	}
</style>

