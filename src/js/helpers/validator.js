import validator from "validate.js";



validator.validators.presenceDependency = (value, options, key, attributes) => {
	const keys = Object.keys(options.attributes);

	let presence = false;

	for (let i = 0; i < keys.length; i++) {
		if (attributes[keys[i]] === options.attributes[keys[i]]) presence = true;
	}

	if (!presence || !validator.isEmpty(value)) return null;

	return options.message || "can't be blank";
};

export default {
	all(form, schema) {
		const cleanForm = {
			...form,
		};

		Object.keys(cleanForm).forEach((key) => {
			if (typeof cleanForm[key] === "string" && cleanForm[key].length === 0) delete cleanForm[key];
		});

		const result = validator.validate(cleanForm, schema);

		return result;
	},

	single(form, target, schema) {
		const cleanForm = {
			...form,
		};

		Object.keys(cleanForm).forEach((key) => {
			if (typeof cleanForm[key] === "string" && cleanForm[key].length === 0) delete cleanForm[key];
		});

		// part of schema
		const part = {
			[target]: {
				...schema[target],
			},
		};

		const result = validator.validate(cleanForm, part);

		if (!result) return [];

		return result[target];
	},
};
