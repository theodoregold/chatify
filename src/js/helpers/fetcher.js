import axios from "axios";

import sessionHelper from "../helpers/session";
import handlerHelper from "../helpers/handler";

import CONFIG from "../../../env";



const client = axios.create({
	baseURL: CONFIG.api,
});

client.interceptors.request.use(async (config) => {
	const session = await sessionHelper.get();

	if (session && session.accessToken) config.headers["Authorization"] = session.accessToken;

	return config;
}, (error) => {
	return Promise.reject(handlerHelper.format(error));
});

client.interceptors.response.use((response) => {
	return response;
}, (error) => {
	const handle = error.response || error.request;

	return Promise.reject(handlerHelper.format(handle));
});



export default client;
