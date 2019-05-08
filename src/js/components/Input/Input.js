import React from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import Icon from "../Icon";

import "./Input.scss";



const onClear = (e) => {
	e.preventDefault();
};

const Input = (props) => {
	const className = style.className("Input", props.className);

	if (props.show) className.push("Input--Show");
	if (props.errors) className.push("Input--Invalid");

	return (
		<div className={className.join(" ")}>
			<div
				className="Input__Wrap"
			>
				{
					props.icon &&
					<div
						className="Input__Icon"
					>
						<Icon name={props.icon} />
					</div>
				}

				<input
					id={props.name}
					className="Input__Input"
					onChange={e => props.onChange(e.target.value, props.name, e)}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					name={props.name}
					value={props.value}
					type={(props.show ? "input" : props.type)}
					autoComplete="off"
					autoFocus={props.autoFocus}
					placeholder={props.placeholder}
					disabled={props.disabled}
				/>

				{
					((props.placeholder && props.value && props.value.length > 0) ||
					(props.label)) &&
					<label
						htmlFor={props.name}
						className="Input__Label"
					>
						{props.label || props.placeholder}
					</label>
				}

				{
					props.onShow &&
					<div
						type="button"
						tabIndex="-1"
						onClick={props.onShow}
						onMouseDown={onClear}
						className="Input__Show"
						role="button"
					>
						<Icon name="eye" />
					</div>
				}
			</div>

			{
				props.errors && props.errors.length > 0 &&
				<div className="Input__Errors">
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

Input.propTypes = {
	className: PropTypes.string,

	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	autoFocus: PropTypes.bool,
	type: PropTypes.string,
	icon: PropTypes.string,
	show: PropTypes.bool,

	errors: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	])),

	onShow: PropTypes.func,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,

	children: PropTypes.any,
};



export default Input;

