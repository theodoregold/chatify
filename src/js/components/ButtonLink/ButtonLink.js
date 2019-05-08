import React, {memo} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import style from "../../helpers/style";

import "./ButtonLink.scss";



const ButtonLink = (props) => {
	const className = style.className("ButtonLink", props.className);

	if (props.tiny) className.push("ButtonLink--Tiny");
	if (props.small) className.push("ButtonLink--Small");
	if (props.round) className.push("ButtonLink--Round");

	return (
		<Link
			to={props.to}
			className={className.join(" ")}
		>
			{props.children}
		</Link>
	);
};

ButtonLink.propTypes = {
	className: PropTypes.string,

	to: PropTypes.any,
	children: PropTypes.any,

	small: PropTypes.bool,
	tiny: PropTypes.bool,
	round: PropTypes.bool,
};


export default memo(ButtonLink);
