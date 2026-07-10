<script setup lang="ts">
import getPrivacyContent from '~/locales/privacy';

const props = defineProps<{
	projectDataProcessor?: string;
	hideTitle?: boolean;
}>();

const { locale } = useI18n();

const md = computed(() => {
	let content = getPrivacyContent(locale.value).replace(
		'$_PROJECT_DATA_PROCESSOR_$',
		props.projectDataProcessor || '',
	);
	if (props.hideTitle) content = content.replace(/^[^\n]*\n/, '');
	return content;
});
</script>

<template>
	<Markdown
		class="terms"
		:md="md"
	/>
</template>
