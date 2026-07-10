import de from './de-privacy.md?raw';
import en from './en-privacy.md?raw';
import es from './es-privacy.md?raw';
import hu from './hu-privacy.md?raw';
import ro from './ro-privacy.md?raw';

export default function getPrivacyContent(locale: string) {
	if (locale === 'de') return de;
	if (locale === 'es') return es;
	if (locale === 'hu') return hu;
	if (locale === 'ro') return ro;
	return en;
}
