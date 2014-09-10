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
module.exports.structure = dataPromise;

module.exports.indexPage = dataPromise.then(require('./page1'));

module.exports.articlePage = dataPromise.then(require('./articlePage'));