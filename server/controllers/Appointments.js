const { Appointments } = require("../models");

const madeAppointment = async(req, res) => {
    try {
        const result = await Appointments.create({
            appoint_purpose: req.body.appointPurpose,
            concern: req.body.concern,
            appoint_time: req.body.appointTime,
            appoint_address: req.body.appointAddress,
            sender_name: req.body.senderName,
            sender_email: req.body.senderEmail,
            sender_phone: req.body.senderPhone,
        })
        res.send("Appointment created successfully")
    } catch (e) {
        res.send(e)
    }
}

const getAppointments = async(req, res) => {
    try {
        const result = await Appointments.findAll()
        res.send(result)
    } catch (e) {
        res.send(e)
    }
}

module.exports = {
    madeAppointment,
    getAppointments
}