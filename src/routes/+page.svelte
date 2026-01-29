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

<section class="hero editorial-container">
	<div class="hero__frame editorial-surface editorial-veil">
		<div class="hero__content">
			<p class="editorial-label reveal-up">{tagline}</p>
			<h1 class="hero__title reveal-up" data-delay="1">
				Hi, I'm {title.split(' ')[0]}. I turn research ideas into production ML systems.
			</h1>
			<p class="hero__summary reveal-up" data-delay="2">{description}</p>
			<div class="hero__chips reveal-up" data-delay="2" aria-label="Focus areas">
				{#each ['ML Systems', 'Tooling', 'Multimodal'] as chip}
					<span class="editorial-chip">{chip}</span>
				{/each}
			</div>
			<div class="hero__actions reveal-up" data-delay="3">
				{#each socials as social}
					<a class="hero__link" href={social.href} target="_blank" rel="noopener">
						<span>{social.title}</span>
						<span aria-hidden="true">↗</span>
					</a>
				{/each}
			</div>
		</div>
		<div class="hero__aside reveal-up" data-delay="3" aria-hidden="true">
			<div class="hero__card hero__card--primary">
				<p class="hero__card-label">Signal</p>
				<p class="hero__card-value">Research → Production</p>
				<p class="hero__card-meta">Designing robust ML workflows that survive real users.</p>
			</div>
			<div class="hero__card hero__card--secondary">
				<p class="hero__card-label">Current Track</p>
				<p class="hero__card-value">Rutgers MS</p>
				<p class="hero__card-meta">Machine Learning specialization, systems-first mindset.</p>
			</div>
		</div>
	</div>
</section>

<PageSection
	eyebrow="Highlights"
	title="Selected projects"
	description="A snapshot of the work I enjoy: scaling machine learning workflows, building intelligent tools, and shipping reliable user experiences."
	variant="dossier"
>
	<div class="dossier-grid">
		{#each featured as project, i}
			<DossierCard {project} index={i} />
		{/each}
	</div>
	<p class="dossier-cta">
		Curious for more? <a class="dossier-cta__link" href={resolve('/projects')}>Browse the full projects archive.</a>
	</p>
</PageSection>

<PageSection
	eyebrow="Education"
	title="Rutgers University"
	description="Blending computer engineering, data science, and machine learning to build practical AI systems."
	variant="timeline"
>
	<TimelineRail items={educationTimeline} />
</PageSection>

<PageSection
	eyebrow="Toolkit"
	title="Skills at a glance"
	description="The languages, frameworks, and cloud platforms I reach for when building ML solutions."
	variant="matrix"
>
	<div class="matrix-grid">
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
	<ul class="collab-grid">
		{#each ['ML platform and tooling', 'End-to-end data and evaluation pipelines', 'Rapid prototyping for AI products'] as service, i}
			<li class="collab-card editorial-surface editorial-veil reveal-up" data-delay={String(Math.min(3, i))}>
				<p class="collab-card__index">0{i + 1}</p>
				<p class="collab-card__text">{service}</p>
			</li>
		{/each}
	</ul>
</PageSection>

<PageSection
	eyebrow="Stay in touch"
	title="Let's collaborate"
	description="Share details about your roadmap or research direction. I reply quickly to thoughtful inquiries."
	variant="callout"
>
	<div class="callout editorial-surface editorial-veil reveal-up">
		<div class="callout__terminal" aria-hidden="true">
			<div class="callout__dots">
				<span></span><span></span><span></span>
			</div>
			<p class="callout__line">$ open-channel --intent collaborate</p>
			<p class="callout__line callout__line--accent">status: ready</p>
		</div>
		<div class="callout__body">
			<p class="callout__label">Direct line</p>
			<a class="callout__cta" href={`mailto:${siteConfig.email}`}>Start a conversation</a>
			<p class="callout__hint">Best results: include your stack, timeline, and what "done" looks like.</p>
		</div>
	</div>
</PageSection>

<style>
	.hero {
		padding-block: clamp(4.2rem, 10vw, 7.4rem) clamp(3.4rem, 8vw, 6rem);
	}

	.hero__frame {
		border-radius: clamp(1.6rem, 4vw, 2.6rem);
		padding: clamp(1.6rem, 4.5vw, 3.4rem);
		display: grid;
		gap: clamp(1.8rem, 4vw, 3.2rem);
		position: relative;
		overflow: clip;
	}

	.hero__frame::before {
		content: "";
		position: absolute;
		inset: -40% -10% auto 40%;
		height: 80%;
		background:
			radial-gradient(closest-side, var(--signal-strong), transparent 72%),
			radial-gradient(closest-side, color-mix(in srgb, var(--accent-warm) 28%, transparent), transparent 78%);
		opacity: 0.28;
		transform: rotate(12deg);
		pointer-events: none;
	}

	.hero__content {
		display: grid;
		gap: 1.1rem;
		max-width: 64ch;
		position: relative;
		z-index: 1;
	}

	.hero__title {
		font-size: clamp(2.9rem, 7vw, 5.2rem);
		color: var(--ink);
		text-wrap: balance;
	}

	.hero__summary {
		font-size: clamp(1.05rem, 2.2vw, 1.22rem);
		color: var(--ink-muted);
		max-width: 60ch;
	}

	.hero__chips {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		padding-top: 0.4rem;
	}

	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		padding-top: 0.9rem;
	}

	a.hero__link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		border: 1px solid var(--edge-strong);
		border-radius: 1rem;
		padding: 0.74rem 0.98rem;
		font-family: var(--font-mono);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--ink);
		background:
			linear-gradient(180deg, color-mix(in srgb, var(--paper-strong) 96%, transparent), color-mix(in srgb, var(--paper-soft) 92%, transparent));
		transition:
			transform 180ms ease,
			border-color 180ms ease,
			color 180ms ease;
	}

	a.hero__link:hover {
		transform: translateY(-2px);
		border-color: var(--signal-strong);
		color: var(--accent-strong);
	}

	.hero__aside {
		display: grid;
		gap: 0.8rem;
		align-content: start;
	}

	.hero__card {
		border: 1px solid var(--edge);
		border-radius: 1.2rem;
		padding: 1.05rem 1.2rem;
		display: grid;
		gap: 0.35rem;
		background: color-mix(in srgb, var(--paper-strong) 92%, transparent);
		position: relative;
		overflow: hidden;
	}

	.hero__card::after {
		content: "";
		position: absolute;
		inset: auto -25% -70% 35%;
		height: 140%;
		background: radial-gradient(closest-side, var(--signal), transparent 72%);
		opacity: 0.5;
		pointer-events: none;
	}

	.hero__card--primary {
		border-color: color-mix(in srgb, var(--signal-strong) 64%, transparent);
		box-shadow: 0 40px 90px -80px var(--signal-strong);
	}

	.hero__card-label {
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 700;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--ink-muted);
	}

	.hero__card-value {
		font-family: var(--font-display);
		font-size: clamp(1.35rem, 2.6vw, 1.85rem);
		color: var(--ink);
	}

	.hero__card-meta {
		color: var(--ink-muted);
		font-size: 0.96rem;
	}

	.dossier-grid {
		display: grid;
		gap: clamp(1rem, 2.4vw, 1.6rem);
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.dossier-cta {
		color: var(--ink-muted);
		font-size: 0.98rem;
		padding-top: 0.4rem;
	}

	a.dossier-cta__link {
		font-family: var(--font-mono);
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		border-bottom: 1px solid var(--signal-strong);
		padding-bottom: 0.15rem;
		color: var(--accent-strong);
		transition:
			color 160ms ease,
			border-color 160ms ease;
	}

	a.dossier-cta__link:hover {
		color: var(--accent-warm);
		border-color: var(--accent-warm);
	}

	.matrix-grid {
		display: grid;
		gap: clamp(0.9rem, 2.2vw, 1.4rem);
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.collab-grid {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: clamp(0.9rem, 2.2vw, 1.4rem);
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.collab-card {
		border-radius: 1.25rem;
		padding: clamp(1.2rem, 2.6vw, 1.8rem);
		display: grid;
		gap: 0.6rem;
		min-height: 100%;
	}

	.collab-card__index {
		font-family: var(--font-mono);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--accent-strong);
	}

	.collab-card__text {
		font-family: var(--font-display);
		font-size: clamp(1.45rem, 2.8vw, 2.05rem);
		color: var(--ink);
		text-wrap: balance;
	}

	.callout {
		border-radius: clamp(1.4rem, 4vw, 2.1rem);
		padding: clamp(1.4rem, 3.6vw, 2.6rem);
		display: grid;
		gap: clamp(1.2rem, 3vw, 2.2rem);
		align-items: center;
	}

	.callout__terminal {
		border: 1px solid var(--edge);
		border-radius: 1.1rem;
		padding: 1rem 1.1rem;
		background: color-mix(in srgb, var(--paper-strong) 90%, transparent);
		display: grid;
		gap: 0.5rem;
	}

	.callout__dots {
		display: inline-flex;
		gap: 0.35rem;
	}

	.callout__dots span {
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 999px;
		border: 1px solid var(--edge);
		background: color-mix(in srgb, var(--paper-soft) 86%, transparent);
	}

	.callout__dots span:nth-child(1) {
		border-color: color-mix(in srgb, var(--accent-warm) 60%, var(--edge));
	}

	.callout__dots span:nth-child(2) {
		border-color: color-mix(in srgb, var(--accent) 60%, var(--edge));
	}

	.callout__dots span:nth-child(3) {
		border-color: color-mix(in srgb, var(--accent-strong) 70%, var(--edge));
	}

	.callout__line {
		font-family: var(--font-mono);
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.06em;
		color: var(--ink-muted);
	}

	.callout__line--accent {
		color: var(--accent-strong);
	}

	.callout__body {
		display: grid;
		gap: 0.7rem;
	}

	.callout__label {
		font-family: var(--font-mono);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--ink-muted);
	}

	a.callout__cta {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--signal-strong);
		border-radius: 1.05rem;
		padding: 0.9rem 1.2rem;
		font-family: var(--font-mono);
		font-size: 0.86rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--accent-strong);
		background: color-mix(in srgb, var(--signal) 46%, transparent);
		transition:
			transform 180ms ease,
			background-color 180ms ease,
			color 180ms ease;
	}

	a.callout__cta:hover {
		transform: translateY(-2px);
		color: var(--accent-warm);
		background: color-mix(in srgb, var(--accent-warm) 12%, transparent);
	}

	.callout__hint {
		color: var(--ink-muted);
		max-width: 60ch;
	}

	@media (min-width: 760px) {
		.hero__frame {
			grid-template-columns: minmax(0, 1.35fr) minmax(0, 1fr);
			align-items: start;
		}

		.dossier-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.collab-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (min-width: 920px) {
		.matrix-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.callout {
			grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
		}
	}
</style>
