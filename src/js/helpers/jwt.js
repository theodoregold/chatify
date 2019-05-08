const payload = (token) => {
	if (!token) return false;

	return JSON.parse(window.atob(token.split(".")[1]));
};

const validate = (payload) => {
	if (!payload) return false;

	const now = Math.floor(Date.now() / 1000);

	return (payload.exp - 30) > now;
};



export default {
	payload,
	validate,
};
