const Service = require("../services/Service");

const Controller = {
	formSubmit: async (req, res) => {
		try {
			const { name, email, contact, startupName, domain } = req.body;
			const applicant = await Service.formSubmit(
				name,
				email,
				contact,
				startupName,
				domain,
			);
			res.status(201).json({ applicant });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	},
};

module.exports = Controller;
