<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/about-us',
		es: '/sobre-nosotros',
		lt: '/apie-mus',
		de: '/ueber-uns',
	},
});

const { t } = useI18n();

useHead({
	title: t('aboutUs.title'),
});
</script>

<template>
	<LandingFrame>
		<section class="about-section">
			<div class="about-inner">
				<!-- Intro -->
				<div class="about-intro">
					<div class="about-intro-text">
						<h1>{{ t('aboutUs.beliefTitle') }}</h1>
						<p>{{ t('aboutUs.beliefP1') }}</p>
						<p>{{ t('aboutUs.beliefP2') }}</p>
						<div class="intro-arrow" aria-hidden="true">↓</div>
					</div>
					<div class="about-intro-photo">
						<div class="team-photo" />
					</div>
				</div>

				<!-- Scattered circles: blue highlights + photos intermixed -->
				<div class="scatter">
					<div class="hl-circle hl-circle-stat sc sc-stat">
						<span>{{ t('aboutUs.stat1') }}</span>
					</div>
					<div class="hl-circle hl-circle-sm sc sc-sm">
						<span>{{ t('aboutUs.hl1Title') }}</span>
					</div>
					<div class="hl-circle hl-circle-lg sc sc-lg">
						<span>{{ t('aboutUs.hl2Title') }}</span>
					</div>
					<div class="gallery-circle sc gc-1" aria-hidden="true" />
					<div class="gallery-circle sc gc-2" aria-hidden="true" />
					<div class="gallery-circle sc gc-3" aria-hidden="true" />
					<div class="gallery-circle sc gc-4" aria-hidden="true" />
					<div class="gallery-circle sc gc-5" aria-hidden="true" />
					<div class="gallery-circle sc gc-6" aria-hidden="true" />
				</div>

				<!-- Mission block -->
				<div class="mission">
					<div class="mission-circle" aria-hidden="true">
						<div class="diagonal-line" />
						<div class="circle" />
						<div class="circle-glow" />
					</div>
					<div class="mission-text">
						<span class="mission-eyebrow">{{ t('aboutUs.supportEyebrow') }}</span>
						<h2>{{ t('aboutUs.missionTitle') }}</h2>
						<p class="mission-note">{{ t('aboutUs.supportNote') }}</p>
						<p>{{ t('aboutUs.missionDesc') }}</p>
						<a href="https://tamogatas.k-monitor.hu/" target="_blank" rel="noopener" class="mission-btn">{{ t('aboutUs.supportBtn') }}</a>
					</div>
				</div>

				<!-- Decorative empty circles -->
				<div class="deco-outline deco-outline-1" aria-hidden="true" />
			</div>
		</section>
	</LandingFrame>
</template>

<style scoped>
.about-section {
	position: relative;
	padding: 4rem 2rem 6rem;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
}
.about-inner {
	max-width: 1000px;
	margin: 0 auto;
	position: relative;
}

/* ── Intro ─────────────────────────────────────── */
.about-intro {
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: 3rem;
	align-items: start;
	margin-bottom: 5rem;
}
.about-intro h1 {
	color: #0055FF;
	font-size: clamp(2rem, 4.5vw, 3rem);
	font-weight: 500;
	margin-bottom: 1.5rem;
}
.about-intro p {
	font-size: 0.85rem;
	line-height: 1.7;
	color: #333;
	opacity: 0.9;
	margin-bottom: 1rem;
}
.intro-arrow {
	color: #0055FF;
	font-size: 1.5rem;
	margin-top: 2rem;
}
.about-intro-photo {
	display: flex;
	justify-content: center;
}
.team-photo {
	width: 380px;
	height: 380px;
	border-radius: 50%;
	background-image: url('/rolunk.jpg');
	background-size: cover;
	background-position: 20% center;
}

/* ── Scattered circles (blue highlights + photos) ── */
.scatter {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	margin: 4rem 0;
}
.scatter .sc {
	position: relative;
	flex: 0 0 auto;
}
.hl-circle {
	background: #0055FF;
	color: #fff;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 1.5rem;
	font-weight: 500;
	box-shadow: 0 8px 32px rgba(0, 85, 255, 0.18);
}
.hl-circle-stat {
	width: 200px;
	height: 200px;
	font-size: 0.95rem;
	line-height: 1.3;
}
.hl-circle-sm {
	width: 130px;
	height: 130px;
	font-size: 0.85rem;
}
.hl-circle-lg {
	width: 280px;
	height: 280px;
	font-size: 1.6rem;
	font-weight: 500;
}

