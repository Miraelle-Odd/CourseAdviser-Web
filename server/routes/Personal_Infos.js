const express = require("express");
const router = express.Router();
const { Personal_Infos } = require("../controllers")

router.get("/:id", Personal_Infos.getById)

module.exports = router