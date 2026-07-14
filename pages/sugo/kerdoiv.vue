<script setup lang="ts">
defineI18nRoute({
	paths: {
		en: '/help/questionnaire',
		es: '/ayuda/cuestionario',
		lt: '/pagalba/klausimynas',
		de: '/hilfe/fragebogen',
	},
});

const { t } = useI18n();

useHead({
	title: t('helpPage.topic.newQuestionnaire'),
});
</script>

<template>
	<HelpTopics initial-topic="newQuestionnaire" />
</template>
