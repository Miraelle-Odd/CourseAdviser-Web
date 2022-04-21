const express = require("express");
const router = express.Router();
const { Mail, Accounts } = require("../controllers")

router.post("/appointment", Mail.sendAppointment)
router.post("/password-recovery", Mail.sendForgetPassword)

module.exports = router