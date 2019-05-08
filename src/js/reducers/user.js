import * as types from "../constants";



const INITIAL = null;

const reducer = (state = INITIAL, action) => {
	switch (action.type) {
		case types.AUTH_SIGNUP_SUCCESS:
			if (!action.payload) return state;

			return {
				...action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
