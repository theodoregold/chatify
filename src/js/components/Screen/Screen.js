import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import CONFIG from "../../../../env";

import style from "../../helpers/style";

import "./Screen.scss";



export default class Screen extends PureComponent {
	componentDidMount() {
		this.updateTitle(this.props.title);
	}

	componentDidUpdate() {
		this.updateTitle(this.props.title);
	}

	updateTitle = (title) => {
		const nextTitle = title ? (title + " - " +  CONFIG.name) : CONFIG.name;

		if (nextTitle !== document.title) document.title = nextTitle;
	}

	render() {
		const className = style.className("Screen", this.props.className);

		return (
			<div
				className={className.join(" ")}
				onClick={this.props.onClick}
				role="button"
				tabIndex={-1}
			>
				<div className="Screen__Wrap">{this.props.children}</div>
			</div>
		);
	}
}

Screen.propTypes = {
	className: PropTypes.string,

	title: PropTypes.string,

	children: PropTypes.any,

	onClick: PropTypes.func,
};
