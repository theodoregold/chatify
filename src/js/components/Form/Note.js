import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Note.scss";



const FormNote = (props) => {
	const className = style.className("FormNote", props.className);

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

FormNote.propTypes = {
	className: PropTypes.string,

	children: PropTypes.any,
};



export default FormNote;
