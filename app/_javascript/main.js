'use strict';

/**
 * Module Dependencies
 */

require('../fruit'); //Instantiate some fruit in fruitmachine.
var fruitmachine = require('fruitmachine');
var structure = require('./structure');
/**
 * Local Vars
 */

/**
 * Render the index page
 * @return {void}
 */
function renderIndex() {
	structure.indexPage.then(function (indexPageStructure) {
		var fm = fruitmachine(indexPageStructure)
			.render()
			.inject(document.body)
			.setup();

		fm.on('link_click', function (e, el) {
			renderPage(el.dataset.index);
			e.preventDefault();
		});
	});
}

function renderPage(index) {
	structure.articlePage.then(function (articlePageStructureFunc) {
		console.log(index);
		var fm = fruitmachine(articlePageStructureFunc(index))
			.render()
			.inject(document.body)
			.setup();

	});
}

window.renderPage = renderPage;

renderIndex();