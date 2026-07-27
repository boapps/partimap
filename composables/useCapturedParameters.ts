export default () => {
	const capturedParameters = useState<CapturedParameters>('capturedParameters', () => ({}));

	return {
		capturedParameters,
	};
};
