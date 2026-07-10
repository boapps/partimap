<script setup lang="ts">
import getTermsContent from '~/locales/terms';

const { locale } = useI18n();

const md = computed(() => getTermsContent(locale.value));
</script>

<template>
	<Markdown
		class="terms"
		:md="md"
	/>
</template>
