export default {
	get(key) {
		try {
			const data = localStorage.getItem(key);

			if (data === null) return null;

			return JSON.parse(data);
		} catch (err) {
			console.log(err, "localStorage get error");
			return null;
		}
	},

	set(key, value) {
		try {
			localStorage.setItem(key, JSON.stringify(value));
		} catch (err) {
			console.log(err, "localStorage set error");
		}
	},

	remove(key) {
		return localStorage.removeItem(key);
	},
};
