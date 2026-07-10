<script setup lang="ts">
import getPrivacyContent from '~/locales/privacy';

const { locale, t } = useI18n();

const md = computed(() => getPrivacyContent(locale.value));
const title = computed(() => md.value.match(/^# (.+)$/m)?.[1] ?? t('legal.privacyPolicy'));

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
