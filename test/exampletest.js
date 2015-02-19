var request = require('request');
var assert = require('assert');
var app = require('../app/app');

var testPort = 8181;
var server = require('http').createServer(app);

describe('Test responses', function() {
  beforeEach(function(done) {
    server.listen(testPort, done);
  });

  afterEach(function(done) {
    server.close(done);
  });

  describe('GET /', function(){
    it("should respond with a h1", function(done){
      var url = 'http://localhost:' + testPort;
      request(url, function(err, res, body) {
        assert(body === '<h1>Server is working!</h1>');
        done();
      }); 
    }); 
  });
});