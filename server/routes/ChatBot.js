const express = require("express");
const { ChatBot } = require("../controllers");
const router = express.Router();


router.post('/dialogflow/:languageCode/:queryText/:sessionId', ChatBot.postToChat);

module.exports = router