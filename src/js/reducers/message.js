import * as types from "../constants";



const INITIAL = [];

const reducer = (state = INITIAL, action) => {
	switch (action.type) {
		case types.MESSAGE_INCOMMING:
			if (!action.payload) return state;

			return [
				...state,
				{...action.payload},
			];
		case types.CHAT_CONNECTED:
			return [];
		default:
			return state;
	}
};

export default reducer;
