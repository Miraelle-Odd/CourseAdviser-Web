const express = require("express");
const router = express.Router();
const { Bot_CourseLevels } = require("../controllers")

router.get("/get-all-courses/:sortField/:sortOrder/:search/:page", Bot_CourseLevels.getAllLevels)
router.get("/get-count/:search", Bot_CourseLevels.getCount)
router.post("/get-level-by-id", Bot_CourseLevels.getLevelById)
router.post("/update-level-by-id", Bot_CourseLevels.updateLevelById)
router.post("/create-level", Bot_CourseLevels.createLevel)

module.exports = router