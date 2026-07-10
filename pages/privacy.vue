<script setup lang="ts">
import getPrivacyContent from '~/locales/privacy';

const { locale } = useI18n();

const md = computed(() => getPrivacyContent(locale.value));
const title = computed(() => md.value.match(/^# (.+)$/m)?.[1] ?? 'Privacy Policy');

useHead(() => ({ title: title.value }));
</script>

<template>
	<PublicFrame>
		<div class="container my-5 terms">
			<header class="my-5">
				<h1 class="border-bottom">{{ title }}</h1>
			</header>
			<Markdown
				class="terms mb-5"
				:md="md"
			/>
		</div>
	</PublicFrame>
</template>
