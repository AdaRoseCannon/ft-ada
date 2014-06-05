'use strict';

require('./fruit');
var fruitmachine = require('fruitmachine');

var layout = fruitmachine({
	module: 'layout',
	children: [
		{
			name: 'apple',
			module: 'apple',
			slot: '1',
			data: {
				text: 'Hello World'
			}
		}
	]
});

layout.render();

layout.inject(document.body);