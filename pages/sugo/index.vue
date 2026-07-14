<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/help',
		es: '/ayuda',
		lt: '/pagalba',
		de: '/hilfe',
	},
});

const { t } = useI18n();

useHead({
	title: t('helpPage.title'),
});
</script>

<template>
	<HelpTopics initial-topic="reports" />
</template>
