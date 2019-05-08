import React, {PureComponent} from "react";
import {hot} from 'react-hot-loader/root';
import {Provider} from "react-redux";
import {Router as BrowserRouter, Route as BrowserRoute} from "react-router-dom";

import history from "./services/history";

import store from './stores';

import Router from './Router';

import '../sass/style.scss';



class Root extends PureComponent {
	render() {
		return (
			<div className="Root">
				<Provider store={store}>
					<BrowserRouter history={history}>
						<BrowserRoute component={Router} />
					</BrowserRouter>
				</Provider>
			</div>
		);
	}
}

const RootWrap = () => {
	return (
		<Root />
	);
};

export default hot(RootWrap);
