<script context="module" lang="ts">
	export type MatrixCategory = {
		title: string;
		skills: string[];
	};
</script>

<script lang="ts">
	export let category: MatrixCategory;
	export let index = 0;
</script>

<section
	class="editorial-surface editorial-veil reveal-up relative grid gap-4 overflow-hidden rounded-[1.25rem] p-[clamp(1.1rem,2.4vw,1.7rem)] before:pointer-events-none before:absolute before:inset-[-30%_auto_auto_-18%] before:h-[80%] before:w-[70%] before:rotate-[-6deg] before:opacity-[0.42] before:content-[''] before:[background:radial-gradient(closest-side,var(--signal),transparent_72%)]"
	data-delay={String(Math.min(3, index % 4))}
>
	<header class="relative z-[1] flex flex-col gap-[0.3rem]">
		<p class="[font-family:var(--font-mono)] text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
			Capability
		</p>
		<h3 class="text-[clamp(1.25rem,2.1vw,1.7rem)] text-[color:var(--ink)]">{category.title}</h3>
	</header>

	<ul
		class="relative z-[1] m-0 grid list-none grid-cols-2 gap-x-[0.7rem] gap-y-2 p-0 max-[520px]:grid-cols-1"
		aria-label={`${category.title} skills`}
	>
		{#each category.skills as skill}
			<li
				class="rounded-[0.9rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] px-[0.7rem] py-2 [font-family:var(--font-mono)] text-[0.74rem] font-semibold uppercase tracking-[0.06em] text-[color:var(--ink-muted)] transition-all duration-150 ease-out hover:-translate-y-[2px] hover:border-[color:var(--signal-strong)] hover:text-[color:var(--ink)]"
			>
				{skill}
			</li>
		{/each}
	</ul>
</section>
