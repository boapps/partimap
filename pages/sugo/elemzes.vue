<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/help/analyze',
		es: '/ayuda/analizar',
		lt: '/pagalba/analize',
		de: '/hilfe/analyse',
	},
});

const { t } = useI18n();

useHead({
	title: t('helpPage.topic.reports'),
});
</script>

<template>
	<HelpTopics initial-topic="reports" />
</template>
