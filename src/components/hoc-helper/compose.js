const compose = (...functions) => (Wrapped) => {
	return functions.reduceRight((previousValue, value) => {
		return value(previousValue);
	}, Wrapped);
};

export default compose;