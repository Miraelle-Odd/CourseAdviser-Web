const express = require("express");
const router = express.Router();
const { Tests } = require("../models");

router.get("/", async(req, res) => {
    const listOfTests = await Tests.findAll();
    res.json(listOfTests);
})

router.post("/", async(req, res) => {
    const test = req.body;
    await Tests.create(test);
    res.json(test);
})

module.exports = router