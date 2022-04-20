const express = require("express");
const router = express.Router();
const { Posts } = require("../controllers")

router.get("/:type/top2", Posts.getTop2WithType)
router.get("/:type/count", Posts.getCountAll)
router.get("/:type", Posts.getItemPaging)
module.exports = router