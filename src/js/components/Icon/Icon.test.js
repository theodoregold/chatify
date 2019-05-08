import React from "react";

import Icon from "./Icon";



const setup = (props) => {
	const defaultProps = {
		className: "Global__Icon",
	};

	return shallow(
		<Icon {...(props || defaultProps)} />
	);
};

describe("<Icon />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Icon")).toBe(true);
	});
});
