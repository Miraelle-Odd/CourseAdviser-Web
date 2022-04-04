const express = require("express");
const router = express.Router();
const { Staffs } = require("../controllers")

router.get("/type/:type/top4", Staffs.getTop4WithType);
router.get("/course/:course/top4", Staffs.getTop4WithCourse);

module.exports = router