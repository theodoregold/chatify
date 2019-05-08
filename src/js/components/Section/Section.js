import React, {memo} from "react";
import PropTypes from "prop-types";

import style from '../../helpers/style';

import "./Section.scss";



const Section = (props) => {
	const className = style.className("Section", props.className);

	if (props.center) className.push("Section--Center");

	if (props.small) className.push("Section--Small");
	if (props.large) className.push("Section--Large");

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

Section.propTypes = {
	className: PropTypes.string,

	center: PropTypes.bool,

	small: PropTypes.bool,
	large: PropTypes.bool,

	children: PropTypes.any,
};



export default memo(Section);
