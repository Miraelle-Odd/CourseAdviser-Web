const express = require("express");
const router = express.Router();
const { Posts } = require("../controllers")

router.get("/:type/top2", Posts.getTop2WithType)
router.get("/:type/count", Posts.getCountAll)
router.get("/:type/count-active", Posts.getActiveCountAll)
router.get("/:type/count-inactive", Posts.getInactiveCountAll)
router.get("/:type", Posts.getItemPaging)
router.get("/post-detail/:id", Posts.getItemDetail)
router.get("/all/top5", Posts.getTop5All)
    // router.get("/get-list/:category", Posts.getListPostByCategory)
router.get("/get-list/:category/:sortField/:sortOrder/:search/:page", Posts.getListPostByCategory)
router.post("/update-post", Posts.updatePost)
router.post("/update-status/:id/:status", Posts.updateStatus)
router.get("/get-counts/:category/:search", Posts.getCountBySearch)
module.exports = router