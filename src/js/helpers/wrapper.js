// wrap to fake mock requests
const wrap = (data) => {
	return {
		data: {
			...data,
		}
	};
};

export default {
	wrap,
};
