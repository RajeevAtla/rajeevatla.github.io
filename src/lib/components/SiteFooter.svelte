<script lang="ts">
	import { siteConfig } from '$lib/config/site';

	const { title, socials, email } = siteConfig;
	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="editorial-container site-footer__inner">
		<div class="site-footer__panel editorial-surface editorial-veil">
			<div class="site-footer__meta">
				<p class="editorial-label">Transmission</p>
				<p class="site-footer__title">{title}</p>
				<p class="site-footer__copy">© {year} {title}</p>
			</div>
			<div class="site-footer__actions">
				<a class="site-footer__email" href={`mailto:${email}`}>{email}</a>
				<ul class="site-footer__links" aria-label="Social links">
					{#each socials as social}
						<li>
							<a class="site-footer__link" href={social.href} rel="noopener" target="_blank">
								{social.title}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
	.site-footer {
		padding-block: clamp(2.8rem, 6vw, 4.2rem);
	}

	.site-footer__inner {
		display: grid;
	}

	.site-footer__panel {
		border-radius: 1.4rem;
		padding: clamp(1.4rem, 3vw, 2.2rem);
		display: grid;
		gap: 1.4rem;
		border: 1px solid var(--edge);
	}

	.site-footer__meta {
		display: grid;
		gap: 0.5rem;
	}

	.site-footer__title {
		font-family: var(--font-display);
		font-size: clamp(1.7rem, 3vw, 2.3rem);
		color: var(--ink);
		letter-spacing: 0.03em;
	}

	.site-footer__copy {
		color: var(--ink-muted);
		font-size: 0.95rem;
	}

	.site-footer__actions {
		display: grid;
		gap: 1rem;
	}

	a.site-footer__email {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: 1px solid var(--signal-strong);
		border-radius: 1rem;
		padding: 0.8rem 1rem;
		font-family: var(--font-mono);
		font-size: 0.82rem;
		font-weight: 700;
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

	a.site-footer__email:hover {
		transform: translateY(-2px);
		color: var(--accent-warm);
		background: color-mix(in srgb, var(--accent-warm) 12%, transparent);
	}

	.site-footer__links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
	}

	a.site-footer__link {
		display: inline-flex;
		align-items: center;
		border: 1px solid var(--edge);
		border-radius: 0.95rem;
		padding: 0.6rem 0.85rem;
		font-family: var(--font-mono);
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		text-decoration: none;
		color: var(--ink-muted);
		background: color-mix(in srgb, var(--paper-strong) 92%, transparent);
		transition:
			color 160ms ease,
			border-color 160ms ease,
			transform 160ms ease;
	}

	a.site-footer__link:hover {
		color: var(--ink);
		border-color: var(--signal-strong);
		transform: translateY(-1px);
	}

	@media (min-width: 840px) {
		.site-footer__panel {
			grid-template-columns: 1.1fr 1fr;
			align-items: center;
		}

		.site-footer__actions {
			justify-items: end;
		}

		.site-footer__email {
			justify-self: end;
		}
	}
</style>
