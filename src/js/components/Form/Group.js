import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Group.scss";



const FormGroup = (props) => {
	const className = style.className("FormGroup", props.className);

	if (props.row) className.push("FormGroup--Row");
	if (props.small) className.push("FormGroup--Small");
	if (props.float) className.push("FormGroup--Float");

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

FormGroup.propTypes = {
	className: PropTypes.string,

	row: PropTypes.bool,
	small: PropTypes.bool,
	float: PropTypes.bool,

	children: PropTypes.any,
};



export default FormGroup;
