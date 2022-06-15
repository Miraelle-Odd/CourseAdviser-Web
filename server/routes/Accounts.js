const express = require("express");
const router = express.Router();
const { Accounts } = require("../controllers")

router.post("/login", Accounts.logIn)
router.get("/findOneId/:front/:id", Accounts.findAccountById)
router.post("/findOneUsername", Accounts.findAccountByUsername)
router.post("/findOneEmail", Accounts.findAccountByEmail)
router.post("/set-token", Accounts.setAccountToken)
router.post("/token-activated", Accounts.removeAccountToken)
router.post("/update-password", Accounts.updatePassword)
router.post("/create", Accounts.createAccount)
router.post("/activate", Accounts.activateAccount)
router.post("/change-status", Accounts.changeStatus)
router.get("/get-count/:position", Accounts.getCountByPosition)
router.get("/get-active-count/:position", Accounts.getActiveCountByPosition)
router.get("/get-inactive-count/:position", Accounts.getInactiveCountByPosition)
    // router.get("/get-list/:position", Accounts.getListAccountByPosition)
router.get("/get-list/:position/:sortField/:sortOrder/:page", Accounts.getListAccountByPosition)
router.get("/get-detail/:id", Accounts.getDetailById)
router.post("/update-account", Accounts.updateAccountById)
router.post("/update-status/:id/:status", Accounts.updateStatus)
router.post("/update-password-directly", Accounts.updatePasswordByUserId)

module.exports = router