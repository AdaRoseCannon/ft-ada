'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');

fruitmachine.define({
	name: 'layout-a',
	template: templates['layout-a'],
	initialize: function () {
		this.on('buttonclick', function (event, el) {

			// Do something?

		})
	}
});