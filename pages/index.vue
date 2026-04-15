<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

useHead({
	title: t('landing.title'),
});

const activePopup = ref<number | null>(null);

function togglePopup(n: number) {
	activePopup.value = activePopup.value === n ? null : n;
}

function closePopup() {
	activePopup.value = null;
}
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
					<div class="deco-circle hero-left-circle" aria-hidden="true" />
					<div class="hero-left-arrow" aria-hidden="true">↓</div>
				</div>

				<div class="hero-center">
					<div class="hero-circle-wrap">
						<HeroMap />
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
			<svg class="why-side-arrow" aria-hidden="true" viewBox="0 0 24 400" xmlns="http://www.w3.org/2000/svg">
				<line x1="12" y1="0" x2="12" y2="384" stroke="currentColor" stroke-width="3"/>
				<polyline points="4,374 12,385 20,374" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
			</svg>
			<div class="why-inner">
				<h2 class="sec-title">{{ t('landing.why.title') }}</h2>
				<p class="sec-sub">{{ t('landing.why.sub') }}</p>
				<div class="feat-grid">
					<div class="feat-card">
						<div class="feat-icon"><img src="/icons/hand.png" alt="" /></div>
						<div><h4>{{ t('landing.why.feat1') }}</h4><p>{{ t('landing.why.feat1Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><img src="/icons/money.png" alt="" /></div>
						<div><h4>{{ t('landing.why.feat2') }}</h4><p>{{ t('landing.why.feat2Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-sliders-h" /></div>
						<div><h4>{{ t('landing.why.feat3') }}</h4><p>{{ t('landing.why.feat3Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><img src="/icons/language.png" alt="" /></div>
						<div><h4>{{ t('landing.why.feat4') }}</h4><p>{{ t('landing.why.feat4Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><img src="/icons/pin.png" alt="" /></div>
						<div><h4>{{ t('landing.why.feat5') }}</h4><p>{{ t('landing.why.feat5Desc') }}</p></div>
					</div>
					<div class="feat-card">
						<div class="feat-icon"><i class="fas fa-cog" /></div>
						<div><h4>{{ t('landing.why.feat6') }}</h4><p>{{ t('landing.why.feat6Desc') }}</p></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Support -->
		<section id="features" class="support-section">
			<div class="section-blob blob-sup" aria-hidden="true" />

			<div class="support-inner">
				<div class="support-left">
					<div class="features-line deco-line" aria-hidden="true" />
					<img src="/icons/handshake.png" alt="" class="features-icon" />
					<div class="features-line-2 deco-line" aria-hidden="true" />
					
					<div class="support-circle-wrap">
						<div class="hm-diag-line" aria-hidden="true" />
						<div class="support-circle floating-big" />
					</div>
				</div>
				<div class="support-right">
					<img src="/icons/home.png" alt="" class="features-top-icon" />
					<div class="features-top-circle floating-small" aria-hidden="true" />
					<div class="support-right-inner">
						<span class="support-eyebrow">{{ t('landing.support.eyebrow') }}</span>
						<h2 class="support-heading">{{ t('landing.support.heading') }}</h2>
						<p>{{ t('landing.support.desc') }}</p>
						<a :href="t('landing.support.link')" target="_blank" rel="noopener" class="btn-landing-outline">{{ t('landing.support.button') }}</a>
					</div>
					<div class="features-bottom-circle floating-small" aria-hidden="true" />
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
			<div class="stat-arrow" aria-hidden="true">↓</div>
		</section>

		<!-- Showcase -->
		<section class="showcase-section">
			<div class="section-blob blob-show" aria-hidden="true" />

			<div class="showcase-inner">
				<div class="showcase-circle deco-circle" aria-hidden="true" />

				<img src="/icons/home.png" alt="" class="showcase-top-icon" />
				<h2 class="sec-title text-center">{{ t('landing.showcase.title') }}</h2>
				<p class="sec-desc showcase-desc text-center">{{ t('landing.showcase.desc') }}</p>
				<div class="map-visual" @click.self="closePopup">
					<img src="/map.webp" alt="" class="map-svg" aria-hidden="true">
					<template v-for="n in 5" :key="n">
						<div
							:class="`map-dot map-dot-${n}`"
							:aria-label="t(`landing.showcase.dot${n}Title`)"
							role="button"
							tabindex="0"
							@click.stop="togglePopup(n)"
							@keydown.enter.stop="togglePopup(n)"
							@keydown.space.prevent.stop="togglePopup(n)"
						/>
						<Transition name="popup">
							<div
								v-if="activePopup === n"
								:class="`map-popup map-popup-${n}`"
								role="dialog"
								@click.stop
							>
								<button class="map-popup-close" aria-label="Close" @click="closePopup">×</button>
								<h4 class="map-popup-title">{{ t(`landing.showcase.dot${n}Title`) }}</h4>
								<p class="map-popup-desc">{{ t(`landing.showcase.dot${n}Desc`) }}</p>
							</div>
						</Transition>
					</template>
				</div>
			</div>
		</section>

		<!-- News -->
		<section class="news-section">
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
			<div class="section-blob blob-helpl" aria-hidden="true" />
			<div class="helplanding-inner">
				<img src="/icons/home.png" alt="" class="showcase-top-icon" />
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
	margin-bottom: 1.5rem;
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
.hero-left-arrow {
	color: var(--l-blue);
	font-size: 1.5rem;
	text-align: right;
	/* padding: 0 4rem 2rem 0; */
	left: -360px;
	top: -280px;
	position: relative;
}
.sec-arrow {
	color: var(--l-blue);
	font-size: 1.5rem;
	text-align: right;
	padding: 0 4rem 2rem 0;
}
.stat-arrow {
	color: var(--l-blue);
	font-size: 1.5rem;
	text-align: right;
	margin-top: 4rem;
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
	align-items: start;
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
	align-items: start;
	margin-top: 80px;
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
	margin-top: 8rem;
	width: 100%;
	height: 2px;
	background: var(--l-blue);
	opacity: 0.7;
}
.hero-left-circle {
	width: 300px; height: 300px; bottom: 80px; left: -200px;
	position: relative;
}
.showcase-circle {
	width: 420px; height: 420px; bottom: -280px; left: -380px;
	position: relative;
}
.showcase-desc {
	max-width: 400px;
	margin-left: auto;
  	margin-right: auto;
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
	margin-top: 200px;
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
.why-side-arrow {
	position: absolute;
	right: 10rem;
	top: 65%;
	transform: translateY(-50%);
	width: 24px;
	height: 400px;
	scale: 1;
	color: var(--l-blue);
	pointer-events: none;
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
	overflow: hidden;
}
.feat-icon img {
	width: 40px;
	height: 40px;
	object-fit: contain;
}
.feat-icon i {
	font-size: 1.7rem;
	color: var(--l-blue);
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
	margin-top: 100px;
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
	width: 400px;
	height: 400px;
	background-image: url('/bus.webp');
	border-radius: 50%;
	z-index: 1;
	position: relative;
}
.support-circle-wrap {
	margin-left: 100px;
	width: 400px;
	height: 400px;
}
/* Diagonal line at 30°, sits behind the circle */
.hm-diag-line {
	position: relative;
	top: 50%;
	left: 50%;
	width: 140%;
	height: 2px;
	background: #0055ff;
	transform: translate(-50%, -50%) rotate(120deg);
	pointer-events: none;
	z-index: 0;
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
.support-right-inner {
	top: 100px;
	position: relative;
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
	gap: 0rem;
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
	font-weight: 400;
	color: var(--l-blue);
	margin-bottom: 1rem;
}
.stat-item {
	width: 22rem;
}
.stat-item h4 {
	color: var(--l-blue);
	font-size: 1.1rem;
	font-weight: 400;
	letter-spacing: 0.05em;
	margin-bottom: 1.5rem;
}
.stat-item p {
	font-size: 0.8rem;
	font-weight: 500;
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
.map-dot-1 { width: 130px; height: 130px; top: 8%; left: 12%; }
.map-dot-2 { width: 130px; height: 130px; top: 15%; left: 55%; }
.map-dot-3 { width: 130px; height: 130px; top: 40%; right: 15%; }
.map-dot-4 { width: 130px; height: 130px; top: 65%; left: 15%; }
.map-dot-5 { width: 130px; height: 130px; bottom: 10%; right: 30%; }

/* ── Map Popups ───────────────────────────────────────── */
.map-popup {
	position: absolute;
	z-index: 10;
	width: 220px;
	background: #fff;
	border-radius: 16px;
	box-shadow: 0 8px 32px rgba(0, 85, 255, 0.18), 0 2px 8px rgba(0,0,0,0.10);
	padding: 1.1rem 1.1rem 1rem;
	pointer-events: all;
}
.map-popup::before {
	content: '';
	position: absolute;
	width: 14px;
	height: 14px;
	background: #fff;
	box-shadow: -2px 2px 6px rgba(0,0,0,0.08);
	transform: rotate(45deg);
}
/* Arrow positions per dot */
.map-popup-1 { top: -8%; left: calc(12% + 140px); }
.map-popup-1::before { bottom: 30%; left: -7px; }
.map-popup-2 { top: 5%; left: calc(55% + 140px); }
.map-popup-2::before { bottom: 30%; left: -7px; }
.map-popup-3 { top: 30%; right: calc(15% + 140px); }
.map-popup-3::before { bottom: 30%; right: -7px; transform: rotate(45deg); }
.map-popup-4 { top: 58%; left: calc(15% + 140px); }
.map-popup-4::before { bottom: 30%; left: -7px; }
.map-popup-5 { bottom: 5%; right: calc(30% + 140px); }
.map-popup-5::before { bottom: 30%; right: -7px; transform: rotate(45deg); }

.map-popup-close {
	position: absolute;
	top: 0.5rem;
	right: 0.65rem;
	background: none;
	border: none;
	font-size: 1.2rem;
	line-height: 1;
	color: #aaa;
	cursor: pointer;
	padding: 0;
	transition: color 0.2s;
}
.map-popup-close:hover { color: #0055FF; }
.map-popup-title {
	font-size: 0.95rem;
	font-weight: 700;
	color: #0055FF;
	margin: 0 1.2rem 0.5rem 0;
	line-height: 1.3;
}
.map-popup-desc {
	font-size: 0.8rem;
	color: #444;
	margin: 0;
	line-height: 1.5;
}

/* Popup enter/leave transitions */
.popup-enter-active,
.popup-leave-active {
	transition: opacity 0.2s ease, transform 0.2s ease;
}
.popup-enter-from,
.popup-leave-to {
	opacity: 0;
	transform: scale(0.92) translateY(4px);
}

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
	/* position: absolute; */
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
}
.features-line {
	position: relative;
	width: 1.5px;
	height: 120px;
	left: -0px;
	top: -100px;
}
.features-line-2 {
	position: relative;
	width: 1.5px;
	height: 120px;
	left: -40px;
	top: 100px;
}
.features-icon {
	position: relative;
	width: 40px;
	height: 40px;
	left: -20px;
	top: 0px;
}
.features-top-icon {
	position: relative;
	width: 20px;
	height: 20px;
	left: -100px;
	top: 150px;
}
.showcase-top-icon {
	display: block;
	width: 20px;
	height: 20px;
	/* left: -100px; */
	/* top: 150px; */
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50px;
}
.features-top-circle {
	position: relative;
	width: 180px;
	height: 180px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	left: -30px;
	top: 20px;
}
.features-bottom-circle {
	position: relative;
	width: 380px;
	height: 380px;
	border: 1.5px solid var(--l-blue);
	border-radius: 50%;
	right: -300px;
	bottom: 0px;
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
