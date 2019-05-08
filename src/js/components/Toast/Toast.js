import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import style from '../../helpers/style';

import Button from "../Button";

import "./Toast.scss";



export default class Toast extends PureComponent {
	componentDidMount = () => {
		this.updateHeight();
	}

	componentDidUpdate = () => {
		this.updateHeight();
	}

	updateHeight = () => {
		if (!this.toast || !this.wrap) return;

		const height = `${this.wrap.offsetHeight + 8}px`;

		if (this.toast.style.height !== height) this.toast.style.height = height;
	}

	onRef = (name) => (ref) => {
		this[name] = ref;
	}

	onRemove = () => {
		this.props.onRemove(this.props.toast.id);
	}

	renderAction = (item) => {
		return (
			<Button
				key={item.title}
				className="Toast__Action"
				onClick={item.function}
				plain
			>
				{item.title}
			</Button>
		);
	}

	render() {
		const className = style.className("Toast", this.props.className);

		const {toast, type, hide} = this.props;

		if (type === "success") className.push("Toast--Success");
		if (type === "error") className.push("Toast--Error");

		if (hide) className.push("Toast--Hide");

		const actions = (this.props.actions || []).map(this.renderAction);

		return (
			<div
				className={className.join(" ")}
				ref={this.onRef("toast")}
			>
				<div
					className="Toast__Wrap"
					ref={this.onRef("wrap")}
				>
					<div className="Toast__Body">
						<h5>{toast.title}</h5>

						{
							toast.body &&
							<p>{toast.body}</p>
						}
					</div>

					<div className="Toast__Divider">
						<Button
							key="Remove"
							className="Toast__Remove"
							onClick={this.onRemove}
							plain
						>
							Close
						</Button>

						{actions}
					</div>
				</div>
			</div>
		);
	}
}

Toast.propTypes = {
	className: PropTypes.string,

	type: PropTypes.string,

	toast: PropTypes.shape({
		id: PropTypes.number,
		type: PropTypes.string,
		title: PropTypes.string,
		body: PropTypes.string,
	}),

	actions: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string,
		function: PropTypes.func,
	})),

	hide: PropTypes.bool,

	onRemove: PropTypes.func,
};
