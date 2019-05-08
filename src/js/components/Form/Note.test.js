import React from "react";

import Note from "./Note";



const defaultProps = {
	id: "id",
	className: "Global__FormNote",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(<Note {...props}>{children}</Note>);
};

describe("<Note />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__FormNote")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
