const express = require("express");
const router = express.Router();
const { Exam_Details } = require("../controllers")

router.get("/:id", Exam_Details.getTestDetailById)
router.get("/:id/:type", Exam_Details.getTestDetailById)
router.get("/answers/:id", Exam_Details.getTestAnswersById)

module.exports = router