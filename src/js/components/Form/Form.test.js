import React from "react";

import Form from "./Form";



const defaultProps = {
	id: "id",
	className: "Global__Form",
};

const setup = (props = defaultProps) => {
	const children = "children";

	return shallow(<Form {...props}>{children}</Form>);
};

describe("<Form />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Form")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual("children");
	});

	it("onSubmit()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onSubmit: spy,
		});

		wrapper.simulate("submit");

		expect(spy.mock.calls.length).toEqual(1);
	});

	it("onKeyDown()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onKeyDown: spy,
		});

		wrapper.simulate("keydown");

		expect(spy.mock.calls.length).toEqual(1);
	});
});
