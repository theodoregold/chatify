import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Wrap.scss";



const FormWrap = (props) => {
	const className = style.className("FormWrap", props.className);

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

FormWrap.propTypes = {
	className: PropTypes.string,

	children: PropTypes.any,
};



export default FormWrap;
