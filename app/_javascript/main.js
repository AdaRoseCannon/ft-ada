'use strict';

require('../fruit'); //Instantiate some fruit in fruitmachine.
var fruitmachine = require('fruitmachine');

var layout = fruitmachine({
	module: 'layout-a',
	data: {
		title: 'Hi'
	},
	children: [
		{
			name: 'gallery',
			module: 'melon',
			slot: '1',
			children: [
				{
					name: 'Page1',
					module: 'banana',
					slot: 'left-pane',
					data: {
						data: 'Left Pane'
					}
				},
				{
					name: 'Page2',
					module: 'grape',
					slot: 'middle-pane',
					data: {
						label: 'I\'m a button!!'
					}
				},
				{
					name: 'Page3',
					module: 'apple',
					slot: 'right-pane',
					data: {
						text: 'Right Pane'
					}
				}
			]
		}
	]
});

layout.render();

layout.inject(document.body);