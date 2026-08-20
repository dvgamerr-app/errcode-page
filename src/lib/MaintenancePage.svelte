<script>
	import {
		getHttpStatus,
		HTTP_STATUS_FAMILIES,
		HTTP_STATUS_PAGES,
		normalizeHttpCode
	} from '$lib/http-status.js';

	/** @type {string | number} */
	export let code = '502';

	const currentYear = new Date().getFullYear();
	const status = getHttpStatus(normalizeHttpCode(code));
</script>

<svelte:head>
	<title>{status.code} {status.title} · dvgamerr.app</title>
	<meta name="title" content={`${status.code} ${status.title}`} />
	<meta name="description" content={status.description} />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main data-status-root data-tone={status.tone} data-family={status.family}>
	<article class="status-card" aria-labelledby="status-title">
		<section class="code-panel" data-code-panel aria-label={`HTTP status ${status.code}`}>
			<div class="panel-header" aria-hidden="true">
				<span>HTTP status</span>
				<span class="live-signal"><i></i><i></i><i></i></span>
			</div>

			<div class="code-lockup">
				<span class="status-glyph" data-status-glyph aria-hidden="true">{status.glyph}</span>
				<span class="status-code" data-error-code data-code={status.code} aria-hidden="true"
					>{status.code}</span
				>
			</div>

			<div class="trace" aria-hidden="true">
				<span></span><span></span><span></span><span></span><span></span>
			</div>
		</section>

		<section class="message">
			<p class="eyebrow">
				<span aria-hidden="true"></span><span data-status-category>{status.category}</span>
			</p>
			<h1 id="status-title" data-status-title>{status.title}</h1>
			<p class="description" data-status-description>{status.description}</p>

			<div class="next-step">
				<svg viewBox="0 0 24 24" aria-hidden="true">
					<path d="M5 12h13m-5-5 5 5-5 5" />
				</svg>
				<p data-status-action>{status.action}</p>
			</div>
		</section>
	</article>
</main>

<footer>
	<p>
		&copy; <span data-current-year>{currentYear}</span>
		<a href="https://dvgamerr.app/">dvgamerr.app</a>
	</p>
	<span aria-hidden="true"></span>
	<p>System status</p>
</footer>

