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
    intentMap.set('iCourseGeneral - special', Webhook.showCourseSpecialInfo)
    intentMap.set('iCourseAdvises', Webhook.askCourse)
    intentMap.set('iCourseAdvises - requirement', Webhook.askRequirement)
    intentMap.set('iCourseAdvises - guarantee', Webhook.askGuarantee)
    intentMap.set('iCourseAdvises - time', Webhook.askGivenTime)
    intentMap.set('iCourseAdvises - conclusion', Webhook.giveAdvises)
    intentMap.set('iCourseAdvises - adult - skills', Webhook.askGivenTime)
    intentMap.set('iCourseAdvises - adult - conclusion', Webhook.giveAdvisesAdult)
    intentMap.set('iCourseAdvises - kid - age', Webhook.askAge)
    intentMap.set('iCourseAdvises - kid - conclusion', Webhook.giveAdvisesKid)
        // now agent is handle request and pass intent map
    agent.handleRequest(intentMap)
})


module.exports = router