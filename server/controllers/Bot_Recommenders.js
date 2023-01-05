const { Bot_Recommenders } = require("../models");
const { Op } = require("sequelize");

const getRecommendCourses = async (req, res) => {
    try {
        var recomendCourse = await Bot_Recommenders.findOne({
            attributes: ["image"],
            where: {
                level_id: req.params.levelId,
                special_id: req.params.specialId
            },
        })
        res.send(recomendCourse)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getRecommendCourses
}