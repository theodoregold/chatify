import React from "react";

import ButtonLink from "./ButtonLink";



const defaultProps = {
	to: "/",
	className: "Global__ButtonLink",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<ButtonLink {...props}>
			{children}
		</ButtonLink>
	);
};

describe("<ButtonLink />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__ButtonLink")).toBe(true);
	});

	it("class prop \"tiny\", \"small\", \"round\" is added", () => {
		const wrapper = setup();

		expect(wrapper.find(".ButtonLink").hasClass("ButtonLink--Tiny")).toBe(false);
		expect(wrapper.find(".ButtonLink").hasClass("ButtonLink--Small")).toBe(false);
		expect(wrapper.find(".ButtonLink").hasClass("ButtonLink--Round")).toBe(false);

		wrapper.setProps({
			...defaultProps,
			tiny: true,
			small: true,
			round: true,
		});

		expect(wrapper.find(".ButtonLink").hasClass("ButtonLink--Tiny")).toBe(true);
		expect(wrapper.find(".ButtonLink").hasClass("ButtonLink--Small")).toBe(true);
		expect(wrapper.find(".ButtonLink").hasClass("ButtonLink--Round")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.children().text()).toEqual(children);
	});
});
