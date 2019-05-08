import React from "react";

import Column from "./Column";



const defaultProps = {
	className: "Global__Column",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Column {...props}>
			{children}
		</Column>
	);
};

describe("<Column />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Column")).toBe(true);
	});

	it("class prop \"half\" is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Column--Half")).toBe(false);

		wrapper.setProps({
			...defaultProps,
			half: true,
		});

		expect(wrapper.hasClass("Column--Half")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
