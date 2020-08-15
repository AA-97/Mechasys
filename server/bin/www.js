
var app = require('../app');
var debug = require('debug')('server:server');
var http = require('http');

const PORT = process.env.PORT || 5000;
app.set('port', PORT);

var server = http.createServer(app);

server.listen(PORT);
server.on('listening', onListening);

function onListening() {
  const addr = server.address();
  debug('Listening on ' + addr.port);
}