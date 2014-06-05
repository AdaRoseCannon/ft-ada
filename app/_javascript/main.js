'use strict';

require('./fruit'); //Instantiate some fruit in fruitmachine.
var fruitmachine = require('fruitmachine');

var layout = fruitmachine({
	module: 'layout-a',
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