const express = require("express");
const router = express.Router();
const { Bot_Recommenders } = require("../controllers")

router.get("/image-detail/:levelId/:specialId", Bot_Recommenders.getRecommendCourses)
module.exports = router