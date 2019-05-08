import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Banner.scss";



const Banner = (props) => {
	const className = style.className("Banner", props.className);

	switch (props.type) {
		case "success":
			className.push("Banner--Success");
			break;
		case "warning":
			className.push("Banner--Warning");
			break;
		case "error":
			className.push("Banner--Error");
			break;
		case "info":
			className.push("Banner--Info");
			break;
		default:
			break;
	}

	const content = props.messages.map((item, idx) => {
		return (
			<div
				key={idx}
				className="Banner__Message"
			>
				{typeof item === "object" ? item.message : item}
			</div>
		);
	});

	return (
		<div
			className={className.join(" ")}
		>
			{
				props.title &&
				<h4 className="Banner__Title">{props.title}</h4>
			}

			{content}
		</div>
	);
};

Banner.defaultProps = {
	messages: [],
};

Banner.propTypes = {
	className: PropTypes.string,

	type: PropTypes.string,
	messages: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	])),
};



export default memo(Banner);
