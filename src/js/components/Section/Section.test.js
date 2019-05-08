import React from "react";

import Section from "./Section";



const defaultProps = {
	className: "Global__Section",
};

const setup = (props = defaultProps) => {
	const children = "children";

	return shallow(
		<Section {...props}>{children}</Section>
	);
};

describe("<Section />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Section")).toBe(true);
	});

	it("class prop \"large\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			large: true,
		});

		expect(wrapper.hasClass("Section--Large")).toBe(true);
	});

	it("class prop \"small\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			small: true,
		});

		expect(wrapper.hasClass("Section--Small")).toBe(true);
	});

	it("class prop \"center\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			center: true,
		});

		expect(wrapper.hasClass("Section--Center")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual("children");
	});
});
