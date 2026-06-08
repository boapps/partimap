<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/imprint',
		es: '/aviso-legal',
		lt: '/rekvizitai',
		de: '/impressum',
	},
});

const { t } = useI18n();

useHead({
	title: t('impresszum.title'),
});
</script>

<template>
	<LandingFrame>
		<section class="imprint-section">
			<div class="imprint-inner">
				<h1>{{ t('impresszum.title') }}</h1>
				<p class="imprint-intro">{{ t('impresszum.intro') }}</p>
				<p class="imprint-operator">{{ t('impresszum.operator') }}</p>
				<div class="imprint-contact">
					<span class="imprint-contact-label">{{ t('impresszum.contactLabel') }}:</span>
					<a :href="`mailto:${t('impresszum.email')}`">{{ t('impresszum.email') }}</a>
				</div>
			</div>
		</section>
	</LandingFrame>
</template>

<style scoped>
.imprint-section {
	padding: 4rem 2rem 6rem;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
}
.imprint-inner {
	max-width: 720px;
	margin: 0 auto;
}
.imprint-inner h1 {
	color: #0055FF;
	font-size: clamp(2rem, 4.5vw, 3rem);
	font-weight: 500;
	margin-bottom: 1.5rem;
}
.imprint-intro {
	font-size: 0.95rem;
	color: #333;
	opacity: 0.9;
	margin-bottom: 0.5rem;
}
.imprint-operator {
	font-size: 1.1rem;
	font-weight: 500;
	color: #333;
	margin-bottom: 2rem;
}
.imprint-contact {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.95rem;
}
.imprint-contact-label {
	font-weight: 500;
	color: #333;
}
.imprint-contact a {
	color: #0055FF;
	text-decoration: none;
}
.imprint-contact a:hover {
	text-decoration: underline;
}
</style>
