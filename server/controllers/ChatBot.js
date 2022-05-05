const { ChatBot } = require("../models");

const dialogflow = require('@google-cloud/dialogflow');
const fs = require('fs');

const Credentials = JSON.parse(fs.readFileSync("test-211-ojhl-c0f3fb8920bf.json"))

const projectId = Credentials.project_id;

const configuration = {
    credentials: {
        private_key: Credentials['private_key'],
        client_email: Credentials['client_email']
    }
}
const sessionClient = new dialogflow.SessionsClient(configuration);

const detectIntent = async(languageCode, queryText, sessionId) => {

    let sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

    // The text query request.
    let request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: queryText,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    // console.log(responses);
    const result = responses[0].queryResult;
    console.log(result);

    return {
        response: result.fulfillmentMessages
    };
}

const postToChat = async(req, res) => {

    let languageCode = req.params.languageCode;
    let queryText = req.params.queryText;
    let sessionId = req.params.sessionId;
    let responseData = await detectIntent(languageCode, queryText, sessionId);

    // if (responseData.fulfillmentMessages)
    //     console.log(responseData.fulfillmentMessages);
    // else
    res.send(responseData.response);
}

module.exports = {
    postToChat
}