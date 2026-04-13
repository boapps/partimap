<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

useHead({
	title: t('landing.title'),
});
</script>

<template>
	<div class="landing">
		<!-- Floating animated blue dots -->
		<div class="floating-dots" aria-hidden="true">
			<span v-for="n in 12" :key="n" :class="`dot dot-${n}`" />
		</div>

		<!-- Navigation -->
		<nav class="landing-nav">
			<div class="nav-inner">
				<NuxtLink :to="localePath('/')" class="nav-brand">
					<img src="/logo.svg" alt="PARTIMAP" height="24" />
				</NuxtLink>
				<div class="nav-links d-none d-lg-flex">
					<a href="#" class="nav-link-item">{{ t('landing.nav.about') }}</a>
					<a href="#" class="nav-link-item">{{ t('landing.nav.aboutUs') }}</a>
					<a href="#" class="nav-link-item">{{ t('landing.nav.pricing') }}</a>
					<a href="#" class="nav-link-item">{{ t('landing.nav.contact') }}</a>
					<a
						:href="t('landing.tryLink')"
						target="_blank"
						class="nav-btn-filled"
					>{{ t('landing.nav.tryIt') }}</a>
				</div>
				<b-navbar-nav class="nav-right">
					<span class="nav-lang-label d-none d-lg-inline">{{ t('landing.nav.langSwitch') }}</span>
					<LangSwitcher />
					<b-nav-item class="nav-login-item">
						<NuxtLink :to="localePath('/admin')" class="nav-btn-outline">
							{{ t('landing.nav.login') }}
						</NuxtLink>
					</b-nav-item>
				</b-navbar-nav>
			</div>
		</nav>

		<!-- Hero Section -->
		<section class="hero-section">
			<div class="hero-blob blob-tr" aria-hidden="true" />
			<div class="hero-blob blob-bl" aria-hidden="true" />
			<div class="deco-circle deco-hero-bl" aria-hidden="true" />
			<div class="deco-line deco-hero-line-v" aria-hidden="true" />
			<div class="deco-line deco-hero-line-h" aria-hidden="true" />

			<div class="hero-inner">
				<div class="hero-left">
					<span class="hero-brand">PARTIMAP</span>
					<h1 class="hero-title" v-html="t('landing.hero.tagline')" />
					<a
						:href="t('landing.tryLink')"
						target="_blank"
						class="btn-landing"
					>{{ t('landing.hero.cta') }}</a>
					<div class="hero-left-line" aria-hidden="true" />
				</div>

				<div class="hero-center">
					<div class="hero-circle-wrap">
						<HeroMap />
						<!-- Radial decorative lines -->
						<svg class="rotating-svg" viewBox="0 0 300 300" aria-hidden="true">
							<defs>
								<path
									id="heroTextPath"
									d="M 150,150 m -130,0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
								/>
							</defs>
							<text font-size="13" fill="var(--l-blue)" font-weight="500" letter-spacing="1">
								<textPath href="#heroTextPath">
									{{ t('landing.hero.circleText') }}{{ t('landing.hero.circleText') }}
								</textPath>
							</text>
						</svg>
					</div>
				</div>

				<div class="hero-right d-none d-xl-block">
					<div class="hero-feat">
						<h3>{{ t('landing.hero.feat1Title') }}</h3>
						<p>{{ t('landing.hero.feat1Desc') }}</p>
					</div>
					<div class="hero-feat-sep" aria-hidden="true" />
					<div class="hero-feat">
						<h3>{{ t('landing.hero.feat2Title') }}</h3>
						<p>{{ t('landing.hero.feat2Desc') }}</p>
					</div>
					<div class="hero-feat-sep" aria-hidden="true" />
					<div class="hero-feat">
						<h3>{{ t('landing.hero.feat3Title') }}</h3>
						<p>{{ t('landing.hero.feat3Desc') }}</p>
					</div>
				</div>
			</div>
			<div class="hero-scroll" aria-hidden="true">↓</div>
		</section>

		<!-- Examples / Use cases -->
		<section class="examples-section">
			<div class="section-blob blob-examples" aria-hidden="true" />
			<div class="examples-inner">
				<h2 class="sec-title">{{ t('landing.examples.title') }}</h2>
				<p class="sec-sub">{{ t('landing.examples.sub') }}</p>
				<div class="examples-grid">
					<div v-for="n in 4" :key="n" class="example-card">
						<div class="example-icon">
							<i :class="`fas fa-${['city','bus','tree','users'][n-1]}`" />
						</div>
						<span class="example-badge">{{ t(`landing.examples.card${n}Badge`) }}</span>
						<h4>{{ t(`landing.examples.card${n}Title`) }}</h4>
						<p>{{ t(`landing.examples.card${n}Desc`) }}</p>
						<a :href="t(`landing.examples.card${n}Link`)" target="_blank" class="btn-landing-outline btn-sm">
							{{ t('landing.examples.viewBtn') }}
						</a>
					</div>
				</div>
			</div>
			<div class="sec-arrow" aria-hidden="true">↓</div>
		</section>

		<!-- Why use it -->
		<section id="about" class="why-section">
			<div class="section-blob blob-why" aria-hidden="true" />
			<div class="why-inner">
				<h2 class="sec-title">{{ t('landing.why.title') }}</h2>
				<p class="sec-sub">{{ t('landing.why.sub') }}</p>
				<div class="feat-grid">
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-hand-paper" /></div>
						<div><h4>{{ t('landing.why.feat1') }}</h4><p>{{ t('landing.why.feat1Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-dollar-sign" /></div>
						<div><h4>{{ t('landing.why.feat2') }}</h4><p>{{ t('landing.why.feat2Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-sliders-h" /></div>
						<div><h4>{{ t('landing.why.feat3') }}</h4><p>{{ t('landing.why.feat3Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-globe" /></div>
						<div><h4>{{ t('landing.why.feat4') }}</h4><p>{{ t('landing.why.feat4Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-map-marker-alt" /></div>
						<div><h4>{{ t('landing.why.feat5') }}</h4><p>{{ t('landing.why.feat5Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-cog" /></div>
						<div><h4>{{ t('landing.why.feat6') }}</h4><p>{{ t('landing.why.feat6Desc') }}</p></div>
					</div>
				</div>
			</div>
			<div class="sec-arrow" aria-hidden="true">↓</div>
		</section>

		<!-- Support -->
		<section id="features" class="support-section">
			<div class="section-blob blob-sup" aria-hidden="true" />
			<div class="deco-circle deco-sup-tr" aria-hidden="true" />
			<div class="deco-circle deco-sup-br" aria-hidden="true" />
			<div class="deco-line deco-sup-line" aria-hidden="true" />

			<div class="support-inner">
				<div class="support-left">
					<i class="fas fa-hand-holding-heart support-floater" aria-hidden="true" />
					<div class="support-circle floating-big" />
				</div>
				<div class="support-right">
					<span class="support-eyebrow">{{ t('landing.support.eyebrow') }}</span>
					<h2 class="support-heading">{{ t('landing.support.heading') }}</h2>
					<p>{{ t('landing.support.desc') }}</p>
					<a :href="t('landing.support.link')" target="_blank" rel="noopener" class="btn-landing-outline">{{ t('landing.support.button') }}</a>
				</div>
			</div>
		</section>

		<!-- Statistics -->
		<section id="stats" class="stats-section">
			<div class="section-blob blob-stats" aria-hidden="true" />
			<div class="stats-inner">
				<h2 class="sec-title">{{ t('landing.stats.title') }}</h2>
				<p class="sec-desc">{{ t('landing.stats.desc') }}</p>
				<div class="stats-grid">
					<div class="stat-item">
						<div class="stat-circle">{{ t('landing.stats.stat1Value') }}</div>
						<h4>{{ t('landing.stats.stat1Title') }}</h4>
						<p>{{ t('landing.stats.stat1Desc') }}</p>
					</div>
					<div class="stat-item">
						<div class="stat-circle">{{ t('landing.stats.stat2Value') }}</div>
						<h4>{{ t('landing.stats.stat2Title') }}</h4>
						<p>{{ t('landing.stats.stat2Desc') }}</p>
					</div>
					<div class="stat-item">
						<div class="stat-circle">{{ t('landing.stats.stat3Value') }}</div>
						<h4>{{ t('landing.stats.stat3Title') }}</h4>
						<p>{{ t('landing.stats.stat3Desc') }}</p>
					</div>
				</div>
			</div>
			<div class="sec-arrow" aria-hidden="true">↓</div>
		</section>

		<!-- Showcase -->
		<section class="showcase-section">
			<div class="deco-circle deco-show-tl" aria-hidden="true" />
			<div class="deco-circle deco-show-br" aria-hidden="true" />
			<div class="section-blob blob-show" aria-hidden="true" />

			<div class="showcase-inner">
				<h2 class="sec-title text-center">{{ t('landing.showcase.title') }}</h2>
				<p class="sec-desc text-center">{{ t('landing.showcase.desc') }}</p>
				<div class="map-visual">
					<img src="/map.webp" alt="" class="map-svg" aria-hidden="true">
					<div class="map-dot map-dot-1" />
					<div class="map-dot map-dot-2" />
					<div class="map-dot map-dot-3" />
					<div class="map-dot map-dot-4" />
					<div class="map-dot map-dot-5" />
				</div>
			</div>
		</section>

		<!-- News -->
		<section class="news-section">
			<div class="deco-circle deco-news-tr" aria-hidden="true" />
			<div class="section-blob blob-news" aria-hidden="true" />
			<div class="news-inner">
				<h2 class="sec-title">{{ t('landing.news.title') }}</h2>
				<p class="sec-desc">{{ t('landing.news.desc') }}</p>
				<div class="news-grid">
					<div class="news-card">
						<h4>{{ t('landing.news.news1Title') }}</h4>
						<p>{{ t('landing.news.news1Desc') }}</p>
					</div>
					<div class="news-card">
						<h4>{{ t('landing.news.news2Title') }}</h4>
						<p>{{ t('landing.news.news2Desc') }}</p>
					</div>
					<div class="news-card">
						<h4>{{ t('landing.news.news3Title') }}</h4>
						<p>{{ t('landing.news.news3Desc') }}</p>
					</div>
				</div>
				<div class="news-line" aria-hidden="true" />
				<div class="text-center mt-4">
					<a href="#" class="btn-landing-outline">{{ t('landing.news.readMore') }}</a>
				</div>
			</div>
		</section>

		<!-- Help -->
		<section class="helplanding-section">
			<div class="deco-circle deco-helpl-tr" aria-hidden="true" />
			<div class="section-blob blob-helpl" aria-hidden="true" />
			<div class="helplanding-inner">
				<h2 class="sec-title text-center" v-html="t('landing.help.title')" />
				<p class="sec-desc text-center">{{ t('landing.help.desc') }}</p>
				<div class="helpl-grid">
					<div class="helpl-card">
						<div class="helpl-icon"><i class="fas fa-map-marker-alt" /></div>
						<h4>{{ t('landing.help.card1Title') }}</h4>
						<p>{{ t('landing.help.card1Desc') }}</p>
						<a :href="localePath({ name: 'hogyan-mukodik' })" class="btn-landing-outline btn-sm">{{ t('landing.help.readMore') }}</a>
					</div>
					<div class="helpl-card helpl-card-center">
						<div class="helpl-icon-wrap">
							<div class="helpl-icon"><i class="fas fa-pen" /></div>
							<svg class="rotating-svg rotating-svg-sm" viewBox="0 0 200 200" aria-hidden="true">
								<defs>
									<path id="helpTextPath" d="M 100,100 m -85,0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
								</defs>
								<text font-size="10" fill="var(--l-blue)" font-weight="500" letter-spacing="0.5">
									<textPath href="#helpTextPath">
										{{ t('landing.help.circleText') }}{{ t('landing.help.circleText') }}
									</textPath>
								</text>
							</svg>
						</div>
						<h4>{{ t('landing.help.card2Title') }}</h4>
						<p>{{ t('landing.help.card2Desc') }}</p>
						<a :href="localePath({ name: 'hogyan-mukodik' })" class="btn-landing-outline btn-sm">{{ t('landing.help.readMore') }}</a>
					</div>
					<div class="helpl-card">
						<div class="helpl-icon"><i class="fas fa-chart-bar" /></div>
						<h4>{{ t('landing.help.card3Title') }}</h4>
						<p>{{ t('landing.help.card3Desc') }}</p>
						<a :href="localePath({ name: 'hogyan-mukodik' })" class="btn-landing-outline btn-sm">{{ t('landing.help.readMore') }}</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Partners -->
		<section class="partners-section">
			<div class="deco-circle deco-part-bl" aria-hidden="true" />
			<div class="deco-circle deco-part-tr" aria-hidden="true" />
			<div class="section-blob blob-part" aria-hidden="true" />
			<div class="partners-inner">
				<h2 class="sec-title">{{ t('landing.partners.title') }}</h2>
				<p class="sec-desc">{{ t('landing.partners.desc') }}</p>
			</div>
		</section>

		<!-- Footer -->
		<footer id="contact" class="landing-footer">
			<div class="footer-inner">
				<div class="footer-grid">
					<div class="footer-col">
						<h5>{{ t('landing.footer.contact') }}</h5>
						<ul>
							<li><a href="mailto:hello@partimap.eu">hello@partimap.eu</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h5>{{ t('landing.footer.privacy') }}</h5>
						<ul><li>{{ t('landing.footer.placeholder') }}</li><li>{{ t('landing.footer.placeholder') }}</li><li>{{ t('landing.footer.placeholder') }}</li></ul>
					</div>
					<div class="footer-col">
						<h5>{{ t('landing.footer.terms') }}</h5>
						<ul><li>{{ t('landing.footer.placeholder') }}</li><li>{{ t('landing.footer.placeholder') }}</li><li>{{ t('landing.footer.placeholder') }}</li></ul>
					</div>
					<div class="footer-col">
						<h5>{{ t('landing.footer.imprint') }}</h5>
						<ul><li>{{ t('landing.footer.placeholder') }}</li><li>{{ t('landing.footer.placeholder') }}</li><li>{{ t('landing.footer.placeholder') }}</li></ul>
					</div>
				</div>
				<div class="footer-line" />
				<p class="footer-copy">{{ t('landing.footer.copyright') }}</p>
			</div>
		</footer>
	</div>
</template>

<style scoped>
@font-face {
	font-family: 'Apex New';
	src: url('/apex-new/ApexNew-Book.ttf') format('truetype');
	font-weight: 400;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Apex New';
	src: url('/apex-new/ApexNew-Medium.ttf') format('truetype');
	font-weight: 500;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Apex New';
	src: url('/apex-new/ApexNew-Bold.ttf') format('truetype');
	font-weight: 700;
	font-style: normal;
	font-display: swap;
}

@font-face {
	font-family: 'Apex New';
	src: url('/apex-new/ApexNew-Bold.ttf') format('truetype');
	font-weight: 800;
	font-style: normal;
	font-display: swap;
}

/* ── Custom Properties ────────────────────────────────── */
.landing {
	--l-font: 'Apex New', 'Segoe UI', sans-serif;
	--l-blue: #0055FF;
	--l-bg: rgba(237, 228, 211, 0.56);
	--l-text: #333;
	--l-blue-10: rgba(0, 85, 255, 0.3);
	--l-blue-15: rgba(0, 85, 255, 0.4);

	font-family: var(--l-font);
	background-color: #EDE4D3;
	background-image: linear-gradient(var(--l-bg), var(--l-bg)), url('/background.webp');
	background-size: cover;
	background-position: center top;
	background-repeat: no-repeat;
	background-attachment: fixed;
	color: var(--l-text);
	overflow-x: hidden;
	position: relative;
	min-height: 100vh;
}

/* ── Navigation ───────────────────────────────────────── */
.landing-nav {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 100;
	padding: 1rem 2rem;
	backdrop-filter: blur(8px);
	background: rgba(237, 228, 211, 0.45);
}
.nav-inner {
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	gap: 1.5rem;
}
.nav-brand {
	flex-shrink: 0;
}
.nav-brand img {
	height: 28px;
}
.nav-links {
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-left: auto;
}
.nav-link-item {
	color: var(--l-blue);
	font-size: 0.8rem;
	font-weight: 500;
	letter-spacing: 0.08em;
	text-decoration: none;
	white-space: nowrap;
}
.nav-link-item:hover { text-decoration: underline; }
.nav-btn-filled {
	background: var(--l-blue);
	color: #fff !important;
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	padding: 0.6rem 1.6rem;
	border-radius: 2rem;
	text-decoration: none;
	white-space: nowrap;
}
.nav-btn-filled:hover { opacity: 0.9; }
.nav-right {
	display: flex !important;
	flex-direction: row !important;
	align-items: center;
	gap: 0.5rem;
	margin-left: auto;
	list-style: none;
	margin-bottom: 0;
	padding-left: 0;
}
.nav-right :deep(.nav-item) {
	list-style: none;
}
.nav-item {
  color: var(--l-blue);
}
.nav-login-item {
	list-style: none;
}
.nav-login-item :deep(.nav-link) {
	padding: 0;
}
.nav-lang-label {
	color: var(--l-blue);
	font-size: 0.7rem;
	font-weight: 500;
	letter-spacing: 0.08em;
	white-space: nowrap;
}
.nav-btn-outline {
	border: 1.5px solid var(--l-blue);
	color: var(--l-blue);
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	padding: 0.55rem 1.6rem;
	border-radius: 2rem;
	text-decoration: none;
	white-space: nowrap;
}
.nav-btn-outline:hover {
	background: var(--l-blue);
	color: #fff;
}

/* ── Section Shared Styles ────────────────────────────── */
.sec-title {
	color: var(--l-blue);
	font-size: clamp(2rem, 5vw, 3.5rem);
	font-weight: 500;
	margin-bottom: 0.5rem;
	line-height: 1.15;
}
.sec-sub {
	font-size: 0.9rem;
	opacity: 0.7;
	font-weight: 500;
	margin-bottom: 3rem;
}
.sec-desc {
	font-size: 0.9rem;
	line-height: 1.7;
	opacity: 0.8;
	font-weight: 500;
	margin-bottom: 3rem;
}
.sec-arrow {
	color: var(--l-blue);
	font-size: 1.5rem;
	text-align: right;
	padding: 0 4rem 2rem 0;
}

/* ── Buttons ──────────────────────────────────────────── */
.btn-landing {
	display: inline-block;
	background: var(--l-blue);
	color: #fff;
	font-size: 0.9rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	padding: 1rem 2.5rem;
	border-radius: 2.5rem;
	text-decoration: none;
	border: 2px solid var(--l-blue);
	transition: background 0.2s, color 0.2s;
}
.btn-landing:hover {
	background: transparent;
	color: var(--l-blue);
}
.btn-landing-outline {
	display: inline-block;
	border: 1.5px solid var(--l-blue);
	color: var(--l-blue);
	font-size: 0.8rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	padding: 0.7rem 2rem;
	border-radius: 2rem;
	text-decoration: none;
	transition: background 0.2s, color 0.2s;
}
.btn-landing-outline:hover {
	background: var(--l-blue);
	color: #fff;
}
.btn-sm {
	font-size: 0.7rem;
	padding: 0.5rem 1.4rem;
}

/* ── Hero Section ─────────────────────────────────────── */
.hero-section {
	position: relative;
	min-height: 100vh;
	padding: 7rem 2rem 3rem;
	display: flex;
	flex-direction: column;
}
.hero-inner {
	max-width: 1200px;
	margin: 0 auto;
	flex: 1;
	display: grid;
	grid-template-columns: 1fr 1.2fr 0.8fr;
	align-items: center;
	gap: 2rem;
	width: 100%;
}
.hero-brand {
	color: var(--l-blue);
	font-size: 1rem;
	font-weight: 700;
	letter-spacing: 0.15em;
	display: block;
	margin-bottom: 1.5rem;
}
.hero-title {
	color: var(--l-blue);
	font-size: clamp(2.5rem, 5vw, 4rem);
	font-weight: 500;
	/* font-style: italic; */
	line-height: 1.1;
	margin-bottom: 2rem;
}
.hero-center {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}
.hero-circle-wrap {
	position: relative;
	width: 420px;
	height: 420px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.rotating-svg {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 2;
	pointer-events: none;
}
.rotating-svg-sm {
	animation-duration: 20s;
}
.hero-arrow-circle {
	color: var(--l-blue);
	font-size: 1.1rem;
	margin-left: 1.5rem;
	width: 36px;
	height: 36px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
}
.hero-left-line {
	margin-top: 3rem;
	width: 100%;
	height: 2px;
	background: var(--l-blue);
	opacity: 0.7;
}
.hero-feat-sep {
	width: 100%;
	height: 1.5px;
	background: var(--l-blue);
	opacity: 0.2;
	margin-bottom: 0.5rem;
}
.hero-right {
	padding-left: 2rem;
	padding-right: 1rem;
}
.hero-feat {
	margin-bottom: 1rem;
	padding-top: 0.5rem;
	position: relative;
}
.hero-feat h3 {
	color: var(--l-blue);
	font-size: 1.1rem;
	font-weight: 400;
	margin-bottom: 0.3rem;
}
.hero-feat p {
	font-size: 0.8rem;
	font-weight: 500;
	opacity: 0.7;
	margin: 0;
}
.hero-feat-btn {
	position: absolute;
	right: 0;
	top: 50%;
	transform: translateY(-50%);
	width: 32px;
	height: 32px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--l-blue);
	font-size: 1.2rem;
}
.hero-scroll {
	color: var(--l-blue);
	font-size: 1.5rem;
	text-align: left;
	padding-left: 6rem;
	margin-top: auto;
}

/* ── Why / Features Section ───────────────────────────── */
.why-section {
	position: relative;
	padding: 5rem 2rem 3rem;
}
.why-inner {
	max-width: 1000px;
	margin: 0 auto;
}
.feat-grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2.5rem 4rem;
}
.feat-card {
	display: flex;
	align-items: flex-start;
	gap: 1.2rem;
}
.feat-icon {
	flex-shrink: 0;
	width: 64px;
	height: 64px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--l-blue);
	font-size: 1.3rem;
}
.feat-card h4 {
	color: var(--l-blue);
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 0.3rem;
}
.feat-card p {
	font-size: 0.8rem;
	opacity: 0.7;
	font-weight: 500;
	margin: 0;
}

/* ── Examples Section ─────────────────────────────────── */
.examples-section {
	position: relative;
	padding: 5rem 2rem 3rem;
}
.examples-inner {
	max-width: 1000px;
	margin: 0 auto;
}
.examples-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 2.5rem;
}
.example-card {
	border: 1.5px solid var(--l-blue);
	border-radius: 12px;
	padding: 1.8rem 1.4rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.7rem;
	transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.example-card:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 24px rgba(0, 85, 255, 0.12);
}
.example-icon {
	flex-shrink: 0;
	width: 56px;
	height: 56px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--l-blue);
	font-size: 1.2rem;
	margin-bottom: 0.3rem;
}
.example-badge {
	font-size: 0.7rem;
	font-weight: 700;
	letter-spacing: 0.06em;
	color: var(--l-blue);
	text-transform: uppercase;
	opacity: 0.7;
}
.example-card h4 {
	color: var(--l-blue);
	font-size: 0.95rem;
	font-weight: 500;
	margin: 0;
	line-height: 1.3;
}
.example-card p {
	font-size: 0.8rem;
	opacity: 0.7;
	font-weight: 500;
	margin: 0;
	flex-grow: 1;
}
.example-card .btn-sm {
	margin-top: 0.5rem;
}
.blob-examples {
	top: -100px;
	right: -200px;
}
@media (max-width: 1024px) {
	.examples-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 576px) {
	.examples-grid { grid-template-columns: 1fr; }
}

/* ── Support Section ──────────────────────────────────── */
.support-section {
	position: relative;
	padding: 6rem 2rem;
}
.support-inner {
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	gap: 4rem;
}
.support-left {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 350px;
}
.support-circle {
	width: clamp(200px, 25vw, 320px);
	height: clamp(200px, 25vw, 320px);
	background-image: url('/bus.webp');
	border-radius: 50%;
}
.support-floater {
	position: absolute;
	top: 10%;
	left: 10%;
	color: var(--l-blue);
	font-size: 2rem;
	z-index: 1;
}
.support-eyebrow {
	color: var(--l-blue);
	font-size: 0.85rem;
	font-weight: 500;
	display: block;
	margin-bottom: 0.5rem;
}
.support-heading {
	color: var(--l-blue);
	font-size: clamp(2.5rem, 5vw, 4rem);
	font-weight: 500;
	margin-bottom: 1rem;
	line-height: 1.1;
}
.support-right p {
	font-size: 0.85rem;
	line-height: 1.7;
	font-weight: 500;
	opacity: 0.8;
	margin-bottom: 2rem;
}

/* ── Statistics Section ───────────────────────────────── */
.stats-section {
	position: relative;
	padding: 5rem 2rem 3rem;
}
.stats-inner {
	max-width: 1000px;
	margin: 0 auto;
}
.stats-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	text-align: center;
}
.stat-circle {
	width: 110px;
	height: 110px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 1.2rem;
	font-size: 2rem;
	font-weight: 600;
	color: var(--l-blue);
}
.stat-item h4 {
	color: var(--l-blue);
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	margin-bottom: 0.5rem;
}
.stat-item p {
	font-size: 0.8rem;
	opacity: 0.7;
}

/* ── Showcase Section ─────────────────────────────────── */
.showcase-section {
	position: relative;
	padding: 5rem 2rem;
}
.showcase-inner {
	max-width: 800px;
	margin: 0 auto;
}
.map-visual {
	position: relative;
	width: 100%;
	max-width: 600px;
	margin: 2rem auto 0;
	/* aspect-ratio: 1; */
}
.map-svg {
	width: 100%;
	height: 100%;
}
.map-dot {
	position: absolute;
	background-image: url('/bus.webp');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
	overflow: hidden;
	filter: brightness(0.82);
	transition: filter 0.5s ease, transform 0.5s ease;
}
.map-dot::after {
	content: '';
	position: absolute;
	inset: 0;
	background: #0055FF80;
	transition: opacity 0.25s ease;
	pointer-events: none;
}
.map-dot:hover {
	filter: saturate(1) brightness(1);
	transform: scale(1.04);
	cursor: pointer;
}
.map-dot:hover::after {
	opacity: 0;
}
.map-dot-1 { width: 80px; height: 80px; top: 8%; left: 12%; }
.map-dot-2 { width: 60px; height: 60px; top: 25%; left: 55%; }
.map-dot-3 { width: 70px; height: 70px; top: 45%; right: 15%; }
.map-dot-4 { width: 50px; height: 50px; top: 65%; left: 35%; }
.map-dot-5 { width: 40px; height: 40px; bottom: 10%; right: 30%; }

/* ── News Section ─────────────────────────────────────── */
.news-section {
	position: relative;
	padding: 5rem 2rem;
}
.news-inner {
	max-width: 1000px;
	margin: 0 auto;
}
.news-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-bottom: 1rem;
}
.news-card h4 {
	color: var(--l-blue);
	font-size: 1rem;
	font-weight: 400;
	margin-bottom: 1rem;
}
.news-card p {
	font-size: 0.8rem;
	line-height: 1.7;
	font-weight: 500;
	opacity: 0.8;
}
.news-line {
	height: 2px;
	background: var(--l-blue);
	opacity: 0.3;
}

/* ── Help Section ─────────────────────────────────────── */
.helplanding-section {
	position: relative;
	padding: 5rem 2rem;
}
.helplanding-inner {
	max-width: 1000px;
	margin: 0 auto;
}
.helpl-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2.5rem;
	text-align: center;
	margin-top: 2rem;
}
.helpl-icon {
	width: 80px;
	height: 80px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--l-blue);
	font-size: 1.5rem;
	margin: 0 auto 1.5rem;
}
.helpl-icon-wrap {
	position: relative;
	width: 180px;
	height: 180px;
	margin: 0 auto 1.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
}
.helpl-icon-wrap .helpl-icon {
	margin: 0;
	position: relative;
	z-index: 1;
}
.helpl-icon-wrap .rotating-svg-sm {
	position: absolute;
	width: 100%;
	height: 100%;
}
.helpl-card h4 {
	color: var(--l-blue);
	font-size: 0.95rem;
	font-weight: 700;
	margin-bottom: 1rem;
}
.helpl-card p {
	font-size: 0.8rem;
	line-height: 1.7;
	opacity: 0.8;
	margin-bottom: 1.5rem;
}

/* ── Partners Section ─────────────────────────────────── */
.partners-section {
	position: relative;
	padding: 5rem 2rem 8rem;
}
.partners-inner {
	max-width: 1000px;
	margin: 0 auto;
}

/* ── Footer ───────────────────────────────────────────── */
.landing-footer {
	position: relative;
	padding: 3rem 2rem 2rem;
}
.footer-inner {
	max-width: 1000px;
	margin: 0 auto;
}
.footer-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 2rem;
	margin-bottom: 2rem;
}
.footer-col h5 {
	color: var(--l-blue);
	font-size: 0.85rem;
	font-weight: 700;
	margin-bottom: 0.8rem;
}
.footer-col ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.footer-col li {
	font-size: 0.8rem;
	opacity: 0.7;
	margin-bottom: 0.3rem;
}
.footer-col a {
	color: var(--l-text);
	text-decoration: none;
}
.footer-col a:hover { text-decoration: underline; }
.footer-line {
	height: 2px;
	background: var(--l-blue);
	opacity: 0.3;
	margin-bottom: 1.5rem;
}
.footer-copy {
	text-align: center;
	font-size: 0.75rem;
	opacity: 0.6;
}

/* ── Decorative Circles (outlines) ────────────────────── */
.deco-circle {
	position: absolute;
	border: 2px solid var(--l-blue);
	border-radius: 50%;
	pointer-events: none;
	opacity: 0.8;
}
.deco-hero-bl  { width: 300px; height: 300px; bottom: 40px; left: -100px; }
.deco-sup-tr   { width: 250px; height: 250px; top: -60px; right: 15%; }
.deco-sup-br   { width: 500px; height: 500px; bottom: -200px; right: -200px; }
.deco-show-tl  { width: 350px; height: 350px; top: -100px; left: -100px; }
.deco-show-br  { width: 300px; height: 300px; bottom: -80px; right: -80px; }
.deco-news-tr  { width: 280px; height: 280px; top: -60px; right: -80px; }
.deco-helpl-tr { width: 400px; height: 400px; top: 0; right: -150px; }
.deco-part-bl  { width: 350px; height: 350px; bottom: -60px; left: -120px; }
.deco-part-tr  { width: 400px; height: 400px; top: -20px; right: -120px; }

/* ── Decorative Lines ─────────────────────────────────── */
.deco-line {
	position: absolute;
	background: var(--l-blue);
	pointer-events: none;
	opacity: 0.12;
}
.deco-hero-line-v {
	width: 2px;
	height: 150px;
	left: 8%;
	bottom: 15%;
}
.deco-hero-line-h {
	height: 2px;
	width: 200px;
	left: 0;
	bottom: calc(40px + 150px);
}
.deco-sup-line {
	width: 1.5px;
	height: 120px;
	left: 15%;
	top: 10%;
}

/* ── Background Gradient Blobs ────────────────────────── */
.section-blob,
.hero-blob {
	position: absolute;
	border-radius: 50%;
	pointer-events: none;
	filter: blur(80px);
}
.blob-tr  { width: 500px; height: 500px; top: -100px; right: -100px; background: var(--l-blue-15); }
.blob-bl  { width: 400px; height: 400px; bottom: -50px; left: -50px; background: var(--l-blue-10); }
.blob-why  { width: 500px; height: 400px; bottom: -100px; left: 20%; background: var(--l-blue-10); }
.blob-sup  { width: 400px; height: 400px; bottom: -50px; left: 10%; background: var(--l-blue-15); }
.blob-stats { width: 350px; height: 350px; top: -80px; right: 10%; background: var(--l-blue-10); }
.blob-show  { width: 500px; height: 500px; bottom: -100px; right: -50px; background: var(--l-blue-15); }
.blob-news  { width: 400px; height: 400px; bottom: -80px; left: -50px; background: var(--l-blue-10); }
.blob-helpl { width: 350px; height: 350px; top: 50%; left: 10%; background: var(--l-blue-10); }
.blob-part  { width: 500px; height: 400px; bottom: -100px; right: -50px; background: var(--l-blue-15); }

/* ── Floating Blue Dots ───────────────────────────────── */
.floating-dots {
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: 1;
	overflow: hidden;
}
.dot {
	position: absolute;
	border-radius: 50%;
	background: #0055FF;
	opacity: 0.3;
}
.dot-1  { width:  6px; height:  6px; top: 12%; left:  8%; animation: driftA 14s ease-in-out infinite; }
.dot-2  { width:  4px; height:  4px; top: 22%; left: 75%; animation: driftB 18s ease-in-out infinite 1s; }
.dot-3  { width:  8px; height:  8px; top: 35%; left: 50%; animation: driftC 12s ease-in-out infinite 2s; }
.dot-4  { width:  4px; height:  4px; top: 48%; left: 20%; animation: driftA 16s ease-in-out infinite 3s; }
.dot-5  { width:  5px; height:  5px; top: 55%; left: 85%; animation: driftB 13s ease-in-out infinite 0.5s; }
.dot-6  { width:  7px; height:  7px; top: 68%; left: 40%; animation: driftC 17s ease-in-out infinite 4s; }
.dot-7  { width:  4px; height:  4px; top: 78%; left: 65%; animation: driftA 15s ease-in-out infinite 2.5s; }
.dot-8  { width:  6px; height:  6px; top: 88%; left: 12%; animation: driftB 14s ease-in-out infinite 1.5s; }
.dot-9  { width:  3px; height:  3px; top:  5%; left: 55%; animation: driftC 19s ease-in-out infinite 3.5s; }
.dot-10 { width:  5px; height:  5px; top: 42%; left: 92%; animation: driftA 16s ease-in-out infinite 0.8s; }
.dot-11 { width:  8px; height:  8px; top: 62%; left:  5%; animation: driftB 13s ease-in-out infinite 2.2s; }
.dot-12 { width:  4px; height:  4px; top: 92%; left: 70%; animation: driftC 18s ease-in-out infinite 4.5s; }

/* ── Large Circle Float Animation ─────────────────────── */
.map-dot-1 { animation: floatBig1  8s ease-in-out infinite; }
.map-dot-2 { animation: floatBig2 11s ease-in-out infinite 1.5s; }
.map-dot-3 { animation: floatBig3  9s ease-in-out infinite 3s; }
.map-dot-4 { animation: floatBig4 13s ease-in-out infinite 0.8s; }
.map-dot-5 { animation: floatBig5 10s ease-in-out infinite 2.2s; }

/* ── Keyframes ────────────────────────────────────────── */
@keyframes driftA {
	0%, 100% { transform: translate(0, 0); }
	25% { transform: translate(20px, -15px); }
	50% { transform: translate(-12px, 22px); }
	75% { transform: translate(16px, 8px); }
}
@keyframes driftB {
	0%, 100% { transform: translate(0, 0); }
	33% { transform: translate(-18px, 20px); }
	66% { transform: translate(22px, -12px); }
}
@keyframes driftC {
	0%, 100% { transform: translate(0, 0); }
	20% { transform: translate(12px, 16px); }
	40% { transform: translate(-22px, -6px); }
	60% { transform: translate(16px, -20px); }
	80% { transform: translate(-8px, 12px); }
}
@keyframes floatBig1 {
	0%, 100% { transform: translate(0, 0); }
	25% { transform: translate(12px, -10px); }
	50% { transform: translate(18px, 6px); }
	75% { transform: translate(6px, -14px); }
}
@keyframes floatBig2 {
	0%, 100% { transform: translate(0, 0); }
	30% { transform: translate(-14px, -8px); }
	60% { transform: translate(-20px, 10px); }
	80% { transform: translate(-8px, 16px); }
}
@keyframes floatBig3 {
	0%, 100% { transform: translate(0, 0); }
	25% { transform: translate(6px, 14px); }
	50% { transform: translate(-10px, 20px); }
	75% { transform: translate(-16px, 8px); }
}
@keyframes floatBig4 {
	0%, 100% { transform: translate(0, 0); }
	33% { transform: translate(-12px, -16px); }
	66% { transform: translate(8px, -22px); }
}
@keyframes floatBig5 {
	0%, 100% { transform: translate(0, 0); }
	20% { transform: translate(16px, 10px); }
	50% { transform: translate(4px, 20px); }
	80% { transform: translate(20px, 4px); }
}
@keyframes spin {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

/* ── Responsive ───────────────────────────────────────── */
@media (max-width: 991px) {
	.hero-inner {
		grid-template-columns: 1fr;
		text-align: center;
	}
	.hero-center { order: -1; }
	.hero-left { margin-top: 1rem; }
	.hero-scroll { text-align: center; padding-left: 0; }
	.feat-grid { grid-template-columns: 1fr; }
	.support-inner { grid-template-columns: 1fr; text-align: center; }
	.support-left { min-height: 250px; }
	.stats-grid { grid-template-columns: 1fr; gap: 3rem; }
	.news-grid { grid-template-columns: 1fr; }
	.helpl-grid { grid-template-columns: 1fr; gap: 3rem; }
	.footer-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 575px) {
	.landing-nav { padding: 0.75rem 1rem; }
	.nav-right { gap: 0.5rem; }
	.hero-section { padding-top: 5rem; }
	.hero-circle-wrap { width: 220px; height: 220px; }
	.footer-grid { grid-template-columns: 1fr; }
}
</style>
