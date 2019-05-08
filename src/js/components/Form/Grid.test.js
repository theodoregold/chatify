import React from "react";

import Grid from "./Grid";



const defaultProps = {
	id: "id",
	className: "Global__FormGrid",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(<Grid {...props}>{children}</Grid>);
};

describe("<Grid />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__FormGrid")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
