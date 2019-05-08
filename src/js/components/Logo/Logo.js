import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import style from "../../helpers/style";

import "./Logo.scss";

import ICON from "../../../svg/logo.svg";



const Logo = (props) => {
	const className = style.className("Logo", props.className);

	if (props.white) className.push("Logo--White");

	return (
		<Link
			to="/"
			className={className.join(" ")}
		>
			<div
				dangerouslySetInnerHTML={{__html: ICON}}
			/>
		</Link>
	);
};

Logo.propTypes = {
	className: PropTypes.string,

	white: PropTypes.bool,
};



export default Logo;
