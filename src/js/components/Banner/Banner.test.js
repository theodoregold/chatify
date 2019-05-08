import React from "react";

import Banner from "./Banner";



const defaultProps = {
	className: "Global__Banner",
	title: "Title",
	messages: ["Message"],
};

const setup = (props = defaultProps) => {
	return shallow(
		<Banner {...props} />
	);
};

describe("<Banner />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Banner")).toBe(true);
	});

	it("class prop \"type\" is added", () => {
		const wrapperSuccess = setup({
			...defaultProps,
			type: "success",
		});
		const wrapperWarning = setup({
			...defaultProps,
			type: "warning",
		});
		const wrapperInfo = setup({
			...defaultProps,
			type: "info",
		});
		const wrapperError = setup({
			...defaultProps,
			type: "error",
		});

		expect(wrapperSuccess.hasClass("Banner--Success")).toBe(true);
		expect(wrapperWarning.hasClass("Banner--Warning")).toBe(true);
		expect(wrapperInfo.hasClass("Banner--Info")).toBe(true);
		expect(wrapperError.hasClass("Banner--Error")).toBe(true);
	});

	it("contains title", () => {
		const wrapper = setup();

		expect(wrapper.find(".Banner__Title").text()).toEqual(defaultProps.title);
	});

	describe("contains messages", () => {
		it("string message", () => {
			const wrapper = setup();

			expect(wrapper.find(".Banner__Message").text()).toEqual(defaultProps.messages[0]);
		});

		it("object message", () => {
			const props = {
				...defaultProps,
			};

			props.messages = [{message: "Message"}];

			const wrapper = setup(props);

			expect(wrapper.find(".Banner__Message").text()).toEqual(props.messages[0].message);
		});
	});
});
