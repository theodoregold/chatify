import React from "react";

import Wrap from "./Wrap";



const defaultProps = {
	className: "Global__Wrap",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Wrap {...props}>
			{children}
		</Wrap>
	);
};

describe("<Wrap />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Wrap")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
