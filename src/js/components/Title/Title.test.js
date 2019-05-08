import React from "react";

import Title from "./Title";



const defaultProps = {
	pre: "pre heading",
	post: "post heading",
	className: "Global__Title",
};

const setup = (props = defaultProps) => {
	const children = "heading";

	return shallow(<Title {...props}>{children}</Title>);
};

describe("<Title />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Title")).toBe(true);
	});

	it("class prop \"large\" is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Title--Large")).toBe(false);

		wrapper.setProps({
			...defaultProps,
			large: true,
		});

		expect(wrapper.hasClass("Title--Large")).toBe(true);
	});

	it("contains heading text", () => {
		const wrapper = setup();

		expect(wrapper.find(".Title__Heading").text()).toEqual("heading");
	});

	it("contains pre heading text", () => {
		const wrapper = setup();

		expect(wrapper.find(".Title__Pre").text()).toEqual("pre heading");
	});

	it("contains post heading text", () => {
		const wrapper = setup();

		expect(wrapper.find(".Title__Post").text()).toEqual("post heading");
	});
});
