const express = require("express");
const router = express.Router();
const { Mail } = require("../controllers")

router.post("/appointment", Mail.sendAppointment)
router.post("/test-result/:token", Mail.sendTestResult)
router.post("/password-recovery", Mail.sendForgetPassword)
router.post("/account-activation", Mail.sendAccountActivation)

module.exports = router