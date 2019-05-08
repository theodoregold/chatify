import React from "react";

import Panel from "./Panel";



const defaultProps = {
	className: "Global__Panel",
};

const children = "Children";

const setup = (props = defaultProps) => {
	return shallow(
		<Panel {...props}>
			{children}
		</Panel>
	);
};

describe("<Panel />", () => {
	it("classname is added", () => {
		const wrapper = setup();

		expect(wrapper.hasClass("Global__Panel")).toBe(true);
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

		expect(wrapperSuccess.hasClass("Panel--Success")).toBe(true);
		expect(wrapperWarning.hasClass("Panel--Warning")).toBe(true);
		expect(wrapperInfo.hasClass("Panel--Info")).toBe(true);
		expect(wrapperError.hasClass("Panel--Error")).toBe(true);
	});

	it("contains children", () => {
		const wrapper = setup();

		expect(wrapper.children().text()).toEqual(children);
	});
});
