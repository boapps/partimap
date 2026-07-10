const modules = import.meta.glob('./*-privacy.md', { eager: true, query: '?raw', import: 'default' }) as Record<string, string>;

export default function getPrivacyContent(locale: string) {
	return modules[`./${locale}-privacy.md`] ?? modules['./en-privacy.md'];
}
