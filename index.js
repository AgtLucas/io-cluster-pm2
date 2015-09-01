'use strict';

var cluster = require('cluster');
var http = require('http');
var os = require('os');

var numCPUs = os.cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i <numCPUs; ++i) {
    cluster.fork();
  }
} else {
  http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Hello!');
  }).listen(8080);
}