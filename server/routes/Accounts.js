const express = require("express");
const router = express.Router();
const { Accounts } = require("../controllers")

router.post("/login", Accounts.logIn)
router.post("/findOneUsername", Accounts.findAccountByUsername)
router.post("/findOneEmail", Accounts.findAccountByEmail)
router.post("/set-token", Accounts.setAccountToken)
router.post("/token-activated", Accounts.removeAccountToken)
router.post("/update-password", Accounts.updatePassword)
router.post("/create", Accounts.createAccount)
router.post("/activate", Accounts.activateAccount)
router.post("/change-status", Accounts.changeStatus)

module.exports = router