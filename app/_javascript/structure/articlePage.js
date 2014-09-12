'use strict';

var moment = require('moment');

module.exports = function (data) {
	return function (i) {
		var structure = {
			module: 'layout-b',
			children: [
				{
					module: 'banana',
					slot: 'header',
					data: {
						pageurl: data.homepage,
						name: data.name,
						description: data.description
					}
				}
			],
			data: {
				"body-content": data.posts[i].content
			}
		};
		return structure;
	};
	
};