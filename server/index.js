var express = require('express');
const mongoose = require('./../database/index.js');
var app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

