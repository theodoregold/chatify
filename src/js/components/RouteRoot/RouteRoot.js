import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";



const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

const REDIRECT = {
	pathname: "/signup",
};

@connect(mapStateToProps)
export default class RouteRoot extends Component {
	render() {
		const {user, car} = this.props;

		if (!user) {
			return (
				<Redirect to={REDIRECT} />
			);
		}

		return (
			<Redirect
				to={{
					pathname: "/chat",
				}}
			/>
		);
	}
}
