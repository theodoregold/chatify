import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./Title.scss";



const Title = (props) => {
	const className = style.className("Title", props.className);

	if (props.large) className.push("Title--Large");

	return (
		<div className={className.join(" ")}>
			{props.pre && <h3 className="Title__Pre">{props.pre}</h3>}

			<h1 className="Title__Heading">{props.children}</h1>

			{props.post && <h3 className="Title__Post">{props.post}</h3>}
		</div>
	);
};

Title.propTypes = {
	children: PropTypes.any.isRequired,
	pre: PropTypes.string,
	post: PropTypes.string,
};



export default memo(Title);
