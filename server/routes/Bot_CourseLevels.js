const express = require("express");
const router = express.Router();
const { Bot_CourseLevels } = require("../controllers")

router.get("/get-all-courses/:sortField/:sortOrder/:page", Bot_CourseLevels.getAllLevels)
router.get("/get-count", Bot_CourseLevels.getCount)
router.post("/get-level-by-id", Bot_CourseLevels.getLevelById)
router.post("/update-level-by-id", Bot_CourseLevels.updateLevelById)
router.post("/create-level", Bot_CourseLevels.createLevel)
router.post("/update-status/:id/:status", Bot_CourseLevels.updateStatus)

module.exports = router