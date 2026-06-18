<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/about-partimap',
		es: '/sobre-partimap',
		lt: '/apie-partimap',
		de: '/ueber-partimap',
	},
});

const { t } = useI18n();
const localePath = useLocalePath();

useHead({
	title: t('aboutPartimap.title'),
});
</script>

<template>
	<LandingFrame>
		<section class="ap-hero">
			<img src="/map.webp" alt="" class="ap-map" aria-hidden="true" />
			<div class="ap-hero-inner">
				<NuxtLink :to="localePath({ name: 'sugo' })" class="ap-pill ap-pill-1">{{ t('aboutPartimap.q1') }}</NuxtLink>
				<NuxtLink :to="localePath({ name: 'sugo' })" class="ap-pill ap-pill-2">{{ t('aboutPartimap.q2') }}</NuxtLink>
				<NuxtLink :to="localePath({ name: 'sugo' })" class="ap-pill ap-pill-3">{{ t('aboutPartimap.q3') }}</NuxtLink>
			</div>
		</section>

		<section class="ap-section">
			<div class="ap-section-inner">
				<div class="ap-block">
					<div class="ap-block-text ap-block-text-left">
						<h2>{{ t('aboutPartimap.shortTitle') }}</h2>
						<p>{{ t('aboutPartimap.shortDesc') }}</p>
					</div>
					<div class="ap-block-deco">
						<div class="ap-disc" />
						<div class="ap-line" aria-hidden="true" />
						<svg class="why-side-arrow" aria-hidden="true" viewBox="0 0 24 400" xmlns="http://www.w3.org/2000/svg">
							<line x1="12" y1="50" x2="12" y2="384" stroke="currentColor" stroke-width="1.5"/>
							<polyline points="4,374 12,385 20,374" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" stroke-linecap="round"/>
						</svg>
					</div>
				</div>

				<div id="details" class="ap-block ap-block-reverse">
					<div class="ap-block-left-stack">
						<div class="ap-circle-outline" />
						<p class="ap-extra-text">{{ t('aboutPartimap.longDescExtra') }}</p>
					</div>
					<div class="ap-block-text">
						<h2>{{ t('aboutPartimap.longTitle') }}</h2>
						<p>{{ t('aboutPartimap.longDesc') }}</p>
					</div>
				</div>

				<div class="ap-cta">
					<p class="ap-cta-text">{{ t('aboutPartimap.interested') }}</p>
					<NuxtLink :to="localePath('/register')" class="ap-pill">{{ t('aboutPartimap.registerCta') }}</NuxtLink>
				</div>
			</div>
		</section>
	</LandingFrame>
</template>

<style scoped>
#details {
	margin-top: 8rem;
}

.ap-hero {
	position: relative;
	min-height: 380px;
	overflow: hidden;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
}
.ap-map {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 0.45;
}
.ap-hero-inner {
	position: relative;
	max-width: 1000px;
	margin: 0 auto;
	padding: 4rem 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
.ap-pill {
	background: #0055FF;
	color: #fff;
	font-size: 1.4rem;
	font-weight: 500;
	border-radius: 999px;
	padding: 1.2rem 2.5rem;
	display: inline-flex;
	align-items: center;
	width: fit-content;
	text-decoration: none;
	transition: background 0.15s ease;
}
.ap-pill:hover {
	background: #0044CC;
	color: #fff;
}
.ap-pill-1 { align-self: flex-start; margin-left: 0; }
.ap-pill-2 { align-self: flex-start; margin-left: 25%; }
.ap-pill-3 { align-self: flex-end; margin-right: 18%; }

.ap-section {
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	padding: 4rem 2rem 6rem;
	position: relative;
}
.ap-section-inner {
	max-width: 1000px;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	gap: 5rem;
}
.ap-block {
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: 3rem;
	align-items: center;
}
.ap-block-reverse {
	grid-template-columns: 1fr 1.2fr;
}
.ap-block h2 {
	color: #0055FF;
	font-size: clamp(2rem, 4vw, 2.6rem);
	font-weight: 500;
	margin-bottom: 1.2rem;
}
.ap-block p {
	font-size: 0.9rem;
	line-height: 1.75;
	color: #333;
	opacity: 0.9;
}
.ap-block-text-left h2 { color: #0055FF; }

.ap-block-deco {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 250px;
}
.ap-disc {
	width: 290px;
	height: 290px;
	background: #0055FF;
	border-radius: 50%;
	box-shadow: 0 8px 32px rgba(0, 85, 255, 0.25);
}
.ap-line {
	position: absolute;
	top: 290px;
	left: 50%;
	width: 1.5px;
	height: 80px;
	background: #0055FF;
}
.ap-arrow {
	position: absolute;
	top: 290px;
	left: calc(50% - 9px);
	color: #0055FF;
	font-size: 1.4rem;
}
.ap-circle-outline {
	width: 240px;
	height: 240px;
	border: 1.5px solid #0055FF;
	border-radius: 50%;
	opacity: 0.7;
}
.ap-block-left-stack {
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: start;
	position: relative;
	padding-top: 4.5rem;
}
.ap-block-left-stack > .ap-circle-outline {
	position: absolute;
	top: 0;
	left: 0;
	transform: translate(-55%, -80%);
}
.ap-extra-text {
	font-size: 0.9rem;
	line-height: 1.75;
	color: #333;
	opacity: 0.9;
	max-width: 360px;
}

.ap-cta {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin-top: 2rem;
}
.ap-cta-text {
	color: #0055FF;
	font-size: clamp(2rem, 4vw, 2.6rem);
	font-weight: 500;
}

@media (max-width: 991px) {
	.ap-block-left-stack {
		padding-top: 0;
		gap: 2rem;
	}
	.ap-block-left-stack > .ap-circle-outline {
		position: static;
		transform: none;
	}
}
.why-side-arrow {
	position: absolute;
	right: 1rem;
	top: 135%;
	transform: translateY(-50%);
	width: 24px;
	height: 400px;
	scale: 1;
	color: var(--l-blue);
	pointer-events: none;
}

@media (max-width: 991px) {
	.ap-block,
	.ap-block-reverse {
		grid-template-columns: 1fr;
		text-align: center;
	}
	.ap-pill { font-size: 1.1rem; padding: 1rem 2rem; }
}
</style>
