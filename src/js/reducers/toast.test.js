import * as types from "../constants";

import reducer from "./toast";



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

const initial = [];

const mock = [{
	id: new Date().getTime(),
	title: "Title 1",
	body: "Body 1",
}, {
	id: new Date().getTime() + 1000,
	title: "Title 2",
	body: "Body 2",
}];

describe("toast reducer", () => {
	it("initial", () => {
		const action = createAction();

		expect(reducer(undefined, action)).toEqual(initial);
	});

	it("create", () => {
		const action = createAction(types.TOAST_CREATE, mock[0]);

		const transform = [mock[0]];
		transform[0].hide = false;

		expect(reducer(undefined, action)).toEqual(transform);
	});

	it("remove", () => {
		const action = createAction(types.TOAST_REMOVE, mock[0]);

		const transform = [mock[1]];

		expect(reducer(mock, action)).toEqual(transform);
	});

	it("hide", () => {
		const action = createAction(types.TOAST_HIDE, mock[0]);

		const transform = [...mock];
		transform[0].hide = true;

		expect(reducer(mock, action)).toEqual(transform);
	});
});
