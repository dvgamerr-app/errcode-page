<svelte:head>
	<title>502 Bad Gateway · dvgamerr.app</title>
	<meta name="title" content="502 Bad Gateway" />
	<meta
		name="description"
		content="The upstream service is temporarily unavailable. Please try again shortly."
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<main>
	<button class="theme-toggle" type="button" data-theme-toggle aria-label="Switch theme">
		<span class="theme-option dark-option">
			<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
				<path d="M20.2 15.4A8.5 8.5 0 0 1 8.6 3.8 8.5 8.5 0 1 0 20.2 15.4Z" />
			</svg>
			<span>Dark</span>
		</span>
		<span class="theme-option light-option">
			<svg class="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
				<circle cx="12" cy="12" r="4" />
				<path
					d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
				/>
			</svg>
			<span>Light</span>
		</span>
	</button>

	<section class="box" aria-labelledby="status-title">
		<h1 class="code">
			<span
				class="glitch"
				data-error-code
				data-code="502"
				data-variant="error"
				aria-label="Error code 502">502</span
			>
		</h1>
		<div class="message">
			<h2 id="status-title" data-status-title>502 Bad Gateway</h2>
			<p data-status-description>
				The upstream service is temporarily unavailable. Please try again shortly.
			</p>
		</div>
	</section>
</main>

<footer>
	<div class="licensed">
		<span>&copy;</span>
		<span data-current-year>2026</span>
		<strong>dvgamerr.app</strong>
		<span>design by</span>
		<a href="https://dvgamerr.app/" target="_blank" rel="noreferrer">Kananek T.</a>
		<span>v1.0.0</span>
	</div>
</footer>

