import * as types from "../constants";



const INITIAL = [];

const reducer = (state = INITIAL, action) => {
	switch (action.type) {
		case types.TOAST_CREATE:
			return [
				...state,
				{
					...action.payload,
					hide: false,
				},
			];
		case types.TOAST_REMOVE:
			return state.filter((item) => {
				return item.id !== action.payload.id;
			});
		case types.TOAST_HIDE:
			return state.map((item) => {
				if (item.id === action.payload.id) item.hide = true;

				return item;
			});
		default:
			return state;
	}
};

export default reducer;
