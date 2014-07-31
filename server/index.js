var app = require('./server');
app.get('*', function(req, res){
	'use strict';
	res.statusCode = 200;
	console.log ('recieved');
	res.end('Hello World');
});