<style>
	:global(body) {
		color: var(--text-color);
		font-family: 'Open Sans', sans-serif;
		font-size: 0.95rem;
		user-select: none;
		background-color: var(--background-color);
		background-image: var(--background-image);
		transition:
			color 0.25s ease,
			background-color 0.25s ease;
	}

	main {
		display: flex;
		height: calc(100vh - 34px);
		align-content: center;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.theme-toggle {
		position: fixed;
		z-index: 10;
		top: 1.25rem;
		right: 1.25rem;
		display: flex;
		height: 2.15rem;
		min-width: 5.3rem;
		padding: 0 0.7rem;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		color: var(--text-color);
		border: 1px solid var(--toggle-border);
		border-radius: 2px;
		background: var(--toggle-background);
		backdrop-filter: blur(0.75rem);
		transition:
			color 0.2s ease,
			background-color 0.2s ease,
			border-color 0.2s ease,
			box-shadow 0.2s ease;
	}

	.theme-toggle:hover {
		border-color: var(--text-color);
		box-shadow:
			-2px 0 0 rgba(255, 0, 0, 0.75),
			2px 0 0 rgba(0, 70, 255, 0.75);
	}

	.theme-toggle:focus-visible {
		outline: 2px solid var(--text-link-color);
		outline-offset: 3px;
	}

	.theme-icon {
		width: 0.9rem;
		height: 0.9rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.6;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.theme-option {
		align-items: center;
		gap: 0.45rem;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 0.62rem;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.dark-option {
		display: flex;
	}

	.light-option {
		display: none;
	}

	:global(html[data-theme='dark']) .dark-option {
		display: none;
	}

	:global(html[data-theme='dark']) .light-option {
		display: flex;
	}

	.box {
		display: flex;
		flex-direction: row;
		column-gap: 0.7em;
		overflow: hidden;
		transform: scale(1.2);
		transition: all 0.25s ease;
	}

	.code {
		position: relative;
		display: flex;
		width: 4em;
		margin: 0;
		align-items: center;
		justify-content: center;
		font-size: 1.5rem;
		font-weight: 500;
		vertical-align: top;
	}

	.glitch {
		position: relative;
		z-index: 0;
		padding: 0.2em;
		line-height: 1rem;
	}

	:global([data-error-code][data-variant='maintenance']) {
		font-size: 0.5em;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.glitch::before,
	.glitch::after {
		position: absolute;
		z-index: -1;
		top: -0.3em;
		left: -1.25em;
		overflow: hidden;
		padding: 0.5em 1.5em;
		content: attr(data-code);
		color: var(--text-color);
		background: var(--background-color);
		animation-duration: 2s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		animation-direction: alternate-reverse;
	}

	.glitch::before {
		text-shadow: -2px 0 red;
		animation-name: glitch-animation-1;
	}

	.glitch::after {
		top: -0.25em;
		left: -1.2em;
		text-shadow: -2px 0 blue;
		animation-name: glitch-animation-2;
	}

	.message {
		display: flex;
		padding-left: 2em;
		text-align: left;
		border-left: 1px solid var(--body-border-color);
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		vertical-align: middle;
	}

	.message h2 {
		margin: 0;
		padding: 0;
		font-size: 1rem;
		font-weight: normal;
		line-height: 1.5em;
	}

	.message p {
		margin: 0;
		font-size: 0.6rem;
		font-weight: normal;
		color: var(--small-text-color);
	}

	a {
		color: var(--text-link-color);
		text-decoration: none;
		opacity: 0.9;
	}

	a:hover {
		text-decoration: underline;
		opacity: 1;
	}

	.licensed {
		display: flex;
		height: 34px;
		justify-content: center;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		font-size: 0.8rem;
		column-gap: 0.3em;
	}

	@media only screen and (max-width: 495px) {
		.box {
			flex-direction: column;
		}

		.code {
			padding: 0.2em 0;
			font-size: 6rem;
			transform: scale(1.3);
			flex: 1.5em;
		}

		.message {
			border-left: none;
			transform: scale(0.8);
		}

		footer {
			transform: scale(0.9);
		}
	}

	@media only screen and (max-width: 1440px) {
		.box {
			transform: scale(1.4);
		}

		footer {
			transform: scale(1);
		}
	}

	@media only screen and (min-width: 1440px) {
		.box {
			transform: scale(1.5);
		}

		footer {
			transform: scale(1.1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.glitch::before,
		.glitch::after {
			animation: none;
		}
	}

	@keyframes glitch-animation-1 {
		0% {
			clip: rect(9px, 350px, 141px, 30px);
		}
		5% {
			clip: rect(62px, 350px, 61px, 30px);
		}
		10% {
			clip: rect(145px, 350px, 130px, 30px);
		}
		15% {
			clip: rect(4px, 350px, 105px, 30px);
		}
		20% {
			clip: rect(58px, 350px, 22px, 30px);
		}
		25% {
			clip: rect(1px, 350px, 143px, 30px);
		}
		30% {
			clip: rect(105px, 350px, 2px, 30px);
		}
		35% {
			clip: rect(12px, 350px, 118px, 30px);
		}
		40% {
			clip: rect(40px, 350px, 105px, 30px);
		}
		45% {
			clip: rect(128px, 350px, 83px, 30px);
		}
		50% {
			clip: rect(17px, 350px, 31px, 30px);
		}
		55% {
			clip: rect(110px, 350px, 112px, 30px);
		}
		60% {
			clip: rect(137px, 350px, 117px, 30px);
		}
		65% {
			clip: rect(41px, 350px, 62px, 30px);
		}
		70% {
			clip: rect(143px, 350px, 77px, 30px);
		}
		75% {
			clip: rect(31px, 350px, 52px, 30px);
		}
		80% {
			clip: rect(128px, 350px, 48px, 30px);
		}
		85% {
			clip: rect(123px, 350px, 3px, 30px);
		}
		90% {
			clip: rect(71px, 350px, 94px, 30px);
		}
		95% {
			clip: rect(47px, 350px, 96px, 30px);
		}
		100% {
			clip: rect(15px, 350px, 42px, 30px);
		}
	}

	@keyframes glitch-animation-2 {
		0% {
			clip: rect(12px, 350px, 37px, 30px);
		}
		5% {
			clip: rect(124px, 350px, 119px, 30px);
		}
		10% {
			clip: rect(36px, 350px, 31px, 30px);
		}
		15% {
			clip: rect(101px, 350px, 68px, 30px);
		}
		20% {
			clip: rect(124px, 350px, 64px, 30px);
		}
		25% {
			clip: rect(83px, 350px, 6px, 30px);
		}
		30% {
			clip: rect(101px, 350px, 143px, 30px);
		}
		35% {
			clip: rect(141px, 350px, 141px, 30px);
		}
		40% {
			clip: rect(20px, 350px, 20px, 30px);
		}
		45% {
			clip: rect(108px, 350px, 92px, 30px);
		}
		50% {
			clip: rect(12px, 350px, 129px, 30px);
		}
		55% {
			clip: rect(68px, 350px, 60px, 30px);
		}
		60% {
			clip: rect(138px, 350px, 5px, 30px);
		}
		65% {
			clip: rect(118px, 350px, 12px, 30px);
		}
		70% {
			clip: rect(133px, 350px, 141px, 30px);
		}
		75% {
			clip: rect(38px, 350px, 113px, 30px);
		}
		80% {
			clip: rect(90px, 350px, 107px, 30px);
		}
		85% {
			clip: rect(134px, 350px, 131px, 30px);
		}
		90% {
			clip: rect(142px, 350px, 106px, 30px);
		}
		95% {
			clip: rect(86px, 350px, 106px, 30px);
		}
		100% {
			clip: rect(71px, 350px, 35px, 30px);
		}
	}
</style>
