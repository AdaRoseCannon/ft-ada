var spdy = require('spdy');
var express = require('express');
var fs = require('fs');
var cwd = process.cwd();
var path = require('path');

var options = {
	key: fs.readFileSync(path.join(cwd, '/keys/server.key')),
	cert: fs.readFileSync(path.join(cwd, '/keys/server.crt')),
	ca: fs.readFileSync(path.join(cwd, '/keys/server.csr')),

	// SPDY-specific options
	windowSize: 1024, // Server's window size
};

var app = express();

app.use(express.static(path.join(cwd, 'dist')));

var server = spdy.createServer(options, app);

server.listen(8443);

module.exports = app;
