import * as types from "../constants";



const INITIAL = false;

const reducer = (state = INITIAL, action) => {
	console.log(action);

	switch (action.type) {
		case types.CHAT_CONNECTED:
			return true;
		case types.CHAT_CONNECT:
		case types.CHAT_DISCONNECTED:
			return false;
		default:
			return state;
	}
};

export default reducer;
