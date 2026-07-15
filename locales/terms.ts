const modules = import.meta.glob('./*-terms.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

export default function getTermsContent(locale: string) {
	return modules[`./${locale}-terms.md`] ?? modules['./en-terms.md'];
}
