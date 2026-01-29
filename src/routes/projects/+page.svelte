<script lang="ts">
	import { base } from '$app/paths';
	import { DossierCard, PageSection, projects, siteConfig } from '$lib';

	const resolve = (path: string) => `${base}${path}`;
</script>

<svelte:head>
	<title>Projects | {siteConfig.title}</title>
	<meta name="description" content={`Projects and case studies by ${siteConfig.title}.`} />
</svelte:head>

<section class="editorial-container [padding-block-start:clamp(4rem,9vw,6.8rem)] [padding-block-end:clamp(2.6rem,7vw,5rem)]">
	<div class="editorial-surface editorial-veil reveal-up grid max-w-[70ch] gap-[0.9rem] rounded-[clamp(1.5rem,4vw,2.4rem)] p-[clamp(1.5rem,4vw,3rem)]">
		<p class="editorial-label">Archive</p>
		<h1 class="text-[clamp(3rem,7vw,5rem)] text-[color:var(--ink)] [text-wrap:balance]">All projects</h1>
		<p class="max-w-[60ch] text-[clamp(1.04rem,2.1vw,1.2rem)] text-[color:var(--ink-muted)]">
			A complete view of recent work across ML systems, developer tooling, and applied AI.
		</p>
		<a
			class="mt-[0.6rem] inline-flex items-center justify-center rounded-[1rem] border border-[color:var(--edge-strong)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] px-[1.05rem] py-[0.8rem] [font-family:var(--font-mono)] text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[color:var(--ink)] no-underline transition-all duration-150 ease-out hover:-translate-y-[2px] hover:border-[color:var(--signal-strong)] hover:text-[color:var(--accent-strong)]"
			href={resolve('/')}
		>
			Back to the homepage
		</a>
	</div>
</section>

<PageSection
	eyebrow="Projects"
	title="Full dossier"
	description="Selected work spanning research, tooling, and production-ready ML systems."
	variant="dossier"
>
	<div class="grid grid-cols-1 gap-[clamp(1rem,2.4vw,1.7rem)] min-[760px]:grid-cols-2">
		{#each projects as project, i}
			<DossierCard {project} index={i} />
		{/each}
	</div>
</PageSection>
