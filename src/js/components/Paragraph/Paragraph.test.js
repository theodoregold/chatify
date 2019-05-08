import React from "react";

import Paragraph from "./Paragraph";



const defaultProps = {
	className: "Global__Paragraph",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Paragraph {...props}>
			{children}
		</Paragraph>
	);
};

describe("<Paragraph />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Paragraph")).toBe(true);
	});

	it("class prop \"large\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			large: true,
		});

		expect(wrapper.hasClass("Paragraph--Large")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
