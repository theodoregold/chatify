import React from "react";

import Image from "./Image";



const defaultProps = {
	src: "/image.jpg",
	alt: "Alt Title",
	className: "Global__Image",
};

const setup = (props = defaultProps) => {
	return mount(
		<Image {...props} />
	);
};

describe("<Image />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Image")).toBe(true);
	});

	it("class \"loaded\" is added on image load", () => {
		const wrapper = setup();
		const image = wrapper.find(".Image__Image");

		expect(wrapper.hasClass("Image--Loaded")).toBe(false);

		image.simulate("load");

		expect(wrapper.children().hasClass("Image--Loaded")).toBe(true);
	});

	it("class \"cached\" is added when image is aleady loaded on mount", () => {
		class LoadedImage extends Image {
			onRefOriginal = this.onRef;

			onRef = (img) => {
				Object.defineProperty(img, "complete", {
					value: true,
				});

				Object.defineProperty(img, "naturalHeight", {
					value: 100,
				});

				this.onRefOriginal(img);
			};
		}

		const wrapper = mount(<LoadedImage {...defaultProps} />);

		const image = wrapper.find(".Image__Image");

		expect(wrapper.hasClass("Image--Cached")).toBe(false);

		image.simulate("load");

		expect(wrapper.children().hasClass("Image--Cached")).toBe(true);
	});

	it("contains img element with src and alt", () => {
		const wrapper = setup();
		const image = wrapper.find(".Image__Image");

		expect(image.exists()).toBe(true);
		expect(image.prop("src")).toEqual(defaultProps.src);
		expect(image.prop("alt")).toEqual(defaultProps.alt);
	});

	it("onLoad()", () => {
		const spy = jest.fn();

		const wrapper = setup({
			...defaultProps,
			onLoad: spy,
		});

		wrapper.find(".Image__Image").simulate("load");

		expect(spy.mock.calls.length).toEqual(1);
	});
});
