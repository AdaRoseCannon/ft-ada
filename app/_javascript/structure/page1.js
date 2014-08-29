'use strict';

var moment = require('moment');

module.exports = function (data) {
	var structure = {
		module: 'layout-a',
		children: [
			{
				module: 'banana',
				slot: 'header',
				data: {
					pageurl: data.homepage,
					name: data.name,
					description: data.description
				}
			}, {
				module: 'repeater',
				slot: 'head-content',
				children: []
			}
		]
	};

	data.posts.forEach(function (item) {
		if (!item.url) {
			return;
		}
		item.excerpt = item.content.split("\n").slice(0,5).join(" ");
		item.date = moment(item['published_on'].split(' ')[0].split('-')).fromNow();
		structure.children[1].children.push({
			module: 'apple',
			data: item
		});
	});

	return structure;
};