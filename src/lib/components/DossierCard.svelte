<script lang="ts">
	import type { Project } from '$lib/data/projects';

	export let project: Project;
	export let index = 0;

	const delay = String(Math.min(3, (index % 4))) as '0' | '1' | '2' | '3';
</script>

<article
	class="editorial-surface editorial-veil reveal-up relative flex min-h-full flex-col gap-[1.1rem] overflow-clip rounded-[1.35rem] p-[clamp(1.2rem,2.6vw,1.9rem)] transition-all duration-200 ease-out before:pointer-events-none before:absolute before:inset-[-40%_50%_auto_-10%] before:h-[70%] before:rotate-[-8deg] before:opacity-[0.18] before:content-[''] before:[background:radial-gradient(closest-side,var(--signal-strong),transparent_72%)] hover:-translate-y-[6px] hover:border-[color:var(--edge-strong)] hover:shadow-[0_60px_120px_-90px_var(--signal-strong),0_24px_60px_-36px_color-mix(in_srgb,black_38%,transparent)]"
	data-delay={delay}
>
	<header class="flex items-start justify-between gap-4">
		<div class="flex flex-col gap-[0.45rem]">
			<p class="editorial-label">Case File</p>
			<h3 class="text-[clamp(1.45rem,2.4vw,1.9rem)] text-[color:var(--ink)] [text-wrap:balance]">
				{project.title}
			</h3>
		</div>
		<span class="editorial-stamp">{project.period}</span>
	</header>

	<p class="max-w-[60ch] text-[0.98rem] text-[color:var(--ink-muted)]">{project.summary}</p>

	<div class="flex flex-wrap gap-2" aria-label="Project tags">
		{#each project.tags as tag}
			<span
				class="rounded-[0.85rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] px-[0.68rem] py-[0.4rem] [font-family:var(--font-mono)] text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-[color:var(--ink-muted)]"
			>
				{tag}
			</span>
		{/each}
	</div>

	<footer class="mt-auto flex flex-wrap gap-[0.8rem] pt-[0.4rem]">
		{#each project.links as link}
			<a
				class="inline-flex items-center gap-2 border-b border-[color:var(--signal-strong)] pb-[0.15rem] [font-family:var(--font-mono)] text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[color:var(--accent-strong)] no-underline transition-all duration-150 ease-out hover:translate-x-[2px] hover:border-[color:var(--accent-warm)] hover:text-[color:var(--accent-warm)]"
				href={link.href}
				target="_blank"
				rel="noopener"
			>
				<span>{link.title}</span>
				<span aria-hidden="true">↗</span>
			</a>
		{/each}
	</footer>
</article>
