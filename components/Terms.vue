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

<style>
.terms h1,
.terms h2 {
	font-size: 1.1rem;
	font-weight: bold;
}

.terms h2 {
	margin-top: 2rem;
}
</style>
