/**
 * Súgó (help) content.
 *
 * The guide is written in Markdown under `content/sugo/<section>/`. Every major
 * section of the printed guide is a directory: `_intro.md` holds the short
 * introduction that is repeated on top of each of its subpages, and the
 * numbered files are the subpages themselves. A subpage's first line is its
 * `# Title`, which becomes the sidebar label and the page heading.
 */

export type HelpPage = {
	/** URL fragment identifying the page within its section. */
	slug: string;
	title: string;
	/** Markdown body, without the leading title. */
	body: string;
};

export type HelpSection = {
	slug: string;
	title: string;
	/** Nuxt route name of the page rendering this section. */
	route: string;
	/** Markdown shown on top of every subpage of the section. */
	intro: string;
	pages: HelpPage[];
};

const SECTIONS = [
	{
		slug: 'kitoltoknek',
		title: 'Segítség kérdőív kitöltőknek',
		route: 'sugo-kitoltoknek',
	},
	{
		slug: 'keszites',
		title: 'Segítség kérdőív készítőknek',
		route: 'sugo-keszites',
	},
	{
		slug: 'elemzes',
		title: 'Hogyan elemezd a kapott adatokat?',
		route: 'sugo-elemzes',
	},
	{
		slug: 'projekt',
		title: 'Hogyan tervezz meg egy PARTIMAP projektet?',
		route: 'sugo-projekt',
	},
	{
		slug: 'kerdoiv',
		title: 'Hogyan írj kérdőívet?',
		route: 'sugo-kerdoiv',
	},
	{
		slug: 'modszertan',
		title: 'PARTIMAP részvételi módszertana',
		route: 'sugo-modszertan',
	},
];

const files = import.meta.glob('../content/sugo/**/*.md', {
	eager: true,
	import: 'default',
	query: '?raw',
}) as Record<string, string>;

function splitTitle(raw: string) {
	const lines = raw.split('\n');
	const title = /^#\s+(.+)$/.exec(lines[0].trim());
	return title
		? { title: title[1].trim(), body: lines.slice(1).join('\n').trim() }
		: { title: '', body: raw.trim() };
}

export const helpSections: HelpSection[] = SECTIONS.map((section) => {
	const dir = `../content/sugo/${section.slug}/`;
	return {
		...section,
		intro: (files[`${dir}_intro.md`] || '').trim(),
		pages: Object.keys(files)
			.filter((path) => path.startsWith(dir) && !path.endsWith('_intro.md'))
			.sort()
			.map((path) => ({
				slug: path
					.slice(dir.length)
					.replace(/^\d+-/, '')
					.replace(/\.md$/, ''),
				...splitTitle(files[path]),
			})),
	};
});

export function getHelpSection(slug: string) {
	const section = helpSections.find((s) => s.slug === slug);
	if (!section) throw new Error(`Unknown help section: ${slug}`);
	return section;
}
