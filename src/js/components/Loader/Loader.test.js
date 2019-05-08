import React from "react";

import Loader from "./Loader";



const defaultProps = {
	className: "Global__Loader",
};

const setup = (props = defaultProps) => {
	return shallow(
		<Loader {...props} />
	);
};

describe("<Loader />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Loader")).toBe(true);
	});

	it("class prop \"static\", \"dark\", \"small\", \"large\" is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Loader--Static")).toBe(false);
		expect(wrapper.hasClass("Loader--Dark")).toBe(false);
		expect(wrapper.hasClass("Loader--Small")).toBe(false);
		expect(wrapper.hasClass("Loader--Large")).toBe(false);

		wrapper.setProps({
			...defaultProps,
			static: true,
			dark: true,
			small: true,
			large: true,
		});

		expect(wrapper.hasClass("Loader--Static")).toBe(true);
		expect(wrapper.hasClass("Loader--Dark")).toBe(true);
		expect(wrapper.hasClass("Loader--Small")).toBe(true);
		expect(wrapper.hasClass("Loader--Large")).toBe(true);
	});
});
