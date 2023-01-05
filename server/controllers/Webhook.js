const express = require("express");
const { Op } = require("sequelize");
const { Card, Suggestion } = require("dialogflow-fulfillment");
const { Bot_Courses, Bot_CourseLevels, Bot_CourseSpecials } = require("../models");
const e = require("express");

var adviseInfo = {}

const showCourseGeneralInfo = async(agent) => {
    const course = agent.parameters['engcourses'];
    const kidcourse = agent.parameters['kidcourse'];
    var searchedCourse = course;
    if (kidcourse)
        searchedCourse = kidcourse
    if (course || kidcourse) {
        await Bot_Courses.findOne({
            where: {
                course_name: searchedCourse
            }
        }).then(async(res) => {
            await Bot_CourseLevels.findAll({
                    where: {
                        course_id: res.dataValues.course_id,
                        level_status: "enabled"
                    }
                })
                .then(async(ress) => {
                    if (res.dataValues.course_status === "enabled") {
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
                        if (res.dataValues.special_support == 1)
                            await Bot_CourseSpecials.findAll({
                                where: {
                                    special_name: {
                                        [Op.ne]: "NORMAL"
                                    },
                                }
                            }).then(resss => {
                                resss.map((item, index) => {
                                    agent.add(new Suggestion(item.dataValues.special_name));
                                })
                            })
                    } else {
                        agent.add("Dịch vụ khóa học này hiện đã ngưng cung cấp tại trung tâm.")
                        agent.add("Bạn có thể tham khảo các khóa học khác hiện đang hoạt động tại trung tâm:")
                        await Bot_Courses.findAll({
                            where: {
                                course_status: "enabled"
                            }
                        }).then(resss => {
                            resss.map((item, index) => {
                                agent.add(new Suggestion(item.dataValues.course_name));
                            })
                        })
                    }

                })

        })
    }
}

