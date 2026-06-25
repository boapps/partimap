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
const localePath = useLocalePath();

useHead({
	title: t('impresszum.title'),
});
</script>

<template>
	<LandingFrame>
		<section class="imprint-section">
			<div class="imprint-inner">
				<h1>{{ t('impresszum.title') }}</h1>

				<h2>{{ t('impresszum.aboutTitle') }}</h2>
				<p>{{ t('impresszum.aboutDesc') }}</p>

				<h2>{{ t('impresszum.sourceTitle') }}</h2>
				<p>{{ t('impresszum.sourceDesc') }}</p>
				<p>
					<a href="https://github.com/k-monitor/partimap" target="_blank" rel="noopener">
						{{ t('impresszum.githubLink') }}
					</a>
				</p>

				<h2>{{ t('impresszum.dataTitle') }}</h2>
				<p>{{ t('impresszum.dataDesc') }}</p>

				<h2>{{ t('impresszum.copyrightTitle') }}</h2>
				<p>{{ t('impresszum.copyrightDesc') }}</p>

				<p class="imprint-feedback">{{ t('impresszum.feedbackNote') }}</p>
				<p>
					{{ t('impresszum.moreInfoBefore') }}
					<NuxtLink :to="localePath({ name: 'rolunk' })">{{ t('impresszum.moreInfoLink') }}</NuxtLink>
					{{ t('impresszum.moreInfoAfter') }}
				</p>

				<dl class="imprint-details">
					<div class="imprint-row">
						<dt>{{ t('impresszum.operatorLabel') }}:</dt>
						<dd>{{ t('impresszum.operator') }}</dd>
					</div>
					<div class="imprint-row">
						<dt>{{ t('impresszum.hqLabel') }}:</dt>
						<dd>{{ t('impresszum.hq') }}</dd>
					</div>
					<div class="imprint-row">
						<dt>{{ t('impresszum.officeLabel') }}:</dt>
						<dd>{{ t('impresszum.office') }}</dd>
					</div>
					<div class="imprint-row">
						<dt>{{ t('impresszum.phoneLabel') }}:</dt>
						<dd><a :href="`tel:${t('impresszum.phone').replace(/\s/g, '')}`">{{ t('impresszum.phone') }}</a></dd>
					</div>
					<div class="imprint-row">
						<dt>{{ t('impresszum.taxLabel') }}:</dt>
						<dd>{{ t('impresszum.tax') }}</dd>
					</div>
					<div class="imprint-row">
						<dt>{{ t('impresszum.emailLabel') }}:</dt>
						<dd>
							<a :href="`mailto:${t('impresszum.email')}`">{{ t('impresszum.email') }}</a>,
							<a :href="`mailto:${t('impresszum.email2')}`">{{ t('impresszum.email2') }}</a>
						</dd>
					</div>
					<div class="imprint-row">
						<dt>{{ t('impresszum.leadLabel') }}:</dt>
						<dd>
							{{ t('impresszum.lead') }} –
							<a :href="`mailto:${t('impresszum.leadEmail')}`">{{ t('impresszum.leadEmail') }}</a>
						</dd>
					</div>
				</dl>
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
.imprint-inner h2 {
	color: #0055FF;
	font-size: 1.25rem;
	font-weight: 500;
	margin-top: 2rem;
	margin-bottom: 0.5rem;
}
.imprint-inner p {
	font-size: 0.95rem;
	color: #333;
	opacity: 0.9;
	line-height: 1.6;
	margin-bottom: 0.5rem;
}
.imprint-feedback {
	margin-top: 2rem;
}
.imprint-inner a {
	color: #0055FF;
	text-decoration: none;
}
.imprint-inner a:hover {
	text-decoration: underline;
}
.imprint-details {
	margin-top: 2rem;
	font-size: 0.95rem;
	color: #333;
}
.imprint-row {
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
	margin-bottom: 0.35rem;
}
.imprint-row dt {
	font-weight: 500;
	flex-shrink: 0;
}
.imprint-row dd {
	margin: 0;
	opacity: 0.9;
}
</style>
