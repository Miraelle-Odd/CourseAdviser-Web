const express = require("express");
const router = express.Router();
const { Exstudents } = require("../controllers");

router.get("/get-feedback", Exstudents.getAllFeedback)

module.exports = router