'use strict';

var spdy = require('spdy');
var express = require('express');
var fs = require('fs');
var cwd = process.cwd();
var path = require('path');
var PORT =  8080;

(function () {
	var p=process.argv.indexOf('-p');
	if(!!~p && process.argv[p+1]) {
		PORT = process.argv[p+1];
	}

	PORT = parseInt(PORT);
})();

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

server.listen(PORT);
console.log ('listening on', PORT);


module.exports = app;
