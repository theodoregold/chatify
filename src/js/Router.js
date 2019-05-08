import React, {PureComponent} from "react";
import {Route, Switch} from "react-router-dom";
import {connect} from "react-redux";

import Auth from "./screens/Auth";
import Chat from "./screens/Chat";
import Code from "./screens/Code";

import Toast from "./sections/Toast";

import RouteRoot from "./components/RouteRoot";
import RoutePrivate from "./components/RoutePrivate";



const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};

@connect(mapStateToProps)
export default class Router extends PureComponent {
	constructor(props) {
		super(props);

		this.previous = props.location;
	}

	componentWillUpdate(next) {
		const {location} = this.props;

		const modal = (!location.state || !location.state.modal);

		// set previous location on modeal close
		if (next.history.action !== "POP" && modal) this.previous = this.props.location;
	}

	render() {
		const {location, user} = this.props;

		const modal = !!(
			location.state &&
			location.state.modal &&
			this.previous !== location
		);

		const className = ["Router"];

		if (modal) className.push("Router--Modal");

		return (
			<div className={className.join(" ")}>
				<Switch location={(modal ? this.previous : location)}>
					<Route exact path="/" component={RouteRoot} />

					<RoutePrivate exact path="/chat" component={Chat.List} access={user} />

					<Route exact path="/signup" component={Auth.Signup} />

					<Route component={Code.NotFound} />
				</Switch>

				<Toast />
			</div>
		);
	}
}
