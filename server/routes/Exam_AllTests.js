const express = require("express");
const router = express.Router();
const { Exam_AllTests } = require("../controllers")

router.get("/:id", Exam_AllTests.getTestById)

module.exports = router