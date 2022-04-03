const express = require("express");
const router = express.Router();
const { Posts } = require("../controllers")

router.get("/:type/top2", Posts.getTop2WithType)

module.exports = router