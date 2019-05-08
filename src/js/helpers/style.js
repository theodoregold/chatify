const split = (names) => {
	return names.split(" ");
};

const className = (key, names) => {
	let convert = [key];

	if (names) {
		convert = [
			...convert,
			...(typeof names === "string" ? split(names) : names),
		];
	}

	return convert;
};
export default {
	className,
};
