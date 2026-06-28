<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

withDefaults(
	defineProps<{
		showSearch?: boolean;
	}>(),
	{ showSearch: false },
);
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
					<img src="/logo_kek.png" alt="PARTIMAP" height="24" />
				</NuxtLink>

				<div v-if="showSearch" class="nav-search d-none d-lg-flex">
					<i class="fas fa-search" />
					<input type="text" :placeholder="t('landing.nav.search')" />
				</div>

				<div class="nav-links d-none d-lg-flex">
					<div class="nav-dropdown">
						<NuxtLink :to="localePath({ name: 'partimaprol' })" class="nav-link-item nav-dropdown-toggle">
							{{ t('landing.nav.about') }}
							<span class="nav-dropdown-caret" aria-hidden="true">▾</span>
						</NuxtLink>
						<div class="nav-dropdown-menu">
							<NuxtLink
								v-for="key in ['whatIs', 'plan', 'questionnaire', 'create', 'analyze', 'visualize']"
								:key="key"
								:to="localePath({ name: 'partimaprol' })"
								class="nav-dropdown-item"
							>
								{{ t(`landing.nav.aboutSubmenu.${key}`) }}
							</NuxtLink>
						</div>
					</div>
					<NuxtLink :to="localePath({ name: 'sugo' })" class="nav-link-item">
						{{ t('landing.nav.aboutUs') }}
					</NuxtLink>
					<NuxtLink :to="localePath({ name: 'arazas' })" class="nav-link-item">
						{{ t('landing.nav.pricing') }}
					</NuxtLink>
					<div class="nav-dropdown">
						<button type="button" class="nav-link-item nav-dropdown-toggle nav-dropdown-btn">
							{{ t('landing.nav.contact') }}
							<span class="nav-dropdown-caret" aria-hidden="true">▾</span>
						</button>
						<div class="nav-dropdown-menu">
							<NuxtLink :to="localePath({ name: 'rolunk' })" class="nav-dropdown-item">
								{{ t('landing.nav.contactSubmenu.rolunk') }}
							</NuxtLink>
							<NuxtLink :to="localePath({ name: 'impresszum' })" class="nav-dropdown-item">
								{{ t('landing.nav.contactSubmenu.impresszum') }}
							</NuxtLink>
						</div>
					</div>
					<a
						:href="t('landing.tryLink')" 
						target="_blank"
						class="nav-btn-filled"
					>{{ t('landing.nav.tryIt') }}</a>
				</div>

				<b-navbar-nav class="nav-right">
					<LangSwitcher />
					<li class="nav-item nav-login-item">
						<NuxtLink :to="localePath('/admin')" class="nav-btn-outline">
							{{ t('landing.nav.login') }}
						</NuxtLink>
					</li>
				</b-navbar-nav>
			</div>
		</nav>

		<!-- Page content -->
		<main class="landing-main">
			<slot />
		</main>

		<!-- Footer -->
		<footer id="contact" class="landing-footer">
			<div class="footer-inner">
				<div class="footer-grid">
					<div class="footer-col">
						<h5>{{ t('landing.footer.contact') }}</h5>
						<p class="footer-desc">{{ t('landing.footer.contactDesc') }}</p>
						<ul>
							<li><a href="mailto:hello@partimap.eu">hello@partimap.eu</a></li>
							<li><a href="mailto:info@k-monitor.hu">info@k-monitor.hu</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h5 class="footer-col-spacer" aria-hidden="true">&nbsp;</h5>
						<ul>
							<li><a href="#">{{ t('landing.footer.privacy') }}</a></li>
							<li><a href="#">{{ t('landing.footer.terms') }}</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h5>{{ t('landing.footer.follow') }}</h5>
						<ul>
							<li><a href="https://k.blog.hu" target="_blank" rel="noopener">k.blog</a></li>
							<li><a href="#" target="_blank" rel="noopener">Facebook</a></li>
							<li><a href="#" target="_blank" rel="noopener">Instagram</a></li>
							<li><a href="#" target="_blank" rel="noopener">YouTube</a></li>
						</ul>
					</div>
					<div class="footer-col">
						<h5>{{ t('landing.footer.imprint') }}</h5>
						<ul>
							<li>K-Monitor Közhasznú Egyesület</li>
							<li>{{ t('landing.footer.office') }}</li>
							<li>1077 Budapest, Rózsa utca 8.</li>
						</ul>
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
.nav-brand { flex-shrink: 0; }
.nav-brand img { height: 28px; }
.nav-links {
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-left: auto;
}
.nav-search {
	flex: 0 1 260px;
	display: flex;
	align-items: center;
	gap: 0.6rem;
	background: rgba(255, 255, 255, 0.6);
	border: 1px solid var(--l-blue);
	border-radius: 2rem;
	padding: 0.55rem 1.2rem;
}
.nav-search i {
	color: var(--l-blue);
	font-size: 0.8rem;
}
.nav-search input {
	flex: 1;
	background: transparent;
	border: none;
	outline: none;
	font-family: var(--l-font);
	font-size: 0.85rem;
	color: var(--l-text);
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
.nav-dropdown {
	position: relative;
}
.nav-dropdown-toggle {
	display: inline-flex;
	align-items: center;
	gap: 0.25rem;
}
.nav-dropdown-btn {
	background: none;
	border: none;
	padding: 0;
	font-family: inherit;
	cursor: pointer;
}
.nav-dropdown-caret {
	font-size: 0.65rem;
	line-height: 1;
	transition: transform 0.2s ease;
}
.nav-dropdown:hover .nav-dropdown-caret,
.nav-dropdown:focus-within .nav-dropdown-caret {
	transform: rotate(180deg);
}
.nav-dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	min-width: 280px;
	background: rgba(255, 255, 255, 0.96);
	backdrop-filter: blur(8px);
	border: 1.5px solid var(--l-blue);
	border-radius: 12px;
	padding: 0.5rem 0;
	margin-top: 0.5rem;
	box-shadow: 0 8px 24px rgba(0, 85, 255, 0.12);
	opacity: 0;
	visibility: hidden;
	transform: translateY(-4px);
	transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s ease;
	z-index: 200;
}
.nav-dropdown:hover .nav-dropdown-menu,
.nav-dropdown:focus-within .nav-dropdown-menu {
	opacity: 1;
	visibility: visible;
	transform: translateY(0);
}
.nav-dropdown-item {
	display: block;
	padding: 0.55rem 1.1rem;
	color: var(--l-blue);
	font-size: 0.8rem;
	font-weight: 500;
	text-decoration: none;
	white-space: normal;
	line-height: 1.35;
}
.nav-dropdown-item:hover {
	background: rgba(0, 85, 255, 0.08);
	text-decoration: none;
}
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
.nav-right :deep(.nav-item) { list-style: none; }
.nav-login-item { list-style: none; }
.nav-login-item :deep(.nav-link) { padding: 0; }
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

.landing-main {
	padding-top: 5rem;
	min-height: calc(100vh - 5rem);
}

/* ── Floating Dots ────────────────────────────────────── */
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
.footer-desc {
	font-size: 0.8rem;
	line-height: 1.6;
	opacity: 0.8;
	font-weight: 500;
	margin-bottom: 1rem;
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
	height: 0;
	border-top: 1.5px solid var(--l-blue);
	margin-bottom: 1.5rem;
}
.footer-copy {
	text-align: center;
	font-size: 0.75rem;
	opacity: 0.6;
}

@media (max-width: 575px) {
	.landing-nav { padding: 0.75rem 1rem; }
	.nav-right { gap: 0.5rem; }
	.footer-grid { grid-template-columns: 1fr; }
}
@media (max-width: 991px) {
	.footer-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>
