import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Grid.scss";



const FormGrid = (props) => {
	const className = style.className("FormGrid", props.className);

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

FormGrid.propTypes = {
	className: PropTypes.string,

	children: PropTypes.any,
};



export default FormGrid;
