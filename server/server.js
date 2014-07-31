'use strict';

var spdy = require('spdy');
var express = require('express');
var fs = require('fs');
var path = require('path');
var PORT =  8443;

(function () {
	var p=process.argv.indexOf('-p');
	if(!!~p && process.argv[p+1]) {
		PORT = process.argv[p+1];
	}

	PORT = parseInt(PORT);
})();

var options = {
	key: fs.readFileSync('/home/ada/keys/ssl.key'),
	cert: fs.readFileSync('/home/ada/keys/ssl.crt'),
	ca: fs.readFileSync('/home/ada/keys/ca.pem'),

	// SPDY-specific options
	windowSize: 1024, // Server's window size
};

var app = express();

app.use(express.static(path.join(__dirname, '../dist')));

var server = spdy.createServer(options, app);

server.listen(PORT);
console.log ('listening on', PORT);


module.exports = app;
