import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import Text from './Text';

import "./Divider.scss";



const Divider = (props) => {
	const className = style.className("Divider", props.className);

	if (props.small) className.push("Divider--Small");
	if (props.form) className.push("Divider--Form");
	if (props.horizontal) className.push("Divider--Horizontal");

	return (
		<div className={className.join(" ")} />
	);
};

Divider.propTypes = {
	className: PropTypes.string,

	small: PropTypes.bool,
	form: PropTypes.bool,
	horizontal: PropTypes.bool,
};

Divider.Text = Text;

export default Divider;
