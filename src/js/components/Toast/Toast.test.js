import React from "react";

import Toast from "./Toast";



const defaultProps = {
	toast: {
		id: 0,
		title: "Title",
		body: "Body",
	},
	className: "Global__Toast",
};

const setup = (props = defaultProps) => {
	return shallow(
		<Toast {...props} />
	);
};

describe("<Toast />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Toast")).toBe(true);
	});

	it("class prop \"hide\" is added", () => {
		const wrapper = setup({
			...defaultProps,
			hide: true,
		});

		expect(wrapper.hasClass("Toast--Hide")).toBe(true);
	});

	it("class prop \"type\" is added", () => {
		const wrapperSuccess = setup({
			...defaultProps,
			type: "success",
		});
		const wrapperError = setup({
			...defaultProps,
			type: "error",
		});

		expect(wrapperSuccess.hasClass("Toast--Success")).toBe(true);
		expect(wrapperError.hasClass("Toast--Error")).toBe(true);
	});

	it("update toast height on mount and update", () => {
		const wrapper = mount(
			<Toast {...defaultProps} />
		);

		const dom = wrapper.children().getDOMNode();

		expect(dom.style.height).toEqual("8px");

		wrapper.setProps({
			toast: {
				...defaultProps.toast,
				title: "Title update",
			}
		});
		wrapper.update();

		expect(dom.style.height).toEqual("8px");

		// JSDOM doesn't play well with client height
		dom.style.height = "16px";
		wrapper.update();

		expect(dom.style.height).toEqual("16px");
	});

	it("contains title", () => {
		const wrapper = setup();

		expect(wrapper.find(".Toast__Body h5").text()).toEqual(defaultProps.toast.title);
	});

	it("contains messages", () => {
		const wrapper = setup();

		expect(wrapper.find(".Toast__Body p").text()).toEqual(defaultProps.toast.body);
	});

	it("contains remove button", () => {
		const wrapper = setup();

		expect(wrapper.find(".Toast__Remove").exists()).toBe(true);
	});

	it("onRemove()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onRemove: spy,
		});

		wrapper.find(".Toast__Remove").simulate("click");

		expect(spy.mock.calls.length).toEqual(1);
		expect(spy).toHaveBeenCalledWith(defaultProps.toast.id);
	});

	describe("actions", () => {
		it("contians button title", () => {
			const wrapper = setup({
				...defaultProps,
				actions: [{
					title: "Undo",
				}],
			});

			expect(wrapper.find(".Toast__Action").text()).toEqual("Undo");
		});

		it("onClick()", () => {
			const spy = jest.fn();

			const wrapper = setup({
				...defaultProps,
				actions: [{
					title: "Undo",
					function: spy,
				}],
			});

			wrapper.find(".Toast__Action").simulate("click");

			expect(spy.mock.calls.length).toEqual(1);
		});
	});
});

