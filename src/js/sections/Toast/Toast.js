import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import * as toastActions from "../../actions/toast";

import Toast from "../../components/Toast";

import "./Toast.scss";



const mapState = state => {
	return {
		toast: state.toast
	};
};

const mapDispatch = dispatch => {
	return {
		actions: {
			toast: bindActionCreators(toastActions, dispatch)
		}
	};
};

@connect(mapState, mapDispatch)
export default class ToastSection extends PureComponent {
	onRemove = (id) => {
		const {actions, onClick} = this.props;

		actions.toast.remove(id);

		if (onClick) this.props.onClick(id);
	};

	renderToast = (item) => {
		return (
			<Toast
				key={item.id}
				id={item.id}
				toast={item}
				type={item.type}
				hide={item.hide}
				className="ToastSection__Toast"
				onRemove={this.onRemove}
				actions={item.actions}
			/>
		);
	}

	render() {
		const {toast} = this.props;

		const content = toast.map(this.renderToast);

		return (
			<div className="ToastSection">
				{content}
			</div>
		);
	}
}

ToastSection.propTypes = {
	onClick: PropTypes.func,
};
