<script lang="ts">
	import { base } from '$app/paths';
	import { PageSection, siteConfig, skills } from '$lib';
	const { title, tagline, description, socials } = siteConfig;

	const resolve = (path: string) => `${base}${path}`;
</script>

<svelte:head>
	<title>{title} | {tagline}</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="mx-auto w-full max-w-5xl px-4 py-16">
	<div class="space-y-6">
		<p class="text-xs uppercase tracking-eyebrow text-primary/70">{tagline}</p>
		<h1 class="text-4xl font-semibold text-primary sm:text-5xl">
			Hi, I'm {title.split(' ')[0]}. I turn research ideas into production ML systems.
		</h1>
		<p class="max-w-2xl text-base text-base-content/80 leading-relaxed">
			{description}
		</p>
		<div class="flex flex-wrap gap-3">
			{#each socials as social}
				<a class="btn btn-outline btn-sm btn-primary" href={social.href} target="_blank" rel="noopener">{social.title}</a>
			{/each}
		</div>
	</div>
</section>

<PageSection
	eyebrow="Education"
	title="Rutgers University"
	description="Blending computer engineering, data science, and machine learning to build practical AI systems."
>
	<ul class="space-y-4 text-sm text-base-content/80">
		<li class="rounded-xl border border-base-200 bg-base-100 p-4">
			<p class="text-xs uppercase tracking-caps text-primary/70">2025 - Present</p>
			<p class="font-semibold text-base-content">MS in Computer Engineering (Machine Learning specialization)</p>
			<p class="mt-2">
				Coursework highlights include Reinforcement Learning, Multimodal AI, and High Performance/Distributed Computing.
			</p>
		</li>
		<li class="rounded-xl border border-base-200 bg-base-100 p-4">
			<p class="text-xs uppercase tracking-caps text-primary/70">2021 - 2025</p>
			<p class="font-semibold text-base-content">BS in Computer Science, Computer Engineering, and Data Science</p>
			<p class="mt-2">
				Eleanor and Samuel Sneath Endowed Scholarship recipient; advanced study in AI, Distributed Deep Learning, and Statistical Learning.
			</p>
		</li>
	</ul>
</PageSection>

<PageSection
	eyebrow="Toolkit"
	title="Skills at a glance"
	description="The languages, frameworks, and cloud platforms I reach for when building ML solutions."
>
	<div class="grid gap-4 md:grid-cols-3">
		{#each skills as category}
			<div class="space-y-3 rounded-xl border border-base-200 bg-base-100 p-4">
				<p class="text-xs uppercase tracking-caps text-primary/70">{category.title}</p>
				<ul class="space-y-2 text-sm text-base-content/80">
					{#each category.skills as skill}
						<li>{skill}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</PageSection>


<PageSection
	eyebrow="How I help"
	title="Ways to collaborate"
	description="I partner with teams to accelerate ML research, harden data pipelines, and deliver the tooling that keeps models in production."
>
	<ul class="grid gap-3 md:grid-cols-3">
		{#each ['ML platform and tooling', 'End-to-end data and evaluation pipelines', 'Rapid prototyping for AI products'] as service}
			<li class="rounded-xl border border-base-200 bg-base-100 p-4 text-sm text-base-content/80">
				{service}
			</li>
		{/each}
	</ul>
</PageSection>

