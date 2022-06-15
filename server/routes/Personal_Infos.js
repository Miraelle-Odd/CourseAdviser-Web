const express = require("express");
const router = express.Router();
const { Personal_Infos } = require("../controllers")

router.get("/:id", Personal_Infos.getById)
router.post("/update-avatar", Personal_Infos.updateAvatar)

module.exports = router