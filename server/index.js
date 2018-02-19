const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('./../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));


app.use(bodyParser.json());

app.post('/list', function (req, res) {
  console.log('Server received a post request', req.body.data);
  
  res.send()
});

app.get('/list', function (req, res) {
  console.log('Server received a post request', req.body.data);
  mongoose.methods.find(function (err, listObjects) {
    if (err) return console.error(err);
    console.log(listObjects);
    // res.send(JSON.stringify(listObjects))
  });
});


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

