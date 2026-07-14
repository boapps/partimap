<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/help/create',
		es: '/ayuda/crear',
		lt: '/pagalba/kurti',
		de: '/hilfe/erstellen',
	},
});

const { t } = useI18n();

useHead({
	title: t('helpPage.topic.maps'),
});
</script>

<template>
	<HelpTopics initial-topic="maps" />
</template>
