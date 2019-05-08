import React, {memo} from "react";
import PropTypes from "prop-types";

import style from '../../helpers/style';

import "./Column.scss";



const Column = (props) => {
	const className = style.className("Column", props.className);

	if (props.half) className.push("Column--Half");

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

Column.propTypes = {
	className: PropTypes.string,

	half: PropTypes.bool,

	children: PropTypes.any,
};



export default memo(Column);
