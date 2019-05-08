import React, {memo} from 'react';
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Text.scss";



const DividerText = (props) => {
	const className = style.className("DividerText", props.className);

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

DividerText.propTypes = {
	className: PropTypes.string,

	children: PropTypes.any,
};


export default memo(DividerText);
