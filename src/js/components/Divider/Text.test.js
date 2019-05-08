import React from "react";

import Text from "./Text";



const defaultProps = {
	className: "Global__Text",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Text {...props}>
			{children}
		</Text>
	);
};

describe("<Text />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Text")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.children().text()).toBe(children);
	});
});
