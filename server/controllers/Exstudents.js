const { Exstudents, sequelize } = require("../models");

const getAllFeedback = async(req, res) => {
    try {
        const result = await Exstudents.findAll()
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getAllFeedback
}