import React from "react";

import Empty from "./Empty";



const defaultProps = {
	title: "Title",
	className: "Global__Empty",
};

const setup = (props = defaultProps) => {
	return shallow(
		<Empty {...props} />
	);
};

describe("<Empty />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Empty")).toBe(true);
	});

	it("contians title", () => {
		const wrapper = setup({
			...defaultProps,
		});

		expect(wrapper.find(".Empty__Title").text()).toEqual(defaultProps.title);
	});

	it("onRefresh()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onRefresh: spy,
		});

		wrapper.find(".Empty__Button").simulate("click");

		expect(spy.mock.calls.length).toEqual(1);
	});
});
