const express = require("express");
const router = express.Router();
const { Exam_Audios } = require("../controllers")

router.get("/:testId", Exam_Audios.getAudioById)


module.exports = router