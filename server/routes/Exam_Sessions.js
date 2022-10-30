const express = require("express");
const router = express.Router();
const { Exam_Sessions } = require("../controllers")

router.get("/create-session/:testType", Exam_Sessions.createExamSession)
router.get("/:token", Exam_Sessions.getExamSession)
router.post("/calculate/:token", Exam_Sessions.calculateScore)

module.exports = router