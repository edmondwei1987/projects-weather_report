var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
//set static folder
app.use(express.static(__dirname + '/public/dist'));
//redirect roots to angular
app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./public/dist/index.html'));
})
app.listen(4200, function () {
  console.log('listen on port 4200');
})