import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import Button from "../Button";

import "./Empty.scss";



const Empty = (props) => {
	const className = style.className("Empty", props.className);

	return (
		<div className={className.join(" ")}>
			<div className="Empty__Title">{props.title}</div>

			<Button
				className="Empty__Button"
				onClick={props.onRefresh}
				plain
			>
				Refresh
			</Button>
		</div>
	);
};

Empty.propTypes = {
	className: PropTypes.string,

	title: PropTypes.string,

	onRefresh: PropTypes.func,
};


export default memo(Empty);
