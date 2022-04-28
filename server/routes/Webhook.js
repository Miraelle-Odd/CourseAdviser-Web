const express = require("express");
const { Webhook } = require("../controllers");
const router = express.Router();
const { WebhookClient } = require("dialogflow-fulfillment");

router.post("", (req, res) => {
    // get agent from request
    let agent = new WebhookClient({ request: req, response: res })
        // create intentMap for handle intent
    let intentMap = new Map();
    // add intent map 2nd parameter pass function
    intentMap.set('iCourseGeneral', Webhook.showCourseGeneralInfo)
    intentMap.set('iCourseGeneral - level', Webhook.showCourseLevelInfo)
        // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})


module.exports = router