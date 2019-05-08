import {createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";

import performance from "../helpers/performance";

import storage from "../services/storage";
import reducers from "../reducers";



const persisted = storage.get("store") || undefined;

const composeEnhancers =
	(typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
	|| compose;

const store = createStore(
	reducers,
	persisted,
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => {
	// const state = store.getState();

	store.subscribe(performance.debounce(() => {
		const state = {
			...store.getState(),
		};

		// toasts by nature are temporary
		delete state.toast;

		storage.set("store", state);
	}, 500));
});

export default store;
