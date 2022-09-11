const express = require("express");
const router = express.Router();
const { Requests } = require("../controllers")

router.post("/send-request", Requests.sendRequest)
router.get("/count", Requests.getCountAll)
router.get("/:page", Requests.getItemPaging)
router.get("/get-list/:category/:sortField/:sortOrder/:search/:page", Requests.getListQAByMainSubject)

module.exports = router