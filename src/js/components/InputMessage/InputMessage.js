import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import "./InputMessage.scss";



const InputMessage = (props) => {
	const className = style.className("InputMessage", props.className);

	if (props.errors) className.push("InputMessage--Invalid");

	return (
		<div className={className.join(" ")}>
			<div
				className="InputMessage__Wrap"
			>
				<textarea
					id={props.name}
					className="InputMessage__Textarea"
					onChange={e => props.onChange(e.target.value, props.name, e)}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					name={props.name}
					value={(props.disabled ? "" : props.value)}
					autoComplete="off"
					autoFocus={props.autoFocus}
					placeholder={(props.disabled ? "" : props.placeholder)}
					disabled={props.disabled}
				/>
			</div>

			{
				props.errors && props.errors.length > 0 &&
				<div className="InputMessage__Errors">
					{
						typeof props.errors[0] === "string" &&
						<div>{props.errors[0]}</div>
					}

					{
						typeof props.errors[0] === "object" &&
						<div>{props.errors[0].message}</div>
					}
				</div>
			}

			{props.children}
		</div>
	);
};

InputMessage.propTypes = {
	className: PropTypes.string,

	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	autoFocus: PropTypes.bool,

	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,

	errors: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	])),

	children: PropTypes.any,
};



export default InputMessage;

