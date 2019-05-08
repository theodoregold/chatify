import store from "../stores";

import sessionHelper from "../helpers/session";

import * as chatActions from "../actions/chat";
import * as messageActions from "../actions/message";

import CONFIG from "../../../env";



let connection = null;

const open = (resolve) => (connection) => {
	console.log("open");
	store.dispatch(chatActions.connected());
};

const close = (event) => {
	console.log(event.code, "close");
	store.dispatch(chatActions.disconnected());
};

const error = (reject) => (error) => {
	console.log(error, "error");
	store.dispatch(chatActions.failed());
};

const message = (raw) => {
	try {
		const data = JSON.parse(raw.data);

		store.dispatch(messageActions.incomming(data));
	} catch (error) {
		console.error("error parsing message", raw.data);
	}
};

export const check = () => {
	return !(connection === null || connection.readyState >= 2);
};

export const connect = () => {
	return new Promise((resolve, reject) => {
		const token = sessionHelper.get();

		connection = new WebSocket(CONFIG.ws, token);

		connection.onopen = open(resolve);
		connection.onmessage = message;
		connection.onclose = close;
		connection.onerror = error(reject);
	});
};

export const send = (data) => {
	try {
		const json = JSON.stringify(data);

		connection.send(json);
	} catch (error) {
		console.error("error sending message", data);
	}
};

export const disconnect = () => {
	if (connection && connection.readyState === 1) connection.close();
};