/* ── Photo gallery circles ─────────────────────── */
.gallery-circle {
	position: relative;
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	overflow: hidden;
	box-shadow: 0 8px 32px rgba(0, 85, 255, 0.18);
	transition: transform 0.4s ease;
}
.gallery-circle::after {
	content: '';
	position: absolute;
	inset: 0;
	/* Blue cover like the BÜSZKESÉGEINK busses (#0055FF80) but with less opacity */
	background: #0055FF40;
	transition: opacity 0.3s ease;
	pointer-events: none;
}
.gallery-circle:hover {
	transform: scale(1.04);
}
.gallery-circle:hover::after {
	opacity: 0;
}
.gc-1 { width: 200px; height: 200px; background-image: url('/rolunk/1A0A6439%20(red).jpg'); }
.gc-2 { width: 140px; height: 140px; background-image: url('/rolunk/1A0A6861%20(red).jpg'); }
.gc-3 { width: 175px; height: 175px; background-image: url('/rolunk/1A0A9461.jpg'); }
.gc-4 { width: 135px; height: 135px; background-image: url('/rolunk/DSC_7250.jpg'); }
.gc-5 { width: 190px; height: 190px; background-image: url('/rolunk/ELTE_T%C3%A1TK_hackathon_20230512_038.JPG'); }
.gc-6 { width: 150px; height: 150px; background-image: url('/rolunk/P1067637.jpg'); }

/* ── Mission block ─────────────────────────────── */
.mission {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 6rem;
	align-items: center;
	margin-top: 4rem;
}
.mission-text {
	width: 400px;
}
.mission-eyebrow {
	display: block;
	color: #0055FF;
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	opacity: 0.7;
	margin-bottom: 0.5rem;
}
.mission-text h2 {
	color: #0055FF;
	font-size: clamp(2rem, 4.5vw, 3rem);
	font-weight: 500;
	margin-bottom: 1rem;
}
.mission-text p {
	font-size: 0.85rem;
	line-height: 1.7;
	color: #333;
	opacity: 0.9;
	margin-bottom: 1rem;
}
.mission-note {
	font-weight: 500;
}
.mission-btn {
	display: inline-block;
	margin-top: 0.5rem;
	background: #0055FF;
	color: #fff;
	font-size: 0.85rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	padding: 0.8rem 2.2rem;
	border-radius: 2rem;
	text-decoration: none;
	border: 1.5px solid #0055FF;
	transition: background 0.2s, color 0.2s;
}
.mission-btn:hover {
	background: transparent;
	color: #0055FF;
}

/* ── Mission circle decoration ────────────────── */
.mission-circle {
	position: relative;
	width: 300px;
	height: 300px;
	margin: 0 auto;
	overflow: visible;
}
.mission-circle .circle {
	position: absolute;
	inset: 0;
	border-radius: 50%;
	background-color: #0066FF;
	background-image: url('/rolunk/DSC_7250.jpg');
	background-size: cover;
	background-position: center;
	overflow: hidden;
	z-index: 2;
}
.mission-circle .circle::after {
	content: '';
	position: absolute;
	inset: 0;
	border-radius: 50%;
	/* Same blue cover as the gallery photos, less opacity than the busses */
	background: #0055FF40;
	pointer-events: none;
}
.mission-circle .circle-glow {
	position: absolute;
	top: -50px;
	right: -50px;
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: radial-gradient(circle, rgba(0, 102, 255, 0.55) 0%, rgba(0, 102, 255, 0) 70%);
	filter: blur(24px);
	pointer-events: none;
	z-index: 3;
}
.mission-circle .diagonal-line {
	position: absolute;
	top: 50%;
	left: 50%;
	width: 400px;
	height: 1.5px;
	background: #0055FF;
	opacity: 0.9;
	transform: translate(-50%, -50%) rotate(-55deg);
	z-index: 1;
}

/* ── Decorative outline ────────────────────────── */
.deco-outline {
	position: absolute;
	border: 1.5px solid #0055FF;
	border-radius: 50%;
	pointer-events: none;
	opacity: 0.6;
}
.deco-outline-1 {
	width: 280px;
	height: 280px;
	bottom: -160px;
	right: -220px;
}

/* ── Desktop scatter: blue + photo circles intermixed ── */
@media (min-width: 992px) {
	.scatter {
		display: block;
		position: relative;
		height: 640px;
		margin: 5rem 0;
	}
	.scatter .sc {
		position: absolute;
	}
	.sc-stat { left: 4%; top: 20px; }
	.gc-1 { left: 29%; top: 0; }
	.gc-2 { left: 42%; top: 210px; }
	.sc-lg { left: 56%; top: 60px; }
	.sc-sm { left: 25%; top: 240px; }
	.gc-3 { left: 4%; top: 270px; }
	.gc-4 { left: 60%; top: 380px; }
	.gc-5 { left: 23%; top: 420px; }
	.gc-6 { left: 78%; top: 430px; }
}

@media (max-width: 991px) {
	.about-intro { grid-template-columns: 1fr; text-align: center; }
	.intro-arrow { display: none; }
	.mission { grid-template-columns: 1fr; text-align: center; }
}
</style>
