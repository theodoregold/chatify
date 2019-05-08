module.exports = {
	dispatch(type, keyCode) {
		document.dispatchEvent(new KeyboardEvent(type, {
			keyCode,
		}));
	},
};
