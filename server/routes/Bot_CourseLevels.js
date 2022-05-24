const express = require("express");
const router = express.Router();
const { Bot_CourseLevels } = require("../controllers")

router.get("/get-all-courses/:sortField/:sortOrder/:page", Bot_CourseLevels.getAllLevels)
router.get("/get-count", Bot_CourseLevels.getCount)

module.exports = router