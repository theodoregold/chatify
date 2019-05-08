import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Wrap.scss";



const Wrap = (props) => {
	const className = style.className("Wrap", props.className);

	return (
		<div
			className={className.join(" ")}
		>
			{props.children}
		</div>
	);
};

Wrap.propTypes = {
	className: PropTypes.string,

	children: PropTypes.any,
};



export default memo(Wrap);
