import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Icon.scss";



const Icon = (props) => {
	const svg = require("../../../svg/" + props.name + ".svg");

	const className = style.className("Icon", props.className);

	return (
		<div
			{...props}
			className={className.join(" ")}
			dangerouslySetInnerHTML={{__html: svg}}
		/>
	);
};

Icon.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
};



export default memo(Icon);
