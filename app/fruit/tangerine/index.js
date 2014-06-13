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
		this.hideTab = this.hideTab.bind(this);
		this.delegate.on('click', '.tangerine-tab_label', this.onTabClick);
	},
	setup: function () {
		this.parent.on('tabclick', this.hideTab);
	},
	teardown: function () {
		this.parent.off('tabclick', this.hideTab);
	},
	hideTab: function () {
		this.el.classList.remove("visible");
	},
	onTabClick: function(event, el) {
		this.parent.fire('tabclick', el);
		this.el.classList.add("visible")
	}
});