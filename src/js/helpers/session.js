import storage from "../services/storage";



const get = () => {
	return storage.get("token");
};

const save = (data) => {
	if (data.token) storage.set("token", data.token);
};

const clear = () => {
	storage.remove("token");
};



export default {
	get,
	save,
	clear,
};

