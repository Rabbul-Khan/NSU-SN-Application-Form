import React, { useState } from "react";
import axios from "axios";

const Form = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		contact: "",
		startupName: "",
		domain: "",
	});

	const handleSubmit = async (e) => {
		e.preventDefault();

		const { name, email, contact, startupName, domain } = formData;

		try {
			setFormData({
				name: e.target.elements.name.value,
				email: e.target.elements.email.value,
				contact: e.target.elements.contact.value,
				startupName: e.target.elements.startupName.value,
				domain: e.target.elements.domain.value,
			});

			const response = await axios.post(
				"http://localhost:3000/api/submit",
				formData,
			);

			if (response.status === 201) {
				console.log("Application Successful");
				console.log(
					"Form Data:",
					name,
					email,
					contact,
					startupName,
					domain,
				);
				console.log("API Response:", response.data);
			} else {
				console.error("Application failed");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Applicant's name</label>
			<input type="text" name="name" id="name" />
			<label htmlFor="email">Email address</label>
			<input type="email" name="email" id="email" />
			<label htmlFor="contact">Contact Number</label>
			<input type="number" name="contact" id="contact" />{" "}
			<label htmlFor="startupName">
				What is the name of your Startup?
			</label>
			<input type="text" name="startupName" id="startupName" />
			<p>Choose the Domain for your Startup:</p>
			<input type="radio" id="agri" name="domain" value="agri" />
			<label htmlFor="agri">Agriculture</label>
			<br />
			<input type="radio" id="food" name="domain" value="food" />
			<label htmlFor="food">Food Technology</label>
			<br /> <input type="radio" id="ecom" name="domain" value="ecom" />
			<label htmlFor="ecom">E-commerce</label>
			<br />
			<input type="submit" value="Submit" className="bg-red-300" />
		</form>
	);
};

export default Form;
