<script setup lang="ts">
const topics = [
	'registration',
	'newQuestionnaire',
	'questionnaireDatasheet',
	'sheetList',
	'sheetTypes',
	'maps',
	'reports',
	'tips',
] as const;

type Topic = (typeof topics)[number];

const props = withDefaults(defineProps<{ initialTopic?: Topic }>(), {
	initialTopic: 'reports',
});

const localePath = useLocalePath();
const { t } = useI18n();

const activeTopic = ref<Topic>(props.initialTopic);
</script>

<template>
	<LandingFrame :show-search="true">
		<section class="help-section">
			<div class="help-inner">
				<aside class="help-sidebar">
					<h3 class="help-sidebar-title">{{ t('helpPage.topics') }}</h3>
					<ul>
						<li
							v-for="topic in topics"
							:key="topic"
							:class="{ active: activeTopic === topic }"
							@click="activeTopic = topic"
						>
							{{ t(`helpPage.topic.${topic}`) }}
						</li>
					</ul>
				</aside>

				<article class="help-content">
					<h1>{{ t(`helpPage.topic.${activeTopic}`) }}</h1>
					<div class="help-divider" />
					<p>{{ t(`helpPage.content.${activeTopic}.p1`) }}</p>
					<p>{{ t(`helpPage.content.${activeTopic}.p2`) }}</p>

					<NuxtLink
						:to="localePath({ name: 'hogyan-mukodik' })"
						class="help-deep-link"
					>
						{{ t('helpPage.fullGuide') }}
					</NuxtLink>
				</article>

				<div class="help-side-arrow" aria-hidden="true">↓</div>
			</div>

			<div class="help-home-link">
				<NuxtLink :to="localePath('/')">
					<i class="fas fa-home" />
				</NuxtLink>
			</div>
		</section>
	</LandingFrame>
</template>

<style scoped>
.help-section {
	position: relative;
	padding: 3rem 2rem 6rem;
	font-family: 'Apex New', 'Segoe UI', sans-serif;
}
.help-inner {
	max-width: 1100px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 240px 1fr;
	gap: 4rem;
	position: relative;
}

.help-sidebar-title {
	color: #0055FF;
	font-size: 1.5rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
}
.help-sidebar ul {
	list-style: none;
	padding: 0;
	margin: 0;
}
.help-sidebar li {
	color: #333;
	font-size: 0.85rem;
	font-weight: 500;
	padding: 0.55rem 0.8rem;
	margin-bottom: 0.3rem;
	border-radius: 8px;
	cursor: pointer;
	line-height: 1.4;
	transition: background 0.15s, color 0.15s;
}
.help-sidebar li:hover {
	background: rgba(0, 85, 255, 0.08);
	color: #0055FF;
}
.help-sidebar li.active {
	background: rgba(0, 85, 255, 0.12);
	color: #0055FF;
	font-weight: 700;
}

.help-content h1 {
	color: #0055FF;
	font-size: clamp(1.8rem, 4vw, 2.6rem);
	font-weight: 500;
	margin-bottom: 1rem;
}
.help-divider {
	border-top: 1.5px solid #0055FF;
	margin-bottom: 2rem;
}
.help-content p {
	font-size: 0.9rem;
	line-height: 1.75;
	color: #333;
	opacity: 0.9;
	margin-bottom: 1rem;
}
.help-deep-link {
	display: inline-block;
	margin-top: 1.5rem;
	color: #0055FF;
	font-size: 0.85rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-decoration: none;
}
.help-deep-link:hover { text-decoration: underline; }

.help-side-arrow {
	position: absolute;
	right: -3rem;
	top: 2rem;
	color: #0055FF;
	font-size: 1.5rem;
}

.help-home-link {
	display: flex;
	justify-content: center;
	margin-top: 3rem;
}
.help-home-link a {
	width: 44px;
	height: 44px;
	border-radius: 50%;
	border: 1.5px solid #0055FF;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #0055FF;
	font-size: 1rem;
	text-decoration: none;
	transition: background 0.2s, color 0.2s;
}
.help-home-link a:hover {
	background: #0055FF;
	color: #fff;
}

@media (max-width: 768px) {
	.help-inner {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
	.help-side-arrow { display: none; }
}
</style>
