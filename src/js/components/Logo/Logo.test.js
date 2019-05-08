import React from "react";

import Logo from "./Logo";



const defaultProps = {
	className: "Global__Logo",
};

const setup = (props = defaultProps) => {
	return shallow(
		<Logo {...props} />
	);
};

describe("<Logo />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Logo")).toBe(true);
	});

	it("class prop \"white\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			white: true,
		});

		expect(wrapper.hasClass("Logo--White")).toBe(true);
	});
});
