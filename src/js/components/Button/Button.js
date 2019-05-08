import React, {memo} from "react";
import PropTypes from "prop-types";

import style from "../../helpers/style";

import Loader from "../Loader";

import "./Button.scss";



const Button = (props) => {
	const className = style.className("Button", props.className);

	if (props.margin) className.push("Button--Margin");
	if (props.disabled || props.loader) className.push("Button--Disabled");

	if (props.ghost) className.push("Button--Ghost");
	if (props.danger) className.push("Button--Danger");
	if (props.secondary) className.push("Button--Secondary");
	if (props.light) className.push("Button--Light");
	if (props.plain) className.push("Button--Plain");
	if (props.solid) className.push("Button--Solid");

	if (props.auto) className.push("Button--Auto");
	if (props.tiny) className.push("Button--Tiny");
	if (props.small) className.push("Button--Small");
	if (props.large) className.push("Button--Large");

	if (props.loader) className.push("Button--Loading");

	const content = (
		<span className="Button__Content">
			{props.children}
		</span>
	);

	switch (props.tag) {
		case "a":
			return (
				<a
					className={className.join(" ")}
					href={props.url}
					external={external}
					onClick={props.onClick}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					onMouseUp={props.onMouseUp}
					disabled={props.disabled || props.loader}
					aria-label={props.ariaLabel}
				>
					{content}

					{
						props.loader &&
						<Loader
							className="Button__Loader"
							small
						/>
					}
				</a>
			);
		case "div":
			return (
				<div
					className={className.join(" ")}
					onClick={props.onClick}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					onMouseUp={props.onMouseUp}
					disabled={props.disabled || props.loader}
					role={(props.loader ? "alert" : undefined)}
					aria-busy={(props.loader ? true : undefined)}
					aria-label={props.ariaLabel}
					tabIndex="-1"
				>
					{content}

					{
						props.loader &&
						<Loader
							className="Button__Loader"
							small
						/>
					}
				</div>
			);
		case "button":
		default:
			return (
				<button
					form={props.form}
					type={props.type}
					value={props.value}
					className={className.join(" ")}
					onClick={props.onClick}
					onFocus={props.onFocus}
					onBlur={props.onBlur}
					onMouseUp={props.onMouseUp}
					disabled={props.disabled || props.loader}
					role={(props.loader ? "alert" : undefined)}
					aria-busy={(props.loader ? true : undefined)}
					aria-label={props.ariaLabel}
				>
					{content}

					{
						props.loader &&
						<Loader
							className="Button__Loader"
							small
						/>
					}
				</button>
			);
	}
};

Button.propTypes = {
	className: PropTypes.string,

	type: PropTypes.string,
	tag: PropTypes.string,
	value: PropTypes.string,
	ariaLabel: PropTypes.string,

	form: PropTypes.string,

	margin: PropTypes.bool,
	plain: PropTypes.bool,
	ghost: PropTypes.bool,
	secondary: PropTypes.bool,
	tiny: PropTypes.bool,
	small: PropTypes.bool,

	disabled: PropTypes.bool,
	loader: PropTypes.bool,
	url: PropTypes.bool,

	onClick: PropTypes.func,
	onBlur: PropTypes.func,
	onFocus: PropTypes.func,
	onMouseUp: PropTypes.func,

	children: PropTypes.any,
};

export default memo(Button);
