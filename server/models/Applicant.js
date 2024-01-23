const mongoose = require("mongoose");

const applicantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	contact: { type: String, required: true },
	startupName: { type: String, required: true },
	domain: { type: String, required: true },
});

const Applicant = mongoose.model("Applicant", applicantSchema);

module.exports = Applicant;
