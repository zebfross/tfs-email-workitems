

///<reference path='typescript-node-definitions/node.d.ts'/>

let vsts = require('./vsoInterface');

const express = require('express')
var bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', function(req, res) {
  console.log(req.body);
  vsts.createWorkItem(req.body["subject"], req.body["body-plain"]).then(function(cWi) {
    res.send("created work item: " + cWi.id);
  }).catch(function(err) {
    res.status(500).send("Error: " + err);
  });
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})