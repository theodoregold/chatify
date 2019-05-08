import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Loader.scss";



const Loader = (props) => {
	const className = style.className("Loader", props.className);

	if (props.static) className.push("Loader--Static");
	if (props.dark) className.push("Loader--Dark");
	if (props.small) className.push("Loader--Small");
	if (props.large) className.push("Loader--Large");

	return (
		<div className={className.join(" ")} />
	);
};

Loader.propTypes = {
	className: PropTypes.string,

	small: PropTypes.bool,
	large: PropTypes.bool,
	dark: PropTypes.bool,
	static: PropTypes.bool,
	errors: PropTypes.bool,
};



export default memo(Loader);
