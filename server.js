var app = require('./app/app');

var port = process.env.PORT || 3000;
module.exports = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});