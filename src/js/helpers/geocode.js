export default {
	decode(address) {
		let place = {
			route: "",
			locality: "",
			country: "",
			post: "",
			street: "",
		};

		console.log(address);

		// iterate through address_component array
		address[0].address_components.forEach(item => {
			if (item.types[0] === "route") {
				place.route = item.long_name;
			}

			if (item.types[0] === "locality" || item.types[0] === "postal_town") {
				place.locality = item.long_name;
			}

			if (item.types[0] === "country") {
				place.country = item.long_name;
				place.countryCode = item.short_name;
			}

			if (item.types[0] === "postal_code") {
				place.post = item.long_name;
			}

			if (item.types[0] === "street_number") {
				place.street = item.long_name;
			}
		});

		return place;
	},

	autocomplete(data) {
		return data.map((item) => {
			return {
				title: item.description,
				value: item.place_id,
			};
		});
	}
};
