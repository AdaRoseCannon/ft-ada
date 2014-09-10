'use strict';

/**
 * Article list item.
 */

var fruitmachine = require('fruitmachine');
var templates = require('../templates');
var ftDomDelegate = require('fruitmachine-ftdomdelegate');

fruitmachine.define({
	name: 'apple',
	template: templates.apple,
	helpers: [ftDomDelegate],
	initialize: function() {

		// Bind the function to the fruit.
		this.onClick = this.onClick.bind(this);
		this.delegate.on('click', '.apple-article_link', this.onClick);
	},
	onClick: function(event, el) {
		this.fire('link_click', event, el);
	}
});