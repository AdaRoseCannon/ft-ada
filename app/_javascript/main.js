'use strict';

require('../fruit'); //Instantiate some fruit in fruitmachine.
var fruitmachine = require('fruitmachine');

var layout = fruitmachine(require('./structure'))
	.render()
	.inject(document.body)
	.setup();

console.log(layout);