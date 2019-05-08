import React from "react";

import CONFIG from "../../../../env";

import Screen from "./Screen";



const defaultProps = {
	className: "Global__Screen",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Screen {...props}>
			{children}
		</Screen>
	);
};

describe("<Screen />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Screen")).toBe(true);
	});

	it("changes and updates title", () => {
		document.title = "";

		const wrapper = setup();

		expect(document.title).toEqual(CONFIG.name);

		const props = {
			title: "Page",
		};
		const title = `Page - ${CONFIG.name}`;

		wrapper.setProps(props);
		wrapper.update();

		expect(document.title).toEqual(title);

		wrapper.setProps(props);
		wrapper.update();

		expect(document.title).toEqual(title);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.text()).toEqual(children);
	});
});
