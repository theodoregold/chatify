import React from "react";

import Group from "./Group";



const defaultProps = {
	id: "id",
	className: "Global__FormGroup",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(<Group {...props}>{children}</Group>);
};

describe("<Group />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__FormGroup")).toBe(true);
	});

	it("class prop \"row\", \"small\", \"float\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			row: true,
			small: true,
			float: true,
		});

		expect(wrapper.hasClass("FormGroup--Row")).toBe(true);
		expect(wrapper.hasClass("FormGroup--Small")).toBe(true);
		expect(wrapper.hasClass("FormGroup--Float")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
