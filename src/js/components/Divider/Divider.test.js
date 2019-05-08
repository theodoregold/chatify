import React from "react";

import Divider from "./Divider";



const defaultProps = {
	className: "Global__Divider",
};

const setup = (props = defaultProps) => {
	return shallow(
		<Divider {...props} />
	);
};

describe("<Divider />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Divider")).toBe(true);
	});

	it("class prop \"small\", \"form\", \"horizontal\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			small: true,
			form: true,
			horizontal: true,
		});

		expect(wrapper.find(".Divider").hasClass("Divider--Small")).toBe(true);
		expect(wrapper.find(".Divider").hasClass("Divider--Form")).toBe(true);
		expect(wrapper.find(".Divider").hasClass("Divider--Horizontal")).toBe(true);
	});
});
