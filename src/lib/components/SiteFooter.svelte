<script lang="ts">
	import { siteConfig } from '$lib/config/site';

	const { title, socials, email } = siteConfig;
	const year = new Date().getFullYear();
</script>

<footer class="[padding-block:clamp(2.8rem,6vw,4.2rem)]">
	<div class="editorial-container grid">
		<div class="editorial-surface editorial-veil grid gap-[1.4rem] rounded-[1.4rem] border border-[color:var(--edge)] p-[clamp(1.4rem,3vw,2.2rem)] min-[840px]:grid-cols-[1.1fr_1fr] min-[840px]:items-center">
			<div class="grid gap-2">
				<p class="editorial-label">Transmission</p>
				<p class="[font-family:var(--font-display)] text-[clamp(1.7rem,3vw,2.3rem)] tracking-[0.03em] text-[color:var(--ink)]">
					{title}
				</p>
				<p class="text-[0.95rem] text-[color:var(--ink-muted)]">© {year} {title}</p>
			</div>
			<div class="grid gap-4 min-[840px]:justify-items-end">
				<a
					class="inline-flex items-center justify-center rounded-[1rem] border border-[color:var(--signal-strong)] bg-[color:color-mix(in_srgb,var(--signal)_46%,transparent)] px-4 py-[0.8rem] [font-family:var(--font-mono)] text-[0.82rem] font-bold uppercase tracking-[0.14em] text-[color:var(--accent-strong)] no-underline transition-all duration-150 ease-out hover:-translate-y-[2px] hover:bg-[color:color-mix(in_srgb,var(--accent-warm)_12%,transparent)] hover:text-[color:var(--accent-warm)] min-[840px]:justify-self-end"
					href={`mailto:${email}`}
				>
					{email}
				</a>
				<ul class="m-0 flex list-none flex-wrap gap-[0.6rem] p-0" aria-label="Social links">
					{#each socials as social}
						<li>
							<a
								class="inline-flex items-center rounded-[0.95rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] px-[0.85rem] py-[0.6rem] [font-family:var(--font-mono)] text-[0.74rem] font-bold uppercase tracking-[0.12em] text-[color:var(--ink-muted)] no-underline transition-all duration-150 ease-out hover:-translate-y-[1px] hover:border-[color:var(--signal-strong)] hover:text-[color:var(--ink)]"
								href={social.href}
								rel="noopener"
								target="_blank"
							>
								{social.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>
