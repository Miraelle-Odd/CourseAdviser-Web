const express = require("express");
const router = express.Router();
const { Requests } = require("../controllers")

router.post("/send-request", Requests.sendRequest)
router.get("/count", Requests.getCountAll)
router.get("/count-active", Requests.getActiveCountAll)
router.get("/count-inactive", Requests.getInactiveCountAll)
router.get("/:page", Requests.getItemPaging)
router.get("/get-list/:category/:sortField/:sortOrder/:search/:page", Requests.getListQAByMainSubject)
router.get("/get-request/:id", Requests.getRequestById)
router.post("/update-status/:id/:status", Requests.updateStatus)
router.post("/post-request", Requests.updateRequest)
router.get("/get-counts/:category/:search", Requests.getCountBySearch)
router.post("/get-counts-chart/:groupBy", Requests.getCountsForChart)
router.get("/get-counts-chart-by-time/:year", Requests.getCountsByTimeForChart)
router.get("/get-counts-chart-by-time/:year/:filterField/:filterValue", Requests.getCountsByTimeForChart)

module.exports = router