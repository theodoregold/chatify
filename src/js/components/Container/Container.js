import React, {memo} from 'react';
import PropTypes from "prop-types";

import style from "../../helpers/style";

import './Container.scss';



const Container = (props) => {
	const className = style.className("Container", props.className);

	if (props.tiny) className.push("Container--Tiny");
	if (props.small) className.push("Container--Small");
	if (props.medium) className.push("Container--Medium");

	return (
		<div className={className.join(" ")}>
			{props.children}
		</div>
	);
};

Container.propTypes = {
	className: PropTypes.string,

	tiny: PropTypes.bool,
	small: PropTypes.bool,
	medium: PropTypes.bool,

	children: PropTypes.any,
};



export default memo(Container);
