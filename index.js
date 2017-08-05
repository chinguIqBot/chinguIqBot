"use strict";

const express = require('express');
const app = express();
const sa = require('superagent');
const bodyParser = require('body-parser');

let apikey = process.env.API_KEY; //Slack API Key
let hr_key = process.env.HR_KEY; //HackerRank API Key
let hr_url = "http://api.hackerrank.com/checker/submission.json"; //HackerRank API URL

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


app.set('port', (process.env.PORT || 9001));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})

app.post('/', (req, res) => {
    let payload = req.body;
    let command = payload.text;

    //Check KEY authorized
    if (!apikey == payload.token) {
        return;
    }
    //Send OK to slack to be able to send deferred answers later
    res.end();

    //Commands
    if (command === "help") {
        var body = {
            response_type: "ephemeral",
            "text": `
            [WIP] List of available commands `
        };
        sa.post(payload.response_url)
            .send(body)
            .set('content-type', 'application/json')
            .end();

    } else if (command.startsWith("topic")) {

    } else if (command === "random") {

    } else if (command === "challenge") {
        
    } else {
        var body = {
            response_type: "ephemeral",
            "text": "Wrong command, please type /chinguiqbot help"
        };
        sa.post(payload.response_url)
            .send(body)
            .set('content-type', 'application/json')
            .end();
    }
    
    var body = {
        response_type: "in_channel",
        "attachments": [{
            "text": "hello world"
        }]
    };
    
});


app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});