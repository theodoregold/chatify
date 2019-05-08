import * as types from "../constants";

import reducer from "./user";



const createAction = (type, payload) => {
	if (typeof payload === "undefined") {
		return {
			type,
		};
	}

	return {
		type,
		payload,
	};
};

const initial = null;

const mock = {
	id: 0,
	nickname: "Name",
};

describe("user reducer", () => {
	it("initial", () => {
		const action = createAction();

		expect(reducer(undefined, action)).toEqual(initial);
	});

	describe("default", () => {
		it("get", () => {
			const action = createAction(types.AUTH_SIGNUP_SUCCESS, mock);

			const transform = {...mock};

			expect(reducer(undefined, action)).toEqual(transform);
		});

		it("no payload", () => {
			const action = createAction(types.AUTH_SIGNUP_SUCCESS);

			expect(reducer(undefined, action)).toEqual(initial);
		});
	});
});
