const express = require("express");
const { Op } = require("sequelize");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const { Bot_Courses, Bot_CourseLevels, Bot_CourseSpecials } = require("../models");

var adviseInfo = {}

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

const askCourse = async(agent) => {
    agent.add("Cám ơn bạn đã chọn dịch vụ tư vấn từ Bot. Để Bot đưa ra được gợi ý hợp lý nhất, làm phiền các bạn trả lời vài câu hỏi nhỏ nhé!")
    agent.add("Đầu tiên thì xin hỏi bạn có nhu cầu tham gia khóa nào dưới đây ạ?")
    await Bot_Courses.findAll({
            attributes: ['course_name']
        })
        .then(async(res) => {
            res.map((item, index) => {
                agent.add(new Suggestion(item.dataValues.course_name))
            })
        })
}

const askRequirement = async(agent) => {
    const course = agent.parameters['engcourses'];
    if (course) {
        adviseInfo.course = course
        agent.add("Oh! Vậy là bạn có hứng thú với khóa " + course + " của trung tâm bọn mình")
        if (course == "Luyện thi IELTS" || course == "Luyện thi TOEIC") {
            agent.add("Hiện tại, khóa " + course + " của chúng tôi bắt buộc bạn phải có chứng chỉ hoặc đã thi thử tại trung tâm trước đó.")
            agent.add("🤫 Không biết kết quả cao nhất mà bạn đã đạt được là bao nhiêu nhỉ ? 🤫")
        }
    }
}

const askGuarantee = async(agent) => {
    var requirement
    if (adviseInfo.course == "Luyện thi IELTS")
        requirement = agent.parameters['reqielts']
    if (adviseInfo.course == "Luyện thi TOEIC")
        requirement = agent.parameters['reqtoeic']
    if (requirement) {
        adviseInfo.requirement = requirement
        agent.add("Xác nhận, kết quả cao nhất trong " + adviseInfo.course + " của bạn từng đạt được vào tầm " + requirement + " 🤗")
        agent.add("🤔 Cho hỏi mục tiêu tiếp theo của bạn là bao nhiêu ? 🤔")
    }
}

const askGivenTime = async(agent) => {
    var guarantee
    if (adviseInfo.course == "Luyện thi IELTS")
        guarantee = agent.parameters['reqielts']
    if (adviseInfo.course == "Luyện thi TOEIC")
        guarantee = agent.parameters['reqtoeic']
    if (guarantee) {
        adviseInfo.guarantee = guarantee
        agent.add("Xác nhận, bạn đang ở mức khoảng" + adviseInfo.requirement + " và mong muốn đạt được tầm " + guarantee + " 🤗")
        agent.add("🙄 Cho hỏi lượng thời gian dự định bạn cho thế dành cho khóa học ? 🙄")
        agent.add(new Suggestion("Ngắn nhất"))
        agent.add(new Suggestion("Từ tốn dư dả"))
    }
}

const giveAdvises = async(agent) => {
    const time = agent.parameters['reqtime']
    if (time) {
        agent.add("Mình tổng kết lại xíu nha")
        agent.add("Bạn đang có nhu cầu tham gia khóa " + adviseInfo.course + " của chúng mình.")
        agent.add("Khả năng của bạn đang ở mức " + adviseInfo.requirement + " và bạn mong muốn đạt được mức " + adviseInfo.guarantee + " 🤗")
        if (time == "ngắn")
            agent.add("Bên cạnh đó thời gian bạn tham gia học tập khá là eo hẹp")
        else
            agent.add("Bên cạnh đó thời gian bạn tham gia học tập khá là dư dả")

        await Bot_CourseLevels.findAll({
                attributes: ['level_name', 'basic_fee'],
                where: {
                    [Op.or]: [{
                            [Op.and]: [{
                                    guarantee: {
                                        [Op.gt]: adviseInfo.guarantee
                                    }
                                },
                                {
                                    requirement: {
                                        [Op.lt]: adviseInfo.guarantee
                                    }
                                }
                            ]
                        },
                        {
                            [Op.and]: [{
                                    guarantee: {
                                        [Op.gt]: adviseInfo.requirement
                                    }
                                },
                                {
                                    requirement: {
                                        [Op.lt]: adviseInfo.requirement
                                    }
                                }
                            ]
                        },
                        {
                            [Op.and]: [{
                                    guarantee: {
                                        [Op.lt]: adviseInfo.guarantee
                                    }
                                },
                                {
                                    requirement: {
                                        [Op.gt]: adviseInfo.requirement
                                    }
                                }
                            ]
                        },
                    ]

                },
                include: {
                    model: Bot_Courses,
                    as: 'Bot_Course',
                    attributes: ['course_name'],
                    where: {
                        course_name: adviseInfo.course
                    }
                }
            })
            .then((res) => {
                agent.add("Các khóa bạn cần học sẽ là:")
                var temp = 0
                res.map((item, index) => {
                    agent.add("- " + adviseInfo.course + " " + item.dataValues.level_name)
                    temp += item.dataValues.basic_fee * 96
                })
                agent.add("Tổng học phí ước tính cần trả sẽ vào khoảng " + temp + "VND với khóa học kéo dài 96 buổi trong " + res.length * 12 + " tháng")
                if (time == "ngắn") {
                    agent.add("Tuy nhiên, vì thời gian học của bạn eo hẹp nên mình đề xuất đăng kí chương trình Cấp tốc. Khi đó thì thời gian học của bạn sẽ giảm đi một nửa, tức là chỉ trong " + res.length * 6 + " tháng")
                    agent.add("Lưu ý : Chương trình này có hệ số học phí là 1.5. Tổng học phí ước tính với khóa học trên sẽ tính lại là " + temp * 1.5 + "VND")
                }
            })
    }
    adviseInfo = {}

}

module.exports = {
    showCourseGeneralInfo,
    showCourseLevelInfo,
    showCourseSpecialInfo,
    askCourse,
    askRequirement,
    askGuarantee,
    askGivenTime,
    giveAdvises
}