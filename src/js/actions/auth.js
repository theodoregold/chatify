import * as types from "../constants";

import handler from "../helpers/handler";
import sessionHelper from "../helpers/session";

import * as toastActions from "./toast";

import API from "../services/api";



export const signup = (form) => async (dispatch) => {
	dispatch({
		type: types.AUTH_SIGNUP_REQUEST,
	});

	try {
		const response = await API.auth.signup(form);

		// save session tokens
		sessionHelper.save(response.data);

		dispatch({
			type: types.AUTH_SIGNUP_SUCCESS,
			payload: {
				...response.data,
			},
		});

		return response.data;
	} catch (error) {
		console.error(error);
		dispatch({
			type: types.AUTH_SIGNUP_ERROR,
			error,
		});

		handler.resolve(error);

		return error;
	}
};

export const logout = () => async (dispatch) => {
	dispatch({
		type: types.AUTH_LOGOUT,
	});

	sessionHelper.clear();

	dispatch(toastActions.create({
		title: "Logout",
	}));
};