const showCourseLevelInfo = async(agent) => {
    const course = agent.parameters['engcourses'];
    const kidcourse = agent.parameters['kidcourse'];
    const level = agent.parameters['engcourselevels'];
    var searchedCourse = course;
    if ((course || kidcourse) && level) {
        if (kidcourse)
            searchedCourse = kidcourse
        await Bot_CourseLevels.findOne({
                where: {
                    level_name: level,
                },
                include: {
                    model: Bot_Courses,
                    as: 'Bot_Course',
                    attributes: ['course_name'],
                    where: {
                        course_name: searchedCourse
                    }
                }
            })
            .then(res => {
                if (res.dataValues.level_status == "enabled")
                    agent.add(res.dataValues.level_description)
                else
                    agent.add("Chương trình này hiện đã dừng cung cấp tại trung tâm.")
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
            attributes: ['course_name'],
            where: {
                course_status: "enabled"
            }
        })
        .then(async(res) => {
            res.map((item, index) => {
                agent.add(new Suggestion(item.dataValues.course_name))
            })
        })
}

const askAge = async(agent) => {
    const kidCourse = agent.parameters['ekhoachobe'];
    if (kidCourse) {
        await Bot_Courses.findOne({
                attributes: ['course_status'],
                where: {
                    course_name: kidCourse
                }
            })
            .then(async(res) => {
                if (res.dataValues.course_status == "enabled") {
                    adviseInfo.course = kidCourse
                    agent.add("Oh! Vậy là bạn có hứng thú với khóa " + kidCourse + " của trung tâm bọn mình")
                    agent.add("Cho mình hỏi bé nhà bao nhiêu tuổi rồi nhỉ?")
                }
            })
    }
}

const askRequirement = async(agent) => {
    const course = agent.parameters['engcourses'];
    if (course) {
        await Bot_Courses.findOne({
                attributes: ['course_status'],
                where: {
                    course_name: course
                }
            })
            .then(async(res) => {
                if (res.dataValues.course_status == "enabled") {
                    adviseInfo.course = course
                    agent.add("Oh! Vậy là bạn có hứng thú với khóa " + course + " của trung tâm bọn mình")
                    if (course == "Luyện thi IELTS" || course == "Luyện thi TOEIC") {
                        agent.add("Hiện tại, khóa " + course + " của chúng tôi bắt buộc bạn phải có chứng chỉ hoặc đã thi thử tại trung tâm trước đó.")
                        agent.add("🤫 Không biết kết quả cao nhất mà bạn đã đạt được là bao nhiêu nhỉ ? 🤫")
                    }
                    if (course == "Tiếng Anh giao tiếp") {
                        agent.add("Tại Tiếng Anh giao tiếp, chúng tôi chuyên môn chính là giúp học viên trau dồi các kĩ năng tiếng Anh thực tế nhắm phát triển công việc, sự nghiệp.")
                        agent.add("Khóa hiện chia ra các lớp tương ứng đối với các kĩ năng tiếng Anh như :")
                        await Bot_CourseLevels.findAll({
                                attributes: ['level_name'],
                                where: {
                                    level_status: "enabled"
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
                            .then(async(res) => {
                                res.map((item, index) => {

                                    agent.add("+ " + item.dataValues.level_name)
                                })
                            })
                        agent.add("Không biết là bạn muốn cải thiện kĩ năng nào của bạn thân ạ? :")
                        agent.add(new Suggestion("Viết - Writing"))
                        agent.add(new Suggestion("Giao tiếp - Speaking"))
                        agent.add(new Suggestion("Cả hai"))
                    }
                }

            })
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
    var skill
    if (adviseInfo.course == "Luyện thi IELTS")
        guarantee = agent.parameters['reqielts']
    if (adviseInfo.course == "Luyện thi TOEIC")
        guarantee = agent.parameters['reqtoeic']
    if (adviseInfo.course == "Tiếng Anh giao tiếp")
        skill = agent.parameters['engadultskills'][0]
    if (guarantee || skill) {
        if (guarantee) {
            adviseInfo.guarantee = guarantee
            agent.add("Xác nhận, bạn đang ở mức khoảng" + adviseInfo.requirement + " và mong muốn đạt được tầm " + guarantee + " 🤗")
        }
        if (skill) {
            adviseInfo.skill = skill
            agent.add("Xác nhận, bạn muốn trau dồi " + adviseInfo.skill + " 🤗")
        }
        agent.add("Bạn dự định đầu tư lượng thời gian như thế nào cho việc học ? 🙄")
        agent.add(new Suggestion("Bình thường"))
        agent.add(new Suggestion("Cấp tốc"))
        agent.add(new Suggestion("Tập trung chuyên sâu"))
    }
}

const giveAdvises = async(agent) => {
    const time = agent.parameters['reqtime']
    if (time) {
        adviseInfo.courseLevel = null;
        agent.add("Mình tổng kết lại xíu nha")
        agent.add("Bạn đang có nhu cầu tham gia khóa " + adviseInfo.course + " của chúng mình.")
        agent.add("Khả năng của bạn đang ở mức " + adviseInfo.requirement + " và bạn mong muốn đạt được mức " + adviseInfo.guarantee + " 🤗")
        if (time == "ngắn")
            agent.add("Bên cạnh đó thời gian bạn tham gia học tập khá là eo hẹp")
        else
            agent.add("Bên cạnh đó thời gian bạn tham gia học tập khá là dư dả")

        await Bot_CourseLevels.findAll({
                attributes: ['level_id','level_name', 'basic_fee'],
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
                adviseInfo.time = 1;
                res.map((item, index) => {
                    if(adviseInfo.courseLevel == null)
                    {
                        adviseInfo.courseLevel = item.dataValues.level_id
                    }
                    agent.add("- " + adviseInfo.course + " " + item.dataValues.level_name)
                    temp += item.dataValues.basic_fee * 96
                })
                agent.add("Tổng học phí ước tính cần trả sẽ vào khoảng " + temp + "VND với khóa học kéo dài 96 buổi trong " + res.length * 12 + " tháng")
                if (time == "ngắn") {
                    adviseInfo.time = 2;
                    agent.add("Tuy nhiên, vì thời gian học của bạn eo hẹp nên mình đề xuất đăng kí chương trình Cấp tốc. Khi đó thì thời gian học của bạn sẽ giảm đi một nửa, tức là chỉ trong " + res.length * 6 + " tháng")
                    agent.add("Lưu ý : Chương trình này có hệ số học phí là 1.5. Tổng học phí ước tính với khóa học trên sẽ tính lại là " + temp * 1.5 + "VND")
                }
                if (time == "tập trung chuyên sâu") {
                    adviseInfo.time = 3;
                    agent.add("aaaaaaa " + res.length * 6 + " tháng")
                    agent.add("Lưu ý :" + temp * 2.0 + "VND")
                }
            })
        
            agent.add("Hidden:" + adviseInfo.courseLevel + adviseInfo.time);
    }
    adviseInfo = {}

}
const giveAdvisesKid = async(agent) => {
        const kidAge = agent.parameters['kidages']
        if (kidAge) {
            agent.add("Mình tổng kết lại xíu nha")
            agent.add("Bé nhà đang có nhu cầu tham gia khóa " + adviseInfo.course + " của chúng mình.")
            agent.add("Hiện tại thì em đang " + kidAge + " tuổi.")
            await Bot_CourseLevels.findOne({
                    attributes: ['level_name', 'basic_fee', 'min_age', 'max_age'],
                    where: {
                        [Op.and]: [{
                                min_age: {
                                    [Op.lte]: kidAge
                                }
                            },
                            {
                                max_age: {
                                    [Op.gt]: kidAge
                                }
                            }
                        ]
                    }
                })
                .then((res) => {
                    agent.add("Với độ tuổi của bé thì trung tâm chúng mình có khóa " +
                        res.dataValues.level_name + " dành cho các bé " +
                        res.dataValues.min_age + " - " + res.dataValues.max_age + " tuổi.")
                    agent.add("Học phí của toàn khóa là " + res.dataValues.basic_fee + " VNĐ.")
                })
        }
        adviseInfo = {}

    }
    //in progress
const giveAdvisesAdult = async(agent) => {
    const time = agent.parameters['reqtime']
    var skillQuery = {}
    if (time) {
        agent.add("Mình tổng kết lại xíu nha")
        agent.add("Bạn đang có nhu cầu tham gia khóa " + adviseInfo.course + " của chúng mình.")
        if (adviseInfo.skill.includes("Viết"))
            skillQuery = {
                level_name: {
                    [Op.like]: "ADVANCE WRITING"
                }
            }
        if (adviseInfo.skill.includes("Nói"))
            skillQuery = {
                level_name: {
                    [Op.like]: "SPEAKING FOR COMMUNITY"
                }
            }

        await Bot_CourseLevels.findAll({
            attributes: ['level_name', 'basic_fee'],
            where: skillQuery,
            include: {
                model: Bot_Courses,
                as: 'Bot_Course',
                attributes: ['course_name'],
                where: {
                    course_name: adviseInfo.course
                }
            }
        }).then((res) => {
            // console.log(res)
            agent.add("Với nhu cầu này, mình nghĩ các khóa học sau sẽ phù hợp với bạn:")
            var temp = 0
            res.map((item, index) => {
                // console.log(item.dataValues)
                agent.add("- Khóa " + adviseInfo.course + " - " + item.dataValues.level_name)
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
    giveAdvises,
    giveAdvisesAdult,
    askAge,
    giveAdvisesKid
}