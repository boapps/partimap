<script setup lang="ts">
import getPrivacyContent from '~/locales/privacy';

const props = defineProps<{
	projectDataProcessor?: string;
}>();

const { locale } = useI18n();

const md = computed(() => {
	return getPrivacyContent(locale.value).replace(
		'$_PROJECT_DATA_PROCESSOR_$',
		props.projectDataProcessor || '',
	);
});
</script>

<template>
	<Markdown
		class="terms"
		:md="md"
	/>
</template>
