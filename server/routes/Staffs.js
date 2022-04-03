const express = require("express");
const router = express.Router();
const { Staffs } = require("../controllers")

router.get("/:type/top4", Staffs.getTop4WithType)

module.exports = router