import {combineReducers} from 'redux';

import user from './user';
import toast from './toast';
import message from './message';
import chat from './chat';



const rootReducer = combineReducers({
	user,
	toast,
	message,
	chat,
});

export default (state, action) => {
	// logout
	if (action.type === "AUTH_LOGOUT") {
		state = undefined;
	}

	return rootReducer(state, action);
};
