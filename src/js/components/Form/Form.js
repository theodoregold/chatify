import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import Wrap from "./Wrap";
import Group from "./Group";
import Note from "./Note";
import Grid from "./Grid";

import "./Form.scss";



const Form = (props) => {
	const className = style.className("Form", props.className);

	return (
		<form
			className={className.join(" ")}
			autoComplete="off"
			id={props.id}
			onSubmit={props.onSubmit}
			onKeyDown={props.onKeyDown}
		>
			{props.children}
		</form>
	);
};

Form.propTypes = {
	className: PropTypes.string,

	children: PropTypes.any,
	onSubmit: PropTypes.func,
	onKeyDown: PropTypes.func,
	id: PropTypes.string,
};

Form.Wrap = Wrap;
Form.Group = Group;
Form.Note = Note;
Form.Grid = Grid;



export default Form;
