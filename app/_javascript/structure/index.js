'use strict';

var request = require('superagent');
var Promise = require('es6-promise').Promise;

var dataPromise = new Promise(function(resolve, reject) {
	request
		.get('/posts.json')
		.end(function (error, res) {
			if (error) {
				reject(error);
				return;
			}
			var result;
			try {
				result = JSON.parse(res.text);
				resolve(result);
			} catch (e) {
				reject(e);
			}
		});
});

/**
 * Supplies a get function.
 * @type Object
 */
module.exports = new Promise(function (resolve, reject) {
	dataPromise.then(function (data) {
		resolve(require('./page1.js')(data));
	}).catch (function (e) {
		reject(e);
	});
}).catch(function (e) {
	console.log('error', e);
});