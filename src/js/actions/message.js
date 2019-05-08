import * as types from "../constants";

import * as socketService from "../services/socket";


export const incomming = (payload) => {
	return {
		type: types.MESSAGE_INCOMMING,
		payload,
	};
};

export const outgoing = (payload) => (dispatch) => {
	dispatch({
		type: types.MESSAGE_OUTGOING,
		payload,
	});

	socketService.send({
		...payload,
	});
};