<div hidden aria-hidden="true" data-status-catalog>
	{#each HTTP_STATUS_PAGES as page (page.code)}
		<span
			data-status-entry={page.code}
			data-status-title={page.title}
			data-status-description={page.description}
			data-status-category={page.category}
			data-status-action={page.action}
			data-status-tone={page.tone}
			data-status-glyph={page.glyph}
			data-status-family-value={page.family}
		></span>
	{/each}
	{#each HTTP_STATUS_FAMILIES as family (family.family)}
		<span
			data-status-family={family.family}
			data-status-title={family.title}
			data-status-description={family.description}
			data-status-category={family.category}
			data-status-action={family.action}
			data-status-tone={family.tone}
			data-status-glyph={family.glyph}
			data-status-family-value={family.family}
		></span>
	{/each}
</div>

<style>
	:global(body) {
		color: var(--text-color);
		background-color: var(--background-color);
		background-image: var(--background-image);
	}

	main {
		--accent: var(--text-color);
		--accent-rgb: var(--text-rgb);
		position: relative;
		display: grid;
		min-height: calc(100dvh - 3.5rem);
		padding: clamp(5.5rem, 10vw, 8.5rem) clamp(1.25rem, 5vw, 5rem) clamp(3rem, 7vw, 5rem);
		box-sizing: border-box;
		place-items: center;
		isolation: isolate;
		overflow: hidden;
	}

	main::before,
	main::after {
		display: none;
	}

	.status-card {
		display: grid;
		width: min(70rem, 100%);
		grid-template-columns: minmax(20rem, 0.85fr) minmax(22rem, 1.15fr);
		border: 0;
		border-radius: 1.5rem;
		background: transparent;
		box-shadow: none;
		overflow: hidden;
	}

	.code-panel {
		position: relative;
		display: flex;
		min-height: 27rem;
		padding: 1.6rem;
		box-sizing: border-box;
		color: var(--text-color);
		background: transparent;
		flex-direction: column;
		justify-content: center;
		overflow: hidden;
	}

	.code-panel::after {
		display: none;
	}

	.panel-header {
		display: none;
		position: relative;
		z-index: 1;
		align-items: center;
		justify-content: space-between;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		font-weight: 650;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		opacity: 0.82;
	}

	.live-signal {
		display: flex;
		gap: 0.25rem;
	}

	.live-signal i {
		display: block;
		width: 0.28rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: currentColor;
		animation: signal-pulse 1.8s ease-in-out infinite;
	}

	.live-signal i:nth-child(2) {
		animation-delay: 160ms;
	}

	.live-signal i:nth-child(3) {
		animation-delay: 320ms;
	}

	.code-lockup {
		position: relative;
		display: grid;
		padding: 2rem 0;
		place-items: center;
	}

	.status-code {
		position: relative;
		z-index: 1;
		font-family: var(--font-mono);
		font-size: clamp(7.25rem, 16vw, 12.75rem);
		font-weight: 740;
		font-variant-numeric: tabular-nums;
		letter-spacing: -0.1em;
		line-height: 0.78;
		text-indent: -0.1em;
		text-shadow: none;
	}

	.status-glyph {
		position: absolute;
		top: 50%;
		left: 50%;
		font-family: var(--font-mono);
		font-size: clamp(10rem, 24vw, 18rem);
		font-weight: 300;
		line-height: 1;
		opacity: 0.085;
		transform: translate(-50%, -52%) rotate(-9deg);
		white-space: nowrap;
	}

	.trace {
		display: none;
		position: relative;
		z-index: 1;
		height: 1.8rem;
		gap: 0.28rem;
		align-items: flex-end;
		opacity: 0.72;
	}

	.trace span {
		display: block;
		height: 1px;
		background: currentColor;
	}

	.trace span:nth-child(1) {
		width: 11%;
	}

	.trace span:nth-child(2) {
		width: 24%;
		height: 0.28rem;
	}

	.trace span:nth-child(3) {
		width: 8%;
		height: 1.25rem;
	}

	.trace span:nth-child(4) {
		width: 19%;
		height: 0.55rem;
	}

	.trace span:nth-child(5) {
		width: 30%;
	}

	.message {
		display: flex;
		padding: clamp(2.75rem, 6vw, 5.2rem);
		box-sizing: border-box;
		flex-direction: column;
		justify-content: center;
	}

	.eyebrow {
		display: flex;
		margin: 0 0 1.4rem;
		align-items: center;
		gap: 0.65rem;
		color: var(--accent);
		font-size: 0.7rem;
		font-weight: 750;
		letter-spacing: 0.13em;
		line-height: 1.35;
		text-transform: uppercase;
	}

	.eyebrow > span:first-child {
		width: 0.5rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: currentColor;
		box-shadow: 0 0 0 0.3rem rgba(var(--accent-rgb), 0.12);
	}

	h1 {
		max-width: 12ch;
		margin: 0;
		font-size: clamp(2.65rem, 5.6vw, 5.25rem);
		font-weight: 730;
		letter-spacing: -0.06em;
		line-height: 0.94;
		text-wrap: balance;
	}

	.description {
		max-width: 38rem;
		margin: 1.55rem 0 0;
		color: var(--muted-text-color);
		font-size: clamp(1rem, 1.5vw, 1.15rem);
		line-height: 1.7;
		text-wrap: pretty;
	}

	.next-step {
		display: grid;
		margin-top: clamp(2rem, 4vw, 3.2rem);
		padding-top: 0;
		grid-template-columns: 1.25rem 1fr;
		gap: 0.8rem;
		align-items: start;
		border-top: 0;
	}

	.next-step svg {
		width: 1.1rem;
		margin-top: 0.23rem;
		fill: none;
		stroke: var(--accent);
		stroke-width: 1.8;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.next-step p {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.55;
	}

	footer {
		display: flex;
		height: 3.5rem;
		padding: 0 clamp(1.25rem, 4vw, 3rem);
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		color: var(--quiet-text-color);
		border-top: 0;
		font-family: var(--font-mono);
		font-size: 0.68rem;
		letter-spacing: 0.06em;
	}

	footer p {
		margin: 0;
	}

	footer > span {
		width: 0.2rem;
		aspect-ratio: 1;
		border-radius: 50%;
		background: currentColor;
	}

	footer a {
		color: inherit;
		text-decoration: none;
	}

	footer a:hover {
		color: var(--text-color);
		text-decoration: underline;
	}

	@media (max-width: 760px) {
		main {
			padding-top: 5.75rem;
			place-items: start center;
			overflow: visible;
		}

		.status-card {
			max-width: 34rem;
			grid-template-columns: 1fr;
		}

		.code-panel {
			display: flex;
			min-height: 18.5rem;
			justify-content: space-between;
		}

		.panel-header,
		.trace {
			display: flex;
		}

		.status-code {
			font-size: clamp(7.5rem, 32vw, 11rem);
		}

		.status-glyph {
			font-size: clamp(11rem, 45vw, 16rem);
		}

		.message {
			padding: clamp(2rem, 8vw, 3.25rem);
		}

		h1 {
			font-size: clamp(2.7rem, 12vw, 4.35rem);
		}
	}

	@media (max-width: 420px) {
		main {
			padding-inline: 0.85rem;
		}

		.code-panel {
			min-height: 16rem;
			padding: 1.25rem;
		}

		.message {
			padding: 2rem 1.5rem 2.25rem;
		}

		footer {
			font-size: 0.61rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.live-signal i {
			animation: none;
		}
	}

	@keyframes signal-pulse {
		0%,
		65%,
		100% {
			opacity: 0.32;
			transform: translateY(0);
		}

		32% {
			opacity: 1;
			transform: translateY(-0.15rem);
		}
	}
</style>
