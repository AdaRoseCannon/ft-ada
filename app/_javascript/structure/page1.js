'use strict';

module.exports = function (data) {
	console.log(data);
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
		structure.children[1].children.push({
			module: 'apple',
			data: item
		});
	});

	return structure;
};