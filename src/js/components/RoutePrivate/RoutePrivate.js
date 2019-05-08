import React from "react";
import {Route, Redirect} from "react-router";



const RoutePrivate = ({component: Component, access, ...rest}) => {
	const user = access;

	const render = (props) => {
		if (user) {
			return (
				<Component {...props} />
			);
		}

		return (
			<Redirect
				to={{
					pathname: "/signup",
					state: {
						from: props.location,
						redirect: true,
					},
				}}
			/>
		);
	};

	return (
		<Route
			{...rest}
			render={render}
		/>
	);
};

export default RoutePrivate;
