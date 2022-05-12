const express = require("express");
const router = express.Router();
const { Bot_CourseLevels } = require("../controllers")

router.get("/get-all-courses/:page", Bot_CourseLevels.getAllLevels)
router.get("/get-count", Bot_CourseLevels.getCount)

module.exports = router