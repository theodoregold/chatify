import React from "react";

import Button from "./Button";




const defaultProps = {};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Button {...props}>{children}</Button>
	);
};

describe("<Button />", () => {
	it("classname is added", () => {
		const wrapper = setup({
			className: "Global__Button",
		});

		expect(wrapper.hasClass("Global__Button")).toBe(true);
	});

	it("class prop \"auto\", \"tiny\", \"small\", \"large\" is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Button--Auto")).toBe(false);
		expect(wrapper.hasClass("Button--Tiny")).toBe(false);
		expect(wrapper.hasClass("Button--Small")).toBe(false);
		expect(wrapper.hasClass("Button--Large")).toBe(false);

		wrapper.setProps({
			auto: true,
			tiny: true,
			small: true,
			large: true,
		});

		expect(wrapper.hasClass("Button--Auto")).toBe(true);
		expect(wrapper.hasClass("Button--Tiny")).toBe(true);
		expect(wrapper.hasClass("Button--Small")).toBe(true);
		expect(wrapper.hasClass("Button--Large")).toBe(true);
	});

	it("loader is displayed", () => {
		const wrapper = setup({
			loader: true,
		});

		expect(wrapper.find(".Button__Loader").exists()).toBe(true);
	});

	it("prop disabled", () => {
		const wrapper = setup({
			loader: true,
		});

		expect(wrapper.props("disabled")).toBeTruthy();
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.find(".Button__Content").text()).toEqual(children);
	});

	it("onClick()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			onClick: spy,
		});

		wrapper.simulate("click");

		expect(spy.mock.calls.length).toEqual(1);
	});
});
