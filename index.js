const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {
  var text = req.body.text;
  // implement your bot here ...
  res.send("hello");
});


const server = app.listen(3000, () => {  
  console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env);
    
});