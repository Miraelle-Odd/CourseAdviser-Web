const express = require("express");
const router = express.Router();
const { Q_and_as } = require("../controllers")


router.get("/count", Q_and_as.getCountAll)
router.get("/active/:type/:page/:search/:sortField/:sortOrder", Q_and_as.getItemPaging)
router.get("/get-count/:category", Q_and_as.getCountByMainSubject)
router.get("/get-active-count/:category", Q_and_as.getActiveCountByMainSubject)
router.get("/get-inactive-count/:category", Q_and_as.getInactiveCountByMainSubject)
router.get("/get-list/:category/:sortField/:sortOrder/:search/:page", Q_and_as.getListQAByMainSubject)
router.get("/get-qa/:id", Q_and_as.getQaById)
router.post("/update-status/:id/:status", Q_and_as.updateStatus)
router.post("/post-qa", Q_and_as.createOrUpdateQa)
router.get("/get-counts/:category/:search", Q_and_as.getCountBySearch)
router.post("/get-counts-chart/:groupBy", Q_and_as.getCountsForChart)
router.get("/get-counts-chart-by-time/:year", Q_and_as.getCountsByTimeForChart)
router.get("/get-counts-chart-by-time/:year/:filterField/:filterValue", Q_and_as.getCountsByTimeForChart)

module.exports = router