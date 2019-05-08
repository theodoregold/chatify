import * as types from "../constants";

import * as toastActions from "./toast";
import * as authActions from "./auth";

import * as socket from "../services/socket";



export const connect = () => async (dispatch) => {
	if (socket.check()) return;

	await socket.connect();

	dispatch({
		type: types.CHAT_CONNECT,
	});
};

export const connected = () => async (dispatch) => {
	dispatch({
		type: types.CHAT_CONNECTED,
	});

	dispatch(toastActions.create({
		title: "Connected",
		type: "success",
	}));
};

export const disconnect = () => async (dispatch) => {
	socket.disconnect();

	dispatch({
		type: types.CHAT_DISCONNECT,
	});
};


export const disconnected = () => async (dispatch) => {
	dispatch({
		type: types.CHAT_DISCONNECTED,
	});

	dispatch(toastActions.create({
		title: "Disconnected",
	}));
};

export const failed = () => async (dispatch) => {
	dispatch({
		type: types.CHAT_FAILED,
	});

	dispatch(authActions.logout());

	dispatch(toastActions.create({
		title: "Failed to connect",
		type: "error",
	}));
};
