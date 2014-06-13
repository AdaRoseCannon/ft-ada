'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');
var ftDomDelegate = require('fruitmachine-ftdomdelegate');

fruitmachine.define({
	name: 'grape',
	template: templates.grape,
	helpers: [ftDomDelegate],
	initialize: function() {

		// Bind the function to the fruit.
		this.onButtonClick = this.onButtonClick.bind(this);
		this.delegate.on('click', '.grape-button', this.onButtonClick);
	},
	onButtonClick: function(event, el) {
		this.fire('buttonclick', el);
		console.log('click click');
	}
});