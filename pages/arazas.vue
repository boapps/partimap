<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/pricing',
		es: '/precios',
		lt: '/kainos',
		de: '/preise',
	},
});

const localePath = useLocalePath();
const { t } = useI18n();

useHead({
	title: t('pricing.title'),
});
</script>

<template>
	<LandingFrame>
		<section class="pricing-section">
			<div class="pricing-inner">
				<h1 class="sec-title text-center">{{ t('pricing.heading') }}</h1>

				<div class="pricing-grid">
					<!-- Left: intro text -->
					<div class="pricing-intro">
						<h2>{{ t('pricing.introTitle') }}</h2>
						<p>{{ t('pricing.introP1') }}</p>
						<p v-if="t('pricing.introP2')">{{ t('pricing.introP2') }}</p>
						<div class="pricing-arrow" aria-hidden="true">↓</div>
					</div>

					<!-- Plan cards -->
					<div
						v-for="plan in ['free', 'extra']"
						:key="plan"
						class="plan-card"
					>
						<div class="plan-head">
							<h3>{{ t(`pricing.${plan}.name`) }}</h3>
							<p>{{ t(`pricing.${plan}.tagline`) }}</p>
							<NuxtLink
								:to="localePath({ name: 'register' })"
								class="btn-landing-outline btn-sm"
							>
								{{ t(`pricing.${plan}.cta`) }}
							</NuxtLink>
						</div>
						<div class="plan-banner">{{ t(`pricing.${plan}.bannerTitle`) }}</div>
						<div class="plan-body">
							<h4>{{ t(`pricing.${plan}.includesTitle`) }}</h4>
							<ul>
								<template v-for="n in 3" :key="n">
									<li v-if="t(`pricing.${plan}.feat${n}`)">
										<i class="fas fa-check" />
										<span>{{ t(`pricing.${plan}.feat${n}`) }}</span>
									</li>
								</template>
							</ul>
							<div class="plan-divider" />
							<a href="#" class="plan-more">{{ t('pricing.more') }}</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	</LandingFrame>
</template>

<style scoped>
.pricing-section {
	position: relative;
	padding: 4rem 2rem 6rem;
}
.pricing-inner {
	max-width: 1100px;
	margin: 0 auto;
}
.sec-title {
	color: #0055FF;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	font-size: clamp(2rem, 4.5vw, 3rem);
	font-weight: 500;
	margin-bottom: 3.5rem;
	line-height: 1.15;
}

.pricing-grid {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
	align-items: start;
}

.pricing-intro {
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	color: #333;
	position: relative;
}
.pricing-intro h2 {
	color: #0055FF;
	font-size: 1.7rem;
	font-weight: 500;
	margin-bottom: 1.2rem;
}
.pricing-intro p {
	font-size: 0.85rem;
	line-height: 1.7;
	opacity: 0.85;
	margin-bottom: 1rem;
}
.pricing-arrow {
	color: #0055FF;
	font-size: 1.5rem;
	margin-top: 3rem;
}

.plan-card {
	border: 1.5px solid #0055FF;
	border-radius: 18px;
	background: rgba(255, 255, 255, 0.55);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	min-height: 520px;
}
.plan-head {
	text-align: center;
	padding: 2rem 1.5rem 1.5rem;
}
.plan-head h3 {
	color: #0055FF;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	font-size: 1.4rem;
	font-weight: 700;
	margin-bottom: 1rem;
}
.plan-head p {
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	font-size: 0.8rem;
	line-height: 1.6;
	color: #444;
	margin-bottom: 1.5rem;
}
.plan-banner {
	background: #0055FF;
	color: #fff;
	text-align: center;
	padding: 0.7rem 1rem;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	font-size: 0.95rem;
	font-weight: 500;
	letter-spacing: 0.05em;
}
.plan-body {
	padding: 1.5rem 1.8rem 1.8rem;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	display: flex;
	flex-direction: column;
	flex: 1;
}
.plan-body h4 {
	color: #333;
	font-size: 0.9rem;
	font-weight: 700;
	margin-bottom: 1rem;
}
.plan-body ul {
	list-style: none;
	padding: 0;
	margin: 0 0 1.5rem 0;
}
.plan-body li {
	display: flex;
	align-items: center;
	gap: 0.7rem;
	font-size: 0.85rem;
	color: #333;
	margin-bottom: 0.6rem;
}
.plan-body li i {
	color: #0055FF;
	font-size: 0.8rem;
}
.plan-divider {
	border-top: 1px solid #0055FF;
	margin: auto 0 1rem 0;
}
.plan-more {
	color: #333;
	font-size: 0.85rem;
	font-weight: 500;
	text-decoration: none;
	align-self: flex-start;
}
.plan-more:hover { color: #0055FF; }

.btn-landing-outline {
	display: inline-block;
	border: 1.5px solid #0055FF;
	color: #0055FF;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	padding: 0.7rem 2rem;
	border-radius: 2rem;
	text-decoration: none;
	transition: background 0.2s, color 0.2s;
}
.btn-landing-outline:hover {
	background: #0055FF;
	color: #fff;
}
.btn-sm {
	font-size: 0.7rem;
	padding: 0.55rem 1.5rem;
}

.text-center { text-align: center; }

@media (max-width: 991px) {
	.pricing-grid {
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
	.pricing-arrow { display: none; }
}
</style>
