import React from "react";

import Input from "./Input";



const defaultProps = {
	label: "Label",
	name: "title",
	value: "Value",
	className: "Global__Input",
};

const setup = (props = defaultProps) => {
	return shallow(<Input {...props} />);
};

describe("<Input />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Input")).toBe(true);
	});

	it("contains label with for", () => {
		const wrapper = setup();

		const label = wrapper.find("label");

		expect(label.prop("htmlFor")).toEqual(defaultProps.name);
		expect(label.text()).toEqual(defaultProps.label);
	});

	it("contains input with name", () => {
		const wrapper = setup();

		expect(wrapper.find("input").prop("name")).toEqual(defaultProps.name);
	});

	it("contains input with value", () => {
		const wrapper = setup();

		expect(wrapper.find("input").prop("value")).toEqual(defaultProps.value);
	});

	it("contains errors and error class is added", () => {
		const errors = ["Error text"];

		const wrapper = setup({
			...defaultProps,
			errors,
		});

		expect(wrapper.hasClass("Input--Invalid")).toBe(true);
		expect(wrapper.find(".Input__Errors").text()).toEqual(errors[0]);
	});

	it("onChange()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onChange: spy,
		});

		const input = wrapper.find("input");

		const value = "Changed value";

		input.simulate("change", {
			target: {
				name: defaultProps.name,
				value,
			}
		});

		expect(spy.mock.calls.length).toEqual(1);
	});

	it("onShow()", () => {
		const spy = jest.fn();

		const props = {
			...defaultProps,
			onShow: spy,
		};

		const wrapper = mount(<Input {...props} />);
		const show = wrapper.find(".Input__Show");

		expect(show.exists()).toBe(true);

		show.simulate("mousedown");
		show.simulate("click");

		expect(spy.mock.calls.length).toEqual(1);
		expect(show.matchesElement(document.activeElement)).toBe(false);
	});
});
