import React from "react";

import Container from "./Container";



const defaultProps = {
	className: "Global__Container",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Container {...props}>
			{children}
		</Container>
	);
};

describe("<Container />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Container")).toBe(true);
	});

	it("class prop \"tiny\", \"small\", \"medium\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			tiny: true,
			small: true,
			medium: true,
		});

		expect(wrapper.hasClass("Container--Tiny")).toBe(true);
		expect(wrapper.hasClass("Container--Small")).toBe(true);
		expect(wrapper.hasClass("Container--Medium")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.children().text()).toEqual(children);
	});
});
