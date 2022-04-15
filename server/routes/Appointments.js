const express = require("express");
const router = express.Router();
const { Appointments } = require("../controllers")

router.post("/create", Appointments.madeAppointment)
router.get("/get", Appointments.getAppointments)

module.exports = router