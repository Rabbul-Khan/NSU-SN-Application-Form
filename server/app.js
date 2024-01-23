// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");
const mongoose = require("mongoose");

const app = express();

// Connect to MongoDB
mongoose
	.connect(
		"mongodb+srv://navidalvi001:databasepassword@cluster.watrzqu.mongodb.net/?retryWrites=true&w=majority",
	)
	.then(console.log("Mongoose Connected"));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", routes);

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Service is running on port ${PORT}`);
});
