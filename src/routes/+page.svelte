<script lang="ts">
	import { base } from '$app/paths';
	import {
		DossierCard,
		MatrixBlock,
		PageSection,
		TimelineRail,
		projects,
		siteConfig,
		skills,
	} from '$lib';

	const featured = projects.slice(0, 2);
	const { title, tagline, description, socials } = siteConfig;

	const resolve = (path: string) => `${base}${path}`;

	const educationTimeline = [
		{
			period: '2025 - Present',
			title: 'MS in Computer Engineering (Machine Learning specialization)',
			detail:
				'Coursework highlights include Reinforcement Learning, Multimodal AI, and High Performance/Distributed Computing.',
		},
		{
			period: '2021 - 2025',
			title: 'BS in Computer Science, Computer Engineering, and Data Science',
			detail:
				'Eleanor and Samuel Sneath Endowed Scholarship recipient; advanced study in AI, Distributed Deep Learning, and Statistical Learning.',
		},
	];
</script>

<svelte:head>
	<title>{title} | {tagline}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="editorial-container [padding-block-start:clamp(4.2rem,10vw,7.4rem)] [padding-block-end:clamp(3.4rem,8vw,6rem)]">
	<div
		class="editorial-surface editorial-veil relative grid gap-[clamp(1.8rem,4vw,3.2rem)] overflow-clip rounded-[clamp(1.6rem,4vw,2.6rem)] p-[clamp(1.6rem,4.5vw,3.4rem)] before:pointer-events-none before:absolute before:inset-[-40%_-10%_auto_40%] before:h-[80%] before:rotate-[12deg] before:opacity-[0.28] before:content-[''] before:[background:radial-gradient(closest-side,var(--signal-strong),transparent_72%),radial-gradient(closest-side,color-mix(in_srgb,var(--accent-warm)_28%,transparent),transparent_78%)] min-[760px]:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] min-[760px]:items-start"
	>
		<div class="relative z-[1] grid max-w-[64ch] gap-[1.1rem]">
			<p class="editorial-label reveal-up">{tagline}</p>
			<h1 class="reveal-up text-[clamp(2.9rem,7vw,5.2rem)] text-[color:var(--ink)] [text-wrap:balance]" data-delay="1">
				Hi, I'm {title.split(' ')[0]}. I turn research ideas into production ML systems.
			</h1>
			<p class="reveal-up max-w-[60ch] text-[clamp(1.05rem,2.2vw,1.22rem)] text-[color:var(--ink-muted)]" data-delay="2">
				{description}
			</p>
			<div class="reveal-up flex flex-wrap gap-[0.6rem] pt-[0.4rem]" data-delay="2" aria-label="Focus areas">
				{#each ['ML Systems', 'Tooling', 'Multimodal'] as chip}
					<span class="editorial-chip">{chip}</span>
				{/each}
			</div>
			<div class="reveal-up flex flex-wrap gap-[0.6rem] pt-[0.9rem]" data-delay="3">
				{#each socials as social}
					<a
						class="inline-flex items-center gap-2 rounded-[1rem] border border-[color:var(--edge-strong)] bg-[linear-gradient(180deg,color-mix(in_srgb,var(--paper-strong)_96%,transparent),color-mix(in_srgb,var(--paper-soft)_92%,transparent))] px-[0.98rem] py-[0.74rem] [font-family:var(--font-mono)] text-[0.78rem] font-bold uppercase tracking-[0.12em] text-[color:var(--ink)] no-underline transition-all duration-150 ease-out hover:-translate-y-[2px] hover:border-[color:var(--signal-strong)] hover:text-[color:var(--accent-strong)]"
						href={social.href}
						target="_blank"
						rel="noopener"
					>
						<span>{social.title}</span>
						<span aria-hidden="true">↗</span>
					</a>
				{/each}
			</div>
		</div>
		<div class="reveal-up grid content-start gap-[0.8rem]" data-delay="3" aria-hidden="true">
			<div
				class="relative grid gap-[0.35rem] overflow-hidden rounded-[1.2rem] border border-[color:color-mix(in_srgb,var(--signal-strong)_64%,transparent)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] p-[1.05rem_1.2rem] shadow-[0_40px_90px_-80px_var(--signal-strong)] after:pointer-events-none after:absolute after:inset-[auto_-25%_-70%_35%] after:h-[140%] after:opacity-50 after:content-[''] after:[background:radial-gradient(closest-side,var(--signal),transparent_72%)]"
			>
				<p class="[font-family:var(--font-mono)] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
					Signal
				</p>
				<p class="[font-family:var(--font-display)] text-[clamp(1.35rem,2.6vw,1.85rem)] text-[color:var(--ink)]">
					Research → Production
				</p>
				<p class="text-[0.96rem] text-[color:var(--ink-muted)]">
					Designing robust ML workflows that survive real users.
				</p>
			</div>
			<div
				class="relative grid gap-[0.35rem] overflow-hidden rounded-[1.2rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_92%,transparent)] p-[1.05rem_1.2rem] after:pointer-events-none after:absolute after:inset-[auto_-25%_-70%_35%] after:h-[140%] after:opacity-50 after:content-[''] after:[background:radial-gradient(closest-side,var(--signal),transparent_72%)]"
			>
				<p class="[font-family:var(--font-mono)] text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[color:var(--ink-muted)]">
					Current Track
				</p>
				<p class="[font-family:var(--font-display)] text-[clamp(1.35rem,2.6vw,1.85rem)] text-[color:var(--ink)]">
					Rutgers MS
				</p>
				<p class="text-[0.96rem] text-[color:var(--ink-muted)]">
					Machine Learning specialization, systems-first mindset.
				</p>
			</div>
		</div>
	</div>
</section>

<div class="zone-projects">
	<PageSection
		eyebrow="Highlights"
		title="Selected projects"
		description="A snapshot of the work I enjoy: scaling machine learning workflows, building intelligent tools, and shipping reliable user experiences."
		variant="dossier"
	>
		<div class="grid grid-cols-1 gap-[clamp(1rem,2.4vw,1.6rem)] min-[760px]:grid-cols-2">
			{#each featured as project, i}
				<DossierCard {project} index={i} />
			{/each}
		</div>
		<p class="pt-[0.4rem] text-[0.98rem] text-[color:var(--ink-muted)]">
			Curious for more?
			<a
				class="ml-2 border-b border-[color:var(--signal-strong)] pb-[0.15rem] [font-family:var(--font-mono)] text-[color:var(--accent-strong)] uppercase tracking-[0.12em] no-underline transition-colors duration-150 ease-out hover:border-[color:var(--accent-warm)] hover:text-[color:var(--accent-warm)]"
				href={resolve('/projects')}
			>
				Browse the full projects archive.
			</a>
		</p>
	</PageSection>
</div>

<div class="zone-education">
	<PageSection
		eyebrow="Education"
		title="Rutgers University"
		description="Blending computer engineering, data science, and machine learning to build practical AI systems."
		variant="timeline"
	>
		<TimelineRail items={educationTimeline} />
	</PageSection>
</div>

<PageSection
	eyebrow="Toolkit"
	title="Skills at a glance"
	description="The languages, frameworks, and cloud platforms I reach for when building ML solutions."
	variant="matrix"
>
	<div class="grid grid-cols-1 gap-[clamp(0.9rem,2.2vw,1.4rem)] min-[920px]:grid-cols-3">
		{#each skills as category, i}
			<MatrixBlock {category} index={i} />
		{/each}
	</div>
</PageSection>

<PageSection
	eyebrow="How I help"
	title="Ways to collaborate"
	description="I partner with teams to accelerate ML research, harden data pipelines, and deliver the tooling that keeps models in production."
>
	<ul class="m-0 grid list-none grid-cols-1 gap-[clamp(0.9rem,2.2vw,1.4rem)] p-0 min-[760px]:grid-cols-3">
		{#each ['ML platform and tooling', 'End-to-end data and evaluation pipelines', 'Rapid prototyping for AI products'] as service, i}
			<li
				class="editorial-surface editorial-veil reveal-up grid min-h-full gap-[0.6rem] rounded-[1.25rem] p-[clamp(1.2rem,2.6vw,1.8rem)]"
				data-delay={String(Math.min(3, i))}
			>
				<p class="[font-family:var(--font-mono)] text-[0.74rem] font-extrabold uppercase tracking-[0.22em] text-[color:var(--accent-strong)]">
					0{i + 1}
				</p>
				<p class="[font-family:var(--font-display)] text-[clamp(1.45rem,2.8vw,2.05rem)] text-[color:var(--ink)] [text-wrap:balance]">
					{service}
				</p>
			</li>
		{/each}
	</ul>
</PageSection>

<div class="zone-callout">
	<PageSection
		eyebrow="Stay in touch"
		title="Let's collaborate"
		description="Share details about your roadmap or research direction. I reply quickly to thoughtful inquiries."
		variant="callout"
	>
		<div
			class="editorial-surface editorial-veil reveal-up grid items-center gap-[clamp(1.2rem,3vw,2.2rem)] rounded-[clamp(1.4rem,4vw,2.1rem)] p-[clamp(1.4rem,3.6vw,2.6rem)] min-[920px]:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]"
		>
			<div
				class="grid gap-2 rounded-[1.1rem] border border-[color:var(--edge)] bg-[color:color-mix(in_srgb,var(--paper-strong)_90%,transparent)] p-[1rem_1.1rem]"
				aria-hidden="true"
			>
				<div class="inline-flex gap-[0.35rem]">
					<span class="h-[0.6rem] w-[0.6rem] rounded-full border border-[color:color-mix(in_srgb,var(--accent-warm)_60%,var(--edge))] bg-[color:color-mix(in_srgb,var(--paper-soft)_86%,transparent)]"></span>
					<span class="h-[0.6rem] w-[0.6rem] rounded-full border border-[color:color-mix(in_srgb,var(--accent)_60%,var(--edge))] bg-[color:color-mix(in_srgb,var(--paper-soft)_86%,transparent)]"></span>
					<span class="h-[0.6rem] w-[0.6rem] rounded-full border border-[color:color-mix(in_srgb,var(--accent-strong)_70%,var(--edge))] bg-[color:color-mix(in_srgb,var(--paper-soft)_86%,transparent)]"></span>
				</div>
				<p class="[font-family:var(--font-mono)] text-[0.82rem] font-semibold tracking-[0.06em] text-[color:var(--ink-muted)]">
					$ open-channel --intent collaborate
				</p>
				<p class="[font-family:var(--font-mono)] text-[0.82rem] font-semibold tracking-[0.06em] text-[color:var(--accent-strong)]">
					status: ready
				</p>
			</div>
			<div class="grid gap-[0.7rem]">
				<p class="[font-family:var(--font-mono)] text-[0.72rem] font-extrabold uppercase tracking-[0.2em] text-[color:var(--ink-muted)]">
					Direct line
				</p>
				<a
					class="inline-flex items-center justify-center rounded-[1.05rem] border border-[color:var(--signal-strong)] bg-[color:color-mix(in_srgb,var(--signal)_46%,transparent)] px-[1.2rem] py-[0.9rem] [font-family:var(--font-mono)] text-[0.86rem] font-extrabold uppercase tracking-[0.14em] text-[color:var(--accent-strong)] no-underline transition-all duration-150 ease-out hover:-translate-y-[2px] hover:bg-[color:color-mix(in_srgb,var(--accent-warm)_12%,transparent)] hover:text-[color:var(--accent-warm)]"
					href={`mailto:${siteConfig.email}`}
				>
					Start a conversation
				</a>
				<p class="max-w-[60ch] text-[color:var(--ink-muted)]">
					Best results: include your stack, timeline, and what "done" looks like.
				</p>
			</div>
		</div>
	</PageSection>
</div>
