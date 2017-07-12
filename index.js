const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var apikey = process.env.SLACK_API_TOKEN;

app.get('/hello', (req,res)=>{
    res.send('hello');
});

app.set('port', (process.env.PORT || 9001));

app.post('/', (req, res) => {
  var text = req.body.text;
  // implement your bot here ...
       var body = {
        response_type: "in_channel",
        "attachments": [
          {
            "text": "hello world"
          }
        ]
      };
      res.send(body);
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});