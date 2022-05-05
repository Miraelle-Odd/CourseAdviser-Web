const express = require("express");
const { Op } = require("sequelize");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const { Bot_Courses, Bot_CourseLevels, Bot_CourseSpecials } = require("../models");

const showCourseGeneralInfo = async(agent) => {
    const course = agent.parameters['engcourses'];
    if (course) {
        await Bot_Courses.findOne({
            where: {
                course_name: course
            }
        }).then(async(res) => {
            await Bot_CourseLevels.findAll({
                    where: {
                        course_id: res.dataValues.course_id
                    }
                })
                .then(async(ress) => {
                    agent.add(res.dataValues.course_description)
                    agent.add("Thông tin chi tiết xem tại:")
                    agent.add(new Card({
                        title: res.dataValues.course_name,
                        imageUrl: res.dataValues.course_image,
                        text: res.dataValues.course_description
                    }).setButton({ text: "Chi tiết", url: res.dataValues.course_page }))

                    agent.add("Tìm hiểu thêm:");
                    ress.map((item, index) => {
                        agent.add(new Suggestion(res.dataValues.course_name + " " + item.dataValues.level_name));
                    })
                    if (res.dataValues.course_name != "Tiếng Anh cho bé")
                        await Bot_CourseSpecials.findAll({
                            where: {
                                special_name: {
                                    [Op.ne]: "NORMAL"
                                }
                            }
                        }).then(resss => {
                            resss.map((item, index) => {
                                agent.add(new Suggestion(item.dataValues.special_name));
                            })
                        })
                })

        })
    }
}

const showCourseLevelInfo = async(agent) => {
    const course = agent.parameters['engcourses'];
    const level = agent.parameters['engcourselevels'];
    if (course && level) {
        await Bot_CourseLevels.findOne({
                where: {
                    level_name: level
                },
                include: {
                    model: Bot_Courses,
                    as: 'Bot_Course',
                    attributes: ['course_name'],
                    where: {
                        course_name: course
                    }
                }
            })
            .then(res => {
                agent.add(res.dataValues.level_description)
            })
    }
}

const showCourseSpecialInfo = async(agent) => {
    const special = agent.parameters['engcoursespecials'];
    if (special) {
        await Bot_CourseSpecials.findOne({
                where: {
                    special_name: special
                }
            })
            .then(res => {
                agent.add(res.dataValues.special_description)
            })
    }
}

module.exports = {
    showCourseGeneralInfo,
    showCourseLevelInfo,
    showCourseSpecialInfo
}