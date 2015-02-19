var express = require('express');

var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Server is working!</h1>');
});

var port = process.env.PORT || 3000;
module.exports = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});