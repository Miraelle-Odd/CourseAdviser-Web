const { Exam_Audios, sequelize } = require("../models");

const getAudioById = async(req, res) => {
    try {
        const result = await Exam_Audios.findOne({
            attributes: [
                "test_id",
                "audio_url"
            ],
            where: {
                test_id: 1
            }
        })
        res.send(result)
    } catch (e) {
        console.log(e)
    }
}
module.exports = {
    getAudioById
}