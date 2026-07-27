const NORSTAT_PARAMETERS = ['source', 'state'] as const;
export const CAPTURED_PARAMETERS = [...NORSTAT_PARAMETERS];

export function isAcceptable(value: string) {
	return value.length <= 256 && /^[a-zA-Z0-9_\-=/+]*$/.test(value);
}

export function captureParameters(query: Record<string, string | string[] | undefined>) {
	const captured: { [key in (typeof CAPTURED_PARAMETERS)[number]]?: string } = {};
	for (const key of CAPTURED_PARAMETERS) {
		const value = query[key];
		if (typeof value === 'string' && isAcceptable(value)) {
			captured[key] = value;
		}
	}
	return captured;
}
