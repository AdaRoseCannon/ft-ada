'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');
var ftDomDelegate = require('fruitmachine-ftdomdelegate');

fruitmachine.define({
	name: 'tangerine',
	template: templates.tangerine,
	helpers: [ftDomDelegate],
	initialize: function() {
		// Bind the function to the fruit.
		this.onTabClick = this.onTabClick.bind(this);
		this.delegate.on('click', '.tangerine-tab', this.onTabClick);
	},
	onTabClick: function(event, el) {
		Array.prototype.forEach.call(this.el.querySelectorAll('.tangerine-content'), function (el) {
			el.classList.remove("visible");
		});
		var clicked = this.el.querySelector('.tangerine-content[data-tangerine_id="' + el.dataset.tangerine_id + '"]');
		this.fire('tabclick', el);
		clicked.classList.add("visible");
	}
});