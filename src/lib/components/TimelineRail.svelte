<script lang="ts">
	export type TimelineItem = {
		period: string;
		title: string;
		detail: string;
	};

	export let items: TimelineItem[] = [];
</script>

<ol class="editorial-surface m-0 grid list-none gap-[1.1rem] rounded-[1.4rem] p-[clamp(1.2rem,2.8vw,2.2rem)]">
	{#each items as item, i}
		<li
			class="reveal-up grid grid-cols-[auto_1fr] items-stretch gap-[clamp(0.9rem,2vw,1.4rem)]"
			data-delay={String(Math.min(3, i))}
		>
			<div
				class="relative flex w-[2.4rem] justify-center max-[640px]:w-[1.8rem] before:absolute before:bottom-[0.2rem] before:top-[0.2rem] before:w-px before:opacity-90 before:content-[''] before:[background:linear-gradient(180deg,var(--signal-strong),var(--edge),transparent)]"
				aria-hidden="true"
			>
				<span
					class="relative z-[1] mt-[0.2rem] h-[0.95rem] w-[0.95rem] rounded-[0.28rem] border border-[color:var(--signal-strong)] [background:linear-gradient(160deg,color-mix(in_srgb,var(--signal-strong)_66%,transparent),transparent),color-mix(in_srgb,var(--paper-strong)_90%,transparent)] shadow-[0_0_0_4px_color-mix(in_srgb,var(--signal)_45%,transparent),0_16px_30px_-22px_var(--signal-strong)]"
				></span>
			</div>
			<div
				class="editorial-veil relative grid gap-[0.45rem] overflow-hidden rounded-[1.1rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] p-[clamp(1rem,2.4vw,1.6rem)] before:pointer-events-none before:absolute before:inset-[auto_-20%_-60%_30%] before:h-[120%] before:opacity-40 before:content-[''] before:[background:radial-gradient(closest-side,var(--signal),transparent_70%)]"
			>
				<p class="[font-family:var(--font-mono)] text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[color:var(--accent-strong)]">
					{item.period}
				</p>
				<h3 class="text-[clamp(1.25rem,2.2vw,1.65rem)] text-[color:var(--ink)]">{item.title}</h3>
				<p class="max-w-[65ch] text-[color:var(--ink-muted)]">{item.detail}</p>
			</div>
		</li>
	{/each}
</ol>
