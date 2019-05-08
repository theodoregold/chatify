import React from "react";

import InputMessage from "./InputMessage";



const defaultProps = {
	label: "Label",
	name: "title",
	value: "Value",
	className: "Global__InputMessage",
};

const setup = (props = defaultProps) => {
	return shallow(<InputMessage {...props} />);
};

describe("<InputMessage />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__InputMessage")).toBe(true);
	});

	it("contains textarea with name", () => {
		const wrapper = setup();

		expect(wrapper.find("textarea").prop("name")).toEqual(defaultProps.name);
	});

	it("contains textarea with value", () => {
		const wrapper = setup();

		expect(wrapper.find("textarea").prop("value")).toEqual(defaultProps.value);
	});

	it("contains errors and error class is added", () => {
		const errors = ["Error text"];

		const wrapper = setup({
			...defaultProps,
			errors,
		});

		expect(wrapper.hasClass("InputMessage--Invalid")).toBe(true);
		expect(wrapper.find(".InputMessage__Errors").text()).toEqual(errors[0]);
	});

	it("onChange()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onChange: spy,
		});

		const textarea = wrapper.find("textarea");

		const value = "Changed value";

		textarea.simulate("change", {
			target: {
				name: defaultProps.name,
				value,
			}
		});

		expect(spy.mock.calls.length).toEqual(1);
	});
});
