import * as types from "../constants";



export const remove = (id) => (dispatch) => {
	dispatch({
		type: types.TOAST_HIDE,
		payload: {
			id,
		},
	});

	setTimeout(() => {
		dispatch({
			type: types.TOAST_REMOVE,
			payload: {
				id,
			},
		});
	}, 600);
};

export const create = (payload) => (dispatch) => {
	const id = new Date().getTime();

	dispatch({
		type: types.TOAST_CREATE,
		payload: {
			...payload,
			id,
		},
	});

	setTimeout(() => {
		dispatch(remove(id));
	}, 5000);
};
