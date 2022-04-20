const express = require("express");
const router = express.Router();
const { Posts } = require("../controllers")

router.get("/:type/top2", Posts.getTop2WithType)
router.get("/:type/count", Posts.getCountAll)
router.get("/:type", Posts.getItemPaging)
router.get("/post-detail/:id", Posts.getItemDetail)
router.get("/all/top5", Posts.getTop5All)
module.exports = router