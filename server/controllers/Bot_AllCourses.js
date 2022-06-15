const { Bot_Courses } = require("../models");
const { Op } = require("sequelize");

const getAllCourses = async(req, res) => {
    try {

        var page = 0;
        if (req.params.page)
            page = req.params.page
        if (req.params.search == "all")
            await Bot_Courses.findAll({
                limit: 8,
                offset: page * 8,
                order: [
                    [req.params.sortField, req.params.sortOrder]
                ],
            }).then((result) => {
                res.send(result)
            })
        else
            await Bot_Courses.findAll({
                where: {
                    course_name: {
                        [Op.substring]: req.params.search
                    }
                },
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

const getAllCourseName = async(req, res) => {
    try {
        await Bot_Courses.findAll({
            attributes: ['course_id', 'course_name']
        }).then(result => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

const getCount = async(req, res) => {
    const result = await Bot_Courses.count({
        where: {
            course_name: {
                [Op.substring]: req.params.search
            }
        },
    });
    res.send(result.toString());
}

const getCourseById = async(req, res) => {
    try {
        await Bot_Courses.findOne({
            where: {
                course_id: req.body.id
            },
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

const updateCourseById = async(req, res) => {
    try {
        await Bot_Courses.update({
            course_name: req.body.course_name,
            course_image: req.body.course_image,
            course_page: req.body.course_page,
            course_description: req.body.course_description,
            special_support: req.body.special_support,
        }, {
            where: {
                course_id: req.body.id
            },
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

const createCourse = async(req, res) => {
    try {
        await Bot_Courses.create({
            course_name: req.body.course_name,
            course_image: req.body.course_image,
            course_page: req.body.course_page,
            course_description: req.body.course_description,
            special_support: req.body.special_support,
            course_status: "enabled"
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAllCourses,
    getCount,
    getCourseById,
    updateCourseById,
    createCourse,
    getAllCourseName
}