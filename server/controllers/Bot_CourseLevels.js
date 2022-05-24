const { Bot_Courses, Bot_CourseLevels, sequelize } = require("../models");

const getAllLevels = async(req, res) => {
    try {
        var page = 0;
        var sort
        if (req.params.sortField == "course_name")
            sort = [
                [Bot_Courses, req.params.sortField, req.params.sortOrder],
                ['requirement', 'asc'],
                ['min_age', 'asc']
            ]
        else
            sort = [
                [req.params.sortField, req.params.sortOrder]
            ]
        if (req.params.page)
            page = req.params.page
        await Bot_CourseLevels.findAll({
            limit: 8,
            offset: page * 8,
            order: sort,
            include: {
                model: Bot_Courses,
                as: 'Bot_Course',
                attributes: ['course_name'],
            }
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

const getCount = async(req, res) => {
    const result = await Bot_CourseLevels.count();
    res.send(result.toString());
}

module.exports = {
    getAllLevels,
    getCount
}