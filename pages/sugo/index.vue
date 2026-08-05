<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/help',
		es: '/ayuda',
		lt: '/pagalba',
		de: '/hilfe',
	},
});

const localePath = useLocalePath();
const { t } = useI18n();

const sections = helpSections;

useHead({
	title: t('helpPage.title'),
});
</script>

<template>
	<LandingFrame>
		<section class="help-index">
			<div class="help-index-inner">
				<header>
					<h1>{{ t('helpPage.title') }}</h1>
					<div class="help-divider" />
				</header>

				<div class="help-cards">
					<section
						v-for="section in sections"
						:key="section.slug"
						class="help-card"
					>
						<h2>
							<NuxtLink :to="localePath({ name: section.route })">
								{{ section.title }}
							</NuxtLink>
						</h2>
						<ol>
							<li
								v-for="page in section.pages"
								:key="page.slug"
							>
								<NuxtLink
									:to="{
										path: localePath({ name: section.route }),
										hash: `#${page.slug}`,
									}"
								>
									{{ page.title }}
								</NuxtLink>
							</li>
						</ol>
					</section>
				</div>

				<NuxtLink
					:to="localePath({ name: 'hogyan-mukodik' })"
					class="help-deep-link"
				>
					{{ t('helpPage.fullGuide') }}
				</NuxtLink>
			</div>
		</section>
	</LandingFrame>
</template>

<style scoped>
.help-index {
	font-family: 'Apex New', 'Segoe UI', sans-serif;
	padding: 3rem 2rem 6rem;
}
.help-index-inner {
	margin: 0 auto;
	max-width: 1100px;
}
.help-index h1 {
	color: #0055FF;
	font-size: clamp(1.8rem, 4vw, 2.6rem);
	font-weight: 500;
	margin-bottom: 1rem;
}
.help-divider {
	border-top: 1.5px solid #0055FF;
	margin-bottom: 2.5rem;
}

.help-cards {
	display: grid;
	gap: 2rem;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.help-card {
	background: rgba(255, 255, 255, 0.55);
	border: 1.5px solid rgba(0, 85, 255, 0.35);
	border-radius: 12px;
	padding: 1.5rem;
}
.help-card h2 {
	font-size: 1.15rem;
	font-weight: 700;
	line-height: 1.3;
	margin-bottom: 1rem;
}
.help-card h2 a {
	color: #0055FF;
	text-decoration: none;
}
.help-card h2 a:hover {
	text-decoration: underline;
}
.help-card ol {
	color: rgba(0, 85, 255, 0.6);
	margin: 0;
	padding-left: 1.25rem;
}
.help-card li {
	margin-bottom: 0.4rem;
}
.help-card li a {
	color: #333;
	font-size: 0.85rem;
	line-height: 1.4;
	text-decoration: none;
}
.help-card li a:hover {
	color: #0055FF;
	text-decoration: underline;
}

.help-deep-link {
	color: #0055FF;
	display: inline-block;
	font-size: 0.85rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	margin-top: 2.5rem;
	text-decoration: none;
}
.help-deep-link:hover {
	text-decoration: underline;
}
</style>
