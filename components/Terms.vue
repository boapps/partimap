<script setup lang="ts">
import getTermsContent from '~/locales/terms';

const props = defineProps<{
	hideTitle?: boolean;
}>();

const { locale } = useI18n();

const md = computed(() => {
	const content = getTermsContent(locale.value);
	if (!props.hideTitle) return content;
	return content.replace(/^[^\n]*\n/, '');
});
</script>

<template>
	<Markdown
		class="terms"
		:md="md"
	/>
</template>
