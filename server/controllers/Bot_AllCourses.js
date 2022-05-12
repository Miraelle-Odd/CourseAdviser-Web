const { Bot_Courses, sequelize } = require("../models");

const getAllCourses = async(req, res) => {
    try {
        var page = 0;
        if (req.params.page)
            page = req.params.page
        await Bot_Courses.findAll({
            limit: 2,
            offset: page * 2,
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

const getCount = async(req, res) => {
    const result = await Bot_Courses.count();
    res.send(result.toString());
}

module.exports = {
    getAllCourses,
    getCount
}