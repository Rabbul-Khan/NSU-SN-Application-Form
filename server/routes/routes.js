const express = require("express");
const Controller = require("../controller/controller");
const router = express.Router();


router.post("/submit", Controller.formSubmit);

module.exports = router;
