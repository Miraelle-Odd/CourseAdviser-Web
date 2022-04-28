const express = require("express");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const { Bot_Courses, Bot_CourseLevels } = require("../models")

const showCourseGeneralInfo = async(agent) => {
    const course = agent.parameters['engcourses'];
    if (course) {
        const result = await Bot_Courses.findOne({
            where: {
                course_name: course
            }
        }).then(async(res) => {
            const result2 = await Bot_CourseLevels.findAll({
                    where: {
                        course_id: res.dataValues.course_id
                    }
                })
                .then(ress => {
                    agent.add(new Card({
                        title: res.dataValues.course_name,
                        imageUrl: res.dataValues.course_image,
                        text: res.dataValues.course_description
                    }).setButton({ text: "Chi tiết", url: res.dataValues.course_page }))
                    agent.add(res.dataValues.course_description)
                    agent.add("Select one");
                    ress.map((item, index) => {
                        agent.add(new Suggestion(res.dataValues.course_name + " " + item.dataValues.level_name));
                    })
                })

        })
    }
}

const showCourseLevelInfo = async(agent) => {
    const course = agent.parameters['engcourses'];
    const level = agent.parameters['engcourselevels'];
    if (course && level) {
        const result = await Bot_CourseLevels.findOne({
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

module.exports = {
    showCourseGeneralInfo,
    showCourseLevelInfo
}