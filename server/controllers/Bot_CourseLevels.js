const { Bot_Courses, Bot_CourseLevels } = require("../models");
const { Op } = require("sequelize");

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
        if (req.params.search == "all")
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
        else
            await Bot_CourseLevels.findAll({

                limit: 8,
                offset: page * 8,
                order: sort,
                include: {
                    model: Bot_Courses,
                    as: 'Bot_Course',
                    attributes: ['course_name'],
                    where: {
                        course_name: {
                            [Op.substring]: req.params.search
                        }
                    },
                }
            }).then((result) => {
                res.send(result)
            })
    } catch (error) {
        res.send(error)
    }
}

const getCount = async(req, res) => {
    const result = await Bot_CourseLevels.count({
        where: {
            level_name: {
                [Op.substring]: req.params.search
            }
        },
    });
    res.send(result.toString());
}

const getLevelById = async(req, res) => {
    try {
        await Bot_CourseLevels.findOne({
            where: {
                level_id: req.body.id
            },
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

const updateLevelById = async(req, res) => {
    try {
        await Bot_CourseLevels.update({
            level_name: req.body.level_name,
            level_description: req.body.level_description,
            requirement: req.body.requirement,
            guarantee: req.body.guarantee,
            min_age: req.body.min_age,
            max_age: req.body.max_age,
            basic_fee: req.body.basic_fee,
            fee_unit: req.body.fee_unit,
            course_id: req.body.course_id
        }, {
            where: {
                level_id: req.body.id
            },
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

const createLevel = async(req, res) => {
    try {
        await Bot_CourseLevels.create({
            level_name: req.body.level_name,
            level_description: req.body.level_description,
            requirement: req.body.requirement,
            guarantee: req.body.guarantee,
            min_age: req.body.min_age,
            max_age: req.body.max_age,
            basic_fee: req.body.basic_fee,
            fee_unit: req.body.fee_unit,
            course_id: req.body.course_id,
            level_status: "enabled"
        }).then((result) => {
            res.send(result)
        })
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getAllLevels,
    getCount,
    getLevelById,
    updateLevelById,
    createLevel
}