<script setup lang="ts">
const props = defineProps<{
	/** Slug of the help section to render, see `utils/help.ts`. */
	section: string;
}>();

const localePath = useLocalePath();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

const section = computed(() => getHelpSection(props.section));
const otherSections = computed(() => helpSections.filter((s) => s.slug !== props.section));

// The hash is not sent to the server, so the first page is rendered on SSR and
// the hash is applied once we are on the client.
const activeSlug = ref(section.value.pages[0]?.slug || '');

function syncFromHash() {
	const slug = route.hash.replace(/^#/, '');
	if (slug && section.value.pages.some((p) => p.slug === slug)) {
		activeSlug.value = slug;
	}
}
onMounted(syncFromHash);
watch(() => route.hash, syncFromHash);

const activeIndex = computed(() =>
	Math.max(
		0,
		section.value.pages.findIndex((p) => p.slug === activeSlug.value),
	),
);
const activePage = computed(() => section.value.pages[activeIndex.value]);
const previousPage = computed(() => section.value.pages[activeIndex.value - 1]);
const nextPage = computed(() => section.value.pages[activeIndex.value + 1]);

const contentEl = ref<HTMLElement>();
function selectPage(slug: string) {
	router.replace({ hash: `#${slug}` });
	activeSlug.value = slug;
	contentEl.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

useHead({
	title: () => `${activePage.value?.title} – ${section.value.title}`,
});
</script>

<template>
	<LandingFrame>
		<section class="help-section">
			<div class="help-inner">
				<aside class="help-sidebar">
					<h2 class="help-sidebar-title">{{ section.title }}</h2>
					<ul>
						<li
							v-for="page in section.pages"
							:key="page.slug"
						>
							<a
								:class="{ active: activeSlug === page.slug }"
								:href="`#${page.slug}`"
								@click.prevent="selectPage(page.slug)"
							>
								{{ page.title }}
							</a>
						</li>
					</ul>

					<h3 class="help-sidebar-subtitle">{{ t('helpPage.topics') }}</h3>
					<ul>
						<li
							v-for="other in otherSections"
							:key="other.slug"
						>
							<NuxtLink :to="localePath({ name: other.route })">
								{{ other.title }}
							</NuxtLink>
						</li>
					</ul>
				</aside>

				<article
					ref="contentEl"
					class="help-content"
				>
					<p class="help-eyebrow">{{ section.title }}</p>
					<h1>{{ activePage?.title }}</h1>
					<div class="help-divider" />

					<Markdown
						class="help-intro"
						:md="section.intro"
					/>

					<Markdown
						class="help-body"
						:md="activePage?.body || ''"
					/>

					<nav class="help-pager">
						<a
							v-if="previousPage"
							class="help-pager-prev"
							:href="`#${previousPage.slug}`"
							@click.prevent="selectPage(previousPage.slug)"
						>
							<span aria-hidden="true">←</span> {{ previousPage.title }}
						</a>
						<a
							v-if="nextPage"
							class="help-pager-next"
							:href="`#${nextPage.slug}`"
							@click.prevent="selectPage(nextPage.slug)"
						>
							{{ nextPage.title }} <span aria-hidden="true">→</span>
						</a>
					</nav>
				</article>
			</div>

			<div class="help-home-link">
				<NuxtLink :to="localePath({ name: 'sugo' })">
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
	grid-template-columns: 260px 1fr;
	gap: 4rem;
	position: relative;
	align-items: start;
}

.help-sidebar {
	position: sticky;
	top: 6rem;
}
.help-sidebar-title {
	color: #0055FF;
	font-size: 1.25rem;
	font-weight: 700;
	line-height: 1.3;
	margin-bottom: 1.25rem;
}
.help-sidebar-subtitle {
	border-top: 1px solid rgba(0, 85, 255, 0.25);
	color: #0055FF;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	margin: 1.5rem 0 0.75rem;
	padding-top: 1.25rem;
	text-transform: uppercase;
}
.help-sidebar ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
.help-sidebar a {
	border-radius: 8px;
	color: #333;
	display: block;
	font-size: 0.85rem;
	font-weight: 500;
	line-height: 1.4;
	margin-bottom: 0.3rem;
	padding: 0.55rem 0.8rem;
	text-decoration: none;
	transition: background 0.15s, color 0.15s;
}
.help-sidebar a:hover {
	background: rgba(0, 85, 255, 0.08);
	color: #0055FF;
}
.help-sidebar a.active {
	background: rgba(0, 85, 255, 0.12);
	color: #0055FF;
	font-weight: 700;
}

.help-eyebrow {
	color: #0055FF;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.1em;
	margin-bottom: 0.5rem;
	text-transform: uppercase;
}
.help-content h1 {
	color: #0055FF;
	font-size: clamp(1.6rem, 3.5vw, 2.4rem);
	font-weight: 500;
	margin-bottom: 1rem;
}
.help-divider {
	border-top: 1.5px solid #0055FF;
	margin-bottom: 2rem;
}

.help-intro {
	background: rgba(0, 85, 255, 0.06);
	border-left: 3px solid #0055FF;
	border-radius: 8px;
	margin-bottom: 2.5rem;
	padding: 1.25rem 1.5rem;
}
.help-intro :deep(p) {
	color: #333;
	font-size: 0.9rem;
	line-height: 1.7;
	margin-bottom: 0.75rem;
}
.help-intro :deep(p:last-child) {
	margin-bottom: 0;
}
.help-intro :deep(blockquote) {
	border-left: 2px solid rgba(0, 85, 255, 0.4);
	margin: 0.75rem 0 0;
	padding-left: 1rem;
}

.help-body {
	color: #333;
	font-size: 0.95rem;
	line-height: 1.75;
}
.help-body :deep(h2) {
	color: #0055FF;
	font-size: 1.4rem;
	font-weight: 700;
	margin: 2.5rem 0 1rem;
}
.help-body :deep(h3) {
	color: #0055FF;
	font-size: 1.1rem;
	font-weight: 700;
	margin: 2rem 0 0.75rem;
}
.help-body :deep(h4) {
	color: #222;
	font-size: 1rem;
	font-weight: 700;
	margin: 1.5rem 0 0.5rem;
}
.help-body :deep(p),
.help-body :deep(ul),
.help-body :deep(ol) {
	margin-bottom: 1rem;
}
.help-body :deep(li) {
	margin-bottom: 0.35rem;
}
.help-body :deep(a) {
	color: #0055FF;
}
.help-body :deep(strong) {
	font-weight: 700;
}
.help-body :deep(blockquote) {
	background: rgba(255, 193, 7, 0.1);
	border-left: 3px solid #ffc107;
	border-radius: 8px;
	margin: 1.5rem 0;
	padding: 1rem 1.25rem;
}
.help-body :deep(blockquote p:last-child) {
	margin-bottom: 0;
}
.help-body :deep(figure) {
	margin: 2rem 0;
}
.help-body :deep(figure img) {
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 8px;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
	display: block;
	height: auto;
	max-width: 100%;
}
.help-body :deep(figcaption) {
	color: #666;
	font-size: 0.8rem;
	font-style: italic;
	margin-top: 0.6rem;
	text-align: center;
}
.help-body :deep(table) {
	border-collapse: collapse;
	font-size: 0.85rem;
	margin: 1.5rem 0;
	width: 100%;
}
.help-body :deep(th),
.help-body :deep(td) {
	border: 1px solid rgba(0, 0, 0, 0.12);
	padding: 0.5rem 0.75rem;
	text-align: left;
	vertical-align: top;
}
.help-body :deep(th) {
	background: rgba(0, 85, 255, 0.06);
	color: #0055FF;
}
.help-body :deep(pre),
.help-body :deep(code) {
	background: rgba(0, 0, 0, 0.05);
	border-radius: 6px;
	font-size: 0.85rem;
}
.help-body :deep(code) {
	padding: 0.1rem 0.35rem;
}
.help-body :deep(pre) {
	overflow-x: auto;
	padding: 0.85rem 1rem;
}
.help-body :deep(pre code) {
	background: none;
	padding: 0;
}

.help-pager {
	border-top: 1px solid rgba(0, 85, 255, 0.25);
	display: flex;
	gap: 1.5rem;
	justify-content: space-between;
	margin-top: 3rem;
	padding-top: 1.5rem;
}
.help-pager a {
	color: #0055FF;
	font-size: 0.85rem;
	font-weight: 700;
	max-width: 45%;
	text-decoration: none;
}
.help-pager a:hover {
	text-decoration: underline;
}
.help-pager-next {
	margin-left: auto;
	text-align: right;
}

.help-home-link {
	display: flex;
	justify-content: center;
	margin-top: 3rem;
}
.help-home-link a {
	align-items: center;
	border: 1.5px solid #0055FF;
	border-radius: 50%;
	color: #0055FF;
	display: flex;
	font-size: 1rem;
	height: 44px;
	justify-content: center;
	text-decoration: none;
	transition: background 0.2s, color 0.2s;
	width: 44px;
}
.help-home-link a:hover {
	background: #0055FF;
	color: #fff;
}

@media (max-width: 768px) {
	.help-inner {
		gap: 2rem;
		grid-template-columns: 1fr;
	}
	.help-sidebar {
		position: static;
	}
}
</style>
