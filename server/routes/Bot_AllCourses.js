const express = require("express");
const router = express.Router();
const { Bot_Courses } = require("../controllers")

router.get("/get-all-courses/:page", Bot_Courses.getAllCourses)
router.get("/get-count", Bot_Courses.getCount)

module.exports = router