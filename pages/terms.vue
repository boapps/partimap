<script setup lang="ts">
import getTermsContent from '~/locales/terms';

const { locale, t } = useI18n();

const md = computed(() => getTermsContent(locale.value));
const title = computed(() => md.value.match(/^# (.+)$/m)?.[1] ?? t('sheet.termsOfUse'));

useHead(() => ({ title: title.value }));
</script>

<template>
	<PublicFrame>
		<div class="container my-5 terms">
			<Markdown
				class="terms mb-5"
				:md="md"
			/>
		</div>
	</PublicFrame>
</template>
