const Applicant = require("../models/Applicant");

const Services = {
	formSubmit: async (name, email, contact, startupName, domain) => {
		const applicant = new Applicant({
			name,
			email,
			contact,
			startupName,
			domain,
		});
		await applicant.save();
		return applicant;
	},
};

module.exports = Services;
