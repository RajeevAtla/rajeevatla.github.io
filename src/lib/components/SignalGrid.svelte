<div class="signal-grid" aria-hidden="true">
	<div class="signal-grid__halo"></div>
	<div class="signal-grid__noise"></div>
</div>

<style>
	.signal-grid {
		position: fixed;
		inset: 0;
		z-index: -3;
		pointer-events: none;
		overflow: hidden;
	}

	.signal-grid::before {
		content: "";
		position: absolute;
		inset: -20vmax;
		background:
			repeating-linear-gradient(
				90deg,
				color-mix(in srgb, var(--signal-strong) 22%, transparent) 0 1px,
				transparent 1px 68px
			),
			repeating-linear-gradient(
				0deg,
				color-mix(in srgb, var(--edge) 82%, transparent) 0 1px,
				transparent 1px 68px
			);
		opacity: 0.42;
		transform: rotate(-2deg) scale(1.05);
		mask-image: radial-gradient(1200px 720px at 50% 12%, black 62%, transparent 100%);
	}

	.signal-grid__halo {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(520px 320px at 18% 22%, var(--signal-strong), transparent 70%),
			radial-gradient(
				640px 380px at 86% 8%,
				color-mix(in srgb, var(--accent-warm) 22%, transparent),
				transparent 72%
			);
		filter: blur(14px);
		opacity: 0.36;
		animation: halo-drift 38s ease-in-out infinite alternate;
	}

	.signal-grid__noise {
		position: absolute;
		inset: -1px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.18'/%3E%3C/svg%3E");
		opacity: 0.22;
		mix-blend-mode: soft-light;
		mask-image: radial-gradient(1500px 820px at 50% -12%, black 58%, transparent 100%);
	}

	@keyframes halo-drift {
		0% {
			transform: translate3d(-1.5%, -1%, 0) scale(1);
		}
		100% {
			transform: translate3d(1.8%, 1.2%, 0) scale(1.06);
		}
	}
</style>

