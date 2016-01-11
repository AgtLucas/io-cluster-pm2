'use strict'

var http = require('http')

http.createServer(function(req, res) {
  res.writeHead(200)
  res.end('Hello!')
}).listen(8080)

process.on('message', function(msg) {
  if (msg === 'shutdown') {
    close_all_connections()
    delete_cache()
    server.close()
    process.exit(0)
  }
})
