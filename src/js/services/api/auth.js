import fetcher from "../../helpers/fetcher";



export default {
	login(form) {
		return fetcher.post("auth/login", form);
	},

	signup(form) {
		return fetcher.post("auth/signup", form);
	},

	reset(form) {
		return fetcher.post("auth/reset", form);
	},

	password(form) {
		return fetcher.post(`auth/password`, form);
	},

	logout(form) {
		return fetcher.post(`auth/logout`, form);
	},
};
