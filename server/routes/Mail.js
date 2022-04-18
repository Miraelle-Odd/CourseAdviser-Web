const express = require("express");
const router = express.Router();
const { Mail, Accounts } = require("../controllers")

router.post("/appointment", Mail.sendAppointment)

module.exports = router