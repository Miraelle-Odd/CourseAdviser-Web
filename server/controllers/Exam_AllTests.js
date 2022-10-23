const { Exam_AllTests, Exam_Audios, Exam_Details, sequelize } = require("../models");

const getTestById = async(req, res) => {
    try {
        const result = await Exam_AllTests.findAll({
            where: {
                test_id: req.params.id
            },
            include: {
                attributes: ['audio_url'],
                model: Exam_Audios,
                as: 'Exam_Audio'
            }
        })

        res.send(result)

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getTestById
}