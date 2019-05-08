import store from "../stores";

import * as toastActions from "../actions/toast";
import * as authActions from "../actions/auth";



const format = (raw) => {
	const convert = {
		errors: {
			messages: [],
			inputs: {},
		},
		status: 500,
	};

	// exit if no raw error
	if (!raw) return convert;

	const data = (raw.data ? {...raw.data} : {});

	if (data.errors) {
		// message errors
		if (data.errors.messages) {
			convert.errors.messages = [
				...data.errors.messages,
			];
		}

		// input errors
		if (data.errors.inputs) {
			convert.errors.inputs = {
				...data.errors.inputs,
			};
		}
	}

	// status code if any
	if (raw.status) {
		convert.status = raw.status;
	} else {
		// otherwise it should be network problem
		convert.status = 502;
	}

	return convert;
};

const resolve = (error) => {
	if (error.status === 401) {
		store.dispatch(authActions.logout(true));
	}

	if (error.status === 500) {
		store.dispatch(toastActions.create({
			title: "Something went wrong",
			body: "Please try again later",
			type: "error",
		}));
	}

	if (error.status === 502) {
		store.dispatch(toastActions.create({
			title: "Could not connect to server",
			body: "Please check your network connection and try again later",
			type: "error",
		}));
	}

	return error;
};

export default {
	format,
	resolve,
};
