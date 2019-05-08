const update = () => {
	const position = (window.pageYOffset || document.scrollTop);
	const bottom = (document.body.scrollHeight - document.body.clientHeight);

	return (bottom <= 0) || (position === bottom);
};

const bottom = () => {
	window.scrollTo(0, document.body.scrollHeight);
};

export default {
	update,
	bottom,
};
