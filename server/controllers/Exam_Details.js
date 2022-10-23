const { Exam_AllTests, Exam_Audios, Exam_Details, sequelize } = require("../models");

const getTestDetailById = async(req, res) => {
    try {
        var query = {
            test_id: req.params.id
        }
        if (req.params.type)
            query = {
                test_id: req.params.id,
                type: req.params.type
            }
        const result = await Exam_Details.findAll({
            attributes: [
                "item_id",
                "test_id",
                "item_no",
                "title",
                "image",
                "question",
                "select_options"
            ],
            where: query
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

const getTestAnswersById = async(req, res) => {
    try {
        const result = await Exam_Details.findAll({
            attributes: [
                "item_id",
                "test_id",
                "answer"
            ],
            where: {
                test_id: req.params.id
            }
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getTestDetailById,
    getTestAnswersById
}