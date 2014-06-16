'use strict';

require('../fruit'); //Instantiate some fruit in fruitmachine.
var fruitmachine = require('fruitmachine');
require('./structure').then(function (layout, err) {
	if (err) {
		console.log('error', err);
		return;
	}

	fruitmachine(layout)
		.render()
		.inject(document.body)
		.setup();
});