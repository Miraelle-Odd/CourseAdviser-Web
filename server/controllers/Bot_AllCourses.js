const { Bot_Courses, sequelize } = require("../models");

const getAllCourses = async(req, res) => {
    try {
        var page = 0;
        if (req.params.page)
            page = req.params.page
        await Bot_Courses.findAll({
            limit: 8,
            offset: page * 8,
            order: [
                [req.params.sortField, req.params.sortOrder]
            ],
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