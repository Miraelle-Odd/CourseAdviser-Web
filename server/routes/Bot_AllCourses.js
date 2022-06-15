const express = require("express");
const router = express.Router();
const { Bot_Courses } = require("../controllers")

router.get("/get-all-courses/:sortField/:sortOrder/:search/:page", Bot_Courses.getAllCourses)
router.get("/get-count/:search", Bot_Courses.getCount)
router.post("/get-course-by-id", Bot_Courses.getCourseById)
router.post("/update-course-by-id", Bot_Courses.updateCourseById)
router.post("/create-course", Bot_Courses.createCourse)
router.get("/get-all-course-name/", Bot_Courses.getAllCourseName)

module.exports = router