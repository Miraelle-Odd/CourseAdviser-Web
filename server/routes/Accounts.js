const express = require("express");
const router = express.Router();
const { Accounts } = require("../controllers")

router.post("/login", Accounts.logIn)
router.post("/auth-verify", Accounts.verifyToken)


module.exports = router