var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Server is working!</h1>');
});

module.exports = app;