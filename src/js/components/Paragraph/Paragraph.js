import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Paragraph.scss";



const Paragraph = (props) => {
	const className = style.className("Paragraph", props.className);

	if (props.large) className.push("Paragraph--Large");

	return (
		<p className={className.join(" ")}>
			{props.children}
		</p>
	);
};

Paragraph.propTypes = {
	className: PropTypes.string,

	large: PropTypes.bool,

	children: PropTypes.any.isRequired,
};



export default memo(Paragraph);
