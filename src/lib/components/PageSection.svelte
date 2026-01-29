<script lang="ts">
	export let eyebrow: string | undefined;
	export let title: string;
	export let description: string | undefined;
	export let variant: 'default' | 'dossier' | 'matrix' | 'timeline' | 'callout' = 'default';

	const baseClass =
		'editorial-container relative [padding-block:var(--section-pad-y)]';

	const ruleBeforeClass =
		"before:pointer-events-none before:absolute before:left-[var(--section-pad-x)] before:right-[var(--section-pad-x)] before:top-[clamp(2.2rem,6vw,3.6rem)] before:h-px before:opacity-70 before:content-[''] before:[background:linear-gradient(90deg,transparent,var(--signal-strong),transparent)]";

	const variantClass: Record<typeof variant, string> = {
		default: '',
		dossier: `${ruleBeforeClass} [padding-top:calc(var(--section-pad-y)*1.1)]`,
		matrix: ruleBeforeClass,
		timeline: ruleBeforeClass,
		callout: `${ruleBeforeClass} [padding-bottom:calc(var(--section-pad-y)*1.2)]`,
	};
</script>

<section class={`${baseClass} ${variantClass[variant]}`}>
	<header class="mb-[clamp(2rem,5vw,3.2rem)] grid max-w-[70ch] gap-4">
		{#if eyebrow}
			<span class="editorial-label">{eyebrow}</span>
		{/if}
		<h2 class="text-[clamp(2.2rem,5vw,3.6rem)] text-[color:var(--ink)] [text-wrap:balance]">
			{title}
		</h2>
		{#if description}
			<p class="max-w-[65ch] text-[clamp(1.02rem,1.8vw,1.16rem)] text-[color:var(--ink-muted)]">
				{description}
			</p>
		{/if}
		<div class="editorial-rule" aria-hidden="true"></div>
	</header>
	<div class="grid gap-[clamp(1.4rem,3vw,2.2rem)]">
		<slot />
	</div>
</section>
