import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Panel.scss";



const Panel = (props) => {
	const className = style.className("Panel", props.className);

	switch (props.type) {
		case "success":
			className.push("Panel--Success");
			break;
		case "warning":
			className.push("Panel--Warning");
			break;
		case "error":
			className.push("Panel--Error");
			break;
		case "info":
			className.push("Panel--Info");
			break;
		default:
			break;
	}

	return (
		<div
			className={className.join(" ")}
		>
			{props.children}
		</div>
	);
};

Panel.propTypes = {
	className: PropTypes.string,

	type: PropTypes.string,

	children: PropTypes.any,
};



export default memo(Panel);
