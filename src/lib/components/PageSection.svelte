<script lang="ts">
	export let eyebrow: string | undefined;
	export let title: string;
	export let description: string | undefined;
	export let variant: "default" | "dossier" | "matrix" | "timeline" | "callout" = "default";

	const variantClass: Record<typeof variant, string> = {
		default: "page-section--default",
		dossier: "page-section--dossier",
		matrix: "page-section--matrix",
		timeline: "page-section--timeline",
		callout: "page-section--callout",
	};
</script>

<section class={`page-section editorial-container ${variantClass[variant]}`}>
	<header class="page-section__header">
		{#if eyebrow}
			<span class="editorial-label">{eyebrow}</span>
		{/if}
		<h2 class="page-section__title">{title}</h2>
		{#if description}
			<p class="page-section__description">{description}</p>
		{/if}
		<div class="editorial-rule" aria-hidden="true"></div>
	</header>
	<div class="page-section__body">
		<slot />
	</div>
</section>

<style>
	.page-section {
		padding-block: var(--section-pad-y);
		position: relative;
	}

	.page-section__header {
		display: grid;
		gap: 1rem;
		margin-bottom: clamp(2rem, 5vw, 3.2rem);
		max-width: 70ch;
	}

	.page-section__title {
		font-size: clamp(2.2rem, 5vw, 3.6rem);
		color: var(--ink);
		text-wrap: balance;
	}

	.page-section__description {
		font-size: clamp(1.02rem, 1.8vw, 1.16rem);
		color: var(--ink-muted);
		max-width: 65ch;
	}

	.page-section__body {
		display: grid;
		gap: clamp(1.4rem, 3vw, 2.2rem);
	}

	.page-section--dossier::before,
	.page-section--matrix::before,
	.page-section--timeline::before,
	.page-section--callout::before {
		content: "";
		position: absolute;
		left: var(--section-pad-x);
		right: var(--section-pad-x);
		top: clamp(2.2rem, 6vw, 3.6rem);
		height: 1px;
		background: linear-gradient(90deg, transparent, var(--signal-strong), transparent);
		opacity: 0.7;
		pointer-events: none;
	}

	.page-section--dossier {
		padding-top: calc(var(--section-pad-y) * 1.1);
	}

	.page-section--callout {
		padding-bottom: calc(var(--section-pad-y) * 1.2);
	}
</style>
