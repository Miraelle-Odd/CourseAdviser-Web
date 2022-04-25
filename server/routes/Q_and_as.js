const express = require("express");
const router = express.Router();
const { Q_and_as } = require("../controllers")


router.get("/count", Q_and_as.getCountAll)
router.get("/:page", Q_and_as.getItemPaging)
router.get("/get-count/:category", Q_and_as.getCountByMainSubject)
router.get("/get-active-count/:category", Q_and_as.getActiveCountByMainSubject)
router.get("/get-inactive-count/:category", Q_and_as.getInactiveCountByMainSubject)
router.get("/get-list/:category", Q_and_as.getListQAByMainSubject)
router.get("/get-list/:category/:page", Q_and_as.getListQAByMainSubject)

module.exports = router