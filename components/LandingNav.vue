<script setup lang="ts">
const localePath = useLocalePath();
const { t } = useI18n();

withDefaults(
	defineProps<{
		showSearch?: boolean;
	}>(),
	{ showSearch: false },
);

// Colour-coded "A PARTIMAPRÓL" dropdown items: the three help topics link to
// their matching Súgó subpage (same targets as the colour-paired help cards).
const aboutSubmenu = computed(() => [
	{ key: 'whatIs', to: localePath({ name: 'partimaprol' }) },
	{ key: 'plan', to: localePath({ name: 'partimaprol' }) },
	{ key: 'questionnaire', to: localePath({ name: 'sugo-kerdoiv' }) },
	{ key: 'create', to: localePath({ name: 'sugo-keszites' }) },
	{ key: 'analyze', to: localePath({ name: 'sugo-elemzes' }) },
]);
</script>

<template>
	<nav class="landing-nav">
		<div class="nav-inner">
			<NuxtLink :to="localePath('/')" class="nav-brand">
				<img src="/logo_kek.png" alt="PARTIMAP" />
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
							v-for="item in aboutSubmenu"
							:key="item.key"
							:to="item.to"
							class="nav-dropdown-item"
						>
							{{ t(`landing.nav.aboutSubmenu.${item.key}`) }}
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
</template>

<style scoped>
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
	width: auto;
	display: block;
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

@media (max-width: 575px) {
	.landing-nav { padding: 0.75rem 1rem; }
	.nav-right { gap: 0.5rem; }
}
</style>
