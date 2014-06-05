(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

require('./fruit'); //Instantiate some fruit in fruitmachine.
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
					module: 'apple',
					slot: 'middle-pane',
					data: {
						text: 'Center Pane'
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
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_e0c79453.js","/")
},{"./fruit":4,"buffer":18,"fruitmachine":10,"oMfpAn":21}],2:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');

fruitmachine.define({
	name: 'apple',
	template: templates.apple
});
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fruit/apple.js","/fruit")
},{"../templates":7,"buffer":18,"fruitmachine":10,"oMfpAn":21}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');

fruitmachine.define({
	name: 'banana',
	template: templates.banana
});
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fruit/banana.js","/fruit")
},{"../templates":7,"buffer":18,"fruitmachine":10,"oMfpAn":21}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

require('./apple');
require('./layout-a');
require('./melon');
require('./banana');

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fruit/index.js","/fruit")
},{"./apple":2,"./banana":3,"./layout-a":5,"./melon":6,"buffer":18,"oMfpAn":21}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');

fruitmachine.define({
	name: 'layout-a',
	template: templates['layout-a']
});
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fruit/layout-a.js","/fruit")
},{"../templates":7,"buffer":18,"fruitmachine":10,"oMfpAn":21}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
'use strict';

var fruitmachine = require('fruitmachine');
var templates = require('../templates');

fruitmachine.define({
	name: 'melon',
	template: templates.melon
});
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fruit/melon.js","/fruit")
},{"../templates":7,"buffer":18,"fruitmachine":10,"oMfpAn":21}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
module.exports = (function() {
    var Hogan = require('hogan-updated');
    var templates = {};
    templates['apple'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("I say: ");t.b(t.v(t.f("text",c,p,0)));t.b("\n");return t.fl(); },partials: {}, subs: {  }});
    templates['banana'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h3>");t.b(t.v(t.f("data",c,p,0)));t.b("</h3>");return t.fl(); },partials: {}, subs: {  }});
    templates['layout-a'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<h1>");t.b(t.v(t.f("title",c,p,0)));t.b("</h1>");t.b("\n" + i);t.b("<div class=\"slot-1\">");t.b("\n" + i);t.b(t.t(t.f("1",c,p,0)));t.b("\n" + i);t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    templates['melon'] = new Hogan.Template({code: function (c,p,i) { var t=this;t.b(i=i||"");t.b("<div class=\"slot-left-pane\">");t.b(t.t(t.f("left-pane",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("<div class=\"slot-middle-pane\">");t.b(t.t(t.f("middle-pane",c,p,0)));t.b("</div>");t.b("\n" + i);t.b("<div class=\"slot-right-pane\">");t.b(t.t(t.f("right-pane",c,p,0)));t.b("</div>");return t.fl(); },partials: {}, subs: {  }});
    return templates;
})();
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/templates.js","/")
},{"buffer":18,"hogan-updated":22,"oMfpAn":21}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

/*jslint browser:true, node:true, laxbreak:true*/

'use strict';

module.exports = function(fm) {

  /**
   * Defines a module.
   *
   * Options:
   *
   *  - `name {String}` the name of the module
   *  - `tag {String}` the tagName to use for the root element
   *  - `classes {Array}` a list of classes to add to the root element
   *  - `template {Function}` the template function to use when rendering
   *  - `helpers {Array}` a list of helpers to apply to the module
   *  - `initialize {Function}` custom logic to run when module instance created
   *  - `setup {Function}` custom logic to run when `.setup()` is called (directly or indirectly)
   *  - `teardown {Function}` custom logic to unbind/undo anything setup introduced (called on `.destroy()` and sometimes on `.setup()` to avoid double binding events)
   *  - `destroy {Function}` logic to permanently destroy all references
   *
   * @param  {Object|View} props
   * @return {View}
   * @public true
   */
  return function(props) {
    var Module = ('object' === typeof props)
      ? fm.Module.extend(props)
      : props;

    // Allow modules to be named
    // via 'name:' or 'module:'
    var proto = Module.prototype;
    var name = proto.name || proto._module;

    // Store the module by module type
    // so that module can be referred to
    // by just a string in layout definitions
    if (name) fm.modules[name] = Module;

    return Module;
  };
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/lib/define.js","/../../node_modules/fruitmachine/lib")
},{"buffer":18,"oMfpAn":21}],9:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*jslint browser:true, node:true*/

/**
 * FruitMachine
 *
 * Renders layouts/modules from a basic layout definition.
 * If views require custom interactions devs can extend
 * the basic functionality.
 *
 * @version 0.3.3
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @author Wilson Page <wilson.page@ft.com>
 */

'use strict';

/**
 * Module Dependencies
 */

var mod = require('./module');
var define = require('./define');
var utils = require('utils');
var events = require('event');

/**
 * Creates a fruitmachine
 *
 * Options:
 *
 *  - `Model` A model constructor to use (must have `.toJSON()`)
 *
 * @param {Object} options
 */
module.exports = function(options) {

  /**
   * Shortcut method for
   * creating lazy views.
   *
   * @param  {Object} options
   * @return {Module}
   */
  function fm(options) {
    var Module = fm.modules[options.module];
    if (Module) return new Module(options);
  }

  fm.create = module.exports;
  fm.Model = options.Model;
  fm.Events = events;
  fm.Module = mod(fm);
  fm.define = define(fm);
  fm.util = utils;
  fm.modules = {};
  fm.config = {
    templateIterator: 'children',
    templateInstance: 'child'
  };

  // Mixin events and return
  return events(fm);
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/lib/fruitmachine.js","/../../node_modules/fruitmachine/lib")
},{"./define":8,"./module":12,"buffer":18,"event":13,"oMfpAn":21,"utils":17}],10:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

/*jslint browser:true, node:true*/

/**
 * FruitMachine Singleton
 *
 * Renders layouts/modules from a basic layout definition.
 * If views require custom interactions devs can extend
 * the basic functionality.
 *
 * @version 0.6.0
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @author Wilson Page <wilson.page@ft.com>
 */

'use strict';

/**
 * Module Dependencies
 */

var fruitMachine = require('./fruitmachine');
var Model = require('model');

/**
 * Exports
 */

module.exports = fruitMachine({ Model: Model });

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/lib/index.js","/../../node_modules/fruitmachine/lib")
},{"./fruitmachine":9,"buffer":18,"model":15,"oMfpAn":21}],11:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

/**
 * Module Dependencies
 */

var events = require('event');

/**
 * Local vars
 */

var listenerMap = {};

/**
 * Registers a event listener.
 *
 * @param  {String}   name
 * @param  {String}   module
 * @param  {Function} cb
 * @return {View}
 */
exports.on = function(name, module, cb) {
  var l;

  // cb can be passed as
  // the second or third argument
  if (typeof module !== 'string') {
    cb = module;
    module = null;
  }

  // if a module is provided
  // pass in a special callback
  // function that checks the
  // module
  if (module) {
    if (!listenerMap[name]) listenerMap[name] = [];
    l = listenerMap[name].push({
      orig: cb,
      cb: function() {
        if (this.event.target.module() === module) {
          cb.apply(this, arguments);
        }
      }
    });
    events.prototype.on.call(this, name, listenerMap[name][l-1].cb);
  } else {
    events.prototype.on.call(this, name, cb);
  }

  return this;
};

/**
 * Unregisters a event listener.
 *
 * @param  {String}   name
 * @param  {String}   module
 * @param  {Function} cb
 * @return {View}
 */
exports.off = function(name, module, cb) {

  // cb can be passed as
  // the second or third argument
  if (typeof module !== 'string') {
    cb = module;
    module = null;
  }

  if (listenerMap[name]) {
    listenerMap[name] = listenerMap[name].filter(function(map) {

      // If a callback provided, keep it
      // in the listener map if it doesn't match
      if (cb && map.orig !== cb) {
        return true;

      // Otherwise remove it from the listener
      // map and unbind the event listener
      } else {
        events.prototype.off.call(this, name, map.cb);
        return false;
      }
    }, this);
  }
  if (!module) {
    events.prototype.off.call(this, name, cb);
  }

  return this;
};

/**
 * Fires an event on a view.
 *
 * @param  {String} name
 * @return {View}
 */
exports.fire = function(name) {
  var _event = this.event;
  var event = {
    target: this,
    propagate: true,
    stopPropagation: function(){ this.propagate = false; }
  };

  propagate(this, arguments, event);

  // COMPLEX:
  // If an earlier event object was
  // cached, restore the the event
  // back onto the view. If there
  // wasn't an earlier event, make
  // sure the `event` key has been
  // deleted off the view.
  if (_event) this.event = _event;
  else delete this.event;

  // Allow chaining
  return this;
};

function propagate(view, args, event) {
  if (!view || !event.propagate) return;

  view.event = event;
  events.prototype.fire.apply(view, args);
  propagate(view.parent, args, event);
}

exports.fireStatic = events.prototype.fire;

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/lib/module/events.js","/../../node_modules/fruitmachine/lib/module")
},{"buffer":18,"event":13,"oMfpAn":21}],12:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

/*jshint browser:true, node:true*/

'use strict';

/**
 * Module Dependencies
 */

var util = require('utils');
var events = require('./events');
var extend = require('extend');
var mixin = util.mixin;

/**
 * Exports
 */

module.exports = function(fm) {

  // Alias prototype for optimum
  // compression via uglifyjs
  var proto = Module.prototype;

  /**
   * Module constructor
   *
   * Options:
   *
   *  - `id {String}` a unique id to query by
   *  - `model {Object|Model}` the data with which to associate this module
   *  - `tag {String}` tagName to use for the root element
   *  - `classes {Array}` list of classes to add to the root element
   *  - `template {Function}` a template to use for rendering
   *  - `helpers {Array}`a list of helper function to use on this module
   *  - `children {Object|Array}` list of child modules
   *
   * @constructor
   * @param {Object} options
   * @api public
   */
  function Module(options) {

    // Shallow clone the options
    options = mixin({}, options);

    // Various config steps
    this._configure(options);
    this._add(options.children);

    // Fire before initialize event hook
    this.fireStatic('before initialize', options);

    // Run initialize hooks
    if (this.initialize) this.initialize(options);

    // Fire initialize event hook
    this.fireStatic('initialize', options);
  }

  /**
   * Configures the new Module
   * with the options passed
   * to the constructor.
   *
   * @param  {Object} options
   * @api private
   */
  proto._configure = function(options) {

    // Setup static properties
    this._id = options.id || util.uniqueId();
    this._fmid = options.fmid || util.uniqueId('fmid');
    this.tag = options.tag || this.tag || 'div';
    this.classes = options.classes || this.classes || [];
    this.helpers = options.helpers || this.helpers || [];
    this.template = this._setTemplate(options.template || this.template);
    this.slot = options.slot;

    // Create id and module
    // lookup objects
    this.children = [];
    this._ids = {};
    this._modules = {};
    this.slots = {};

    // Use the model passed in,
    // or create a model from
    // the data passed in.
    var model = options.model || options.data || {};
    this.model = util.isPlainObject(model)
      ? new this.Model(model)
      : model;

    // Attach helpers
    // TODO: Fix this for non-ES5 environments
    this.helpers.forEach(this.attachHelper, this);

    // We fire and 'inflation' event here
    // so that helpers can make some changes
    // to the view before instantiation.
    if (options.fmid) {
      fm.fire('inflation', this, options);
      this.fireStatic('inflation', options);
    }
  };

  /**
   * A private add method
   * that accepts a list of
   * children.
   *
   * @param {Object|Array} children
   * @api private
   */
  proto._add = function(children) {
    if (!children) return;

    var isArray = util.isArray(children);
    var child;

    for (var key in children) {
      child = children[key];
      if (!isArray) child.slot = key;
      this.add(child);
    }
  },

  /**
   * Instantiates the given
   * helper on the Module.
   *
   * @param  {Function} helper
   * @return {Module}
   * @api private
   */
  proto.attachHelper = function(helper) {
    if (helper) helper(this);
  },

  /**
   * Returns the template function
   * for the view.
   *
   * For template object like Hogan
   * templates with a `render` method
   * we need to bind the context
   * so they can be called without
   * a reciever.
   *
   * @return {Function}
   * @api private
   */
  proto._setTemplate = function(fn) {
    return fn && fn.render
      ? util.bind(fn.render, fn)
      : fn;
  };

  /**
   * Adds a child view(s) to another Module.
   *
   * Options:
   *
   *  - `at` The child index at which to insert
   *  - `inject` Injects the child's view element into the parent's
   *  - `slot` The slot at which to insert the child
   *
   * @param {Module|Object} children
   * @param {Object|String|Number} options|slot
   */
  proto.add = function(child, options) {
    if (!child) return this;

    // Options
    var at = options && options.at;
    var inject = options && options.inject;
    var slot = ('object' === typeof options)
      ? options.slot
      : options;

    // Remove this view first if it already has a parent
    if (child.parent) child.remove({ fromDOM: false });

    // Assign a slot (prefering defined option)
    slot = child.slot = slot || child.slot;

    // Remove any module that already occupies this slot
    var resident = this.slots[slot];
    if (resident) resident.remove({ fromDOM: false });

    // If it's not a Module, make it one.
    if (!(child instanceof Module)) child = fm(child);

    util.insert(child, this.children, at);
    this._addLookup(child);

    // We append the child to the parent view if there is a view
    // element and the users hasn't flagged `append` false.
    if (inject) this._injectEl(child.el, options);

    // Allow chaining
    return this;
  };

  /**
   * Removes a child view from
   * its current Module contexts
   * and also from the DOM unless
   * otherwise stated.
   *
   * Options:
   *
   *  - `fromDOM` Whether the element should be removed from the DOM (default `true`)
   *
   * Example:
   *
   *   // The following are equal
   *   // apple is removed from the
   *   // the view structure and DOM
   *   layout.remove(apple);
   *   apple.remove();
   *
   *   // Apple is removed from the
   *   // view structure, but not the DOM
   *   layout.remove(apple, { el: false });
   *   apple.remove({ el: false });
   *
   * @return {FruitMachine}
   * @api public
   */
  proto.remove = function(param1, param2) {

    // Don't do anything if the first arg is undefined
    if (arguments.length === 1 && !param1) return this;

    // Allow view.remove(child[, options])
    // and view.remove([options]);
    if (param1 instanceof Module) {
      param1.remove(param2 || {});
      return this;
    }

    // Options and aliases
    var options = param1 || {};
    var fromDOM = options.fromDOM !== false;
    var parent = this.parent;
    var el = this.el;
    var parentNode = el && el.parentNode;
    var index;

    // Unless stated otherwise,
    // remove the view element
    // from its parent node.
    if (fromDOM && parentNode) {
      parentNode.removeChild(el);
    }

    if (parent) {

      // Remove reference from views array
      index = parent.children.indexOf(this);
      parent.children.splice(index, 1);

      // Remove references from the lookup
      parent._removeLookup(this);
    }

    return this;
  };

  /**
   * Creates a lookup reference for
   * the child view passed.
   *
   * @param {Module} child
   * @api private
   */
  proto._addLookup = function(child) {
    var module = child.module();

    // Add a lookup for module
    (this._modules[module] = this._modules[module] || []).push(child);

    // Add a lookup for id
    this._ids[child.id()] = child;

    // Store a reference by slot
    if (child.slot) this.slots[child.slot] = child;

    child.parent = this;
  };

  /**
   * Removes the lookup for the
   * the child view passed.
   *
   * @param {Module} child
   * @api private
   */
  proto._removeLookup = function(child) {
    var module = child.module();

    // Remove the module lookup
    var index = this._modules[module].indexOf(child);
    this._modules[module].splice(index, 1);

    // Remove the id and slot lookup
    delete this._ids[child._id];
    delete this.slots[child.slot];
    delete child.parent;
  };

  /**
   * Injects an element into the
   * Module's root element.
   *
   * By default the element is appended.
   *
   * Options:
   *
   *  - `at` The index at which to insert.
   *
   * @param  {Element} el
   * @param  {Object} options
   * @api private
   */
  proto._injectEl = function(el, options) {
    var at = options && options.at;
    var parent = this.el;
    if (!el || !parent) return;

    if (typeof at !== 'undefined') {
      parent.insertBefore(el, parent.children[at]);
    } else {
      parent.appendChild(el);
    }
  };

  /**
   * Returns a decendent module
   * by id, or if called with no
   * arguments, returns this view's id.
   *
   * Example:
   *
   *   myModule.id();
   *   //=> 'my_view_id'
   *
   *   myModule.id('my_other_views_id');
   *   //=> Module
   *
   * @param  {String|undefined} id
   * @return {Module|String}
   * @api public
   */
  proto.id = function(id) {
    if (!arguments.length) return this._id;

    var child = this._ids[id];
    if (child) return child;

    return this.each(function(view) {
      return view.id(id);
    });
  };

  /**
   * Returns the first descendent
   * Module with the passed module type.
   * If called with no arguments the
   * Module's own module type is returned.
   *
   * Example:
   *
   *   // Assuming 'myModule' has 3 descendent
   *   // views with the module type 'apple'
   *
   *   myModule.modules('apple');
   *   //=> Module
   *
   * @param  {String} key
   * @return {Module}
   */
  proto.module = function(key) {
    if (!arguments.length) return this._module || this.name;

    var view = this._modules[key];
    if (view && view.length) return view[0];

    return this.each(function(view) {
      return view.module(key);
    });
  };

  /**
   * Returns a list of descendent
   * Modules that match the module
   * type given (Similar to
   * Element.querySelectorAll();).
   *
   * Example:
   *
   *   // Assuming 'myModule' has 3 descendent
   *   // views with the module type 'apple'
   *
   *   myModule.modules('apple');
   *   //=> [ Module, Module, Module ]
   *
   * @param  {String} key
   * @return {Array}
   * @api public
   */
  proto.modules = function(key) {
    var list = this._modules[key] || [];

    // Then loop each child and run the
    // same opperation, appending the result
    // onto the list.
    this.each(function(view) {
      list = list.concat(view.modules(key));
    });

    return list;
  };

  /**
   * Calls the passed function
   * for each of the view's
   * children.
   *
   * Example:
   *
   *   myModule.each(function(child) {
   *     // Do stuff with each child view...
   *   });
   *
   * @param  {Function} fn
   * @return {[type]}
   */
  proto.each = function(fn) {
    var l = this.children.length;
    var result;

    for (var i = 0; i < l; i++) {
      result = fn(this.children[i]);
      if (result) return result;
    }
  };

  /**
   * Templates the view, including
   * any descendent views returning
   * an html string. All data in the
   * views model is made accessible
   * to the template.
   *
   * Child views are printed into the
   * parent template by `id`. Alternatively
   * children can be iterated over a a list
   * and printed with `{{{child}}}}`.
   *
   * Example:
   *
   *   <div class="slot-1">{{{<slot>}}}</div>
   *   <div class="slot-2">{{{<slot>}}}</div>
   *
   *   // or
   *
   *   {{#children}}
   *     {{{child}}}
   *   {{/children}}
   *
   * @return {String}
   * @api public
   */
  proto.toHTML = function() {
    var html = this._innerHTML();

    // Wrap the html in a FruitMachine
    // generated root element and return.
    return this._wrapHTML(html);
  };

  /**
   * Get the view's innerHTML
   *
   * @return {String}
   */
  proto._innerHTML = function() {
    this.fireStatic('before tohtml');
    var data = {};
    var html;
    var tmp;

    // Create an array for view
    // children data needed in template.
    data[fm.config.templateIterator] = [];

    // Loop each child
    this.each(function(child) {
      tmp = {};
      html = child.toHTML();
      data[child.slot || child.id()] = html;
      tmp[fm.config.templateInstance] = html;
      data.children.push(mixin(tmp, child.model.toJSON()));
    });

    // Run the template render method
    // passing children data (for looping
    // or child views) mixed with the
    // view's model data.
    return this.template
      ? this.template(mixin(data, this.model.toJSON()))
      : '';
  };

  /**
   * Wraps the module html in
   * a root element.
   *
   * @param  {String} html
   * @return {String}
   * @api private
   */
  proto._wrapHTML = function(html) {
    return '<' + this.tag + ' class="' + this._classes().join(' ') + '" id="' + this._fmid + '">' + html + '</' + this.tag + '>';
  };

  /**
   * Gets a space separated list
   * of all a view's classes
   *
   * @return {String}
   * @api private
   */
  proto._classes = function() {
    return [this.module()].concat(this.classes);
  };

  /**
   * Renders the view and replaces
   * the `view.el` with a freshly
   * rendered node.
   *
   * Fires a `render` event on the view.
   *
   * @return {Module}
   */
  proto.render = function() {
    this.fireStatic('before render');

    // If possible recycle outer element but
    // build from scratch if there is no
    // existing element or if tag changed
    var el = this.el;
    var classes;
    if (el && el.tagName === this.tag.toUpperCase()) {
      el.innerHTML = this._innerHTML();
      classes = el.className.split(/\s+/);
      this._classes().forEach(function(add) {
        if (!~classes.indexOf(add)) el.className = el.className + ' ' + add;
      });

    // Sets a new element as a view's
    // root element (purging descendent
    // element caches).
    } else {
      this._setEl(util.toNode(this.toHTML()));
    }

    // Fetch all child module elements
    this._fetchEls(this.el);

    // Handy hook
    this.fireStatic('render');

    return this;
  };

  /**
   * Sets up a view and all descendent
   * views.
   *
   * Setup will be aborted if no `view.el`
   * is found. If a view is already setup,
   * teardown is run first to prevent a
   * view being setup twice.
   *
   * Your custom `setup()` method is called
   *
   * Options:
   *
   *  - `shallow` Does not recurse when `true` (default `false`)
   *
   * @param  {Object} options
   * @return {Module}
   */
  proto.setup = function(options) {
    var shallow = options && options.shallow;

    // Attempt to fetch the view's
    // root element. Don't continue
    // if no route element is found.
    if (!this._getEl()) return this;

    // If this is already setup, call
    // `teardown` first so that we don't
    // duplicate event bindings and shizzle.
    if (this.isSetup) this.teardown({ shallow: true });

    // Fire the `setup` event hook
    this.fireStatic('before setup');
    if (this._setup) this._setup();
    this.fireStatic('setup');

    // Flag view as 'setup'
    this.isSetup = true;

    // Call 'setup' on all subviews
    // first (top down recursion)
    if (!shallow) {
      this.each(function(child) {
        child.setup();
      });
    }

    // For chaining
    return this;
  };

  /**
   * Tearsdown a view and all descendent
   * views that have been setup.
   *
   * Your custom `teardown` method is
   * called and a `teardown` event is fired.
   *
   * Options:
   *
   *  - `shallow` Does not recurse when `true` (default `false`)
   *
   * @param  {Object} options
   * @return {Module}
   */
  proto.teardown = function(options) {
    var shallow = options && options.shallow;

    // Call 'setup' on all subviews
    // first (bottom up recursion).
    if (!shallow) {
      this.each(function(child) {
        child.teardown();
      });
    }

    // Only teardown if this view
    // has been setup. Teardown
    // is supposed to undo all the
    // work setup does, and therefore
    // will likely run into undefined
    // variables if setup hasn't run.
    if (this.isSetup) {
      this.fireStatic('before teardown');
      if (this._teardown) this._teardown();
      this.fireStatic('teardown');
      this.isSetup = false;
    }

    // For chaining
    return this;
  };

  /**
   * Completely destroys a view. This means
   * a view is torn down, removed from it's
   * current layout context and removed
   * from the DOM.
   *
   * Your custom `destroy` method is
   * called and a `destroy` event is fired.
   *
   * NOTE: `.remove()` is only run on the view
   * that `.destroy()` is directly called on.
   *
   * Options:
   *
   *  - `fromDOM` Whether the view should be removed from DOM (default `true`)
   *
   * @api public
   */
  proto.destroy = function(options) {
    options = options || {};

    var remove = options.remove !== false;
    var l = this.children.length;

    // Destroy each child view.
    // We don't waste time removing
    // the child elements as they will
    // get removed when the parent
    // element is removed.
    //
    // We can't use the standard Module#each()
    // as the array length gets altered
    // with each iteration, hense the
    // reverse while loop.
    while (l--) {
      this.children[l].destroy({ remove: false });
    }

    // Don't continue if this view
    // has already been destroyed.
    if (this.destroyed) return this;

    // .remove() is only run on the view that
    // destroy() was called on.
    //
    // It is a waste of time to remove the
    // descendent views as well, as any
    // references to them will get wiped
    // within destroy and they will get
    // removed from the DOM with the main view.
    if (remove) this.remove(options);

    // Run teardown
    this.teardown({ shallow: true });

    // Fire an event hook before the
    // custom destroy logic is run
    this.fireStatic('before destroy');

    // If custom destroy logic has been
    // defined on the prototype then run it.
    if (this._destroy) this._destroy();

    // Trigger a `destroy` event
    // for custom Modules to bind to.
    this.fireStatic('destroy');

    // Unbind any old event listeners
    this.off();

    // Set a flag to say this view
    // has been destroyed. This is
    // useful to check for after a
    // slow ajax call that might come
    // back after a view has been detroyed.
    this.destroyed = true;

    // Clear references
    this.el = this.model = this.parent = this._modules = this._ids = this._id = null;
  };

  /**
   * Destroys all children.
   *
   * Is this needed?
   *
   * @return {Module}
   * @api public
   */
  proto.empty = function() {
    var l = this.children.length;
    while (l--) this.children[l].destroy();
    return this;
  };

  /**
   * Fetches all descendant elements
   * from the given root element.
   *
   * @param  {Element} root
   * @return {undefined}
   * @api private
   */
  proto._fetchEls = function(root) {
    if (!root) return;
    this.each(function(child) {
      child.el = util.byId(child._fmid, root);
      child._fetchEls(child.el || root);
    });
  };

  /**
   * Returns the Module's root element.
   *
   * If a cache is present it is used,
   * else we search the DOM, else we
   * find the closest element and
   * perform a querySelector using
   * the view._fmid.
   *
   * @return {Element|undefined}
   * @api private
   */
  proto._getEl = function() {
    if (!util.hasDom()) return;
    return this.el = this.el || document.getElementById(this._fmid);
  };

  /**
   * Sets a root element on a view.
   * If the view already has a root
   * element, it is replaced.
   *
   * IMPORTANT: All descendent root
   * element caches are purged so that
   * the new correct elements are retrieved
   * next time Module#getElement is called.
   *
   * @param {Element} el
   * @return {Module}
   * @api private
   */
  proto._setEl = function(el) {
    var existing = this.el;
    var parentNode = existing && existing.parentNode;

    // If the existing element has a context, replace it
    if (parentNode) parentNode.replaceChild(el, existing);

    // Update cache
    this.el = el;

    return this;
  };

  /**
   * Empties the destination element
   * and appends the view into it.
   *
   * @param  {Element} dest
   * @return {Module}
   * @api public
   */
  proto.inject = function(dest) {
    if (dest) {
      dest.innerHTML = '';
      this.insertBefore(dest, null);
      this.fireStatic('inject');
    }

    return this;
  };

  /**
   * Appends the view element into
   * the destination element.
   *
   * @param  {Element} dest
   * @return {Module}
   * @api public
   */
  proto.appendTo = function(dest) {
    return this.insertBefore(dest, null);
  };

  /**
   * Inserts the view element before the
   * given child of the destination element.
   *
   * @param  {Element} dest
   * @param  {Element} beforeEl
   * @return {Module}
   * @api public
   */
  proto.insertBefore = function(dest, beforeEl) {
    if (this.el && dest && dest.insertBefore) {
      dest.insertBefore(this.el, beforeEl);

      // This badly-named event is for legacy reasons; perhaps 'insert' would be better here?
      this.fireStatic('appendto');
    }

    return this;
  };

  /**
   * Returns a JSON represention of
   * a FruitMachine Module. This can
   * be generated serverside and
   * passed into new FruitMachine(json)
   * to inflate serverside rendered
   * views.
   *
   * @return {Object}
   * @api public
   */
  proto.toJSON = function() {
    var json = {};
    json.children = [];

    // Recurse
    this.each(function(child) {
      json.children.push(child.toJSON());
    });

    json.id = this.id();
    json.fmid = this._fmid;
    json.module = this.module();
    json.model = this.model.toJSON();
    json.slot = this.slot;

    // Fire a hook to allow third
    // parties to alter the json output
    this.fireStatic('tojson', json);

    return json;
  };

  // Events
  proto.on = events.on;
  proto.off = events.off;
  proto.fire = events.fire;
  proto.fireStatic = events.fireStatic;

  // Allow Modules to be extended
  Module.extend = extend(util.keys(proto));

  // Adding proto.Model after
  // Module.extend means this
  // key can be overwritten.
  proto.Model = fm.Model;

  return Module;
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/lib/module/index.js","/../../node_modules/fruitmachine/lib/module")
},{"./events":11,"buffer":18,"extend":14,"oMfpAn":21,"utils":17}],13:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

/**
 * Event
 *
 * A super lightweight
 * event emitter library.
 *
 * @version 0.1.4
 * @author Wilson Page <wilson.page@me.com>
 */

/**
 * Locals
 */

var proto = Event.prototype;

/**
 * Expose `Event`
 */

module.exports = Event;

/**
 * Creates a new event emitter
 * instance, or if passed an
 * object, mixes the event logic
 * into it.
 *
 * @param  {Object} obj
 * @return {Object}
 */
function Event(obj) {
  if (!(this instanceof Event)) return new Event(obj);
  if (obj) return mixin(obj, proto);
}

/**
 * Registers a callback
 * with an event name.
 *
 * @param  {String}   name
 * @param  {Function} cb
 * @return {Event}
 */
proto.on = function(name, cb) {
  this._cbs = this._cbs || {};
  (this._cbs[name] || (this._cbs[name] = [])).unshift(cb);
  return this;
};

/**
 * Removes a single callback,
 * or all callbacks associated
 * with the passed event name.
 *
 * @param  {String}   name
 * @param  {Function} cb
 * @return {Event}
 */
proto.off = function(name, cb) {
  this._cbs = this._cbs || {};

  if (!name) return this._cbs = {};
  if (!cb) return delete this._cbs[name];

  var cbs = this._cbs[name] || [];
  var i;

  while (cbs && ~(i = cbs.indexOf(cb))) cbs.splice(i, 1);
  return this;
};

/**
 * Fires an event. Which triggers
 * all callbacks registered on this
 * event name.
 *
 * @param  {String} name
 * @return {Event}
 */
proto.fire = function(options) {
  this._cbs = this._cbs || {};
  var name = options.name || options;
  var ctx = options.ctx || this;
  var cbs = this._cbs[name];

  if (cbs) {
    var args = [].slice.call(arguments, 1);
    var l = cbs.length;
    while (l--) cbs[l].apply(ctx, args);
  }

  return this;
};

/**
 * Util
 */

/**
 * Mixes in the properties
 * of the second object into
 * the first.
 *
 * @param  {Object} a
 * @param  {Object} b
 * @return {Object}
 */
function mixin(a, b) {
  for (var key in b) a[key] = b[key];
  return a;
}
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/node_modules/event/lib/event.js","/../../node_modules/fruitmachine/node_modules/event/lib")
},{"buffer":18,"oMfpAn":21}],14:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*jshint browser:true, node:true*/

'use strict';

/**
 * Module Dependencies
 */

var mixin = require('utils').mixin;

/**
 * Exports
 */

module.exports = function(keys) {

  return function(proto) {
    var parent = this;
    var child = function(){ return parent.apply(this, arguments); };

    // Mixin static properties
    // eg. View.extend.
    mixin(child, parent);

    // Make sure there are no
    // keys conflicting with
    // the prototype.
    if (keys) protect(keys, proto);

    // Set the prototype chain to
    // inherit from `parent`, without
    // calling `parent`'s constructor function.
    function C() { this.constructor = child; }
    C.prototype = parent.prototype;
    child.prototype = new C();

    // Add prototype properties
    mixin(child.prototype, proto);

    // Set a convenience property
    // in case the parent's prototype
    // is needed later.
    child.__super__ = parent.prototype;

    return child;
  };
};

/**
 * Makes sure no properties
 * or methods can be overwritten
 * on the core View.prototype.
 *
 * If conflicting keys are found,
 * we create a new key prifixed with
 * a '_' and delete the original key.
 *
 * @param  {Array} keys
 * @param  {Object} ob
 * @return {[type]}
 */
function protect(keys, ob) {
  for (var key in ob) {
    if (ob.hasOwnProperty(key) && ~keys.indexOf(key)) {
      ob['_' + key] = ob[key];
      delete ob[key];
    }
  }
}
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/node_modules/extend/index.js","/../../node_modules/fruitmachine/node_modules/extend")
},{"buffer":18,"oMfpAn":21,"utils":17}],15:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

'use strict';

/**
 * Module Dependencies
 */

var events = require('event');
var mixin = require('mixin');

/**
 * Exports
 */

module.exports = Model;

/**
 * Locals
 */

var proto = Model.prototype;

/**
 * Model constructor.
 *
 * @constructor
 * @param {Object} data
 * @api public
 */
function Model(data) {
  this._data = mixin({}, data);
}

/**
 * Gets a value by key
 *
 * If no key is given, the
 * whole model is returned.
 *
 * @param  {String} key
 * @return {*}
 * @api public
 */
proto.get = function(key) {
  return key !== undefined && key !== false
    ? this._data[key]
    : this._data;
};

/**
 * Sets data on the model.
 *
 * Accepts either a key and
 * value, or an object literal.
 *
 * @param {String|Object} key
 * @param {*|undefined} value
 */
proto.set = function(data, value) {

  // If a string key is passed
  // with a value. Set the value
  // on the key in the data store.
  if ('string' === typeof data && typeof value !== 'undefined') {
    this._data[data] = value;
    this.fire('change:' + data, value);
  }

  // Merge the object into the data store
  if ('object' === typeof data) {
    mixin(this._data, data);
    for (var prop in data) this.fire('change:' + prop, data[prop]);
  }

  // Always fire a
  // generic change event
  this.fire('change');

  // Allow chaining
  return this;
};

/**
 * CLears the data store.
 *
 * @return {Model}
 */
proto.clear = function() {
  this._data = {};
  this.fire('change');

  // Allow chaining
  return this;
};

/**
 * Deletes the data store.
 *
 * @return {undefined}
 */
proto.destroy = function() {
  for (var key in this._data) this._data[key] = null;
  delete this._data;
  this.fire('destroy');
};

/**
 * Returns a shallow
 * clone of the data store.
 *
 * @return {Object}
 */
proto.toJSON = function() {
  return mixin({}, this._data);
};

// Mixin events
events(proto);

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/node_modules/model/index.js","/../../node_modules/fruitmachine/node_modules/model")
},{"buffer":18,"event":13,"mixin":16,"oMfpAn":21}],16:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

'use strict';

/**
 * Locals
 */

var has = {}.hasOwnProperty;

/**
 * Exports
 */

module.exports = function(main) {
  var args = arguments;
  var l = args.length;
  var i = 0;
  var src;
  var key;

  while (++i < l) {
    src = args[i];
    for (key in src) {
      if (has.call(src, key)) {
        main[key] = src[key];
      }
    }
  }

  return main;
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/node_modules/model/node_modules/mixin/index.js","/../../node_modules/fruitmachine/node_modules/model/node_modules/mixin")
},{"buffer":18,"oMfpAn":21}],17:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){

/*jshint browser:true, node:true*/

'use strict';

exports.bind = function(method, context) {
  return function() { return method.apply(context, arguments); };
};

exports.isArray = function(arg) {
  return arg instanceof Array;
},

exports.mixin = function(original, source) {
  for (var key in source) original[key] = source[key];
  return original;
},

exports.byId = function(id, el) {
  if (el) return el.querySelector('#' + id);
},

/**
 * Inserts an item into an array.
 * Has the option to state an index.
 *
 * @param  {*} item
 * @param  {Array} array
 * @param  {Number} index
 * @return void
 */
exports.insert = function(item, array, index) {
  if (typeof index !== 'undefined') {
    array.splice(index, 0, item);
  } else {
    array.push(item);
  }
},

exports.toNode = function(html) {
  var el = document.createElement('div');
  el.innerHTML = html;
  return el.removeChild(el.firstElementChild);
},

// Determine if we have a DOM
// in the current environment.
exports.hasDom = function() {
  return typeof document !== 'undefined';
};

var i = 0;
exports.uniqueId = function(prefix) {
  return (prefix || 'id') + ((++i) * Math.round(Math.random() * 100000));
};

exports.keys = function(object) {
  var keys = [];
  for (var key in object) keys.push(key);
  return keys;
};

exports.isPlainObject = function(ob) {
  if (!ob) return false;
  var c = (ob.constructor || '').toString();
  return !!~c.indexOf('Object');
};
}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/fruitmachine/node_modules/utils/index.js","/../../node_modules/fruitmachine/node_modules/utils")
},{"buffer":18,"oMfpAn":21}],18:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer")
},{"base64-js":19,"buffer":18,"ieee754":20,"oMfpAn":21}],19:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var ZERO   = '0'.charCodeAt(0)
	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS)
			return 62 // '+'
		if (code === SLASH)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	module.exports.toByteArray = b64ToByteArray
	module.exports.fromByteArray = uint8ToBase64
}())

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib/b64.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/base64-js/lib")
},{"buffer":18,"oMfpAn":21}],20:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function(buffer, offset, isLE, mLen, nBytes) {
  var e, m,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      nBits = -7,
      i = isLE ? (nBytes - 1) : 0,
      d = isLE ? -1 : 1,
      s = buffer[offset + i];

  i += d;

  e = s & ((1 << (-nBits)) - 1);
  s >>= (-nBits);
  nBits += eLen;
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);

  m = e & ((1 << (-nBits)) - 1);
  e >>= (-nBits);
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity);
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c,
      eLen = nBytes * 8 - mLen - 1,
      eMax = (1 << eLen) - 1,
      eBias = eMax >> 1,
      rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0),
      i = isLE ? 0 : (nBytes - 1),
      d = isLE ? 1 : -1,
      s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);

  e = (e << mLen) | m;
  eLen += mLen;
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);

  buffer[offset + i - d] |= s * 128;
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754/index.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/buffer/node_modules/ieee754")
},{"buffer":18,"oMfpAn":21}],21:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process/browser.js","/../../node_modules/gulp-browserify/node_modules/browserify/node_modules/process")
},{"buffer":18,"oMfpAn":21}],22:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */



var Hogan = {};

(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (codeObj, text, compiler, options) {
    codeObj = codeObj || {};
    this.r = codeObj.code || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.partials = codeObj.partials || {};
    this.subs = codeObj.subs || {};
    this.ib();
  }

  Hogan.Template.prototype = {
    // render: replaced by generated code.
    r: function (context, partials, indent) { return ''; },

    // variable escaping
    v: hoganEscape,

    // triple stache
    t: coerceToString,

    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },

    // render internal -- a hook for overrides that catches partials too
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },

    // ensurePartial
    ep: function(symbol, partials) {
      // make partial names not case sensative
      symbol = symbol.toLowerCase()

      var partial = this.partials[symbol];

      // check to see that if we've instantiated this partial before
      var template = partials[partial.name];
      if (partial.instance && partial.base == template) {
        return partial.instance;
      }

      if (typeof template == 'string') {
        if (!this.c) {
          throw new Error("No compiler available.");
        }
        template = this.c.compile(template, this.options);
      }

      if (!template) {
        return null;
      }

      // We use this to check whether the partials dictionary has changed
      this.partials[symbol].base = template;

      if (partial.subs) {
        template = createSpecializedPartial(template, partial.subs, partial.partials, this.text);
      }

      this.partials[symbol].instance = template;
      return template;
    },

    // tries to find a partial in the curent scope and render it
    rp: function(symbol, context, partials, indent) {
      var partial = this.ep(symbol, partials);
      if (!partial) {
        return '';
      }

      return partial.ri(context, partials, indent);
    },

    // render a section
    rs: function(context, partials, section) {
      var tail = context[context.length - 1];

      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }

      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },

    // maybe start a section
    s: function(val, ctx, partials, inverted, start, end, tags) {
      var pass;

      if (isArray(val) && val.length === 0) {
        return false;
      }

      if (typeof val == 'function') {
        val = this.ms(val, ctx, partials, inverted, start, end, tags);
      }

      pass = (val === '') || !!val;

      if (!inverted && pass && ctx) {
        ctx.push((typeof val == 'object') ? val : ctx[ctx.length - 1]);
      }

      return pass;
    },

    // find values with dotted names
    d: function(key, ctx, partials, returnFound) {
      var names = key.split('.'),
          val = this.f(names[0], ctx, partials, returnFound),
          cx = null;

      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        val = ctx[ctx.length - 1];
      } else {
          for (var i = 1; i < names.length; i++) {
            if (val && typeof val == 'object' && val[names[i]] != null) {
              cx = val;
              val = val[names[i]];
            } else {
              val = '';
            }
          }
      }

      if (returnFound && !val) {
        return false;
      }

      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.mv(val, ctx, partials);
        ctx.pop();
      }

      return val;
    },

    // find values with normal names
    f: function(key, ctx, partials, returnFound) {
      var val = false,
          v = null,
          found = false;

      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && v[key] != null) {
          val = v[key];
          found = true;
          break;
        }
      }

      if (!found) {
        return (returnFound) ? false : "";
      }

      if (!returnFound && typeof val == 'function') {
        val = this.mv(val, ctx, partials);
      }

      return val;
    },

    // higher order templates
    ls: function(func, cx, partials, text, tags) {
      var oldTags = this.options.delimiters;

      this.options.delimiters = tags;
      this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
      this.options.delimiters = oldTags;

      return false;
    },

    // compile text
    ct: function(text, cx, partials) {
      if (this.options.disableLambda) {
        throw new Error('Lambda features disabled.');
      }
      return this.c.compile(text, this.options).render(cx, partials);
    },

    // template result buffering
    b: (useArrayBuffer) ? function(s) { this.buf.push(s); } :
                          function(s) { this.buf += s; },

    fl: (useArrayBuffer) ? function() { var r = this.buf.join(''); this.buf = []; return r; } :
                           function() { var r = this.buf; this.buf = ''; return r; },
    // init the buffer
    ib: function () {
      this.buf = (useArrayBuffer) ? [] : '';
    },

    // method replace section
    ms: function(func, ctx, partials, inverted, start, end, tags) {
      var textSource,
          cx = ctx[ctx.length - 1],
          result = func.call(cx);

      if (typeof result == 'function') {
        if (inverted) {
          return true;
        } else {
          textSource = (this.activeSub && this.subsText[this.activeSub]) ? this.subsText[this.activeSub] : this.text;
          return this.ls(result, cx, partials, textSource.substring(start, end), tags);
        }
      }

      return result;
    },

    // method replace variable
    mv: function(func, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = func.call(cx);

      if (typeof result == 'function') {
        return this.ct(coerceToString(result.call(cx)), cx, partials);
      }

      return result;
    },

    sub: function(name, context, partials, indent) {
      var f = this.subs[name];
      if (f) {
        this.activeSub = name;
        f(context, partials, this, indent);
        this.activeSub = false;
      }
    }

  };

  function createSpecializedPartial(instance, subs, partials, childText) {
    function PartialTemplate() {};
    PartialTemplate.prototype = instance;
    function Substitutions() {};
    Substitutions.prototype = instance.subs;
    var key;
    var partial = new PartialTemplate();
    partial.subs = new Substitutions();
    partial.subsText = {};  //hehe. substext.
    partial.ib();

    for (key in subs) {
      partial.subs[key] = subs[key];
      partial.subsText[key] = childText;
    }

    for (key in partials) {
      partial.partials[key] = partials[key];
    }

    return partial;
  }

  var rAmp = /&/g,
      rLt = /</g,
      rGt = />/g,
      rApos =/\'/g,
      rQuot = /\"/g,
      hChars =/[&<>\"\']/;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ?
      str
        .replace(rAmp,'&amp;')
        .replace(rLt,'&lt;')
        .replace(rGt,'&gt;')
        .replace(rApos,'&#39;')
        .replace(rQuot, '&quot;') :
      str;
  }

  var isArray = Array.isArray || function(a) {
    return Object.prototype.toString.call(a) === '[object Array]';
  };

})(typeof exports !== 'undefined' ? exports : Hogan);



(function (Hogan) {
  // Setup regex  assignments
  // remove whitespace according to Mustache spec
  var rIsWhitespace = /\S/,
      rQuot = /\"/g,
      rNewline =  /\n/g,
      rCr = /\r/g,
      rSlash = /\\/g;

  Hogan.tags = {
    '#': 1, '^': 2, '<': 3, '$': 4,
    '/': 5, '!': 6, '>': 7, '=': 8, '_v': 9,
    '{': 10, '&': 11, '_t': 12
  };

  Hogan.scan = function scan(text, delimiters) {
    var len = text.length,
        IN_TEXT = 0,
        IN_TAG_TYPE = 1,
        IN_TAG = 2,
        state = IN_TEXT,
        tagType = null,
        tag = null,
        buf = '',
        tokens = [],
        seenTag = false,
        i = 0,
        lineStart = 0,
        otag = '{{',
        ctag = '}}';

    function addBuf() {
      if (buf.length > 0) {
        tokens.push({tag: '_t', text: new String(buf)});
        buf = '';
      }
    }

    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace =
          (Hogan.tags[tokens[j].tag] < Hogan.tags['_v']) ||
          (tokens[j].tag == '_t' && tokens[j].text.match(rIsWhitespace) === null);
        if (!isAllWhitespace) {
          return false;
        }
      }

      return isAllWhitespace;
    }

    function filterLine(haveSeenTag, noNewLine) {
      addBuf();

      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (tokens[j].text) {
            if ((next = tokens[j+1]) && next.tag == '>') {
              // set indent to token value
              next.indent = tokens[j].text.toString()
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({tag:'\n'});
      }

      seenTag = false;
      lineStart = tokens.length;
    }

    function changeDelimiters(text, index) {
      var close = '=' + ctag,
          closeIndex = text.indexOf(close, index),
          delimiters = trim(
            text.substring(text.indexOf('=', index) + 1, closeIndex)
          ).split(' ');

      otag = delimiters[0];
      ctag = delimiters[1];

      return closeIndex + close.length - 1;
    }

    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }

    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = Hogan.tags[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({tag: tagType, n: trim(buf), otag: otag, ctag: ctag,
                       i: (tagType == '/') ? seenTag - otag.length : i + ctag.length});
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }

    filterLine(seenTag, true);

    return tokens;
  }

  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }

  function trim(s) {
    if (s.trim) {
      return s.trim();
    }

    return s.replace(/^\s*|\s*$/g, '');
  }

  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }

    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }

    return true;
  }

  // the tags allowed inside super templates
  var allowedInSuper = {'_t': true, '\n': true, '$': true, '/': true};

  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [],
        opener = null,
        tail = null,
        token = null;

    tail = stack[stack.length - 1];

    while (tokens.length > 0) {
      token = tokens.shift();

      if (tail && tail.tag == '<' && !(token.tag in allowedInSuper)) {
        throw new Error('Illegal content in < super tag.');
      }

      if (Hogan.tags[token.tag] <= Hogan.tags['$'] || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else if (token.tag == '\n') {
        token.last = (tokens.length == 0) || (tokens[0].tag == '\n');
      }

      instructions.push(token);
    }

    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }

    return instructions;
  }

  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }

  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }

  function stringifySubstitutions(obj) {
    var items = [];
    for (var key in obj) {
      items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + '}');
    }
    return "{ " + items.join(",") + " }";
  }

  function stringifyPartials(codeObj) {
    var partials = [];
    for (var key in codeObj.partials) {
      partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name.toLowerCase()) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
    }
    return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
  }

  Hogan.stringify = function(codeObj, text, options) {
    return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) +  "}";
  }

  var serialNo = 0;
  Hogan.generate = function(tree, text, options) {
    serialNo = 0;
    var context = { code: '', subs: {}, partials: {} };
    Hogan.walk(tree, context);

    if (options.asString) {
      return this.stringify(context, text, options);
    }

    return this.makeTemplate(context, text, options);
  }

  Hogan.wrapMain = function(code) {
    return 'var t=this;t.b(i=i||"");' + code + 'return t.fl();';
  }

  Hogan.template = Hogan.Template;

  Hogan.makeTemplate = function(codeObj, text, options) {
    var template = this.makePartials(codeObj);
    template.code = new Function('c', 'p', 'i', this.wrapMain(codeObj.code));
    return new this.template(template, text, this, options);
  }

  Hogan.makePartials = function(codeObj) {
    var key, template = {subs: {}, partials: codeObj.partials, name: codeObj.name};
    for (key in template.partials) {
      // key = key.toLowerCase()
      template.partials[key] = this.makePartials(template.partials[key]);
    }
    for (key in codeObj.subs) {
      template.subs[key] = new Function('c', 'p', 't', 'i', codeObj.subs[key]);
    }
    return template;
  }

  function esc(s) {
    return s.replace(rSlash, '\\\\')
            .replace(rQuot, '\\\"')
            .replace(rNewline, '\\n')
            .replace(rCr, '\\r');
  }

  function chooseMethod(s) {
    return (~s.indexOf('.')) ? 'd' : 'f';
  }

  function createPartial(node, context) {
    var prefix = "<" + (context.prefix || "");
    var sym = prefix + node.n + serialNo++;

    // make partial names not case sensative
    context.partials[sym.toLowerCase()] = {name: node.n, partials: {}};
    context.code += 't.b(t.rp("' +  esc(sym) + '",c,p,"' + (node.indent || '') + '"));';
    return sym;
  }

  Hogan.codegen = {
    '#': function(node, context) {
      context.code += 'if(t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' +
                      'c,p,0,' + node.i + ',' + node.end + ',"' + node.otag + " " + node.ctag + '")){' +
                      't.rs(c,p,' + 'function(c,p,t){';
      Hogan.walk(node.nodes, context);
      context.code += '});c.pop();}';
    },

    '^': function(node, context) {
      context.code += 'if(!t.s(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
      Hogan.walk(node.nodes, context);
      context.code += '};';
    },

    '>': createPartial,
    '<': function(node, context) {
      var ctx = {partials: {}, code: '', subs: {}, inPartial: true};
      Hogan.walk(node.nodes, ctx);
      var template = context.partials[createPartial(node, context)];
      template.subs = ctx.subs;
      template.partials = ctx.partials;
    },

    '$': function(node, context) {
      var ctx = {subs: {}, code: '', partials: context.partials, prefix: node.n};
      Hogan.walk(node.nodes, ctx);
      context.subs[node.n] = ctx.code;
      if (!context.inPartial) {
        context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
      }
    },

    '\n': function(node, context) {
      context.code += write('"\\n"' + (node.last ? '' : ' + i'));
    },

    '_v': function(node, context) {
      context.code += 't.b(t.v(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    },

    '_t': function(node, context) {
      context.code += write('"' + esc(node.text) + '"');
    },

    '{': tripleStache,

    '&': tripleStache
  }

  function tripleStache(node, context) {
    context.code += 't.b(t.t(t.' + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
  }

  function write(s) {
    return 't.b(' + s + ');';
  }

  Hogan.walk = function (nodelist, context) {
    var func;
    for (var i = 0, l = nodelist.length; i < l; i++) {
      func = Hogan.codegen[nodelist[i].tag];
      func && func(nodelist[i], context);
    }
    return context;
  }

  Hogan.parse = function(tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  },

  Hogan.cache = {};

  Hogan.cacheKey = function(text, options) {
    return [text, !!options.asString, !!options.disableLambda].join('||');
  },

  Hogan.compile = function(text, options) {
    options = options || {};
    var key = Hogan.cacheKey(text, options);
    var template = this.cache[key];

    if (template) {
      return template;
    }

    template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = template;
  };
})(typeof exports !== 'undefined' ? exports : Hogan);

}).call(this,require("oMfpAn"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/../../node_modules/hogan-updated/hogan.js","/../../node_modules/hogan-updated")
},{"buffer":18,"oMfpAn":21}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvaG9tZS9hZGEvZ2l0V29ya2luZ0Rpci9mdC1hZGEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL2FwcC9famF2YXNjcmlwdC9mYWtlX2UwYzc5NDUzLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL2FwcC9famF2YXNjcmlwdC9mcnVpdC9hcHBsZS5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9hcHAvX2phdmFzY3JpcHQvZnJ1aXQvYmFuYW5hLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL2FwcC9famF2YXNjcmlwdC9mcnVpdC9pbmRleC5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9hcHAvX2phdmFzY3JpcHQvZnJ1aXQvbGF5b3V0LWEuanMiLCIvaG9tZS9hZGEvZ2l0V29ya2luZ0Rpci9mdC1hZGEvYXBwL19qYXZhc2NyaXB0L2ZydWl0L21lbG9uLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL2FwcC9famF2YXNjcmlwdC90ZW1wbGF0ZXMuanMiLCIvaG9tZS9hZGEvZ2l0V29ya2luZ0Rpci9mdC1hZGEvbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9saWIvZGVmaW5lLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbGliL2ZydWl0bWFjaGluZS5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL2xpYi9pbmRleC5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL2xpYi9tb2R1bGUvZXZlbnRzLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbGliL21vZHVsZS9pbmRleC5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy9ldmVudC9saWIvZXZlbnQuanMiLCIvaG9tZS9hZGEvZ2l0V29ya2luZ0Rpci9mdC1hZGEvbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbm9kZV9tb2R1bGVzL21vZGVsL2luZGV4LmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbm9kZV9tb2R1bGVzL21vZGVsL25vZGVfbW9kdWxlcy9taXhpbi9pbmRleC5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy91dGlscy9pbmRleC5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvaW5kZXguanMiLCIvaG9tZS9hZGEvZ2l0V29ya2luZ0Rpci9mdC1hZGEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliL2I2NC5qcyIsIi9ob21lL2FkYS9naXRXb3JraW5nRGlyL2Z0LWFkYS9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCIvaG9tZS9hZGEvZ2l0V29ya2luZ0Rpci9mdC1hZGEvbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwiL2hvbWUvYWRhL2dpdFdvcmtpbmdEaXIvZnQtYWRhL25vZGVfbW9kdWxlcy9ob2dhbi11cGRhdGVkL2hvZ2FuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2o2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuL2ZydWl0Jyk7IC8vSW5zdGFudGlhdGUgc29tZSBmcnVpdCBpbiBmcnVpdG1hY2hpbmUuXG52YXIgZnJ1aXRtYWNoaW5lID0gcmVxdWlyZSgnZnJ1aXRtYWNoaW5lJyk7XG5cbnZhciBsYXlvdXQgPSBmcnVpdG1hY2hpbmUoe1xuXHRtb2R1bGU6ICdsYXlvdXQtYScsXG5cdGRhdGE6IHtcblx0XHR0aXRsZTogJ0hpJ1xuXHR9LFxuXHRjaGlsZHJlbjogW1xuXHRcdHtcblx0XHRcdG5hbWU6ICdnYWxsZXJ5Jyxcblx0XHRcdG1vZHVsZTogJ21lbG9uJyxcblx0XHRcdHNsb3Q6ICcxJyxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnUGFnZTEnLFxuXHRcdFx0XHRcdG1vZHVsZTogJ2JhbmFuYScsXG5cdFx0XHRcdFx0c2xvdDogJ2xlZnQtcGFuZScsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0ZGF0YTogJ0xlZnQgUGFuZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnUGFnZTInLFxuXHRcdFx0XHRcdG1vZHVsZTogJ2FwcGxlJyxcblx0XHRcdFx0XHRzbG90OiAnbWlkZGxlLXBhbmUnLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdHRleHQ6ICdDZW50ZXIgUGFuZSdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRuYW1lOiAnUGFnZTMnLFxuXHRcdFx0XHRcdG1vZHVsZTogJ2FwcGxlJyxcblx0XHRcdFx0XHRzbG90OiAncmlnaHQtcGFuZScsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0dGV4dDogJ1JpZ2h0IFBhbmUnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fVxuXHRdXG59KTtcblxubGF5b3V0LnJlbmRlcigpO1xuXG5sYXlvdXQuaW5qZWN0KGRvY3VtZW50LmJvZHkpO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mYWtlX2UwYzc5NDUzLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZnJ1aXRtYWNoaW5lID0gcmVxdWlyZSgnZnJ1aXRtYWNoaW5lJyk7XG52YXIgdGVtcGxhdGVzID0gcmVxdWlyZSgnLi4vdGVtcGxhdGVzJyk7XG5cbmZydWl0bWFjaGluZS5kZWZpbmUoe1xuXHRuYW1lOiAnYXBwbGUnLFxuXHR0ZW1wbGF0ZTogdGVtcGxhdGVzLmFwcGxlXG59KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZnJ1aXQvYXBwbGUuanNcIixcIi9mcnVpdFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGZydWl0bWFjaGluZSA9IHJlcXVpcmUoJ2ZydWl0bWFjaGluZScpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcycpO1xuXG5mcnVpdG1hY2hpbmUuZGVmaW5lKHtcblx0bmFtZTogJ2JhbmFuYScsXG5cdHRlbXBsYXRlOiB0ZW1wbGF0ZXMuYmFuYW5hXG59KTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZnJ1aXQvYmFuYW5hLmpzXCIsXCIvZnJ1aXRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4ndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vYXBwbGUnKTtcbnJlcXVpcmUoJy4vbGF5b3V0LWEnKTtcbnJlcXVpcmUoJy4vbWVsb24nKTtcbnJlcXVpcmUoJy4vYmFuYW5hJyk7XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvZnJ1aXQvaW5kZXguanNcIixcIi9mcnVpdFwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbid1c2Ugc3RyaWN0JztcblxudmFyIGZydWl0bWFjaGluZSA9IHJlcXVpcmUoJ2ZydWl0bWFjaGluZScpO1xudmFyIHRlbXBsYXRlcyA9IHJlcXVpcmUoJy4uL3RlbXBsYXRlcycpO1xuXG5mcnVpdG1hY2hpbmUuZGVmaW5lKHtcblx0bmFtZTogJ2xheW91dC1hJyxcblx0dGVtcGxhdGU6IHRlbXBsYXRlc1snbGF5b3V0LWEnXVxufSk7XG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiL2ZydWl0L2xheW91dC1hLmpzXCIsXCIvZnJ1aXRcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBmcnVpdG1hY2hpbmUgPSByZXF1aXJlKCdmcnVpdG1hY2hpbmUnKTtcbnZhciB0ZW1wbGF0ZXMgPSByZXF1aXJlKCcuLi90ZW1wbGF0ZXMnKTtcblxuZnJ1aXRtYWNoaW5lLmRlZmluZSh7XG5cdG5hbWU6ICdtZWxvbicsXG5cdHRlbXBsYXRlOiB0ZW1wbGF0ZXMubWVsb25cbn0pO1xufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi9mcnVpdC9tZWxvbi5qc1wiLFwiL2ZydWl0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIEhvZ2FuID0gcmVxdWlyZSgnaG9nYW4tdXBkYXRlZCcpO1xuICAgIHZhciB0ZW1wbGF0ZXMgPSB7fTtcbiAgICB0ZW1wbGF0ZXNbJ2FwcGxlJ10gPSBuZXcgSG9nYW4uVGVtcGxhdGUoe2NvZGU6IGZ1bmN0aW9uIChjLHAsaSkgeyB2YXIgdD10aGlzO3QuYihpPWl8fFwiXCIpO3QuYihcIkkgc2F5OiBcIik7dC5iKHQudih0LmYoXCJ0ZXh0XCIsYyxwLDApKSk7dC5iKFwiXFxuXCIpO3JldHVybiB0LmZsKCk7IH0scGFydGlhbHM6IHt9LCBzdWJzOiB7ICB9fSk7XG4gICAgdGVtcGxhdGVzWydiYW5hbmEnXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGgzPlwiKTt0LmIodC52KHQuZihcImRhdGFcIixjLHAsMCkpKTt0LmIoXCI8L2gzPlwiKTtyZXR1cm4gdC5mbCgpOyB9LHBhcnRpYWxzOiB7fSwgc3ViczogeyAgfX0pO1xuICAgIHRlbXBsYXRlc1snbGF5b3V0LWEnXSA9IG5ldyBIb2dhbi5UZW1wbGF0ZSh7Y29kZTogZnVuY3Rpb24gKGMscCxpKSB7IHZhciB0PXRoaXM7dC5iKGk9aXx8XCJcIik7dC5iKFwiPGgxPlwiKTt0LmIodC52KHQuZihcInRpdGxlXCIsYyxwLDApKSk7dC5iKFwiPC9oMT5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJzbG90LTFcXFwiPlwiKTt0LmIoXCJcXG5cIiArIGkpO3QuYih0LnQodC5mKFwiMVwiLGMscCwwKSkpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiPC9kaXY+XCIpO3JldHVybiB0LmZsKCk7IH0scGFydGlhbHM6IHt9LCBzdWJzOiB7ICB9fSk7XG4gICAgdGVtcGxhdGVzWydtZWxvbiddID0gbmV3IEhvZ2FuLlRlbXBsYXRlKHtjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgdmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJzbG90LWxlZnQtcGFuZVxcXCI+XCIpO3QuYih0LnQodC5mKFwibGVmdC1wYW5lXCIsYyxwLDApKSk7dC5iKFwiPC9kaXY+XCIpO3QuYihcIlxcblwiICsgaSk7dC5iKFwiPGRpdiBjbGFzcz1cXFwic2xvdC1taWRkbGUtcGFuZVxcXCI+XCIpO3QuYih0LnQodC5mKFwibWlkZGxlLXBhbmVcIixjLHAsMCkpKTt0LmIoXCI8L2Rpdj5cIik7dC5iKFwiXFxuXCIgKyBpKTt0LmIoXCI8ZGl2IGNsYXNzPVxcXCJzbG90LXJpZ2h0LXBhbmVcXFwiPlwiKTt0LmIodC50KHQuZihcInJpZ2h0LXBhbmVcIixjLHAsMCkpKTt0LmIoXCI8L2Rpdj5cIik7cmV0dXJuIHQuZmwoKTsgfSxwYXJ0aWFsczoge30sIHN1YnM6IHsgIH19KTtcbiAgICByZXR1cm4gdGVtcGxhdGVzO1xufSkoKTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvdGVtcGxhdGVzLmpzXCIsXCIvXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXG4vKmpzbGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSwgbGF4YnJlYWs6dHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbSkge1xuXG4gIC8qKlxuICAgKiBEZWZpbmVzIGEgbW9kdWxlLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgLSBgbmFtZSB7U3RyaW5nfWAgdGhlIG5hbWUgb2YgdGhlIG1vZHVsZVxuICAgKiAgLSBgdGFnIHtTdHJpbmd9YCB0aGUgdGFnTmFtZSB0byB1c2UgZm9yIHRoZSByb290IGVsZW1lbnRcbiAgICogIC0gYGNsYXNzZXMge0FycmF5fWAgYSBsaXN0IG9mIGNsYXNzZXMgdG8gYWRkIHRvIHRoZSByb290IGVsZW1lbnRcbiAgICogIC0gYHRlbXBsYXRlIHtGdW5jdGlvbn1gIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbiB0byB1c2Ugd2hlbiByZW5kZXJpbmdcbiAgICogIC0gYGhlbHBlcnMge0FycmF5fWAgYSBsaXN0IG9mIGhlbHBlcnMgdG8gYXBwbHkgdG8gdGhlIG1vZHVsZVxuICAgKiAgLSBgaW5pdGlhbGl6ZSB7RnVuY3Rpb259YCBjdXN0b20gbG9naWMgdG8gcnVuIHdoZW4gbW9kdWxlIGluc3RhbmNlIGNyZWF0ZWRcbiAgICogIC0gYHNldHVwIHtGdW5jdGlvbn1gIGN1c3RvbSBsb2dpYyB0byBydW4gd2hlbiBgLnNldHVwKClgIGlzIGNhbGxlZCAoZGlyZWN0bHkgb3IgaW5kaXJlY3RseSlcbiAgICogIC0gYHRlYXJkb3duIHtGdW5jdGlvbn1gIGN1c3RvbSBsb2dpYyB0byB1bmJpbmQvdW5kbyBhbnl0aGluZyBzZXR1cCBpbnRyb2R1Y2VkIChjYWxsZWQgb24gYC5kZXN0cm95KClgIGFuZCBzb21ldGltZXMgb24gYC5zZXR1cCgpYCB0byBhdm9pZCBkb3VibGUgYmluZGluZyBldmVudHMpXG4gICAqICAtIGBkZXN0cm95IHtGdW5jdGlvbn1gIGxvZ2ljIHRvIHBlcm1hbmVudGx5IGRlc3Ryb3kgYWxsIHJlZmVyZW5jZXNcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fFZpZXd9IHByb3BzXG4gICAqIEByZXR1cm4ge1ZpZXd9XG4gICAqIEBwdWJsaWMgdHJ1ZVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgdmFyIE1vZHVsZSA9ICgnb2JqZWN0JyA9PT0gdHlwZW9mIHByb3BzKVxuICAgICAgPyBmbS5Nb2R1bGUuZXh0ZW5kKHByb3BzKVxuICAgICAgOiBwcm9wcztcblxuICAgIC8vIEFsbG93IG1vZHVsZXMgdG8gYmUgbmFtZWRcbiAgICAvLyB2aWEgJ25hbWU6JyBvciAnbW9kdWxlOidcbiAgICB2YXIgcHJvdG8gPSBNb2R1bGUucHJvdG90eXBlO1xuICAgIHZhciBuYW1lID0gcHJvdG8ubmFtZSB8fCBwcm90by5fbW9kdWxlO1xuXG4gICAgLy8gU3RvcmUgdGhlIG1vZHVsZSBieSBtb2R1bGUgdHlwZVxuICAgIC8vIHNvIHRoYXQgbW9kdWxlIGNhbiBiZSByZWZlcnJlZCB0b1xuICAgIC8vIGJ5IGp1c3QgYSBzdHJpbmcgaW4gbGF5b3V0IGRlZmluaXRpb25zXG4gICAgaWYgKG5hbWUpIGZtLm1vZHVsZXNbbmFtZV0gPSBNb2R1bGU7XG5cbiAgICByZXR1cm4gTW9kdWxlO1xuICB9O1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL2xpYi9kZWZpbmUuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL2xpYlwiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qanNsaW50IGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlKi9cblxuLyoqXG4gKiBGcnVpdE1hY2hpbmVcbiAqXG4gKiBSZW5kZXJzIGxheW91dHMvbW9kdWxlcyBmcm9tIGEgYmFzaWMgbGF5b3V0IGRlZmluaXRpb24uXG4gKiBJZiB2aWV3cyByZXF1aXJlIGN1c3RvbSBpbnRlcmFjdGlvbnMgZGV2cyBjYW4gZXh0ZW5kXG4gKiB0aGUgYmFzaWMgZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBAdmVyc2lvbiAwLjMuM1xuICogQGNvcHlyaWdodCBUaGUgRmluYW5jaWFsIFRpbWVzIExpbWl0ZWQgW0FsbCBSaWdodHMgUmVzZXJ2ZWRdXG4gKiBAYXV0aG9yIFdpbHNvbiBQYWdlIDx3aWxzb24ucGFnZUBmdC5jb20+XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBEZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgbW9kID0gcmVxdWlyZSgnLi9tb2R1bGUnKTtcbnZhciBkZWZpbmUgPSByZXF1aXJlKCcuL2RlZmluZScpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgndXRpbHMnKTtcbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmcnVpdG1hY2hpbmVcbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBNb2RlbGAgQSBtb2RlbCBjb25zdHJ1Y3RvciB0byB1c2UgKG11c3QgaGF2ZSBgLnRvSlNPTigpYClcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAvKipcbiAgICogU2hvcnRjdXQgbWV0aG9kIGZvclxuICAgKiBjcmVhdGluZyBsYXp5IHZpZXdzLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IG9wdGlvbnNcbiAgICogQHJldHVybiB7TW9kdWxlfVxuICAgKi9cbiAgZnVuY3Rpb24gZm0ob3B0aW9ucykge1xuICAgIHZhciBNb2R1bGUgPSBmbS5tb2R1bGVzW29wdGlvbnMubW9kdWxlXTtcbiAgICBpZiAoTW9kdWxlKSByZXR1cm4gbmV3IE1vZHVsZShvcHRpb25zKTtcbiAgfVxuXG4gIGZtLmNyZWF0ZSA9IG1vZHVsZS5leHBvcnRzO1xuICBmbS5Nb2RlbCA9IG9wdGlvbnMuTW9kZWw7XG4gIGZtLkV2ZW50cyA9IGV2ZW50cztcbiAgZm0uTW9kdWxlID0gbW9kKGZtKTtcbiAgZm0uZGVmaW5lID0gZGVmaW5lKGZtKTtcbiAgZm0udXRpbCA9IHV0aWxzO1xuICBmbS5tb2R1bGVzID0ge307XG4gIGZtLmNvbmZpZyA9IHtcbiAgICB0ZW1wbGF0ZUl0ZXJhdG9yOiAnY2hpbGRyZW4nLFxuICAgIHRlbXBsYXRlSW5zdGFuY2U6ICdjaGlsZCdcbiAgfTtcblxuICAvLyBNaXhpbiBldmVudHMgYW5kIHJldHVyblxuICByZXR1cm4gZXZlbnRzKGZtKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9saWIvZnJ1aXRtYWNoaW5lLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cbi8qanNsaW50IGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlKi9cblxuLyoqXG4gKiBGcnVpdE1hY2hpbmUgU2luZ2xldG9uXG4gKlxuICogUmVuZGVycyBsYXlvdXRzL21vZHVsZXMgZnJvbSBhIGJhc2ljIGxheW91dCBkZWZpbml0aW9uLlxuICogSWYgdmlld3MgcmVxdWlyZSBjdXN0b20gaW50ZXJhY3Rpb25zIGRldnMgY2FuIGV4dGVuZFxuICogdGhlIGJhc2ljIGZ1bmN0aW9uYWxpdHkuXG4gKlxuICogQHZlcnNpb24gMC42LjBcbiAqIEBjb3B5cmlnaHQgVGhlIEZpbmFuY2lhbCBUaW1lcyBMaW1pdGVkIFtBbGwgUmlnaHRzIFJlc2VydmVkXVxuICogQGF1dGhvciBXaWxzb24gUGFnZSA8d2lsc29uLnBhZ2VAZnQuY29tPlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgRGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIGZydWl0TWFjaGluZSA9IHJlcXVpcmUoJy4vZnJ1aXRtYWNoaW5lJyk7XG52YXIgTW9kZWwgPSByZXF1aXJlKCdtb2RlbCcpO1xuXG4vKipcbiAqIEV4cG9ydHNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZydWl0TWFjaGluZSh7IE1vZGVsOiBNb2RlbCB9KTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL2xpYi9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXG4vKipcbiAqIE1vZHVsZSBEZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgZXZlbnRzID0gcmVxdWlyZSgnZXZlbnQnKTtcblxuLyoqXG4gKiBMb2NhbCB2YXJzXG4gKi9cblxudmFyIGxpc3RlbmVyTWFwID0ge307XG5cbi8qKlxuICogUmVnaXN0ZXJzIGEgZXZlbnQgbGlzdGVuZXIuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIG5hbWVcbiAqIEBwYXJhbSAge1N0cmluZ30gICBtb2R1bGVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7Vmlld31cbiAqL1xuZXhwb3J0cy5vbiA9IGZ1bmN0aW9uKG5hbWUsIG1vZHVsZSwgY2IpIHtcbiAgdmFyIGw7XG5cbiAgLy8gY2IgY2FuIGJlIHBhc3NlZCBhc1xuICAvLyB0aGUgc2Vjb25kIG9yIHRoaXJkIGFyZ3VtZW50XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9PSAnc3RyaW5nJykge1xuICAgIGNiID0gbW9kdWxlO1xuICAgIG1vZHVsZSA9IG51bGw7XG4gIH1cblxuICAvLyBpZiBhIG1vZHVsZSBpcyBwcm92aWRlZFxuICAvLyBwYXNzIGluIGEgc3BlY2lhbCBjYWxsYmFja1xuICAvLyBmdW5jdGlvbiB0aGF0IGNoZWNrcyB0aGVcbiAgLy8gbW9kdWxlXG4gIGlmIChtb2R1bGUpIHtcbiAgICBpZiAoIWxpc3RlbmVyTWFwW25hbWVdKSBsaXN0ZW5lck1hcFtuYW1lXSA9IFtdO1xuICAgIGwgPSBsaXN0ZW5lck1hcFtuYW1lXS5wdXNoKHtcbiAgICAgIG9yaWc6IGNiLFxuICAgICAgY2I6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5ldmVudC50YXJnZXQubW9kdWxlKCkgPT09IG1vZHVsZSkge1xuICAgICAgICAgIGNiLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICBldmVudHMucHJvdG90eXBlLm9uLmNhbGwodGhpcywgbmFtZSwgbGlzdGVuZXJNYXBbbmFtZV1bbC0xXS5jYik7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzLnByb3RvdHlwZS5vbi5jYWxsKHRoaXMsIG5hbWUsIGNiKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBVbnJlZ2lzdGVycyBhIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gICBuYW1lXG4gKiBAcGFyYW0gIHtTdHJpbmd9ICAgbW9kdWxlXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gY2JcbiAqIEByZXR1cm4ge1ZpZXd9XG4gKi9cbmV4cG9ydHMub2ZmID0gZnVuY3Rpb24obmFtZSwgbW9kdWxlLCBjYikge1xuXG4gIC8vIGNiIGNhbiBiZSBwYXNzZWQgYXNcbiAgLy8gdGhlIHNlY29uZCBvciB0aGlyZCBhcmd1bWVudFxuICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3N0cmluZycpIHtcbiAgICBjYiA9IG1vZHVsZTtcbiAgICBtb2R1bGUgPSBudWxsO1xuICB9XG5cbiAgaWYgKGxpc3RlbmVyTWFwW25hbWVdKSB7XG4gICAgbGlzdGVuZXJNYXBbbmFtZV0gPSBsaXN0ZW5lck1hcFtuYW1lXS5maWx0ZXIoZnVuY3Rpb24obWFwKSB7XG5cbiAgICAgIC8vIElmIGEgY2FsbGJhY2sgcHJvdmlkZWQsIGtlZXAgaXRcbiAgICAgIC8vIGluIHRoZSBsaXN0ZW5lciBtYXAgaWYgaXQgZG9lc24ndCBtYXRjaFxuICAgICAgaWYgKGNiICYmIG1hcC5vcmlnICE9PSBjYikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgLy8gT3RoZXJ3aXNlIHJlbW92ZSBpdCBmcm9tIHRoZSBsaXN0ZW5lclxuICAgICAgLy8gbWFwIGFuZCB1bmJpbmQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBldmVudHMucHJvdG90eXBlLm9mZi5jYWxsKHRoaXMsIG5hbWUsIG1hcC5jYik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcbiAgfVxuICBpZiAoIW1vZHVsZSkge1xuICAgIGV2ZW50cy5wcm90b3R5cGUub2ZmLmNhbGwodGhpcywgbmFtZSwgY2IpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEZpcmVzIGFuIGV2ZW50IG9uIGEgdmlldy5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge1ZpZXd9XG4gKi9cbmV4cG9ydHMuZmlyZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIF9ldmVudCA9IHRoaXMuZXZlbnQ7XG4gIHZhciBldmVudCA9IHtcbiAgICB0YXJnZXQ6IHRoaXMsXG4gICAgcHJvcGFnYXRlOiB0cnVlLFxuICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oKXsgdGhpcy5wcm9wYWdhdGUgPSBmYWxzZTsgfVxuICB9O1xuXG4gIHByb3BhZ2F0ZSh0aGlzLCBhcmd1bWVudHMsIGV2ZW50KTtcblxuICAvLyBDT01QTEVYOlxuICAvLyBJZiBhbiBlYXJsaWVyIGV2ZW50IG9iamVjdCB3YXNcbiAgLy8gY2FjaGVkLCByZXN0b3JlIHRoZSB0aGUgZXZlbnRcbiAgLy8gYmFjayBvbnRvIHRoZSB2aWV3LiBJZiB0aGVyZVxuICAvLyB3YXNuJ3QgYW4gZWFybGllciBldmVudCwgbWFrZVxuICAvLyBzdXJlIHRoZSBgZXZlbnRgIGtleSBoYXMgYmVlblxuICAvLyBkZWxldGVkIG9mZiB0aGUgdmlldy5cbiAgaWYgKF9ldmVudCkgdGhpcy5ldmVudCA9IF9ldmVudDtcbiAgZWxzZSBkZWxldGUgdGhpcy5ldmVudDtcblxuICAvLyBBbGxvdyBjaGFpbmluZ1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIHByb3BhZ2F0ZSh2aWV3LCBhcmdzLCBldmVudCkge1xuICBpZiAoIXZpZXcgfHwgIWV2ZW50LnByb3BhZ2F0ZSkgcmV0dXJuO1xuXG4gIHZpZXcuZXZlbnQgPSBldmVudDtcbiAgZXZlbnRzLnByb3RvdHlwZS5maXJlLmFwcGx5KHZpZXcsIGFyZ3MpO1xuICBwcm9wYWdhdGUodmlldy5wYXJlbnQsIGFyZ3MsIGV2ZW50KTtcbn1cblxuZXhwb3J0cy5maXJlU3RhdGljID0gZXZlbnRzLnByb3RvdHlwZS5maXJlO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbGliL21vZHVsZS9ldmVudHMuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL2xpYi9tb2R1bGVcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cbi8qanNoaW50IGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBEZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWxzJyk7XG52YXIgZXZlbnRzID0gcmVxdWlyZSgnLi9ldmVudHMnKTtcbnZhciBleHRlbmQgPSByZXF1aXJlKCdleHRlbmQnKTtcbnZhciBtaXhpbiA9IHV0aWwubWl4aW47XG5cbi8qKlxuICogRXhwb3J0c1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm0pIHtcblxuICAvLyBBbGlhcyBwcm90b3R5cGUgZm9yIG9wdGltdW1cbiAgLy8gY29tcHJlc3Npb24gdmlhIHVnbGlmeWpzXG4gIHZhciBwcm90byA9IE1vZHVsZS5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIE1vZHVsZSBjb25zdHJ1Y3RvclxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgLSBgaWQge1N0cmluZ31gIGEgdW5pcXVlIGlkIHRvIHF1ZXJ5IGJ5XG4gICAqICAtIGBtb2RlbCB7T2JqZWN0fE1vZGVsfWAgdGhlIGRhdGEgd2l0aCB3aGljaCB0byBhc3NvY2lhdGUgdGhpcyBtb2R1bGVcbiAgICogIC0gYHRhZyB7U3RyaW5nfWAgdGFnTmFtZSB0byB1c2UgZm9yIHRoZSByb290IGVsZW1lbnRcbiAgICogIC0gYGNsYXNzZXMge0FycmF5fWAgbGlzdCBvZiBjbGFzc2VzIHRvIGFkZCB0byB0aGUgcm9vdCBlbGVtZW50XG4gICAqICAtIGB0ZW1wbGF0ZSB7RnVuY3Rpb259YCBhIHRlbXBsYXRlIHRvIHVzZSBmb3IgcmVuZGVyaW5nXG4gICAqICAtIGBoZWxwZXJzIHtBcnJheX1gYSBsaXN0IG9mIGhlbHBlciBmdW5jdGlvbiB0byB1c2Ugb24gdGhpcyBtb2R1bGVcbiAgICogIC0gYGNoaWxkcmVuIHtPYmplY3R8QXJyYXl9YCBsaXN0IG9mIGNoaWxkIG1vZHVsZXNcbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBmdW5jdGlvbiBNb2R1bGUob3B0aW9ucykge1xuXG4gICAgLy8gU2hhbGxvdyBjbG9uZSB0aGUgb3B0aW9uc1xuICAgIG9wdGlvbnMgPSBtaXhpbih7fSwgb3B0aW9ucyk7XG5cbiAgICAvLyBWYXJpb3VzIGNvbmZpZyBzdGVwc1xuICAgIHRoaXMuX2NvbmZpZ3VyZShvcHRpb25zKTtcbiAgICB0aGlzLl9hZGQob3B0aW9ucy5jaGlsZHJlbik7XG5cbiAgICAvLyBGaXJlIGJlZm9yZSBpbml0aWFsaXplIGV2ZW50IGhvb2tcbiAgICB0aGlzLmZpcmVTdGF0aWMoJ2JlZm9yZSBpbml0aWFsaXplJywgb3B0aW9ucyk7XG5cbiAgICAvLyBSdW4gaW5pdGlhbGl6ZSBob29rc1xuICAgIGlmICh0aGlzLmluaXRpYWxpemUpIHRoaXMuaW5pdGlhbGl6ZShvcHRpb25zKTtcblxuICAgIC8vIEZpcmUgaW5pdGlhbGl6ZSBldmVudCBob29rXG4gICAgdGhpcy5maXJlU3RhdGljKCdpbml0aWFsaXplJywgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ29uZmlndXJlcyB0aGUgbmV3IE1vZHVsZVxuICAgKiB3aXRoIHRoZSBvcHRpb25zIHBhc3NlZFxuICAgKiB0byB0aGUgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb3RvLl9jb25maWd1cmUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgICAvLyBTZXR1cCBzdGF0aWMgcHJvcGVydGllc1xuICAgIHRoaXMuX2lkID0gb3B0aW9ucy5pZCB8fCB1dGlsLnVuaXF1ZUlkKCk7XG4gICAgdGhpcy5fZm1pZCA9IG9wdGlvbnMuZm1pZCB8fCB1dGlsLnVuaXF1ZUlkKCdmbWlkJyk7XG4gICAgdGhpcy50YWcgPSBvcHRpb25zLnRhZyB8fCB0aGlzLnRhZyB8fCAnZGl2JztcbiAgICB0aGlzLmNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXMgfHwgdGhpcy5jbGFzc2VzIHx8IFtdO1xuICAgIHRoaXMuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycyB8fCB0aGlzLmhlbHBlcnMgfHwgW107XG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuX3NldFRlbXBsYXRlKG9wdGlvbnMudGVtcGxhdGUgfHwgdGhpcy50ZW1wbGF0ZSk7XG4gICAgdGhpcy5zbG90ID0gb3B0aW9ucy5zbG90O1xuXG4gICAgLy8gQ3JlYXRlIGlkIGFuZCBtb2R1bGVcbiAgICAvLyBsb29rdXAgb2JqZWN0c1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLl9pZHMgPSB7fTtcbiAgICB0aGlzLl9tb2R1bGVzID0ge307XG4gICAgdGhpcy5zbG90cyA9IHt9O1xuXG4gICAgLy8gVXNlIHRoZSBtb2RlbCBwYXNzZWQgaW4sXG4gICAgLy8gb3IgY3JlYXRlIGEgbW9kZWwgZnJvbVxuICAgIC8vIHRoZSBkYXRhIHBhc3NlZCBpbi5cbiAgICB2YXIgbW9kZWwgPSBvcHRpb25zLm1vZGVsIHx8IG9wdGlvbnMuZGF0YSB8fCB7fTtcbiAgICB0aGlzLm1vZGVsID0gdXRpbC5pc1BsYWluT2JqZWN0KG1vZGVsKVxuICAgICAgPyBuZXcgdGhpcy5Nb2RlbChtb2RlbClcbiAgICAgIDogbW9kZWw7XG5cbiAgICAvLyBBdHRhY2ggaGVscGVyc1xuICAgIC8vIFRPRE86IEZpeCB0aGlzIGZvciBub24tRVM1IGVudmlyb25tZW50c1xuICAgIHRoaXMuaGVscGVycy5mb3JFYWNoKHRoaXMuYXR0YWNoSGVscGVyLCB0aGlzKTtcblxuICAgIC8vIFdlIGZpcmUgYW5kICdpbmZsYXRpb24nIGV2ZW50IGhlcmVcbiAgICAvLyBzbyB0aGF0IGhlbHBlcnMgY2FuIG1ha2Ugc29tZSBjaGFuZ2VzXG4gICAgLy8gdG8gdGhlIHZpZXcgYmVmb3JlIGluc3RhbnRpYXRpb24uXG4gICAgaWYgKG9wdGlvbnMuZm1pZCkge1xuICAgICAgZm0uZmlyZSgnaW5mbGF0aW9uJywgdGhpcywgb3B0aW9ucyk7XG4gICAgICB0aGlzLmZpcmVTdGF0aWMoJ2luZmxhdGlvbicsIG9wdGlvbnMpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQSBwcml2YXRlIGFkZCBtZXRob2RcbiAgICogdGhhdCBhY2NlcHRzIGEgbGlzdCBvZlxuICAgKiBjaGlsZHJlbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IGNoaWxkcmVuXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX2FkZCA9IGZ1bmN0aW9uKGNoaWxkcmVuKSB7XG4gICAgaWYgKCFjaGlsZHJlbikgcmV0dXJuO1xuXG4gICAgdmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXkoY2hpbGRyZW4pO1xuICAgIHZhciBjaGlsZDtcblxuICAgIGZvciAodmFyIGtleSBpbiBjaGlsZHJlbikge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltrZXldO1xuICAgICAgaWYgKCFpc0FycmF5KSBjaGlsZC5zbG90ID0ga2V5O1xuICAgICAgdGhpcy5hZGQoY2hpbGQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5zdGFudGlhdGVzIHRoZSBnaXZlblxuICAgKiBoZWxwZXIgb24gdGhlIE1vZHVsZS5cbiAgICpcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IGhlbHBlclxuICAgKiBAcmV0dXJuIHtNb2R1bGV9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uYXR0YWNoSGVscGVyID0gZnVuY3Rpb24oaGVscGVyKSB7XG4gICAgaWYgKGhlbHBlcikgaGVscGVyKHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvblxuICAgKiBmb3IgdGhlIHZpZXcuXG4gICAqXG4gICAqIEZvciB0ZW1wbGF0ZSBvYmplY3QgbGlrZSBIb2dhblxuICAgKiB0ZW1wbGF0ZXMgd2l0aCBhIGByZW5kZXJgIG1ldGhvZFxuICAgKiB3ZSBuZWVkIHRvIGJpbmQgdGhlIGNvbnRleHRcbiAgICogc28gdGhleSBjYW4gYmUgY2FsbGVkIHdpdGhvdXRcbiAgICogYSByZWNpZXZlci5cbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX3NldFRlbXBsYXRlID0gZnVuY3Rpb24oZm4pIHtcbiAgICByZXR1cm4gZm4gJiYgZm4ucmVuZGVyXG4gICAgICA/IHV0aWwuYmluZChmbi5yZW5kZXIsIGZuKVxuICAgICAgOiBmbjtcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGNoaWxkIHZpZXcocykgdG8gYW5vdGhlciBNb2R1bGUuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqXG4gICAqICAtIGBhdGAgVGhlIGNoaWxkIGluZGV4IGF0IHdoaWNoIHRvIGluc2VydFxuICAgKiAgLSBgaW5qZWN0YCBJbmplY3RzIHRoZSBjaGlsZCdzIHZpZXcgZWxlbWVudCBpbnRvIHRoZSBwYXJlbnQnc1xuICAgKiAgLSBgc2xvdGAgVGhlIHNsb3QgYXQgd2hpY2ggdG8gaW5zZXJ0IHRoZSBjaGlsZFxuICAgKlxuICAgKiBAcGFyYW0ge01vZHVsZXxPYmplY3R9IGNoaWxkcmVuXG4gICAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ3xOdW1iZXJ9IG9wdGlvbnN8c2xvdFxuICAgKi9cbiAgcHJvdG8uYWRkID0gZnVuY3Rpb24oY2hpbGQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIWNoaWxkKSByZXR1cm4gdGhpcztcblxuICAgIC8vIE9wdGlvbnNcbiAgICB2YXIgYXQgPSBvcHRpb25zICYmIG9wdGlvbnMuYXQ7XG4gICAgdmFyIGluamVjdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pbmplY3Q7XG4gICAgdmFyIHNsb3QgPSAoJ29iamVjdCcgPT09IHR5cGVvZiBvcHRpb25zKVxuICAgICAgPyBvcHRpb25zLnNsb3RcbiAgICAgIDogb3B0aW9ucztcblxuICAgIC8vIFJlbW92ZSB0aGlzIHZpZXcgZmlyc3QgaWYgaXQgYWxyZWFkeSBoYXMgYSBwYXJlbnRcbiAgICBpZiAoY2hpbGQucGFyZW50KSBjaGlsZC5yZW1vdmUoeyBmcm9tRE9NOiBmYWxzZSB9KTtcblxuICAgIC8vIEFzc2lnbiBhIHNsb3QgKHByZWZlcmluZyBkZWZpbmVkIG9wdGlvbilcbiAgICBzbG90ID0gY2hpbGQuc2xvdCA9IHNsb3QgfHwgY2hpbGQuc2xvdDtcblxuICAgIC8vIFJlbW92ZSBhbnkgbW9kdWxlIHRoYXQgYWxyZWFkeSBvY2N1cGllcyB0aGlzIHNsb3RcbiAgICB2YXIgcmVzaWRlbnQgPSB0aGlzLnNsb3RzW3Nsb3RdO1xuICAgIGlmIChyZXNpZGVudCkgcmVzaWRlbnQucmVtb3ZlKHsgZnJvbURPTTogZmFsc2UgfSk7XG5cbiAgICAvLyBJZiBpdCdzIG5vdCBhIE1vZHVsZSwgbWFrZSBpdCBvbmUuXG4gICAgaWYgKCEoY2hpbGQgaW5zdGFuY2VvZiBNb2R1bGUpKSBjaGlsZCA9IGZtKGNoaWxkKTtcblxuICAgIHV0aWwuaW5zZXJ0KGNoaWxkLCB0aGlzLmNoaWxkcmVuLCBhdCk7XG4gICAgdGhpcy5fYWRkTG9va3VwKGNoaWxkKTtcblxuICAgIC8vIFdlIGFwcGVuZCB0aGUgY2hpbGQgdG8gdGhlIHBhcmVudCB2aWV3IGlmIHRoZXJlIGlzIGEgdmlld1xuICAgIC8vIGVsZW1lbnQgYW5kIHRoZSB1c2VycyBoYXNuJ3QgZmxhZ2dlZCBgYXBwZW5kYCBmYWxzZS5cbiAgICBpZiAoaW5qZWN0KSB0aGlzLl9pbmplY3RFbChjaGlsZC5lbCwgb3B0aW9ucyk7XG5cbiAgICAvLyBBbGxvdyBjaGFpbmluZ1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgY2hpbGQgdmlldyBmcm9tXG4gICAqIGl0cyBjdXJyZW50IE1vZHVsZSBjb250ZXh0c1xuICAgKiBhbmQgYWxzbyBmcm9tIHRoZSBET00gdW5sZXNzXG4gICAqIG90aGVyd2lzZSBzdGF0ZWQuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqXG4gICAqICAtIGBmcm9tRE9NYCBXaGV0aGVyIHRoZSBlbGVtZW50IHNob3VsZCBiZSByZW1vdmVkIGZyb20gdGhlIERPTSAoZGVmYXVsdCBgdHJ1ZWApXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgLy8gVGhlIGZvbGxvd2luZyBhcmUgZXF1YWxcbiAgICogICAvLyBhcHBsZSBpcyByZW1vdmVkIGZyb20gdGhlXG4gICAqICAgLy8gdGhlIHZpZXcgc3RydWN0dXJlIGFuZCBET01cbiAgICogICBsYXlvdXQucmVtb3ZlKGFwcGxlKTtcbiAgICogICBhcHBsZS5yZW1vdmUoKTtcbiAgICpcbiAgICogICAvLyBBcHBsZSBpcyByZW1vdmVkIGZyb20gdGhlXG4gICAqICAgLy8gdmlldyBzdHJ1Y3R1cmUsIGJ1dCBub3QgdGhlIERPTVxuICAgKiAgIGxheW91dC5yZW1vdmUoYXBwbGUsIHsgZWw6IGZhbHNlIH0pO1xuICAgKiAgIGFwcGxlLnJlbW92ZSh7IGVsOiBmYWxzZSB9KTtcbiAgICpcbiAgICogQHJldHVybiB7RnJ1aXRNYWNoaW5lfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24ocGFyYW0xLCBwYXJhbTIpIHtcblxuICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZSBmaXJzdCBhcmcgaXMgdW5kZWZpbmVkXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgIXBhcmFtMSkgcmV0dXJuIHRoaXM7XG5cbiAgICAvLyBBbGxvdyB2aWV3LnJlbW92ZShjaGlsZFssIG9wdGlvbnNdKVxuICAgIC8vIGFuZCB2aWV3LnJlbW92ZShbb3B0aW9uc10pO1xuICAgIGlmIChwYXJhbTEgaW5zdGFuY2VvZiBNb2R1bGUpIHtcbiAgICAgIHBhcmFtMS5yZW1vdmUocGFyYW0yIHx8IHt9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vIE9wdGlvbnMgYW5kIGFsaWFzZXNcbiAgICB2YXIgb3B0aW9ucyA9IHBhcmFtMSB8fCB7fTtcbiAgICB2YXIgZnJvbURPTSA9IG9wdGlvbnMuZnJvbURPTSAhPT0gZmFsc2U7XG4gICAgdmFyIHBhcmVudCA9IHRoaXMucGFyZW50O1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbCAmJiBlbC5wYXJlbnROb2RlO1xuICAgIHZhciBpbmRleDtcblxuICAgIC8vIFVubGVzcyBzdGF0ZWQgb3RoZXJ3aXNlLFxuICAgIC8vIHJlbW92ZSB0aGUgdmlldyBlbGVtZW50XG4gICAgLy8gZnJvbSBpdHMgcGFyZW50IG5vZGUuXG4gICAgaWYgKGZyb21ET00gJiYgcGFyZW50Tm9kZSkge1xuICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcmVudCkge1xuXG4gICAgICAvLyBSZW1vdmUgcmVmZXJlbmNlIGZyb20gdmlld3MgYXJyYXlcbiAgICAgIGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgLy8gUmVtb3ZlIHJlZmVyZW5jZXMgZnJvbSB0aGUgbG9va3VwXG4gICAgICBwYXJlbnQuX3JlbW92ZUxvb2t1cCh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxvb2t1cCByZWZlcmVuY2UgZm9yXG4gICAqIHRoZSBjaGlsZCB2aWV3IHBhc3NlZC5cbiAgICpcbiAgICogQHBhcmFtIHtNb2R1bGV9IGNoaWxkXG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX2FkZExvb2t1cCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgdmFyIG1vZHVsZSA9IGNoaWxkLm1vZHVsZSgpO1xuXG4gICAgLy8gQWRkIGEgbG9va3VwIGZvciBtb2R1bGVcbiAgICAodGhpcy5fbW9kdWxlc1ttb2R1bGVdID0gdGhpcy5fbW9kdWxlc1ttb2R1bGVdIHx8IFtdKS5wdXNoKGNoaWxkKTtcblxuICAgIC8vIEFkZCBhIGxvb2t1cCBmb3IgaWRcbiAgICB0aGlzLl9pZHNbY2hpbGQuaWQoKV0gPSBjaGlsZDtcblxuICAgIC8vIFN0b3JlIGEgcmVmZXJlbmNlIGJ5IHNsb3RcbiAgICBpZiAoY2hpbGQuc2xvdCkgdGhpcy5zbG90c1tjaGlsZC5zbG90XSA9IGNoaWxkO1xuXG4gICAgY2hpbGQucGFyZW50ID0gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogUmVtb3ZlcyB0aGUgbG9va3VwIGZvciB0aGVcbiAgICogdGhlIGNoaWxkIHZpZXcgcGFzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge01vZHVsZX0gY2hpbGRcbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm90by5fcmVtb3ZlTG9va3VwID0gZnVuY3Rpb24oY2hpbGQpIHtcbiAgICB2YXIgbW9kdWxlID0gY2hpbGQubW9kdWxlKCk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIG1vZHVsZSBsb29rdXBcbiAgICB2YXIgaW5kZXggPSB0aGlzLl9tb2R1bGVzW21vZHVsZV0uaW5kZXhPZihjaGlsZCk7XG4gICAgdGhpcy5fbW9kdWxlc1ttb2R1bGVdLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGlkIGFuZCBzbG90IGxvb2t1cFxuICAgIGRlbGV0ZSB0aGlzLl9pZHNbY2hpbGQuX2lkXTtcbiAgICBkZWxldGUgdGhpcy5zbG90c1tjaGlsZC5zbG90XTtcbiAgICBkZWxldGUgY2hpbGQucGFyZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBJbmplY3RzIGFuIGVsZW1lbnQgaW50byB0aGVcbiAgICogTW9kdWxlJ3Mgcm9vdCBlbGVtZW50LlxuICAgKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBlbGVtZW50IGlzIGFwcGVuZGVkLlxuICAgKlxuICAgKiBPcHRpb25zOlxuICAgKlxuICAgKiAgLSBgYXRgIFRoZSBpbmRleCBhdCB3aGljaCB0byBpbnNlcnQuXG4gICAqXG4gICAqIEBwYXJhbSAge0VsZW1lbnR9IGVsXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb3RvLl9pbmplY3RFbCA9IGZ1bmN0aW9uKGVsLCBvcHRpb25zKSB7XG4gICAgdmFyIGF0ID0gb3B0aW9ucyAmJiBvcHRpb25zLmF0O1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLmVsO1xuICAgIGlmICghZWwgfHwgIXBhcmVudCkgcmV0dXJuO1xuXG4gICAgaWYgKHR5cGVvZiBhdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZWwsIHBhcmVudC5jaGlsZHJlblthdF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGRlY2VuZGVudCBtb2R1bGVcbiAgICogYnkgaWQsIG9yIGlmIGNhbGxlZCB3aXRoIG5vXG4gICAqIGFyZ3VtZW50cywgcmV0dXJucyB0aGlzIHZpZXcncyBpZC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICBteU1vZHVsZS5pZCgpO1xuICAgKiAgIC8vPT4gJ215X3ZpZXdfaWQnXG4gICAqXG4gICAqICAgbXlNb2R1bGUuaWQoJ215X290aGVyX3ZpZXdzX2lkJyk7XG4gICAqICAgLy89PiBNb2R1bGVcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfHVuZGVmaW5lZH0gaWRcbiAgICogQHJldHVybiB7TW9kdWxlfFN0cmluZ31cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHByb3RvLmlkID0gZnVuY3Rpb24oaWQpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9pZDtcblxuICAgIHZhciBjaGlsZCA9IHRoaXMuX2lkc1tpZF07XG4gICAgaWYgKGNoaWxkKSByZXR1cm4gY2hpbGQ7XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgIHJldHVybiB2aWV3LmlkKGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZmlyc3QgZGVzY2VuZGVudFxuICAgKiBNb2R1bGUgd2l0aCB0aGUgcGFzc2VkIG1vZHVsZSB0eXBlLlxuICAgKiBJZiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMgdGhlXG4gICAqIE1vZHVsZSdzIG93biBtb2R1bGUgdHlwZSBpcyByZXR1cm5lZC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICAvLyBBc3N1bWluZyAnbXlNb2R1bGUnIGhhcyAzIGRlc2NlbmRlbnRcbiAgICogICAvLyB2aWV3cyB3aXRoIHRoZSBtb2R1bGUgdHlwZSAnYXBwbGUnXG4gICAqXG4gICAqICAgbXlNb2R1bGUubW9kdWxlcygnYXBwbGUnKTtcbiAgICogICAvLz0+IE1vZHVsZVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleVxuICAgKiBAcmV0dXJuIHtNb2R1bGV9XG4gICAqL1xuICBwcm90by5tb2R1bGUgPSBmdW5jdGlvbihrZXkpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9tb2R1bGUgfHwgdGhpcy5uYW1lO1xuXG4gICAgdmFyIHZpZXcgPSB0aGlzLl9tb2R1bGVzW2tleV07XG4gICAgaWYgKHZpZXcgJiYgdmlldy5sZW5ndGgpIHJldHVybiB2aWV3WzBdO1xuXG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbih2aWV3KSB7XG4gICAgICByZXR1cm4gdmlldy5tb2R1bGUoa2V5KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgZGVzY2VuZGVudFxuICAgKiBNb2R1bGVzIHRoYXQgbWF0Y2ggdGhlIG1vZHVsZVxuICAgKiB0eXBlIGdpdmVuIChTaW1pbGFyIHRvXG4gICAqIEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgpOykuXG4gICAqXG4gICAqIEV4YW1wbGU6XG4gICAqXG4gICAqICAgLy8gQXNzdW1pbmcgJ215TW9kdWxlJyBoYXMgMyBkZXNjZW5kZW50XG4gICAqICAgLy8gdmlld3Mgd2l0aCB0aGUgbW9kdWxlIHR5cGUgJ2FwcGxlJ1xuICAgKlxuICAgKiAgIG15TW9kdWxlLm1vZHVsZXMoJ2FwcGxlJyk7XG4gICAqICAgLy89PiBbIE1vZHVsZSwgTW9kdWxlLCBNb2R1bGUgXVxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGtleVxuICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHByb3RvLm1vZHVsZXMgPSBmdW5jdGlvbihrZXkpIHtcbiAgICB2YXIgbGlzdCA9IHRoaXMuX21vZHVsZXNba2V5XSB8fCBbXTtcblxuICAgIC8vIFRoZW4gbG9vcCBlYWNoIGNoaWxkIGFuZCBydW4gdGhlXG4gICAgLy8gc2FtZSBvcHBlcmF0aW9uLCBhcHBlbmRpbmcgdGhlIHJlc3VsdFxuICAgIC8vIG9udG8gdGhlIGxpc3QuXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKHZpZXcpIHtcbiAgICAgIGxpc3QgPSBsaXN0LmNvbmNhdCh2aWV3Lm1vZHVsZXMoa2V5KSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdDtcbiAgfTtcblxuICAvKipcbiAgICogQ2FsbHMgdGhlIHBhc3NlZCBmdW5jdGlvblxuICAgKiBmb3IgZWFjaCBvZiB0aGUgdmlldydzXG4gICAqIGNoaWxkcmVuLlxuICAgKlxuICAgKiBFeGFtcGxlOlxuICAgKlxuICAgKiAgIG15TW9kdWxlLmVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICogICAgIC8vIERvIHN0dWZmIHdpdGggZWFjaCBjaGlsZCB2aWV3Li4uXG4gICAqICAgfSk7XG4gICAqXG4gICAqIEBwYXJhbSAge0Z1bmN0aW9ufSBmblxuICAgKiBAcmV0dXJuIHtbdHlwZV19XG4gICAqL1xuICBwcm90by5lYWNoID0gZnVuY3Rpb24oZm4pIHtcbiAgICB2YXIgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHZhciByZXN1bHQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgICAgcmVzdWx0ID0gZm4odGhpcy5jaGlsZHJlbltpXSk7XG4gICAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVGVtcGxhdGVzIHRoZSB2aWV3LCBpbmNsdWRpbmdcbiAgICogYW55IGRlc2NlbmRlbnQgdmlld3MgcmV0dXJuaW5nXG4gICAqIGFuIGh0bWwgc3RyaW5nLiBBbGwgZGF0YSBpbiB0aGVcbiAgICogdmlld3MgbW9kZWwgaXMgbWFkZSBhY2Nlc3NpYmxlXG4gICAqIHRvIHRoZSB0ZW1wbGF0ZS5cbiAgICpcbiAgICogQ2hpbGQgdmlld3MgYXJlIHByaW50ZWQgaW50byB0aGVcbiAgICogcGFyZW50IHRlbXBsYXRlIGJ5IGBpZGAuIEFsdGVybmF0aXZlbHlcbiAgICogY2hpbGRyZW4gY2FuIGJlIGl0ZXJhdGVkIG92ZXIgYSBhIGxpc3RcbiAgICogYW5kIHByaW50ZWQgd2l0aCBge3t7Y2hpbGR9fX19YC5cbiAgICpcbiAgICogRXhhbXBsZTpcbiAgICpcbiAgICogICA8ZGl2IGNsYXNzPVwic2xvdC0xXCI+e3t7PHNsb3Q+fX19PC9kaXY+XG4gICAqICAgPGRpdiBjbGFzcz1cInNsb3QtMlwiPnt7ezxzbG90Pn19fTwvZGl2PlxuICAgKlxuICAgKiAgIC8vIG9yXG4gICAqXG4gICAqICAge3sjY2hpbGRyZW59fVxuICAgKiAgICAge3t7Y2hpbGR9fX1cbiAgICogICB7ey9jaGlsZHJlbn19XG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHByb3RvLnRvSFRNTCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBodG1sID0gdGhpcy5faW5uZXJIVE1MKCk7XG5cbiAgICAvLyBXcmFwIHRoZSBodG1sIGluIGEgRnJ1aXRNYWNoaW5lXG4gICAgLy8gZ2VuZXJhdGVkIHJvb3QgZWxlbWVudCBhbmQgcmV0dXJuLlxuICAgIHJldHVybiB0aGlzLl93cmFwSFRNTChodG1sKTtcbiAgfTtcblxuICAvKipcbiAgICogR2V0IHRoZSB2aWV3J3MgaW5uZXJIVE1MXG4gICAqXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIHByb3RvLl9pbm5lckhUTUwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpcmVTdGF0aWMoJ2JlZm9yZSB0b2h0bWwnKTtcbiAgICB2YXIgZGF0YSA9IHt9O1xuICAgIHZhciBodG1sO1xuICAgIHZhciB0bXA7XG5cbiAgICAvLyBDcmVhdGUgYW4gYXJyYXkgZm9yIHZpZXdcbiAgICAvLyBjaGlsZHJlbiBkYXRhIG5lZWRlZCBpbiB0ZW1wbGF0ZS5cbiAgICBkYXRhW2ZtLmNvbmZpZy50ZW1wbGF0ZUl0ZXJhdG9yXSA9IFtdO1xuXG4gICAgLy8gTG9vcCBlYWNoIGNoaWxkXG4gICAgdGhpcy5lYWNoKGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICB0bXAgPSB7fTtcbiAgICAgIGh0bWwgPSBjaGlsZC50b0hUTUwoKTtcbiAgICAgIGRhdGFbY2hpbGQuc2xvdCB8fCBjaGlsZC5pZCgpXSA9IGh0bWw7XG4gICAgICB0bXBbZm0uY29uZmlnLnRlbXBsYXRlSW5zdGFuY2VdID0gaHRtbDtcbiAgICAgIGRhdGEuY2hpbGRyZW4ucHVzaChtaXhpbih0bXAsIGNoaWxkLm1vZGVsLnRvSlNPTigpKSk7XG4gICAgfSk7XG5cbiAgICAvLyBSdW4gdGhlIHRlbXBsYXRlIHJlbmRlciBtZXRob2RcbiAgICAvLyBwYXNzaW5nIGNoaWxkcmVuIGRhdGEgKGZvciBsb29waW5nXG4gICAgLy8gb3IgY2hpbGQgdmlld3MpIG1peGVkIHdpdGggdGhlXG4gICAgLy8gdmlldydzIG1vZGVsIGRhdGEuXG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGVcbiAgICAgID8gdGhpcy50ZW1wbGF0ZShtaXhpbihkYXRhLCB0aGlzLm1vZGVsLnRvSlNPTigpKSlcbiAgICAgIDogJyc7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdyYXBzIHRoZSBtb2R1bGUgaHRtbCBpblxuICAgKiBhIHJvb3QgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSBodG1sXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm90by5fd3JhcEhUTUwgPSBmdW5jdGlvbihodG1sKSB7XG4gICAgcmV0dXJuICc8JyArIHRoaXMudGFnICsgJyBjbGFzcz1cIicgKyB0aGlzLl9jbGFzc2VzKCkuam9pbignICcpICsgJ1wiIGlkPVwiJyArIHRoaXMuX2ZtaWQgKyAnXCI+JyArIGh0bWwgKyAnPC8nICsgdGhpcy50YWcgKyAnPic7XG4gIH07XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuICAgKiBvZiBhbGwgYSB2aWV3J3MgY2xhc3Nlc1xuICAgKlxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX2NsYXNzZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW3RoaXMubW9kdWxlKCldLmNvbmNhdCh0aGlzLmNsYXNzZXMpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSB2aWV3IGFuZCByZXBsYWNlc1xuICAgKiB0aGUgYHZpZXcuZWxgIHdpdGggYSBmcmVzaGx5XG4gICAqIHJlbmRlcmVkIG5vZGUuXG4gICAqXG4gICAqIEZpcmVzIGEgYHJlbmRlcmAgZXZlbnQgb24gdGhlIHZpZXcuXG4gICAqXG4gICAqIEByZXR1cm4ge01vZHVsZX1cbiAgICovXG4gIHByb3RvLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlyZVN0YXRpYygnYmVmb3JlIHJlbmRlcicpO1xuXG4gICAgLy8gSWYgcG9zc2libGUgcmVjeWNsZSBvdXRlciBlbGVtZW50IGJ1dFxuICAgIC8vIGJ1aWxkIGZyb20gc2NyYXRjaCBpZiB0aGVyZSBpcyBub1xuICAgIC8vIGV4aXN0aW5nIGVsZW1lbnQgb3IgaWYgdGFnIGNoYW5nZWRcbiAgICB2YXIgZWwgPSB0aGlzLmVsO1xuICAgIHZhciBjbGFzc2VzO1xuICAgIGlmIChlbCAmJiBlbC50YWdOYW1lID09PSB0aGlzLnRhZy50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBlbC5pbm5lckhUTUwgPSB0aGlzLl9pbm5lckhUTUwoKTtcbiAgICAgIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoL1xccysvKTtcbiAgICAgIHRoaXMuX2NsYXNzZXMoKS5mb3JFYWNoKGZ1bmN0aW9uKGFkZCkge1xuICAgICAgICBpZiAoIX5jbGFzc2VzLmluZGV4T2YoYWRkKSkgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyAnICsgYWRkO1xuICAgICAgfSk7XG5cbiAgICAvLyBTZXRzIGEgbmV3IGVsZW1lbnQgYXMgYSB2aWV3J3NcbiAgICAvLyByb290IGVsZW1lbnQgKHB1cmdpbmcgZGVzY2VuZGVudFxuICAgIC8vIGVsZW1lbnQgY2FjaGVzKS5cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0RWwodXRpbC50b05vZGUodGhpcy50b0hUTUwoKSkpO1xuICAgIH1cblxuICAgIC8vIEZldGNoIGFsbCBjaGlsZCBtb2R1bGUgZWxlbWVudHNcbiAgICB0aGlzLl9mZXRjaEVscyh0aGlzLmVsKTtcblxuICAgIC8vIEhhbmR5IGhvb2tcbiAgICB0aGlzLmZpcmVTdGF0aWMoJ3JlbmRlcicpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgYSB2aWV3IGFuZCBhbGwgZGVzY2VuZGVudFxuICAgKiB2aWV3cy5cbiAgICpcbiAgICogU2V0dXAgd2lsbCBiZSBhYm9ydGVkIGlmIG5vIGB2aWV3LmVsYFxuICAgKiBpcyBmb3VuZC4gSWYgYSB2aWV3IGlzIGFscmVhZHkgc2V0dXAsXG4gICAqIHRlYXJkb3duIGlzIHJ1biBmaXJzdCB0byBwcmV2ZW50IGFcbiAgICogdmlldyBiZWluZyBzZXR1cCB0d2ljZS5cbiAgICpcbiAgICogWW91ciBjdXN0b20gYHNldHVwKClgIG1ldGhvZCBpcyBjYWxsZWRcbiAgICpcbiAgICogT3B0aW9uczpcbiAgICpcbiAgICogIC0gYHNoYWxsb3dgIERvZXMgbm90IHJlY3Vyc2Ugd2hlbiBgdHJ1ZWAgKGRlZmF1bHQgYGZhbHNlYClcbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAqIEByZXR1cm4ge01vZHVsZX1cbiAgICovXG4gIHByb3RvLnNldHVwID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBzaGFsbG93ID0gb3B0aW9ucyAmJiBvcHRpb25zLnNoYWxsb3c7XG5cbiAgICAvLyBBdHRlbXB0IHRvIGZldGNoIHRoZSB2aWV3J3NcbiAgICAvLyByb290IGVsZW1lbnQuIERvbid0IGNvbnRpbnVlXG4gICAgLy8gaWYgbm8gcm91dGUgZWxlbWVudCBpcyBmb3VuZC5cbiAgICBpZiAoIXRoaXMuX2dldEVsKCkpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gSWYgdGhpcyBpcyBhbHJlYWR5IHNldHVwLCBjYWxsXG4gICAgLy8gYHRlYXJkb3duYCBmaXJzdCBzbyB0aGF0IHdlIGRvbid0XG4gICAgLy8gZHVwbGljYXRlIGV2ZW50IGJpbmRpbmdzIGFuZCBzaGl6emxlLlxuICAgIGlmICh0aGlzLmlzU2V0dXApIHRoaXMudGVhcmRvd24oeyBzaGFsbG93OiB0cnVlIH0pO1xuXG4gICAgLy8gRmlyZSB0aGUgYHNldHVwYCBldmVudCBob29rXG4gICAgdGhpcy5maXJlU3RhdGljKCdiZWZvcmUgc2V0dXAnKTtcbiAgICBpZiAodGhpcy5fc2V0dXApIHRoaXMuX3NldHVwKCk7XG4gICAgdGhpcy5maXJlU3RhdGljKCdzZXR1cCcpO1xuXG4gICAgLy8gRmxhZyB2aWV3IGFzICdzZXR1cCdcbiAgICB0aGlzLmlzU2V0dXAgPSB0cnVlO1xuXG4gICAgLy8gQ2FsbCAnc2V0dXAnIG9uIGFsbCBzdWJ2aWV3c1xuICAgIC8vIGZpcnN0ICh0b3AgZG93biByZWN1cnNpb24pXG4gICAgaWYgKCFzaGFsbG93KSB7XG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgICAgY2hpbGQuc2V0dXAoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEZvciBjaGFpbmluZ1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUZWFyc2Rvd24gYSB2aWV3IGFuZCBhbGwgZGVzY2VuZGVudFxuICAgKiB2aWV3cyB0aGF0IGhhdmUgYmVlbiBzZXR1cC5cbiAgICpcbiAgICogWW91ciBjdXN0b20gYHRlYXJkb3duYCBtZXRob2QgaXNcbiAgICogY2FsbGVkIGFuZCBhIGB0ZWFyZG93bmAgZXZlbnQgaXMgZmlyZWQuXG4gICAqXG4gICAqIE9wdGlvbnM6XG4gICAqXG4gICAqICAtIGBzaGFsbG93YCBEb2VzIG5vdCByZWN1cnNlIHdoZW4gYHRydWVgIChkZWZhdWx0IGBmYWxzZWApXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtNb2R1bGV9XG4gICAqL1xuICBwcm90by50ZWFyZG93biA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgc2hhbGxvdyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5zaGFsbG93O1xuXG4gICAgLy8gQ2FsbCAnc2V0dXAnIG9uIGFsbCBzdWJ2aWV3c1xuICAgIC8vIGZpcnN0IChib3R0b20gdXAgcmVjdXJzaW9uKS5cbiAgICBpZiAoIXNoYWxsb3cpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgICBjaGlsZC50ZWFyZG93bigpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT25seSB0ZWFyZG93biBpZiB0aGlzIHZpZXdcbiAgICAvLyBoYXMgYmVlbiBzZXR1cC4gVGVhcmRvd25cbiAgICAvLyBpcyBzdXBwb3NlZCB0byB1bmRvIGFsbCB0aGVcbiAgICAvLyB3b3JrIHNldHVwIGRvZXMsIGFuZCB0aGVyZWZvcmVcbiAgICAvLyB3aWxsIGxpa2VseSBydW4gaW50byB1bmRlZmluZWRcbiAgICAvLyB2YXJpYWJsZXMgaWYgc2V0dXAgaGFzbid0IHJ1bi5cbiAgICBpZiAodGhpcy5pc1NldHVwKSB7XG4gICAgICB0aGlzLmZpcmVTdGF0aWMoJ2JlZm9yZSB0ZWFyZG93bicpO1xuICAgICAgaWYgKHRoaXMuX3RlYXJkb3duKSB0aGlzLl90ZWFyZG93bigpO1xuICAgICAgdGhpcy5maXJlU3RhdGljKCd0ZWFyZG93bicpO1xuICAgICAgdGhpcy5pc1NldHVwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gRm9yIGNoYWluaW5nXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbXBsZXRlbHkgZGVzdHJveXMgYSB2aWV3LiBUaGlzIG1lYW5zXG4gICAqIGEgdmlldyBpcyB0b3JuIGRvd24sIHJlbW92ZWQgZnJvbSBpdCdzXG4gICAqIGN1cnJlbnQgbGF5b3V0IGNvbnRleHQgYW5kIHJlbW92ZWRcbiAgICogZnJvbSB0aGUgRE9NLlxuICAgKlxuICAgKiBZb3VyIGN1c3RvbSBgZGVzdHJveWAgbWV0aG9kIGlzXG4gICAqIGNhbGxlZCBhbmQgYSBgZGVzdHJveWAgZXZlbnQgaXMgZmlyZWQuXG4gICAqXG4gICAqIE5PVEU6IGAucmVtb3ZlKClgIGlzIG9ubHkgcnVuIG9uIHRoZSB2aWV3XG4gICAqIHRoYXQgYC5kZXN0cm95KClgIGlzIGRpcmVjdGx5IGNhbGxlZCBvbi5cbiAgICpcbiAgICogT3B0aW9uczpcbiAgICpcbiAgICogIC0gYGZyb21ET01gIFdoZXRoZXIgdGhlIHZpZXcgc2hvdWxkIGJlIHJlbW92ZWQgZnJvbSBET00gKGRlZmF1bHQgYHRydWVgKVxuICAgKlxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciByZW1vdmUgPSBvcHRpb25zLnJlbW92ZSAhPT0gZmFsc2U7XG4gICAgdmFyIGwgPSB0aGlzLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgIC8vIERlc3Ryb3kgZWFjaCBjaGlsZCB2aWV3LlxuICAgIC8vIFdlIGRvbid0IHdhc3RlIHRpbWUgcmVtb3ZpbmdcbiAgICAvLyB0aGUgY2hpbGQgZWxlbWVudHMgYXMgdGhleSB3aWxsXG4gICAgLy8gZ2V0IHJlbW92ZWQgd2hlbiB0aGUgcGFyZW50XG4gICAgLy8gZWxlbWVudCBpcyByZW1vdmVkLlxuICAgIC8vXG4gICAgLy8gV2UgY2FuJ3QgdXNlIHRoZSBzdGFuZGFyZCBNb2R1bGUjZWFjaCgpXG4gICAgLy8gYXMgdGhlIGFycmF5IGxlbmd0aCBnZXRzIGFsdGVyZWRcbiAgICAvLyB3aXRoIGVhY2ggaXRlcmF0aW9uLCBoZW5zZSB0aGVcbiAgICAvLyByZXZlcnNlIHdoaWxlIGxvb3AuXG4gICAgd2hpbGUgKGwtLSkge1xuICAgICAgdGhpcy5jaGlsZHJlbltsXS5kZXN0cm95KHsgcmVtb3ZlOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICAvLyBEb24ndCBjb250aW51ZSBpZiB0aGlzIHZpZXdcbiAgICAvLyBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZC5cbiAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHJldHVybiB0aGlzO1xuXG4gICAgLy8gLnJlbW92ZSgpIGlzIG9ubHkgcnVuIG9uIHRoZSB2aWV3IHRoYXRcbiAgICAvLyBkZXN0cm95KCkgd2FzIGNhbGxlZCBvbi5cbiAgICAvL1xuICAgIC8vIEl0IGlzIGEgd2FzdGUgb2YgdGltZSB0byByZW1vdmUgdGhlXG4gICAgLy8gZGVzY2VuZGVudCB2aWV3cyBhcyB3ZWxsLCBhcyBhbnlcbiAgICAvLyByZWZlcmVuY2VzIHRvIHRoZW0gd2lsbCBnZXQgd2lwZWRcbiAgICAvLyB3aXRoaW4gZGVzdHJveSBhbmQgdGhleSB3aWxsIGdldFxuICAgIC8vIHJlbW92ZWQgZnJvbSB0aGUgRE9NIHdpdGggdGhlIG1haW4gdmlldy5cbiAgICBpZiAocmVtb3ZlKSB0aGlzLnJlbW92ZShvcHRpb25zKTtcblxuICAgIC8vIFJ1biB0ZWFyZG93blxuICAgIHRoaXMudGVhcmRvd24oeyBzaGFsbG93OiB0cnVlIH0pO1xuXG4gICAgLy8gRmlyZSBhbiBldmVudCBob29rIGJlZm9yZSB0aGVcbiAgICAvLyBjdXN0b20gZGVzdHJveSBsb2dpYyBpcyBydW5cbiAgICB0aGlzLmZpcmVTdGF0aWMoJ2JlZm9yZSBkZXN0cm95Jyk7XG5cbiAgICAvLyBJZiBjdXN0b20gZGVzdHJveSBsb2dpYyBoYXMgYmVlblxuICAgIC8vIGRlZmluZWQgb24gdGhlIHByb3RvdHlwZSB0aGVuIHJ1biBpdC5cbiAgICBpZiAodGhpcy5fZGVzdHJveSkgdGhpcy5fZGVzdHJveSgpO1xuXG4gICAgLy8gVHJpZ2dlciBhIGBkZXN0cm95YCBldmVudFxuICAgIC8vIGZvciBjdXN0b20gTW9kdWxlcyB0byBiaW5kIHRvLlxuICAgIHRoaXMuZmlyZVN0YXRpYygnZGVzdHJveScpO1xuXG4gICAgLy8gVW5iaW5kIGFueSBvbGQgZXZlbnQgbGlzdGVuZXJzXG4gICAgdGhpcy5vZmYoKTtcblxuICAgIC8vIFNldCBhIGZsYWcgdG8gc2F5IHRoaXMgdmlld1xuICAgIC8vIGhhcyBiZWVuIGRlc3Ryb3llZC4gVGhpcyBpc1xuICAgIC8vIHVzZWZ1bCB0byBjaGVjayBmb3IgYWZ0ZXIgYVxuICAgIC8vIHNsb3cgYWpheCBjYWxsIHRoYXQgbWlnaHQgY29tZVxuICAgIC8vIGJhY2sgYWZ0ZXIgYSB2aWV3IGhhcyBiZWVuIGRldHJveWVkLlxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblxuICAgIC8vIENsZWFyIHJlZmVyZW5jZXNcbiAgICB0aGlzLmVsID0gdGhpcy5tb2RlbCA9IHRoaXMucGFyZW50ID0gdGhpcy5fbW9kdWxlcyA9IHRoaXMuX2lkcyA9IHRoaXMuX2lkID0gbnVsbDtcbiAgfTtcblxuICAvKipcbiAgICogRGVzdHJveXMgYWxsIGNoaWxkcmVuLlxuICAgKlxuICAgKiBJcyB0aGlzIG5lZWRlZD9cbiAgICpcbiAgICogQHJldHVybiB7TW9kdWxlfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcHJvdG8uZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgIHdoaWxlIChsLS0pIHRoaXMuY2hpbGRyZW5bbF0uZGVzdHJveSgpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBGZXRjaGVzIGFsbCBkZXNjZW5kYW50IGVsZW1lbnRzXG4gICAqIGZyb20gdGhlIGdpdmVuIHJvb3QgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtICB7RWxlbWVudH0gcm9vdFxuICAgKiBAcmV0dXJuIHt1bmRlZmluZWR9XG4gICAqIEBhcGkgcHJpdmF0ZVxuICAgKi9cbiAgcHJvdG8uX2ZldGNoRWxzID0gZnVuY3Rpb24ocm9vdCkge1xuICAgIGlmICghcm9vdCkgcmV0dXJuO1xuICAgIHRoaXMuZWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAgY2hpbGQuZWwgPSB1dGlsLmJ5SWQoY2hpbGQuX2ZtaWQsIHJvb3QpO1xuICAgICAgY2hpbGQuX2ZldGNoRWxzKGNoaWxkLmVsIHx8IHJvb3QpO1xuICAgIH0pO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBNb2R1bGUncyByb290IGVsZW1lbnQuXG4gICAqXG4gICAqIElmIGEgY2FjaGUgaXMgcHJlc2VudCBpdCBpcyB1c2VkLFxuICAgKiBlbHNlIHdlIHNlYXJjaCB0aGUgRE9NLCBlbHNlIHdlXG4gICAqIGZpbmQgdGhlIGNsb3Nlc3QgZWxlbWVudCBhbmRcbiAgICogcGVyZm9ybSBhIHF1ZXJ5U2VsZWN0b3IgdXNpbmdcbiAgICogdGhlIHZpZXcuX2ZtaWQuXG4gICAqXG4gICAqIEByZXR1cm4ge0VsZW1lbnR8dW5kZWZpbmVkfVxuICAgKiBAYXBpIHByaXZhdGVcbiAgICovXG4gIHByb3RvLl9nZXRFbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdXRpbC5oYXNEb20oKSkgcmV0dXJuO1xuICAgIHJldHVybiB0aGlzLmVsID0gdGhpcy5lbCB8fCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9mbWlkKTtcbiAgfTtcblxuICAvKipcbiAgICogU2V0cyBhIHJvb3QgZWxlbWVudCBvbiBhIHZpZXcuXG4gICAqIElmIHRoZSB2aWV3IGFscmVhZHkgaGFzIGEgcm9vdFxuICAgKiBlbGVtZW50LCBpdCBpcyByZXBsYWNlZC5cbiAgICpcbiAgICogSU1QT1JUQU5UOiBBbGwgZGVzY2VuZGVudCByb290XG4gICAqIGVsZW1lbnQgY2FjaGVzIGFyZSBwdXJnZWQgc28gdGhhdFxuICAgKiB0aGUgbmV3IGNvcnJlY3QgZWxlbWVudHMgYXJlIHJldHJpZXZlZFxuICAgKiBuZXh0IHRpbWUgTW9kdWxlI2dldEVsZW1lbnQgaXMgY2FsbGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsXG4gICAqIEByZXR1cm4ge01vZHVsZX1cbiAgICogQGFwaSBwcml2YXRlXG4gICAqL1xuICBwcm90by5fc2V0RWwgPSBmdW5jdGlvbihlbCkge1xuICAgIHZhciBleGlzdGluZyA9IHRoaXMuZWw7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBleGlzdGluZyAmJiBleGlzdGluZy5wYXJlbnROb2RlO1xuXG4gICAgLy8gSWYgdGhlIGV4aXN0aW5nIGVsZW1lbnQgaGFzIGEgY29udGV4dCwgcmVwbGFjZSBpdFxuICAgIGlmIChwYXJlbnROb2RlKSBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlbCwgZXhpc3RpbmcpO1xuXG4gICAgLy8gVXBkYXRlIGNhY2hlXG4gICAgdGhpcy5lbCA9IGVsO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVtcHRpZXMgdGhlIGRlc3RpbmF0aW9uIGVsZW1lbnRcbiAgICogYW5kIGFwcGVuZHMgdGhlIHZpZXcgaW50byBpdC5cbiAgICpcbiAgICogQHBhcmFtICB7RWxlbWVudH0gZGVzdFxuICAgKiBAcmV0dXJuIHtNb2R1bGV9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuICBwcm90by5pbmplY3QgPSBmdW5jdGlvbihkZXN0KSB7XG4gICAgaWYgKGRlc3QpIHtcbiAgICAgIGRlc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICB0aGlzLmluc2VydEJlZm9yZShkZXN0LCBudWxsKTtcbiAgICAgIHRoaXMuZmlyZVN0YXRpYygnaW5qZWN0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGVuZHMgdGhlIHZpZXcgZWxlbWVudCBpbnRvXG4gICAqIHRoZSBkZXN0aW5hdGlvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0gIHtFbGVtZW50fSBkZXN0XG4gICAqIEByZXR1cm4ge01vZHVsZX1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHByb3RvLmFwcGVuZFRvID0gZnVuY3Rpb24oZGVzdCkge1xuICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShkZXN0LCBudWxsKTtcbiAgfTtcblxuICAvKipcbiAgICogSW5zZXJ0cyB0aGUgdmlldyBlbGVtZW50IGJlZm9yZSB0aGVcbiAgICogZ2l2ZW4gY2hpbGQgb2YgdGhlIGRlc3RpbmF0aW9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSAge0VsZW1lbnR9IGRlc3RcbiAgICogQHBhcmFtICB7RWxlbWVudH0gYmVmb3JlRWxcbiAgICogQHJldHVybiB7TW9kdWxlfVxuICAgKiBAYXBpIHB1YmxpY1xuICAgKi9cbiAgcHJvdG8uaW5zZXJ0QmVmb3JlID0gZnVuY3Rpb24oZGVzdCwgYmVmb3JlRWwpIHtcbiAgICBpZiAodGhpcy5lbCAmJiBkZXN0ICYmIGRlc3QuaW5zZXJ0QmVmb3JlKSB7XG4gICAgICBkZXN0Lmluc2VydEJlZm9yZSh0aGlzLmVsLCBiZWZvcmVFbCk7XG5cbiAgICAgIC8vIFRoaXMgYmFkbHktbmFtZWQgZXZlbnQgaXMgZm9yIGxlZ2FjeSByZWFzb25zOyBwZXJoYXBzICdpbnNlcnQnIHdvdWxkIGJlIGJldHRlciBoZXJlP1xuICAgICAgdGhpcy5maXJlU3RhdGljKCdhcHBlbmR0bycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgSlNPTiByZXByZXNlbnRpb24gb2ZcbiAgICogYSBGcnVpdE1hY2hpbmUgTW9kdWxlLiBUaGlzIGNhblxuICAgKiBiZSBnZW5lcmF0ZWQgc2VydmVyc2lkZSBhbmRcbiAgICogcGFzc2VkIGludG8gbmV3IEZydWl0TWFjaGluZShqc29uKVxuICAgKiB0byBpbmZsYXRlIHNlcnZlcnNpZGUgcmVuZGVyZWRcbiAgICogdmlld3MuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG4gIHByb3RvLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqc29uID0ge307XG4gICAganNvbi5jaGlsZHJlbiA9IFtdO1xuXG4gICAgLy8gUmVjdXJzZVxuICAgIHRoaXMuZWFjaChmdW5jdGlvbihjaGlsZCkge1xuICAgICAganNvbi5jaGlsZHJlbi5wdXNoKGNoaWxkLnRvSlNPTigpKTtcbiAgICB9KTtcblxuICAgIGpzb24uaWQgPSB0aGlzLmlkKCk7XG4gICAganNvbi5mbWlkID0gdGhpcy5fZm1pZDtcbiAgICBqc29uLm1vZHVsZSA9IHRoaXMubW9kdWxlKCk7XG4gICAganNvbi5tb2RlbCA9IHRoaXMubW9kZWwudG9KU09OKCk7XG4gICAganNvbi5zbG90ID0gdGhpcy5zbG90O1xuXG4gICAgLy8gRmlyZSBhIGhvb2sgdG8gYWxsb3cgdGhpcmRcbiAgICAvLyBwYXJ0aWVzIHRvIGFsdGVyIHRoZSBqc29uIG91dHB1dFxuICAgIHRoaXMuZmlyZVN0YXRpYygndG9qc29uJywganNvbik7XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfTtcblxuICAvLyBFdmVudHNcbiAgcHJvdG8ub24gPSBldmVudHMub247XG4gIHByb3RvLm9mZiA9IGV2ZW50cy5vZmY7XG4gIHByb3RvLmZpcmUgPSBldmVudHMuZmlyZTtcbiAgcHJvdG8uZmlyZVN0YXRpYyA9IGV2ZW50cy5maXJlU3RhdGljO1xuXG4gIC8vIEFsbG93IE1vZHVsZXMgdG8gYmUgZXh0ZW5kZWRcbiAgTW9kdWxlLmV4dGVuZCA9IGV4dGVuZCh1dGlsLmtleXMocHJvdG8pKTtcblxuICAvLyBBZGRpbmcgcHJvdG8uTW9kZWwgYWZ0ZXJcbiAgLy8gTW9kdWxlLmV4dGVuZCBtZWFucyB0aGlzXG4gIC8vIGtleSBjYW4gYmUgb3ZlcndyaXR0ZW4uXG4gIHByb3RvLk1vZGVsID0gZm0uTW9kZWw7XG5cbiAgcmV0dXJuIE1vZHVsZTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9saWIvbW9kdWxlL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9saWIvbW9kdWxlXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXG4vKipcbiAqIEV2ZW50XG4gKlxuICogQSBzdXBlciBsaWdodHdlaWdodFxuICogZXZlbnQgZW1pdHRlciBsaWJyYXJ5LlxuICpcbiAqIEB2ZXJzaW9uIDAuMS40XG4gKiBAYXV0aG9yIFdpbHNvbiBQYWdlIDx3aWxzb24ucGFnZUBtZS5jb20+XG4gKi9cblxuLyoqXG4gKiBMb2NhbHNcbiAqL1xuXG52YXIgcHJvdG8gPSBFdmVudC5wcm90b3R5cGU7XG5cbi8qKlxuICogRXhwb3NlIGBFdmVudGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZXZlbnQgZW1pdHRlclxuICogaW5zdGFuY2UsIG9yIGlmIHBhc3NlZCBhblxuICogb2JqZWN0LCBtaXhlcyB0aGUgZXZlbnQgbG9naWNcbiAqIGludG8gaXQuXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gRXZlbnQob2JqKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBFdmVudCkpIHJldHVybiBuZXcgRXZlbnQob2JqKTtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaiwgcHJvdG8pO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVycyBhIGNhbGxiYWNrXG4gKiB3aXRoIGFuIGV2ZW50IG5hbWUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIG5hbWVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbnByb3RvLm9uID0gZnVuY3Rpb24obmFtZSwgY2IpIHtcbiAgdGhpcy5fY2JzID0gdGhpcy5fY2JzIHx8IHt9O1xuICAodGhpcy5fY2JzW25hbWVdIHx8ICh0aGlzLl9jYnNbbmFtZV0gPSBbXSkpLnVuc2hpZnQoY2IpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhIHNpbmdsZSBjYWxsYmFjayxcbiAqIG9yIGFsbCBjYWxsYmFja3MgYXNzb2NpYXRlZFxuICogd2l0aCB0aGUgcGFzc2VkIGV2ZW50IG5hbWUuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgIG5hbWVcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBjYlxuICogQHJldHVybiB7RXZlbnR9XG4gKi9cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gIHRoaXMuX2NicyA9IHRoaXMuX2NicyB8fCB7fTtcblxuICBpZiAoIW5hbWUpIHJldHVybiB0aGlzLl9jYnMgPSB7fTtcbiAgaWYgKCFjYikgcmV0dXJuIGRlbGV0ZSB0aGlzLl9jYnNbbmFtZV07XG5cbiAgdmFyIGNicyA9IHRoaXMuX2Nic1tuYW1lXSB8fCBbXTtcbiAgdmFyIGk7XG5cbiAgd2hpbGUgKGNicyAmJiB+KGkgPSBjYnMuaW5kZXhPZihjYikpKSBjYnMuc3BsaWNlKGksIDEpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRmlyZXMgYW4gZXZlbnQuIFdoaWNoIHRyaWdnZXJzXG4gKiBhbGwgY2FsbGJhY2tzIHJlZ2lzdGVyZWQgb24gdGhpc1xuICogZXZlbnQgbmFtZS5cbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0V2ZW50fVxuICovXG5wcm90by5maXJlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLl9jYnMgPSB0aGlzLl9jYnMgfHwge307XG4gIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnM7XG4gIHZhciBjdHggPSBvcHRpb25zLmN0eCB8fCB0aGlzO1xuICB2YXIgY2JzID0gdGhpcy5fY2JzW25hbWVdO1xuXG4gIGlmIChjYnMpIHtcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgbCA9IGNicy5sZW5ndGg7XG4gICAgd2hpbGUgKGwtLSkgY2JzW2xdLmFwcGx5KGN0eCwgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogVXRpbFxuICovXG5cbi8qKlxuICogTWl4ZXMgaW4gdGhlIHByb3BlcnRpZXNcbiAqIG9mIHRoZSBzZWNvbmQgb2JqZWN0IGludG9cbiAqIHRoZSBmaXJzdC5cbiAqXG4gKiBAcGFyYW0gIHtPYmplY3R9IGFcbiAqIEBwYXJhbSAge09iamVjdH0gYlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5mdW5jdGlvbiBtaXhpbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSBhW2tleV0gPSBiW2tleV07XG4gIHJldHVybiBhO1xufVxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy9ldmVudC9saWIvZXZlbnQuanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy9ldmVudC9saWJcIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG4vKmpzaGludCBicm93c2VyOnRydWUsIG5vZGU6dHJ1ZSovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgRGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIG1peGluID0gcmVxdWlyZSgndXRpbHMnKS5taXhpbjtcblxuLyoqXG4gKiBFeHBvcnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXlzKSB7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKHByb3RvKSB7XG4gICAgdmFyIHBhcmVudCA9IHRoaXM7XG4gICAgdmFyIGNoaWxkID0gZnVuY3Rpb24oKXsgcmV0dXJuIHBhcmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuXG4gICAgLy8gTWl4aW4gc3RhdGljIHByb3BlcnRpZXNcbiAgICAvLyBlZy4gVmlldy5leHRlbmQuXG4gICAgbWl4aW4oY2hpbGQsIHBhcmVudCk7XG5cbiAgICAvLyBNYWtlIHN1cmUgdGhlcmUgYXJlIG5vXG4gICAgLy8ga2V5cyBjb25mbGljdGluZyB3aXRoXG4gICAgLy8gdGhlIHByb3RvdHlwZS5cbiAgICBpZiAoa2V5cykgcHJvdGVjdChrZXlzLCBwcm90byk7XG5cbiAgICAvLyBTZXQgdGhlIHByb3RvdHlwZSBjaGFpbiB0b1xuICAgIC8vIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dFxuICAgIC8vIGNhbGxpbmcgYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICBmdW5jdGlvbiBDKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH1cbiAgICBDLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG4gICAgY2hpbGQucHJvdG90eXBlID0gbmV3IEMoKTtcblxuICAgIC8vIEFkZCBwcm90b3R5cGUgcHJvcGVydGllc1xuICAgIG1peGluKGNoaWxkLnByb3RvdHlwZSwgcHJvdG8pO1xuXG4gICAgLy8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHlcbiAgICAvLyBpbiBjYXNlIHRoZSBwYXJlbnQncyBwcm90b3R5cGVcbiAgICAvLyBpcyBuZWVkZWQgbGF0ZXIuXG4gICAgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTtcblxuICAgIHJldHVybiBjaGlsZDtcbiAgfTtcbn07XG5cbi8qKlxuICogTWFrZXMgc3VyZSBubyBwcm9wZXJ0aWVzXG4gKiBvciBtZXRob2RzIGNhbiBiZSBvdmVyd3JpdHRlblxuICogb24gdGhlIGNvcmUgVmlldy5wcm90b3R5cGUuXG4gKlxuICogSWYgY29uZmxpY3Rpbmcga2V5cyBhcmUgZm91bmQsXG4gKiB3ZSBjcmVhdGUgYSBuZXcga2V5IHByaWZpeGVkIHdpdGhcbiAqIGEgJ18nIGFuZCBkZWxldGUgdGhlIG9yaWdpbmFsIGtleS5cbiAqXG4gKiBAcGFyYW0gIHtBcnJheX0ga2V5c1xuICogQHBhcmFtICB7T2JqZWN0fSBvYlxuICogQHJldHVybiB7W3R5cGVdfVxuICovXG5mdW5jdGlvbiBwcm90ZWN0KGtleXMsIG9iKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYikge1xuICAgIGlmIChvYi5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIH5rZXlzLmluZGV4T2Yoa2V5KSkge1xuICAgICAgb2JbJ18nICsga2V5XSA9IG9iW2tleV07XG4gICAgICBkZWxldGUgb2Jba2V5XTtcbiAgICB9XG4gIH1cbn1cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9ub2RlX21vZHVsZXMvZXh0ZW5kL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9ub2RlX21vZHVsZXMvZXh0ZW5kXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTW9kdWxlIERlcGVuZGVuY2llc1xuICovXG5cbnZhciBldmVudHMgPSByZXF1aXJlKCdldmVudCcpO1xudmFyIG1peGluID0gcmVxdWlyZSgnbWl4aW4nKTtcblxuLyoqXG4gKiBFeHBvcnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNb2RlbDtcblxuLyoqXG4gKiBMb2NhbHNcbiAqL1xuXG52YXIgcHJvdG8gPSBNb2RlbC5wcm90b3R5cGU7XG5cbi8qKlxuICogTW9kZWwgY29uc3RydWN0b3IuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gTW9kZWwoZGF0YSkge1xuICB0aGlzLl9kYXRhID0gbWl4aW4oe30sIGRhdGEpO1xufVxuXG4vKipcbiAqIEdldHMgYSB2YWx1ZSBieSBrZXlcbiAqXG4gKiBJZiBubyBrZXkgaXMgZ2l2ZW4sIHRoZVxuICogd2hvbGUgbW9kZWwgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSBrZXlcbiAqIEByZXR1cm4geyp9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5wcm90by5nZXQgPSBmdW5jdGlvbihrZXkpIHtcbiAgcmV0dXJuIGtleSAhPT0gdW5kZWZpbmVkICYmIGtleSAhPT0gZmFsc2VcbiAgICA/IHRoaXMuX2RhdGFba2V5XVxuICAgIDogdGhpcy5fZGF0YTtcbn07XG5cbi8qKlxuICogU2V0cyBkYXRhIG9uIHRoZSBtb2RlbC5cbiAqXG4gKiBBY2NlcHRzIGVpdGhlciBhIGtleSBhbmRcbiAqIHZhbHVlLCBvciBhbiBvYmplY3QgbGl0ZXJhbC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xPYmplY3R9IGtleVxuICogQHBhcmFtIHsqfHVuZGVmaW5lZH0gdmFsdWVcbiAqL1xucHJvdG8uc2V0ID0gZnVuY3Rpb24oZGF0YSwgdmFsdWUpIHtcblxuICAvLyBJZiBhIHN0cmluZyBrZXkgaXMgcGFzc2VkXG4gIC8vIHdpdGggYSB2YWx1ZS4gU2V0IHRoZSB2YWx1ZVxuICAvLyBvbiB0aGUga2V5IGluIHRoZSBkYXRhIHN0b3JlLlxuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBkYXRhICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLl9kYXRhW2RhdGFdID0gdmFsdWU7XG4gICAgdGhpcy5maXJlKCdjaGFuZ2U6JyArIGRhdGEsIHZhbHVlKTtcbiAgfVxuXG4gIC8vIE1lcmdlIHRoZSBvYmplY3QgaW50byB0aGUgZGF0YSBzdG9yZVxuICBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgbWl4aW4odGhpcy5fZGF0YSwgZGF0YSk7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBkYXRhKSB0aGlzLmZpcmUoJ2NoYW5nZTonICsgcHJvcCwgZGF0YVtwcm9wXSk7XG4gIH1cblxuICAvLyBBbHdheXMgZmlyZSBhXG4gIC8vIGdlbmVyaWMgY2hhbmdlIGV2ZW50XG4gIHRoaXMuZmlyZSgnY2hhbmdlJyk7XG5cbiAgLy8gQWxsb3cgY2hhaW5pbmdcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENMZWFycyB0aGUgZGF0YSBzdG9yZS5cbiAqXG4gKiBAcmV0dXJuIHtNb2RlbH1cbiAqL1xucHJvdG8uY2xlYXIgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fZGF0YSA9IHt9O1xuICB0aGlzLmZpcmUoJ2NoYW5nZScpO1xuXG4gIC8vIEFsbG93IGNoYWluaW5nXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEZWxldGVzIHRoZSBkYXRhIHN0b3JlLlxuICpcbiAqIEByZXR1cm4ge3VuZGVmaW5lZH1cbiAqL1xucHJvdG8uZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy5fZGF0YSkgdGhpcy5fZGF0YVtrZXldID0gbnVsbDtcbiAgZGVsZXRlIHRoaXMuX2RhdGE7XG4gIHRoaXMuZmlyZSgnZGVzdHJveScpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgc2hhbGxvd1xuICogY2xvbmUgb2YgdGhlIGRhdGEgc3RvcmUuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5wcm90by50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG1peGluKHt9LCB0aGlzLl9kYXRhKTtcbn07XG5cbi8vIE1peGluIGV2ZW50c1xuZXZlbnRzKHByb3RvKTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy9tb2RlbC9pbmRleC5qc1wiLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9mcnVpdG1hY2hpbmUvbm9kZV9tb2R1bGVzL21vZGVsXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogTG9jYWxzXG4gKi9cblxudmFyIGhhcyA9IHt9Lmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEV4cG9ydHNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1haW4pIHtcbiAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gIHZhciBsID0gYXJncy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHNyYztcbiAgdmFyIGtleTtcblxuICB3aGlsZSAoKytpIDwgbCkge1xuICAgIHNyYyA9IGFyZ3NbaV07XG4gICAgZm9yIChrZXkgaW4gc3JjKSB7XG4gICAgICBpZiAoaGFzLmNhbGwoc3JjLCBrZXkpKSB7XG4gICAgICAgIG1haW5ba2V5XSA9IHNyY1trZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBtYWluO1xufTtcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy9tb2RlbC9ub2RlX21vZHVsZXMvbWl4aW4vaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy9tb2RlbC9ub2RlX21vZHVsZXMvbWl4aW5cIikiLCIoZnVuY3Rpb24gKHByb2Nlc3MsZ2xvYmFsLEJ1ZmZlcixfX2FyZ3VtZW50MCxfX2FyZ3VtZW50MSxfX2FyZ3VtZW50MixfX2FyZ3VtZW50MyxfX2ZpbGVuYW1lLF9fZGlybmFtZSl7XG5cbi8qanNoaW50IGJyb3dzZXI6dHJ1ZSwgbm9kZTp0cnVlKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmJpbmQgPSBmdW5jdGlvbihtZXRob2QsIGNvbnRleHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7IH07XG59O1xuXG5leHBvcnRzLmlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIGFyZyBpbnN0YW5jZW9mIEFycmF5O1xufSxcblxuZXhwb3J0cy5taXhpbiA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBzb3VyY2UpIHtcbiAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgb3JpZ2luYWxba2V5XSA9IHNvdXJjZVtrZXldO1xuICByZXR1cm4gb3JpZ2luYWw7XG59LFxuXG5leHBvcnRzLmJ5SWQgPSBmdW5jdGlvbihpZCwgZWwpIHtcbiAgaWYgKGVsKSByZXR1cm4gZWwucXVlcnlTZWxlY3RvcignIycgKyBpZCk7XG59LFxuXG4vKipcbiAqIEluc2VydHMgYW4gaXRlbSBpbnRvIGFuIGFycmF5LlxuICogSGFzIHRoZSBvcHRpb24gdG8gc3RhdGUgYW4gaW5kZXguXG4gKlxuICogQHBhcmFtICB7Kn0gaXRlbVxuICogQHBhcmFtICB7QXJyYXl9IGFycmF5XG4gKiBAcGFyYW0gIHtOdW1iZXJ9IGluZGV4XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZXhwb3J0cy5pbnNlcnQgPSBmdW5jdGlvbihpdGVtLCBhcnJheSwgaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDAsIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGFycmF5LnB1c2goaXRlbSk7XG4gIH1cbn0sXG5cbmV4cG9ydHMudG9Ob2RlID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZWwuaW5uZXJIVE1MID0gaHRtbDtcbiAgcmV0dXJuIGVsLnJlbW92ZUNoaWxkKGVsLmZpcnN0RWxlbWVudENoaWxkKTtcbn0sXG5cbi8vIERldGVybWluZSBpZiB3ZSBoYXZlIGEgRE9NXG4vLyBpbiB0aGUgY3VycmVudCBlbnZpcm9ubWVudC5cbmV4cG9ydHMuaGFzRG9tID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIGkgPSAwO1xuZXhwb3J0cy51bmlxdWVJZCA9IGZ1bmN0aW9uKHByZWZpeCkge1xuICByZXR1cm4gKHByZWZpeCB8fCAnaWQnKSArICgoKytpKSAqIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDEwMDAwMCkpO1xufTtcblxuZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn07XG5cbmV4cG9ydHMuaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uKG9iKSB7XG4gIGlmICghb2IpIHJldHVybiBmYWxzZTtcbiAgdmFyIGMgPSAob2IuY29uc3RydWN0b3IgfHwgJycpLnRvU3RyaW5nKCk7XG4gIHJldHVybiAhIX5jLmluZGV4T2YoJ09iamVjdCcpO1xufTtcbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2ZydWl0bWFjaGluZS9ub2RlX21vZHVsZXMvdXRpbHMvaW5kZXguanNcIixcIi8uLi8uLi9ub2RlX21vZHVsZXMvZnJ1aXRtYWNoaW5lL25vZGVfbW9kdWxlcy91dGlsc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGZlcm9zc0BmZXJvc3Mub3JnPiA8aHR0cDovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxuXG5leHBvcnRzLkJ1ZmZlciA9IEJ1ZmZlclxuZXhwb3J0cy5TbG93QnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcbkJ1ZmZlci5wb29sU2l6ZSA9IDgxOTJcblxuLyoqXG4gKiBJZiBgQnVmZmVyLl91c2VUeXBlZEFycmF5c2A6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChjb21wYXRpYmxlIGRvd24gdG8gSUU2KVxuICovXG5CdWZmZXIuX3VzZVR5cGVkQXJyYXlzID0gKGZ1bmN0aW9uICgpIHtcbiAgLy8gRGV0ZWN0IGlmIGJyb3dzZXIgc3VwcG9ydHMgVHlwZWQgQXJyYXlzLiBTdXBwb3J0ZWQgYnJvd3NlcnMgYXJlIElFIDEwKywgRmlyZWZveCA0KyxcbiAgLy8gQ2hyb21lIDcrLCBTYWZhcmkgNS4xKywgT3BlcmEgMTEuNissIGlPUyA0LjIrLiBJZiB0aGUgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGFkZGluZ1xuICAvLyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsIHRoZW4gdGhhdCdzIHRoZSBzYW1lIGFzIG5vIGBVaW50OEFycmF5YCBzdXBwb3J0XG4gIC8vIGJlY2F1c2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIGFkZCBhbGwgdGhlIG5vZGUgQnVmZmVyIEFQSSBtZXRob2RzLiBUaGlzIGlzIGFuIGlzc3VlXG4gIC8vIGluIEZpcmVmb3ggNC0yOS4gTm93IGZpeGVkOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzhcbiAgdHJ5IHtcbiAgICB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDApXG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KGJ1ZilcbiAgICBhcnIuZm9vID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfVxuICAgIHJldHVybiA0MiA9PT0gYXJyLmZvbygpICYmXG4gICAgICAgIHR5cGVvZiBhcnIuc3ViYXJyYXkgPT09ICdmdW5jdGlvbicgLy8gQ2hyb21lIDktMTAgbGFjayBgc3ViYXJyYXlgXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufSkoKVxuXG4vKipcbiAqIENsYXNzOiBCdWZmZXJcbiAqID09PT09PT09PT09PT1cbiAqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGFyZSBhdWdtZW50ZWRcbiAqIHdpdGggZnVuY3Rpb24gcHJvcGVydGllcyBmb3IgYWxsIHRoZSBub2RlIGBCdWZmZXJgIEFQSSBmdW5jdGlvbnMuIFdlIHVzZVxuICogYFVpbnQ4QXJyYXlgIHNvIHRoYXQgc3F1YXJlIGJyYWNrZXQgbm90YXRpb24gd29ya3MgYXMgZXhwZWN0ZWQgLS0gaXQgcmV0dXJuc1xuICogYSBzaW5nbGUgb2N0ZXQuXG4gKlxuICogQnkgYXVnbWVudGluZyB0aGUgaW5zdGFuY2VzLCB3ZSBjYW4gYXZvaWQgbW9kaWZ5aW5nIHRoZSBgVWludDhBcnJheWBcbiAqIHByb3RvdHlwZS5cbiAqL1xuZnVuY3Rpb24gQnVmZmVyIChzdWJqZWN0LCBlbmNvZGluZywgbm9aZXJvKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBCdWZmZXIpKVxuICAgIHJldHVybiBuZXcgQnVmZmVyKHN1YmplY3QsIGVuY29kaW5nLCBub1plcm8pXG5cbiAgdmFyIHR5cGUgPSB0eXBlb2Ygc3ViamVjdFxuXG4gIC8vIFdvcmthcm91bmQ6IG5vZGUncyBiYXNlNjQgaW1wbGVtZW50YXRpb24gYWxsb3dzIGZvciBub24tcGFkZGVkIHN0cmluZ3NcbiAgLy8gd2hpbGUgYmFzZTY0LWpzIGRvZXMgbm90LlxuICBpZiAoZW5jb2RpbmcgPT09ICdiYXNlNjQnICYmIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgc3ViamVjdCA9IHN0cmluZ3RyaW0oc3ViamVjdClcbiAgICB3aGlsZSAoc3ViamVjdC5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgICBzdWJqZWN0ID0gc3ViamVjdCArICc9J1xuICAgIH1cbiAgfVxuXG4gIC8vIEZpbmQgdGhlIGxlbmd0aFxuICB2YXIgbGVuZ3RoXG4gIGlmICh0eXBlID09PSAnbnVtYmVyJylcbiAgICBsZW5ndGggPSBjb2VyY2Uoc3ViamVjdClcbiAgZWxzZSBpZiAodHlwZSA9PT0gJ3N0cmluZycpXG4gICAgbGVuZ3RoID0gQnVmZmVyLmJ5dGVMZW5ndGgoc3ViamVjdCwgZW5jb2RpbmcpXG4gIGVsc2UgaWYgKHR5cGUgPT09ICdvYmplY3QnKVxuICAgIGxlbmd0aCA9IGNvZXJjZShzdWJqZWN0Lmxlbmd0aCkgLy8gYXNzdW1lIHRoYXQgb2JqZWN0IGlzIGFycmF5LWxpa2VcbiAgZWxzZVxuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgbmVlZHMgdG8gYmUgYSBudW1iZXIsIGFycmF5IG9yIHN0cmluZy4nKVxuXG4gIHZhciBidWZcbiAgaWYgKEJ1ZmZlci5fdXNlVHlwZWRBcnJheXMpIHtcbiAgICAvLyBQcmVmZXJyZWQ6IFJldHVybiBhbiBhdWdtZW50ZWQgYFVpbnQ4QXJyYXlgIGluc3RhbmNlIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgYnVmID0gQnVmZmVyLl9hdWdtZW50KG5ldyBVaW50OEFycmF5KGxlbmd0aCkpXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBUSElTIGluc3RhbmNlIG9mIEJ1ZmZlciAoY3JlYXRlZCBieSBgbmV3YClcbiAgICBidWYgPSB0aGlzXG4gICAgYnVmLmxlbmd0aCA9IGxlbmd0aFxuICAgIGJ1Zi5faXNCdWZmZXIgPSB0cnVlXG4gIH1cblxuICB2YXIgaVxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cyAmJiB0eXBlb2Ygc3ViamVjdC5ieXRlTGVuZ3RoID09PSAnbnVtYmVyJykge1xuICAgIC8vIFNwZWVkIG9wdGltaXphdGlvbiAtLSB1c2Ugc2V0IGlmIHdlJ3JlIGNvcHlpbmcgZnJvbSBhIHR5cGVkIGFycmF5XG4gICAgYnVmLl9zZXQoc3ViamVjdClcbiAgfSBlbHNlIGlmIChpc0FycmF5aXNoKHN1YmplY3QpKSB7XG4gICAgLy8gVHJlYXQgYXJyYXktaXNoIG9iamVjdHMgYXMgYSBieXRlIGFycmF5XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpKVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0LnJlYWRVSW50OChpKVxuICAgICAgZWxzZVxuICAgICAgICBidWZbaV0gPSBzdWJqZWN0W2ldXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgYnVmLndyaXRlKHN1YmplY3QsIDAsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzICYmICFub1plcm8pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGJ1ZltpXSA9IDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnVmXG59XG5cbi8vIFNUQVRJQyBNRVRIT0RTXG4vLyA9PT09PT09PT09PT09PVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIChlbmNvZGluZykge1xuICBzd2l0Y2ggKFN0cmluZyhlbmNvZGluZykudG9Mb3dlckNhc2UoKSkge1xuICAgIGNhc2UgJ2hleCc6XG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAncmF3JzpcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0dXJuIHRydWVcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gKGIpIHtcbiAgcmV0dXJuICEhKGIgIT09IG51bGwgJiYgYiAhPT0gdW5kZWZpbmVkICYmIGIuX2lzQnVmZmVyKVxufVxuXG5CdWZmZXIuYnl0ZUxlbmd0aCA9IGZ1bmN0aW9uIChzdHIsIGVuY29kaW5nKSB7XG4gIHZhciByZXRcbiAgc3RyID0gc3RyICsgJydcbiAgc3dpdGNoIChlbmNvZGluZyB8fCAndXRmOCcpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgICAgcmV0ID0gc3RyLmxlbmd0aCAvIDJcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXRmOCc6XG4gICAgY2FzZSAndXRmLTgnOlxuICAgICAgcmV0ID0gdXRmOFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgY2FzZSAncmF3JzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IGJhc2U2NFRvQnl0ZXMoc3RyKS5sZW5ndGhcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldCA9IHN0ci5sZW5ndGggKiAyXG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gZW5jb2RpbmcnKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuQnVmZmVyLmNvbmNhdCA9IGZ1bmN0aW9uIChsaXN0LCB0b3RhbExlbmd0aCkge1xuICBhc3NlcnQoaXNBcnJheShsaXN0KSwgJ1VzYWdlOiBCdWZmZXIuY29uY2F0KGxpc3QsIFt0b3RhbExlbmd0aF0pXFxuJyArXG4gICAgICAnbGlzdCBzaG91bGQgYmUgYW4gQXJyYXkuJylcblxuICBpZiAobGlzdC5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcigwKVxuICB9IGVsc2UgaWYgKGxpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGxpc3RbMF1cbiAgfVxuXG4gIHZhciBpXG4gIGlmICh0eXBlb2YgdG90YWxMZW5ndGggIT09ICdudW1iZXInKSB7XG4gICAgdG90YWxMZW5ndGggPSAwXG4gICAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsTGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZiA9IG5ldyBCdWZmZXIodG90YWxMZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgaXRlbS5jb3B5KGJ1ZiwgcG9zKVxuICAgIHBvcyArPSBpdGVtLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZcbn1cblxuLy8gQlVGRkVSIElOU1RBTkNFIE1FVEhPRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIF9oZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGFzc2VydChzdHJMZW4gJSAyID09PSAwLCAnSW52YWxpZCBoZXggc3RyaW5nJylcblxuICBpZiAobGVuZ3RoID4gc3RyTGVuIC8gMikge1xuICAgIGxlbmd0aCA9IHN0ckxlbiAvIDJcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGJ5dGUgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgYXNzZXJ0KCFpc05hTihieXRlKSwgJ0ludmFsaWQgaGV4IHN0cmluZycpXG4gICAgYnVmW29mZnNldCArIGldID0gYnl0ZVxuICB9XG4gIEJ1ZmZlci5fY2hhcnNXcml0dGVuID0gaSAqIDJcbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gX3V0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGY4VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9hc2NpaVdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIGNoYXJzV3JpdHRlbiA9IEJ1ZmZlci5fY2hhcnNXcml0dGVuID1cbiAgICBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBfYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG4gIHJldHVybiBjaGFyc1dyaXR0ZW5cbn1cblxuZnVuY3Rpb24gX3V0ZjE2bGVXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHZhciBjaGFyc1dyaXR0ZW4gPSBCdWZmZXIuX2NoYXJzV3JpdHRlbiA9XG4gICAgYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxuICByZXR1cm4gY2hhcnNXcml0dGVuXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gU3VwcG9ydCBib3RoIChzdHJpbmcsIG9mZnNldCwgbGVuZ3RoLCBlbmNvZGluZylcbiAgLy8gYW5kIHRoZSBsZWdhY3kgKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICBpZiAoaXNGaW5pdGUob2Zmc2V0KSkge1xuICAgIGlmICghaXNGaW5pdGUobGVuZ3RoKSkge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgfSBlbHNlIHsgIC8vIGxlZ2FjeVxuICAgIHZhciBzd2FwID0gZW5jb2RpbmdcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIG9mZnNldCA9IGxlbmd0aFxuICAgIGxlbmd0aCA9IHN3YXBcbiAgfVxuXG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IHRoaXMubGVuZ3RoIC0gb2Zmc2V0XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gIH0gZWxzZSB7XG4gICAgbGVuZ3RoID0gTnVtYmVyKGxlbmd0aClcbiAgICBpZiAobGVuZ3RoID4gcmVtYWluaW5nKSB7XG4gICAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgICB9XG4gIH1cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcgfHwgJ3V0ZjgnKS50b0xvd2VyQ2FzZSgpXG4gIHN0YXJ0ID0gTnVtYmVyKHN0YXJ0KSB8fCAwXG4gIGVuZCA9IChlbmQgIT09IHVuZGVmaW5lZClcbiAgICA/IE51bWJlcihlbmQpXG4gICAgOiBlbmQgPSBzZWxmLmxlbmd0aFxuXG4gIC8vIEZhc3RwYXRoIGVtcHR5IHN0cmluZ3NcbiAgaWYgKGVuZCA9PT0gc3RhcnQpXG4gICAgcmV0dXJuICcnXG5cbiAgdmFyIHJldFxuICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICAgIHJldCA9IF9oZXhTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgICByZXQgPSBfdXRmOFNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIHJldCA9IF9hc2NpaVNsaWNlKHNlbGYsIHN0YXJ0LCBlbmQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICByZXQgPSBfYmluYXJ5U2xpY2Uoc2VsZiwgc3RhcnQsIGVuZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgIHJldCA9IF9iYXNlNjRTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1Y3MyJzpcbiAgICBjYXNlICd1Y3MtMic6XG4gICAgY2FzZSAndXRmMTZsZSc6XG4gICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgcmV0ID0gX3V0ZjE2bGVTbGljZShzZWxmLCBzdGFydCwgZW5kKVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGVuY29kaW5nJylcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldF9zdGFydCwgc3RhcnQsIGVuZCkge1xuICB2YXIgc291cmNlID0gdGhpc1xuXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICghdGFyZ2V0X3N0YXJ0KSB0YXJnZXRfc3RhcnQgPSAwXG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgc291cmNlLmxlbmd0aCA9PT0gMCkgcmV0dXJuXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBhc3NlcnQoZW5kID49IHN0YXJ0LCAnc291cmNlRW5kIDwgc291cmNlU3RhcnQnKVxuICBhc3NlcnQodGFyZ2V0X3N0YXJ0ID49IDAgJiYgdGFyZ2V0X3N0YXJ0IDwgdGFyZ2V0Lmxlbmd0aCxcbiAgICAgICd0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgYXNzZXJ0KHN0YXJ0ID49IDAgJiYgc3RhcnQgPCBzb3VyY2UubGVuZ3RoLCAnc291cmNlU3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gc291cmNlLmxlbmd0aCwgJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpXG4gICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldC5sZW5ndGggLSB0YXJnZXRfc3RhcnQgPCBlbmQgLSBzdGFydClcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0X3N0YXJ0ICsgc3RhcnRcblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcblxuICBpZiAobGVuIDwgMTAwIHx8ICFCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0X3N0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5fc2V0KHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSwgdGFyZ2V0X3N0YXJ0KVxuICB9XG59XG5cbmZ1bmN0aW9uIF9iYXNlNjRTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGlmIChzdGFydCA9PT0gMCAmJiBlbmQgPT09IGJ1Zi5sZW5ndGgpIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYuc2xpY2Uoc3RhcnQsIGVuZCkpXG4gIH1cbn1cblxuZnVuY3Rpb24gX3V0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXMgPSAnJ1xuICB2YXIgdG1wID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgaWYgKGJ1ZltpXSA8PSAweDdGKSB7XG4gICAgICByZXMgKz0gZGVjb2RlVXRmOENoYXIodG1wKSArIFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICAgICAgdG1wID0gJydcbiAgICB9IGVsc2Uge1xuICAgICAgdG1wICs9ICclJyArIGJ1ZltpXS50b1N0cmluZygxNilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzICsgZGVjb2RlVXRmOENoYXIodG1wKVxufVxuXG5mdW5jdGlvbiBfYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspXG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIF9iaW5hcnlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBfYXNjaWlTbGljZShidWYsIHN0YXJ0LCBlbmQpXG59XG5cbmZ1bmN0aW9uIF9oZXhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG5cbiAgaWYgKCFzdGFydCB8fCBzdGFydCA8IDApIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCB8fCBlbmQgPCAwIHx8IGVuZCA+IGxlbikgZW5kID0gbGVuXG5cbiAgdmFyIG91dCA9ICcnXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG4gICAgb3V0ICs9IHRvSGV4KGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gb3V0XG59XG5cbmZ1bmN0aW9uIF91dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2krMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gY2xhbXAoc3RhcnQsIGxlbiwgMClcbiAgZW5kID0gY2xhbXAoZW5kLCBsZW4sIGxlbilcblxuICBpZiAoQnVmZmVyLl91c2VUeXBlZEFycmF5cykge1xuICAgIHJldHVybiBCdWZmZXIuX2F1Z21lbnQodGhpcy5zdWJhcnJheShzdGFydCwgZW5kKSlcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIHZhciBuZXdCdWYgPSBuZXcgQnVmZmVyKHNsaWNlTGVuLCB1bmRlZmluZWQsIHRydWUpXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZUxlbjsgaSsrKSB7XG4gICAgICBuZXdCdWZbaV0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gICAgcmV0dXJuIG5ld0J1ZlxuICB9XG59XG5cbi8vIGBnZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5nZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLnJlYWRVSW50OChvZmZzZXQpXG59XG5cbi8vIGBzZXRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBOb2RlIDAuMTMrXG5CdWZmZXIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh2LCBvZmZzZXQpIHtcbiAgY29uc29sZS5sb2coJy5zZXQoKSBpcyBkZXByZWNhdGVkLiBBY2Nlc3MgdXNpbmcgYXJyYXkgaW5kZXhlcyBpbnN0ZWFkLicpXG4gIHJldHVybiB0aGlzLndyaXRlVUludDgodiwgb2Zmc2V0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5mdW5jdGlvbiBfcmVhZFVJbnQxNiAoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIHZhciB2YWxcbiAgaWYgKGxpdHRsZUVuZGlhbikge1xuICAgIHZhbCA9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdIDw8IDhcbiAgfSBlbHNlIHtcbiAgICB2YWwgPSBidWZbb2Zmc2V0XSA8PCA4XG4gICAgaWYgKG9mZnNldCArIDEgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDFdXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQxNih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3JlYWRVSW50MzIgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsXG4gIGlmIChsaXR0bGVFbmRpYW4pIHtcbiAgICBpZiAob2Zmc2V0ICsgMiA8IGxlbilcbiAgICAgIHZhbCA9IGJ1ZltvZmZzZXQgKyAyXSA8PCAxNlxuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsIHw9IGJ1ZltvZmZzZXQgKyAxXSA8PCA4XG4gICAgdmFsIHw9IGJ1ZltvZmZzZXRdXG4gICAgaWYgKG9mZnNldCArIDMgPCBsZW4pXG4gICAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldCArIDNdIDw8IDI0ID4+PiAwKVxuICB9IGVsc2Uge1xuICAgIGlmIChvZmZzZXQgKyAxIDwgbGVuKVxuICAgICAgdmFsID0gYnVmW29mZnNldCArIDFdIDw8IDE2XG4gICAgaWYgKG9mZnNldCArIDIgPCBsZW4pXG4gICAgICB2YWwgfD0gYnVmW29mZnNldCArIDJdIDw8IDhcbiAgICBpZiAob2Zmc2V0ICsgMyA8IGxlbilcbiAgICAgIHZhbCB8PSBidWZbb2Zmc2V0ICsgM11cbiAgICB2YWwgPSB2YWwgKyAoYnVmW29mZnNldF0gPDwgMjQgPj4+IDApXG4gIH1cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJMRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZFVJbnQzMih0aGlzLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLFxuICAgICAgICAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgdmFyIG5lZyA9IHRoaXNbb2Zmc2V0XSAmIDB4ODBcbiAgaWYgKG5lZylcbiAgICByZXR1cm4gKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xXG4gIGVsc2VcbiAgICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbmZ1bmN0aW9uIF9yZWFkSW50MTYgKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMSA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gcmVhZCBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICB2YXIgdmFsID0gX3JlYWRVSW50MTYoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgdHJ1ZSlcbiAgdmFyIG5lZyA9IHZhbCAmIDB4ODAwMFxuICBpZiAobmVnKVxuICAgIHJldHVybiAoMHhmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MTYodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDE2KHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEludDMyIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDMgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHJlYWQgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgdmFyIHZhbCA9IF9yZWFkVUludDMyKGJ1Ziwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIHRydWUpXG4gIHZhciBuZWcgPSB2YWwgJiAweDgwMDAwMDAwXG4gIGlmIChuZWcpXG4gICAgcmV0dXJuICgweGZmZmZmZmZmIC0gdmFsICsgMSkgKiAtMVxuICBlbHNlXG4gICAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkSW50MzIodGhpcywgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiBfcmVhZEludDMyKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfcmVhZEZsb2F0IChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiAob2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gX3JlYWRGbG9hdCh0aGlzLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRGbG9hdEJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRmxvYXQodGhpcywgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF9yZWFkRG91YmxlIChidWYsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgKyA3IDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byByZWFkIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgfVxuXG4gIHJldHVybiBpZWVlNzU0LnJlYWQoYnVmLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIF9yZWFkRG91YmxlKHRoaXMsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDggPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0IDwgdGhpcy5sZW5ndGgsICd0cnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmdWludCh2YWx1ZSwgMHhmZilcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpIHJldHVyblxuXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAxIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmYpXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGxlbiAtIG9mZnNldCwgMik7IGkgPCBqOyBpKyspIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPVxuICAgICAgICAodmFsdWUgJiAoMHhmZiA8PCAoOCAqIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpKSkpID4+PlxuICAgICAgICAgICAgKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkgKiA4XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkxFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ3RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZ1aW50KHZhbHVlLCAweGZmZmZmZmZmKVxuICB9XG5cbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcbiAgaWYgKG9mZnNldCA+PSBsZW4pXG4gICAgcmV0dXJuXG5cbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihsZW4gLSBvZmZzZXQsIDQpOyBpIDwgajsgaSsrKSB7XG4gICAgYnVmW29mZnNldCArIGldID1cbiAgICAgICAgKHZhbHVlID4+PiAobGl0dGxlRW5kaWFuID8gaSA6IDMgLSBpKSAqIDgpICYgMHhmZlxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgPCB0aGlzLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZzaW50KHZhbHVlLCAweDdmLCAtMHg4MClcbiAgfVxuXG4gIGlmIChvZmZzZXQgPj0gdGhpcy5sZW5ndGgpXG4gICAgcmV0dXJuXG5cbiAgaWYgKHZhbHVlID49IDApXG4gICAgdGhpcy53cml0ZVVJbnQ4KHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgdGhpcy53cml0ZVVJbnQ4KDB4ZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbm9Bc3NlcnQpXG59XG5cbmZ1bmN0aW9uIF93cml0ZUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGFzc2VydCh2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsLCAnbWlzc2luZyB2YWx1ZScpXG4gICAgYXNzZXJ0KHR5cGVvZiBsaXR0bGVFbmRpYW4gPT09ICdib29sZWFuJywgJ21pc3Npbmcgb3IgaW52YWxpZCBlbmRpYW4nKVxuICAgIGFzc2VydChvZmZzZXQgIT09IHVuZGVmaW5lZCAmJiBvZmZzZXQgIT09IG51bGwsICdtaXNzaW5nIG9mZnNldCcpXG4gICAgYXNzZXJ0KG9mZnNldCArIDEgPCBidWYubGVuZ3RoLCAnVHJ5aW5nIHRvIHdyaXRlIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbiAgICB2ZXJpZnNpbnQodmFsdWUsIDB4N2ZmZiwgLTB4ODAwMClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGlmICh2YWx1ZSA+PSAwKVxuICAgIF93cml0ZVVJbnQxNihidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgbm9Bc3NlcnQpXG4gIGVsc2VcbiAgICBfd3JpdGVVSW50MTYoYnVmLCAweGZmZmYgKyB2YWx1ZSArIDEsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIF93cml0ZUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gX3dyaXRlSW50MzIgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgMyA8IGJ1Zi5sZW5ndGgsICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmc2ludCh2YWx1ZSwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIH1cblxuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuICBpZiAob2Zmc2V0ID49IGxlbilcbiAgICByZXR1cm5cblxuICBpZiAodmFsdWUgPj0gMClcbiAgICBfd3JpdGVVSW50MzIoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxuICBlbHNlXG4gICAgX3dyaXRlVUludDMyKGJ1ZiwgMHhmZmZmZmZmZiArIHZhbHVlICsgMSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBhc3NlcnQodmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbCwgJ21pc3NpbmcgdmFsdWUnKVxuICAgIGFzc2VydCh0eXBlb2YgbGl0dGxlRW5kaWFuID09PSAnYm9vbGVhbicsICdtaXNzaW5nIG9yIGludmFsaWQgZW5kaWFuJylcbiAgICBhc3NlcnQob2Zmc2V0ICE9PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSBudWxsLCAnbWlzc2luZyBvZmZzZXQnKVxuICAgIGFzc2VydChvZmZzZXQgKyAzIDwgYnVmLmxlbmd0aCwgJ1RyeWluZyB0byB3cml0ZSBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG4gICAgdmVyaWZJRUVFNzU0KHZhbHVlLCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRMRSA9IGZ1bmN0aW9uICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICBfd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiBfd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgYXNzZXJ0KHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGwsICdtaXNzaW5nIHZhbHVlJylcbiAgICBhc3NlcnQodHlwZW9mIGxpdHRsZUVuZGlhbiA9PT0gJ2Jvb2xlYW4nLCAnbWlzc2luZyBvciBpbnZhbGlkIGVuZGlhbicpXG4gICAgYXNzZXJ0KG9mZnNldCAhPT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gbnVsbCwgJ21pc3Npbmcgb2Zmc2V0JylcbiAgICBhc3NlcnQob2Zmc2V0ICsgNyA8IGJ1Zi5sZW5ndGgsXG4gICAgICAgICdUcnlpbmcgdG8gd3JpdGUgYmV5b25kIGJ1ZmZlciBsZW5ndGgnKVxuICAgIHZlcmlmSUVFRTc1NCh2YWx1ZSwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuXG4gIHZhciBsZW4gPSBidWYubGVuZ3RoXG4gIGlmIChvZmZzZXQgPj0gbGVuKVxuICAgIHJldHVyblxuXG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgX3dyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuLy8gZmlsbCh2YWx1ZSwgc3RhcnQ9MCwgZW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAodmFsdWUsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCF2YWx1ZSkgdmFsdWUgPSAwXG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCkgZW5kID0gdGhpcy5sZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHZhbHVlID0gdmFsdWUuY2hhckNvZGVBdCgwKVxuICB9XG5cbiAgYXNzZXJ0KHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHZhbHVlKSwgJ3ZhbHVlIGlzIG5vdCBhIG51bWJlcicpXG4gIGFzc2VydChlbmQgPj0gc3RhcnQsICdlbmQgPCBzdGFydCcpXG5cbiAgLy8gRmlsbCAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm5cbiAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICBhc3NlcnQoc3RhcnQgPj0gMCAmJiBzdGFydCA8IHRoaXMubGVuZ3RoLCAnc3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIGFzc2VydChlbmQgPj0gMCAmJiBlbmQgPD0gdGhpcy5sZW5ndGgsICdlbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICB0aGlzW2ldID0gdmFsdWVcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvdXQgPSBbXVxuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIG91dFtpXSA9IHRvSGV4KHRoaXNbaV0pXG4gICAgaWYgKGkgPT09IGV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMpIHtcbiAgICAgIG91dFtpICsgMV0gPSAnLi4uJ1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBvdXQuam9pbignICcpICsgJz4nXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgQXJyYXlCdWZmZXJgIHdpdGggdGhlICpjb3BpZWQqIG1lbW9yeSBvZiB0aGUgYnVmZmVyIGluc3RhbmNlLlxuICogQWRkZWQgaW4gTm9kZSAwLjEyLiBPbmx5IGF2YWlsYWJsZSBpbiBicm93c2VycyB0aGF0IHN1cHBvcnQgQXJyYXlCdWZmZXIuXG4gKi9cbkJ1ZmZlci5wcm90b3R5cGUudG9BcnJheUJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmIChCdWZmZXIuX3VzZVR5cGVkQXJyYXlzKSB7XG4gICAgICByZXR1cm4gKG5ldyBCdWZmZXIodGhpcykpLmJ1ZmZlclxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYnVmID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGgpXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gYnVmLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAxKVxuICAgICAgICBidWZbaV0gPSB0aGlzW2ldXG4gICAgICByZXR1cm4gYnVmLmJ1ZmZlclxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0J1ZmZlci50b0FycmF5QnVmZmVyIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyJylcbiAgfVxufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHN0cmluZ3RyaW0gKHN0cikge1xuICBpZiAoc3RyLnRyaW0pIHJldHVybiBzdHIudHJpbSgpXG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpXG59XG5cbnZhciBCUCA9IEJ1ZmZlci5wcm90b3R5cGVcblxuLyoqXG4gKiBBdWdtZW50IGEgVWludDhBcnJheSAqaW5zdGFuY2UqIChub3QgdGhlIFVpbnQ4QXJyYXkgY2xhc3MhKSB3aXRoIEJ1ZmZlciBtZXRob2RzXG4gKi9cbkJ1ZmZlci5fYXVnbWVudCA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgYXJyLl9pc0J1ZmZlciA9IHRydWVcblxuICAvLyBzYXZlIHJlZmVyZW5jZSB0byBvcmlnaW5hbCBVaW50OEFycmF5IGdldC9zZXQgbWV0aG9kcyBiZWZvcmUgb3ZlcndyaXRpbmdcbiAgYXJyLl9nZXQgPSBhcnIuZ2V0XG4gIGFyci5fc2V0ID0gYXJyLnNldFxuXG4gIC8vIGRlcHJlY2F0ZWQsIHdpbGwgYmUgcmVtb3ZlZCBpbiBub2RlIDAuMTMrXG4gIGFyci5nZXQgPSBCUC5nZXRcbiAgYXJyLnNldCA9IEJQLnNldFxuXG4gIGFyci53cml0ZSA9IEJQLndyaXRlXG4gIGFyci50b1N0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0xvY2FsZVN0cmluZyA9IEJQLnRvU3RyaW5nXG4gIGFyci50b0pTT04gPSBCUC50b0pTT05cbiAgYXJyLmNvcHkgPSBCUC5jb3B5XG4gIGFyci5zbGljZSA9IEJQLnNsaWNlXG4gIGFyci5yZWFkVUludDggPSBCUC5yZWFkVUludDhcbiAgYXJyLnJlYWRVSW50MTZMRSA9IEJQLnJlYWRVSW50MTZMRVxuICBhcnIucmVhZFVJbnQxNkJFID0gQlAucmVhZFVJbnQxNkJFXG4gIGFyci5yZWFkVUludDMyTEUgPSBCUC5yZWFkVUludDMyTEVcbiAgYXJyLnJlYWRVSW50MzJCRSA9IEJQLnJlYWRVSW50MzJCRVxuICBhcnIucmVhZEludDggPSBCUC5yZWFkSW50OFxuICBhcnIucmVhZEludDE2TEUgPSBCUC5yZWFkSW50MTZMRVxuICBhcnIucmVhZEludDE2QkUgPSBCUC5yZWFkSW50MTZCRVxuICBhcnIucmVhZEludDMyTEUgPSBCUC5yZWFkSW50MzJMRVxuICBhcnIucmVhZEludDMyQkUgPSBCUC5yZWFkSW50MzJCRVxuICBhcnIucmVhZEZsb2F0TEUgPSBCUC5yZWFkRmxvYXRMRVxuICBhcnIucmVhZEZsb2F0QkUgPSBCUC5yZWFkRmxvYXRCRVxuICBhcnIucmVhZERvdWJsZUxFID0gQlAucmVhZERvdWJsZUxFXG4gIGFyci5yZWFkRG91YmxlQkUgPSBCUC5yZWFkRG91YmxlQkVcbiAgYXJyLndyaXRlVUludDggPSBCUC53cml0ZVVJbnQ4XG4gIGFyci53cml0ZVVJbnQxNkxFID0gQlAud3JpdGVVSW50MTZMRVxuICBhcnIud3JpdGVVSW50MTZCRSA9IEJQLndyaXRlVUludDE2QkVcbiAgYXJyLndyaXRlVUludDMyTEUgPSBCUC53cml0ZVVJbnQzMkxFXG4gIGFyci53cml0ZVVJbnQzMkJFID0gQlAud3JpdGVVSW50MzJCRVxuICBhcnIud3JpdGVJbnQ4ID0gQlAud3JpdGVJbnQ4XG4gIGFyci53cml0ZUludDE2TEUgPSBCUC53cml0ZUludDE2TEVcbiAgYXJyLndyaXRlSW50MTZCRSA9IEJQLndyaXRlSW50MTZCRVxuICBhcnIud3JpdGVJbnQzMkxFID0gQlAud3JpdGVJbnQzMkxFXG4gIGFyci53cml0ZUludDMyQkUgPSBCUC53cml0ZUludDMyQkVcbiAgYXJyLndyaXRlRmxvYXRMRSA9IEJQLndyaXRlRmxvYXRMRVxuICBhcnIud3JpdGVGbG9hdEJFID0gQlAud3JpdGVGbG9hdEJFXG4gIGFyci53cml0ZURvdWJsZUxFID0gQlAud3JpdGVEb3VibGVMRVxuICBhcnIud3JpdGVEb3VibGVCRSA9IEJQLndyaXRlRG91YmxlQkVcbiAgYXJyLmZpbGwgPSBCUC5maWxsXG4gIGFyci5pbnNwZWN0ID0gQlAuaW5zcGVjdFxuICBhcnIudG9BcnJheUJ1ZmZlciA9IEJQLnRvQXJyYXlCdWZmZXJcblxuICByZXR1cm4gYXJyXG59XG5cbi8vIHNsaWNlKHN0YXJ0LCBlbmQpXG5mdW5jdGlvbiBjbGFtcCAoaW5kZXgsIGxlbiwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInKSByZXR1cm4gZGVmYXVsdFZhbHVlXG4gIGluZGV4ID0gfn5pbmRleDsgIC8vIENvZXJjZSB0byBpbnRlZ2VyLlxuICBpZiAoaW5kZXggPj0gbGVuKSByZXR1cm4gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgaW5kZXggKz0gbGVuXG4gIGlmIChpbmRleCA+PSAwKSByZXR1cm4gaW5kZXhcbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gY29lcmNlIChsZW5ndGgpIHtcbiAgLy8gQ29lcmNlIGxlbmd0aCB0byBhIG51bWJlciAocG9zc2libHkgTmFOKSwgcm91bmQgdXBcbiAgLy8gaW4gY2FzZSBpdCdzIGZyYWN0aW9uYWwgKGUuZy4gMTIzLjQ1NikgdGhlbiBkbyBhXG4gIC8vIGRvdWJsZSBuZWdhdGUgdG8gY29lcmNlIGEgTmFOIHRvIDAuIEVhc3ksIHJpZ2h0P1xuICBsZW5ndGggPSB+fk1hdGguY2VpbCgrbGVuZ3RoKVxuICByZXR1cm4gbGVuZ3RoIDwgMCA/IDAgOiBsZW5ndGhcbn1cblxuZnVuY3Rpb24gaXNBcnJheSAoc3ViamVjdCkge1xuICByZXR1cm4gKEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHN1YmplY3QpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN1YmplY3QpID09PSAnW29iamVjdCBBcnJheV0nXG4gIH0pKHN1YmplY3QpXG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlpc2ggKHN1YmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXkoc3ViamVjdCkgfHwgQnVmZmVyLmlzQnVmZmVyKHN1YmplY3QpIHx8XG4gICAgICBzdWJqZWN0ICYmIHR5cGVvZiBzdWJqZWN0ID09PSAnb2JqZWN0JyAmJlxuICAgICAgdHlwZW9mIHN1YmplY3QubGVuZ3RoID09PSAnbnVtYmVyJ1xufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGIgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGlmIChiIDw9IDB4N0YpXG4gICAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSlcbiAgICBlbHNlIHtcbiAgICAgIHZhciBzdGFydCA9IGlcbiAgICAgIGlmIChiID49IDB4RDgwMCAmJiBiIDw9IDB4REZGRikgaSsrXG4gICAgICB2YXIgaCA9IGVuY29kZVVSSUNvbXBvbmVudChzdHIuc2xpY2Uoc3RhcnQsIGkrMSkpLnN1YnN0cigxKS5zcGxpdCgnJScpXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGgubGVuZ3RoOyBqKyspXG4gICAgICAgIGJ5dGVBcnJheS5wdXNoKHBhcnNlSW50KGhbal0sIDE2KSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBhc2NpaVRvQnl0ZXMgKHN0cikge1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBOb2RlJ3MgY29kZSBzZWVtcyB0byBiZSBkb2luZyB0aGlzIGFuZCBub3QgJiAweDdGLi5cbiAgICBieXRlQXJyYXkucHVzaChzdHIuY2hhckNvZGVBdChpKSAmIDB4RkYpXG4gIH1cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiB1dGYxNmxlVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IHN0ci5jaGFyQ29kZUF0KGkpXG4gICAgaGkgPSBjID4+IDhcbiAgICBsbyA9IGMgJSAyNTZcbiAgICBieXRlQXJyYXkucHVzaChsbylcbiAgICBieXRlQXJyYXkucHVzaChoaSlcbiAgfVxuXG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gYmFzZTY0VG9CeXRlcyAoc3RyKSB7XG4gIHJldHVybiBiYXNlNjQudG9CeXRlQXJyYXkoc3RyKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgdmFyIHBvc1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKVxuICAgICAgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBkZWNvZGVVdGY4Q2hhciAoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChzdHIpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RkZGRCkgLy8gVVRGIDggaW52YWxpZCBjaGFyXG4gIH1cbn1cblxuLypcbiAqIFdlIGhhdmUgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIHZhbHVlIGlzIGEgdmFsaWQgaW50ZWdlci4gVGhpcyBtZWFucyB0aGF0IGl0XG4gKiBpcyBub24tbmVnYXRpdmUuIEl0IGhhcyBubyBmcmFjdGlvbmFsIGNvbXBvbmVudCBhbmQgdGhhdCBpdCBkb2VzIG5vdFxuICogZXhjZWVkIHRoZSBtYXhpbXVtIGFsbG93ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHZlcmlmdWludCAodmFsdWUsIG1heCkge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPj0gMCwgJ3NwZWNpZmllZCBhIG5lZ2F0aXZlIHZhbHVlIGZvciB3cml0aW5nIGFuIHVuc2lnbmVkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlIDw9IG1heCwgJ3ZhbHVlIGlzIGxhcmdlciB0aGFuIG1heGltdW0gdmFsdWUgZm9yIHR5cGUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnNpbnQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxuICBhc3NlcnQoTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlLCAndmFsdWUgaGFzIGEgZnJhY3Rpb25hbCBjb21wb25lbnQnKVxufVxuXG5mdW5jdGlvbiB2ZXJpZklFRUU3NTQgKHZhbHVlLCBtYXgsIG1pbikge1xuICBhc3NlcnQodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJywgJ2Nhbm5vdCB3cml0ZSBhIG5vbi1udW1iZXIgYXMgYSBudW1iZXInKVxuICBhc3NlcnQodmFsdWUgPD0gbWF4LCAndmFsdWUgbGFyZ2VyIHRoYW4gbWF4aW11bSBhbGxvd2VkIHZhbHVlJylcbiAgYXNzZXJ0KHZhbHVlID49IG1pbiwgJ3ZhbHVlIHNtYWxsZXIgdGhhbiBtaW5pbXVtIGFsbG93ZWQgdmFsdWUnKVxufVxuXG5mdW5jdGlvbiBhc3NlcnQgKHRlc3QsIG1lc3NhZ2UpIHtcbiAgaWYgKCF0ZXN0KSB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSB8fCAnRmFpbGVkIGFzc2VydGlvbicpXG59XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xudmFyIGxvb2t1cCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJztcblxuOyhmdW5jdGlvbiAoZXhwb3J0cykge1xuXHQndXNlIHN0cmljdCc7XG5cbiAgdmFyIEFyciA9ICh0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgPyBVaW50OEFycmF5XG4gICAgOiBBcnJheVxuXG5cdHZhciBaRVJPICAgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgUExVUyAgID0gJysnLmNoYXJDb2RlQXQoMClcblx0dmFyIFNMQVNIICA9ICcvJy5jaGFyQ29kZUF0KDApXG5cdHZhciBOVU1CRVIgPSAnMCcuY2hhckNvZGVBdCgwKVxuXHR2YXIgTE9XRVIgID0gJ2EnLmNoYXJDb2RlQXQoMClcblx0dmFyIFVQUEVSICA9ICdBJy5jaGFyQ29kZUF0KDApXG5cblx0ZnVuY3Rpb24gZGVjb2RlIChlbHQpIHtcblx0XHR2YXIgY29kZSA9IGVsdC5jaGFyQ29kZUF0KDApXG5cdFx0aWYgKGNvZGUgPT09IFBMVVMpXG5cdFx0XHRyZXR1cm4gNjIgLy8gJysnXG5cdFx0aWYgKGNvZGUgPT09IFNMQVNIKVxuXHRcdFx0cmV0dXJuIDYzIC8vICcvJ1xuXHRcdGlmIChjb2RlIDwgTlVNQkVSKVxuXHRcdFx0cmV0dXJuIC0xIC8vbm8gbWF0Y2hcblx0XHRpZiAoY29kZSA8IE5VTUJFUiArIDEwKVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBOVU1CRVIgKyAyNiArIDI2XG5cdFx0aWYgKGNvZGUgPCBVUFBFUiArIDI2KVxuXHRcdFx0cmV0dXJuIGNvZGUgLSBVUFBFUlxuXHRcdGlmIChjb2RlIDwgTE9XRVIgKyAyNilcblx0XHRcdHJldHVybiBjb2RlIC0gTE9XRVIgKyAyNlxuXHR9XG5cblx0ZnVuY3Rpb24gYjY0VG9CeXRlQXJyYXkgKGI2NCkge1xuXHRcdHZhciBpLCBqLCBsLCB0bXAsIHBsYWNlSG9sZGVycywgYXJyXG5cblx0XHRpZiAoYjY0Lmxlbmd0aCAlIDQgPiAwKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuXHRcdH1cblxuXHRcdC8vIHRoZSBudW1iZXIgb2YgZXF1YWwgc2lnbnMgKHBsYWNlIGhvbGRlcnMpXG5cdFx0Ly8gaWYgdGhlcmUgYXJlIHR3byBwbGFjZWhvbGRlcnMsIHRoYW4gdGhlIHR3byBjaGFyYWN0ZXJzIGJlZm9yZSBpdFxuXHRcdC8vIHJlcHJlc2VudCBvbmUgYnl0ZVxuXHRcdC8vIGlmIHRoZXJlIGlzIG9ubHkgb25lLCB0aGVuIHRoZSB0aHJlZSBjaGFyYWN0ZXJzIGJlZm9yZSBpdCByZXByZXNlbnQgMiBieXRlc1xuXHRcdC8vIHRoaXMgaXMganVzdCBhIGNoZWFwIGhhY2sgdG8gbm90IGRvIGluZGV4T2YgdHdpY2Vcblx0XHR2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXHRcdHBsYWNlSG9sZGVycyA9ICc9JyA9PT0gYjY0LmNoYXJBdChsZW4gLSAyKSA/IDIgOiAnPScgPT09IGI2NC5jaGFyQXQobGVuIC0gMSkgPyAxIDogMFxuXG5cdFx0Ly8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5cdFx0YXJyID0gbmV3IEFycihiNjQubGVuZ3RoICogMyAvIDQgLSBwbGFjZUhvbGRlcnMpXG5cblx0XHQvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG5cdFx0bCA9IHBsYWNlSG9sZGVycyA+IDAgPyBiNjQubGVuZ3RoIC0gNCA6IGI2NC5sZW5ndGhcblxuXHRcdHZhciBMID0gMFxuXG5cdFx0ZnVuY3Rpb24gcHVzaCAodikge1xuXHRcdFx0YXJyW0wrK10gPSB2XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgaiA9IDA7IGkgPCBsOyBpICs9IDQsIGogKz0gMykge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxOCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCAxMikgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDIpKSA8PCA2KSB8IGRlY29kZShiNjQuY2hhckF0KGkgKyAzKSlcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMDAwKSA+PiAxNilcblx0XHRcdHB1c2goKHRtcCAmIDB4RkYwMCkgPj4gOClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9XG5cblx0XHRpZiAocGxhY2VIb2xkZXJzID09PSAyKSB7XG5cdFx0XHR0bXAgPSAoZGVjb2RlKGI2NC5jaGFyQXQoaSkpIDw8IDIpIHwgKGRlY29kZShiNjQuY2hhckF0KGkgKyAxKSkgPj4gNClcblx0XHRcdHB1c2godG1wICYgMHhGRilcblx0XHR9IGVsc2UgaWYgKHBsYWNlSG9sZGVycyA9PT0gMSkge1xuXHRcdFx0dG1wID0gKGRlY29kZShiNjQuY2hhckF0KGkpKSA8PCAxMCkgfCAoZGVjb2RlKGI2NC5jaGFyQXQoaSArIDEpKSA8PCA0KSB8IChkZWNvZGUoYjY0LmNoYXJBdChpICsgMikpID4+IDIpXG5cdFx0XHRwdXNoKCh0bXAgPj4gOCkgJiAweEZGKVxuXHRcdFx0cHVzaCh0bXAgJiAweEZGKVxuXHRcdH1cblxuXHRcdHJldHVybiBhcnJcblx0fVxuXG5cdGZ1bmN0aW9uIHVpbnQ4VG9CYXNlNjQgKHVpbnQ4KSB7XG5cdFx0dmFyIGksXG5cdFx0XHRleHRyYUJ5dGVzID0gdWludDgubGVuZ3RoICUgMywgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcblx0XHRcdG91dHB1dCA9IFwiXCIsXG5cdFx0XHR0ZW1wLCBsZW5ndGhcblxuXHRcdGZ1bmN0aW9uIGVuY29kZSAobnVtKSB7XG5cdFx0XHRyZXR1cm4gbG9va3VwLmNoYXJBdChudW0pXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcblx0XHRcdHJldHVybiBlbmNvZGUobnVtID4+IDE4ICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDEyICYgMHgzRikgKyBlbmNvZGUobnVtID4+IDYgJiAweDNGKSArIGVuY29kZShudW0gJiAweDNGKVxuXHRcdH1cblxuXHRcdC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcblx0XHRmb3IgKGkgPSAwLCBsZW5ndGggPSB1aW50OC5sZW5ndGggLSBleHRyYUJ5dGVzOyBpIDwgbGVuZ3RoOyBpICs9IDMpIHtcblx0XHRcdHRlbXAgPSAodWludDhbaV0gPDwgMTYpICsgKHVpbnQ4W2kgKyAxXSA8PCA4KSArICh1aW50OFtpICsgMl0pXG5cdFx0XHRvdXRwdXQgKz0gdHJpcGxldFRvQmFzZTY0KHRlbXApXG5cdFx0fVxuXG5cdFx0Ly8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuXHRcdHN3aXRjaCAoZXh0cmFCeXRlcykge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHR0ZW1wID0gdWludDhbdWludDgubGVuZ3RoIC0gMV1cblx0XHRcdFx0b3V0cHV0ICs9IGVuY29kZSh0ZW1wID4+IDIpXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPDwgNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gJz09J1xuXHRcdFx0XHRicmVha1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHR0ZW1wID0gKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDJdIDw8IDgpICsgKHVpbnQ4W3VpbnQ4Lmxlbmd0aCAtIDFdKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKHRlbXAgPj4gMTApXG5cdFx0XHRcdG91dHB1dCArPSBlbmNvZGUoKHRlbXAgPj4gNCkgJiAweDNGKVxuXHRcdFx0XHRvdXRwdXQgKz0gZW5jb2RlKCh0ZW1wIDw8IDIpICYgMHgzRilcblx0XHRcdFx0b3V0cHV0ICs9ICc9J1xuXHRcdFx0XHRicmVha1xuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXRcblx0fVxuXG5cdG1vZHVsZS5leHBvcnRzLnRvQnl0ZUFycmF5ID0gYjY0VG9CeXRlQXJyYXlcblx0bW9kdWxlLmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IHVpbnQ4VG9CYXNlNjRcbn0oKSlcblxufSkuY2FsbCh0aGlzLHJlcXVpcmUoXCJvTWZwQW5cIiksdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDogdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHt9LHJlcXVpcmUoXCJidWZmZXJcIikuQnVmZmVyLGFyZ3VtZW50c1szXSxhcmd1bWVudHNbNF0sYXJndW1lbnRzWzVdLGFyZ3VtZW50c1s2XSxcIi8uLi8uLi9ub2RlX21vZHVsZXMvZ3VscC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9idWZmZXIvbm9kZV9tb2R1bGVzL2Jhc2U2NC1qcy9saWIvYjY0LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvbGliXCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuZXhwb3J0cy5yZWFkID0gZnVuY3Rpb24oYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSxcbiAgICAgIGVMZW4gPSBuQnl0ZXMgKiA4IC0gbUxlbiAtIDEsXG4gICAgICBlTWF4ID0gKDEgPDwgZUxlbikgLSAxLFxuICAgICAgZUJpYXMgPSBlTWF4ID4+IDEsXG4gICAgICBuQml0cyA9IC03LFxuICAgICAgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwLFxuICAgICAgZCA9IGlzTEUgPyAtMSA6IDEsXG4gICAgICBzID0gYnVmZmVyW29mZnNldCArIGldO1xuXG4gIGkgKz0gZDtcblxuICBlID0gcyAmICgoMSA8PCAoLW5CaXRzKSkgLSAxKTtcbiAgcyA+Pj0gKC1uQml0cyk7XG4gIG5CaXRzICs9IGVMZW47XG4gIGZvciAoOyBuQml0cyA+IDA7IGUgPSBlICogMjU2ICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpO1xuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpO1xuICBlID4+PSAoLW5CaXRzKTtcbiAgbkJpdHMgKz0gbUxlbjtcbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IG0gKiAyNTYgKyBidWZmZXJbb2Zmc2V0ICsgaV0sIGkgKz0gZCwgbkJpdHMgLT0gOCk7XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzO1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSk7XG4gIH0gZWxzZSB7XG4gICAgbSA9IG0gKyBNYXRoLnBvdygyLCBtTGVuKTtcbiAgICBlID0gZSAtIGVCaWFzO1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pO1xufTtcblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uKGJ1ZmZlciwgdmFsdWUsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtLCBjLFxuICAgICAgZUxlbiA9IG5CeXRlcyAqIDggLSBtTGVuIC0gMSxcbiAgICAgIGVNYXggPSAoMSA8PCBlTGVuKSAtIDEsXG4gICAgICBlQmlhcyA9IGVNYXggPj4gMSxcbiAgICAgIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKSxcbiAgICAgIGkgPSBpc0xFID8gMCA6IChuQnl0ZXMgLSAxKSxcbiAgICAgIGQgPSBpc0xFID8gMSA6IC0xLFxuICAgICAgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMDtcblxuICB2YWx1ZSA9IE1hdGguYWJzKHZhbHVlKTtcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMDtcbiAgICBlID0gZU1heDtcbiAgfSBlbHNlIHtcbiAgICBlID0gTWF0aC5mbG9vcihNYXRoLmxvZyh2YWx1ZSkgLyBNYXRoLkxOMik7XG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tO1xuICAgICAgYyAqPSAyO1xuICAgIH1cbiAgICBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIHZhbHVlICs9IHJ0IC8gYztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpO1xuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrKztcbiAgICAgIGMgLz0gMjtcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwO1xuICAgICAgZSA9IGVNYXg7XG4gICAgfSBlbHNlIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgbSA9ICh2YWx1ZSAqIGMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IGUgKyBlQmlhcztcbiAgICB9IGVsc2Uge1xuICAgICAgbSA9IHZhbHVlICogTWF0aC5wb3coMiwgZUJpYXMgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pO1xuICAgICAgZSA9IDA7XG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCk7XG5cbiAgZSA9IChlIDw8IG1MZW4pIHwgbTtcbiAgZUxlbiArPSBtTGVuO1xuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpO1xuXG4gIGJ1ZmZlcltvZmZzZXQgKyBpIC0gZF0gfD0gcyAqIDEyODtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0L2luZGV4LmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnVmZmVyL25vZGVfbW9kdWxlcy9pZWVlNzU0XCIpIiwiKGZ1bmN0aW9uIChwcm9jZXNzLGdsb2JhbCxCdWZmZXIsX19hcmd1bWVudDAsX19hcmd1bWVudDEsX19hcmd1bWVudDIsX19hcmd1bWVudDMsX19maWxlbmFtZSxfX2Rpcm5hbWUpe1xuLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxucHJvY2Vzcy5uZXh0VGljayA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNhblNldEltbWVkaWF0ZSA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnNldEltbWVkaWF0ZTtcbiAgICB2YXIgY2FuUG9zdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgJiYgd2luZG93LnBvc3RNZXNzYWdlICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyXG4gICAgO1xuXG4gICAgaWYgKGNhblNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHdpbmRvdy5zZXRJbW1lZGlhdGUoZikgfTtcbiAgICB9XG5cbiAgICBpZiAoY2FuUG9zdCkge1xuICAgICAgICB2YXIgcXVldWUgPSBbXTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBmdW5jdGlvbiAoZXYpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBldi5zb3VyY2U7XG4gICAgICAgICAgICBpZiAoKHNvdXJjZSA9PT0gd2luZG93IHx8IHNvdXJjZSA9PT0gbnVsbCkgJiYgZXYuZGF0YSA9PT0gJ3Byb2Nlc3MtdGljaycpIHtcbiAgICAgICAgICAgICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdHJ1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGZuKTtcbiAgICAgICAgICAgIHdpbmRvdy5wb3N0TWVzc2FnZSgncHJvY2Vzcy10aWNrJywgJyonKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dFRpY2soZm4pIHtcbiAgICAgICAgc2V0VGltZW91dChmbiwgMCk7XG4gICAgfTtcbn0pKCk7XG5cbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufVxuXG4vLyBUT0RPKHNodHlsbWFuKVxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbn0pLmNhbGwodGhpcyxyZXF1aXJlKFwib01mcEFuXCIpLHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSxyZXF1aXJlKFwiYnVmZmVyXCIpLkJ1ZmZlcixhcmd1bWVudHNbM10sYXJndW1lbnRzWzRdLGFyZ3VtZW50c1s1XSxhcmd1bWVudHNbNl0sXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2d1bHAtYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvcHJvY2Vzc1wiKSIsIihmdW5jdGlvbiAocHJvY2VzcyxnbG9iYWwsQnVmZmVyLF9fYXJndW1lbnQwLF9fYXJndW1lbnQxLF9fYXJndW1lbnQyLF9fYXJndW1lbnQzLF9fZmlsZW5hbWUsX19kaXJuYW1lKXtcbi8qXG4gKiAgQ29weXJpZ2h0IDIwMTEgVHdpdHRlciwgSW5jLlxuICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuXG5cbnZhciBIb2dhbiA9IHt9O1xuXG4oZnVuY3Rpb24gKEhvZ2FuLCB1c2VBcnJheUJ1ZmZlcikge1xuICBIb2dhbi5UZW1wbGF0ZSA9IGZ1bmN0aW9uIChjb2RlT2JqLCB0ZXh0LCBjb21waWxlciwgb3B0aW9ucykge1xuICAgIGNvZGVPYmogPSBjb2RlT2JqIHx8IHt9O1xuICAgIHRoaXMuciA9IGNvZGVPYmouY29kZSB8fCB0aGlzLnI7XG4gICAgdGhpcy5jID0gY29tcGlsZXI7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnRleHQgPSB0ZXh0IHx8ICcnO1xuICAgIHRoaXMucGFydGlhbHMgPSBjb2RlT2JqLnBhcnRpYWxzIHx8IHt9O1xuICAgIHRoaXMuc3VicyA9IGNvZGVPYmouc3VicyB8fCB7fTtcbiAgICB0aGlzLmliKCk7XG4gIH1cblxuICBIb2dhbi5UZW1wbGF0ZS5wcm90b3R5cGUgPSB7XG4gICAgLy8gcmVuZGVyOiByZXBsYWNlZCBieSBnZW5lcmF0ZWQgY29kZS5cbiAgICByOiBmdW5jdGlvbiAoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkgeyByZXR1cm4gJyc7IH0sXG5cbiAgICAvLyB2YXJpYWJsZSBlc2NhcGluZ1xuICAgIHY6IGhvZ2FuRXNjYXBlLFxuXG4gICAgLy8gdHJpcGxlIHN0YWNoZVxuICAgIHQ6IGNvZXJjZVRvU3RyaW5nLFxuXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCkge1xuICAgICAgcmV0dXJuIHRoaXMucmkoW2NvbnRleHRdLCBwYXJ0aWFscyB8fCB7fSwgaW5kZW50KTtcbiAgICB9LFxuXG4gICAgLy8gcmVuZGVyIGludGVybmFsIC0tIGEgaG9vayBmb3Igb3ZlcnJpZGVzIHRoYXQgY2F0Y2hlcyBwYXJ0aWFscyB0b29cbiAgICByaTogZnVuY3Rpb24gKGNvbnRleHQsIHBhcnRpYWxzLCBpbmRlbnQpIHtcbiAgICAgIHJldHVybiB0aGlzLnIoY29udGV4dCwgcGFydGlhbHMsIGluZGVudCk7XG4gICAgfSxcblxuICAgIC8vIGVuc3VyZVBhcnRpYWxcbiAgICBlcDogZnVuY3Rpb24oc3ltYm9sLCBwYXJ0aWFscykge1xuICAgICAgLy8gbWFrZSBwYXJ0aWFsIG5hbWVzIG5vdCBjYXNlIHNlbnNhdGl2ZVxuICAgICAgc3ltYm9sID0gc3ltYm9sLnRvTG93ZXJDYXNlKClcblxuICAgICAgdmFyIHBhcnRpYWwgPSB0aGlzLnBhcnRpYWxzW3N5bWJvbF07XG5cbiAgICAgIC8vIGNoZWNrIHRvIHNlZSB0aGF0IGlmIHdlJ3ZlIGluc3RhbnRpYXRlZCB0aGlzIHBhcnRpYWwgYmVmb3JlXG4gICAgICB2YXIgdGVtcGxhdGUgPSBwYXJ0aWFsc1twYXJ0aWFsLm5hbWVdO1xuICAgICAgaWYgKHBhcnRpYWwuaW5zdGFuY2UgJiYgcGFydGlhbC5iYXNlID09IHRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBwYXJ0aWFsLmluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRlbXBsYXRlID09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICghdGhpcy5jKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gY29tcGlsZXIgYXZhaWxhYmxlLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuYy5jb21waWxlKHRlbXBsYXRlLCB0aGlzLm9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSB1c2UgdGhpcyB0byBjaGVjayB3aGV0aGVyIHRoZSBwYXJ0aWFscyBkaWN0aW9uYXJ5IGhhcyBjaGFuZ2VkXG4gICAgICB0aGlzLnBhcnRpYWxzW3N5bWJvbF0uYmFzZSA9IHRlbXBsYXRlO1xuXG4gICAgICBpZiAocGFydGlhbC5zdWJzKSB7XG4gICAgICAgIHRlbXBsYXRlID0gY3JlYXRlU3BlY2lhbGl6ZWRQYXJ0aWFsKHRlbXBsYXRlLCBwYXJ0aWFsLnN1YnMsIHBhcnRpYWwucGFydGlhbHMsIHRoaXMudGV4dCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMucGFydGlhbHNbc3ltYm9sXS5pbnN0YW5jZSA9IHRlbXBsYXRlO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0sXG5cbiAgICAvLyB0cmllcyB0byBmaW5kIGEgcGFydGlhbCBpbiB0aGUgY3VyZW50IHNjb3BlIGFuZCByZW5kZXIgaXRcbiAgICBycDogZnVuY3Rpb24oc3ltYm9sLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICB2YXIgcGFydGlhbCA9IHRoaXMuZXAoc3ltYm9sLCBwYXJ0aWFscyk7XG4gICAgICBpZiAoIXBhcnRpYWwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcGFydGlhbC5yaShjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KTtcbiAgICB9LFxuXG4gICAgLy8gcmVuZGVyIGEgc2VjdGlvblxuICAgIHJzOiBmdW5jdGlvbihjb250ZXh0LCBwYXJ0aWFscywgc2VjdGlvbikge1xuICAgICAgdmFyIHRhaWwgPSBjb250ZXh0W2NvbnRleHQubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmICghaXNBcnJheSh0YWlsKSkge1xuICAgICAgICBzZWN0aW9uKGNvbnRleHQsIHBhcnRpYWxzLCB0aGlzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhaWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29udGV4dC5wdXNoKHRhaWxbaV0pO1xuICAgICAgICBzZWN0aW9uKGNvbnRleHQsIHBhcnRpYWxzLCB0aGlzKTtcbiAgICAgICAgY29udGV4dC5wb3AoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gbWF5YmUgc3RhcnQgYSBzZWN0aW9uXG4gICAgczogZnVuY3Rpb24odmFsLCBjdHgsIHBhcnRpYWxzLCBpbnZlcnRlZCwgc3RhcnQsIGVuZCwgdGFncykge1xuICAgICAgdmFyIHBhc3M7XG5cbiAgICAgIGlmIChpc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFsID0gdGhpcy5tcyh2YWwsIGN0eCwgcGFydGlhbHMsIGludmVydGVkLCBzdGFydCwgZW5kLCB0YWdzKTtcbiAgICAgIH1cblxuICAgICAgcGFzcyA9ICh2YWwgPT09ICcnKSB8fCAhIXZhbDtcblxuICAgICAgaWYgKCFpbnZlcnRlZCAmJiBwYXNzICYmIGN0eCkge1xuICAgICAgICBjdHgucHVzaCgodHlwZW9mIHZhbCA9PSAnb2JqZWN0JykgPyB2YWwgOiBjdHhbY3R4Lmxlbmd0aCAtIDFdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhc3M7XG4gICAgfSxcblxuICAgIC8vIGZpbmQgdmFsdWVzIHdpdGggZG90dGVkIG5hbWVzXG4gICAgZDogZnVuY3Rpb24oa2V5LCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCkge1xuICAgICAgdmFyIG5hbWVzID0ga2V5LnNwbGl0KCcuJyksXG4gICAgICAgICAgdmFsID0gdGhpcy5mKG5hbWVzWzBdLCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCksXG4gICAgICAgICAgY3ggPSBudWxsO1xuXG4gICAgICBpZiAoa2V5ID09PSAnLicgJiYgaXNBcnJheShjdHhbY3R4Lmxlbmd0aCAtIDJdKSkge1xuICAgICAgICB2YWwgPSBjdHhbY3R4Lmxlbmd0aCAtIDFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT0gJ29iamVjdCcgJiYgdmFsW25hbWVzW2ldXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGN4ID0gdmFsO1xuICAgICAgICAgICAgICB2YWwgPSB2YWxbbmFtZXNbaV1dO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmV0dXJuRm91bmQgJiYgIXZhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmV0dXJuRm91bmQgJiYgdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGN0eC5wdXNoKGN4KTtcbiAgICAgICAgdmFsID0gdGhpcy5tdih2YWwsIGN0eCwgcGFydGlhbHMpO1xuICAgICAgICBjdHgucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSxcblxuICAgIC8vIGZpbmQgdmFsdWVzIHdpdGggbm9ybWFsIG5hbWVzXG4gICAgZjogZnVuY3Rpb24oa2V5LCBjdHgsIHBhcnRpYWxzLCByZXR1cm5Gb3VuZCkge1xuICAgICAgdmFyIHZhbCA9IGZhbHNlLFxuICAgICAgICAgIHYgPSBudWxsLFxuICAgICAgICAgIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGkgPSBjdHgubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgdiA9IGN0eFtpXTtcbiAgICAgICAgaWYgKHYgJiYgdHlwZW9mIHYgPT0gJ29iamVjdCcgJiYgdltrZXldICE9IG51bGwpIHtcbiAgICAgICAgICB2YWwgPSB2W2tleV07XG4gICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgcmV0dXJuIChyZXR1cm5Gb3VuZCkgPyBmYWxzZSA6IFwiXCI7XG4gICAgICB9XG5cbiAgICAgIGlmICghcmV0dXJuRm91bmQgJiYgdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhbCA9IHRoaXMubXYodmFsLCBjdHgsIHBhcnRpYWxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LFxuXG4gICAgLy8gaGlnaGVyIG9yZGVyIHRlbXBsYXRlc1xuICAgIGxzOiBmdW5jdGlvbihmdW5jLCBjeCwgcGFydGlhbHMsIHRleHQsIHRhZ3MpIHtcbiAgICAgIHZhciBvbGRUYWdzID0gdGhpcy5vcHRpb25zLmRlbGltaXRlcnM7XG5cbiAgICAgIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXJzID0gdGFncztcbiAgICAgIHRoaXMuYih0aGlzLmN0KGNvZXJjZVRvU3RyaW5nKGZ1bmMuY2FsbChjeCwgdGV4dCkpLCBjeCwgcGFydGlhbHMpKTtcbiAgICAgIHRoaXMub3B0aW9ucy5kZWxpbWl0ZXJzID0gb2xkVGFncztcblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBjb21waWxlIHRleHRcbiAgICBjdDogZnVuY3Rpb24odGV4dCwgY3gsIHBhcnRpYWxzKSB7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRpc2FibGVMYW1iZGEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMYW1iZGEgZmVhdHVyZXMgZGlzYWJsZWQuJyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5jLmNvbXBpbGUodGV4dCwgdGhpcy5vcHRpb25zKS5yZW5kZXIoY3gsIHBhcnRpYWxzKTtcbiAgICB9LFxuXG4gICAgLy8gdGVtcGxhdGUgcmVzdWx0IGJ1ZmZlcmluZ1xuICAgIGI6ICh1c2VBcnJheUJ1ZmZlcikgPyBmdW5jdGlvbihzKSB7IHRoaXMuYnVmLnB1c2gocyk7IH0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihzKSB7IHRoaXMuYnVmICs9IHM7IH0sXG5cbiAgICBmbDogKHVzZUFycmF5QnVmZmVyKSA/IGZ1bmN0aW9uKCkgeyB2YXIgciA9IHRoaXMuYnVmLmpvaW4oJycpOyB0aGlzLmJ1ZiA9IFtdOyByZXR1cm4gcjsgfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHsgdmFyIHIgPSB0aGlzLmJ1ZjsgdGhpcy5idWYgPSAnJzsgcmV0dXJuIHI7IH0sXG4gICAgLy8gaW5pdCB0aGUgYnVmZmVyXG4gICAgaWI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuYnVmID0gKHVzZUFycmF5QnVmZmVyKSA/IFtdIDogJyc7XG4gICAgfSxcblxuICAgIC8vIG1ldGhvZCByZXBsYWNlIHNlY3Rpb25cbiAgICBtczogZnVuY3Rpb24oZnVuYywgY3R4LCBwYXJ0aWFscywgaW52ZXJ0ZWQsIHN0YXJ0LCBlbmQsIHRhZ3MpIHtcbiAgICAgIHZhciB0ZXh0U291cmNlLFxuICAgICAgICAgIGN4ID0gY3R4W2N0eC5sZW5ndGggLSAxXSxcbiAgICAgICAgICByZXN1bHQgPSBmdW5jLmNhbGwoY3gpO1xuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGlmIChpbnZlcnRlZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRleHRTb3VyY2UgPSAodGhpcy5hY3RpdmVTdWIgJiYgdGhpcy5zdWJzVGV4dFt0aGlzLmFjdGl2ZVN1Yl0pID8gdGhpcy5zdWJzVGV4dFt0aGlzLmFjdGl2ZVN1Yl0gOiB0aGlzLnRleHQ7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubHMocmVzdWx0LCBjeCwgcGFydGlhbHMsIHRleHRTb3VyY2Uuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpLCB0YWdzKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG5cbiAgICAvLyBtZXRob2QgcmVwbGFjZSB2YXJpYWJsZVxuICAgIG12OiBmdW5jdGlvbihmdW5jLCBjdHgsIHBhcnRpYWxzKSB7XG4gICAgICB2YXIgY3ggPSBjdHhbY3R4Lmxlbmd0aCAtIDFdO1xuICAgICAgdmFyIHJlc3VsdCA9IGZ1bmMuY2FsbChjeCk7XG5cbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3QoY29lcmNlVG9TdHJpbmcocmVzdWx0LmNhbGwoY3gpKSwgY3gsIHBhcnRpYWxzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgc3ViOiBmdW5jdGlvbihuYW1lLCBjb250ZXh0LCBwYXJ0aWFscywgaW5kZW50KSB7XG4gICAgICB2YXIgZiA9IHRoaXMuc3Vic1tuYW1lXTtcbiAgICAgIGlmIChmKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU3ViID0gbmFtZTtcbiAgICAgICAgZihjb250ZXh0LCBwYXJ0aWFscywgdGhpcywgaW5kZW50KTtcbiAgICAgICAgdGhpcy5hY3RpdmVTdWIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfTtcblxuICBmdW5jdGlvbiBjcmVhdGVTcGVjaWFsaXplZFBhcnRpYWwoaW5zdGFuY2UsIHN1YnMsIHBhcnRpYWxzLCBjaGlsZFRleHQpIHtcbiAgICBmdW5jdGlvbiBQYXJ0aWFsVGVtcGxhdGUoKSB7fTtcbiAgICBQYXJ0aWFsVGVtcGxhdGUucHJvdG90eXBlID0gaW5zdGFuY2U7XG4gICAgZnVuY3Rpb24gU3Vic3RpdHV0aW9ucygpIHt9O1xuICAgIFN1YnN0aXR1dGlvbnMucHJvdG90eXBlID0gaW5zdGFuY2Uuc3VicztcbiAgICB2YXIga2V5O1xuICAgIHZhciBwYXJ0aWFsID0gbmV3IFBhcnRpYWxUZW1wbGF0ZSgpO1xuICAgIHBhcnRpYWwuc3VicyA9IG5ldyBTdWJzdGl0dXRpb25zKCk7XG4gICAgcGFydGlhbC5zdWJzVGV4dCA9IHt9OyAgLy9oZWhlLiBzdWJzdGV4dC5cbiAgICBwYXJ0aWFsLmliKCk7XG5cbiAgICBmb3IgKGtleSBpbiBzdWJzKSB7XG4gICAgICBwYXJ0aWFsLnN1YnNba2V5XSA9IHN1YnNba2V5XTtcbiAgICAgIHBhcnRpYWwuc3Vic1RleHRba2V5XSA9IGNoaWxkVGV4dDtcbiAgICB9XG5cbiAgICBmb3IgKGtleSBpbiBwYXJ0aWFscykge1xuICAgICAgcGFydGlhbC5wYXJ0aWFsc1trZXldID0gcGFydGlhbHNba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFydGlhbDtcbiAgfVxuXG4gIHZhciByQW1wID0gLyYvZyxcbiAgICAgIHJMdCA9IC88L2csXG4gICAgICByR3QgPSAvPi9nLFxuICAgICAgckFwb3MgPS9cXCcvZyxcbiAgICAgIHJRdW90ID0gL1xcXCIvZyxcbiAgICAgIGhDaGFycyA9L1smPD5cXFwiXFwnXS87XG5cbiAgZnVuY3Rpb24gY29lcmNlVG9TdHJpbmcodmFsKSB7XG4gICAgcmV0dXJuIFN0cmluZygodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSA/ICcnIDogdmFsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhvZ2FuRXNjYXBlKHN0cikge1xuICAgIHN0ciA9IGNvZXJjZVRvU3RyaW5nKHN0cik7XG4gICAgcmV0dXJuIGhDaGFycy50ZXN0KHN0cikgP1xuICAgICAgc3RyXG4gICAgICAgIC5yZXBsYWNlKHJBbXAsJyZhbXA7JylcbiAgICAgICAgLnJlcGxhY2Uockx0LCcmbHQ7JylcbiAgICAgICAgLnJlcGxhY2Uockd0LCcmZ3Q7JylcbiAgICAgICAgLnJlcGxhY2UockFwb3MsJyYjMzk7JylcbiAgICAgICAgLnJlcGxhY2UoclF1b3QsICcmcXVvdDsnKSA6XG4gICAgICBzdHI7XG4gIH1cblxuICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYSkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG5cbn0pKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJyA/IGV4cG9ydHMgOiBIb2dhbik7XG5cblxuXG4oZnVuY3Rpb24gKEhvZ2FuKSB7XG4gIC8vIFNldHVwIHJlZ2V4ICBhc3NpZ25tZW50c1xuICAvLyByZW1vdmUgd2hpdGVzcGFjZSBhY2NvcmRpbmcgdG8gTXVzdGFjaGUgc3BlY1xuICB2YXIgcklzV2hpdGVzcGFjZSA9IC9cXFMvLFxuICAgICAgclF1b3QgPSAvXFxcIi9nLFxuICAgICAgck5ld2xpbmUgPSAgL1xcbi9nLFxuICAgICAgckNyID0gL1xcci9nLFxuICAgICAgclNsYXNoID0gL1xcXFwvZztcblxuICBIb2dhbi50YWdzID0ge1xuICAgICcjJzogMSwgJ14nOiAyLCAnPCc6IDMsICckJzogNCxcbiAgICAnLyc6IDUsICchJzogNiwgJz4nOiA3LCAnPSc6IDgsICdfdic6IDksXG4gICAgJ3snOiAxMCwgJyYnOiAxMSwgJ190JzogMTJcbiAgfTtcblxuICBIb2dhbi5zY2FuID0gZnVuY3Rpb24gc2Nhbih0ZXh0LCBkZWxpbWl0ZXJzKSB7XG4gICAgdmFyIGxlbiA9IHRleHQubGVuZ3RoLFxuICAgICAgICBJTl9URVhUID0gMCxcbiAgICAgICAgSU5fVEFHX1RZUEUgPSAxLFxuICAgICAgICBJTl9UQUcgPSAyLFxuICAgICAgICBzdGF0ZSA9IElOX1RFWFQsXG4gICAgICAgIHRhZ1R5cGUgPSBudWxsLFxuICAgICAgICB0YWcgPSBudWxsLFxuICAgICAgICBidWYgPSAnJyxcbiAgICAgICAgdG9rZW5zID0gW10sXG4gICAgICAgIHNlZW5UYWcgPSBmYWxzZSxcbiAgICAgICAgaSA9IDAsXG4gICAgICAgIGxpbmVTdGFydCA9IDAsXG4gICAgICAgIG90YWcgPSAne3snLFxuICAgICAgICBjdGFnID0gJ319JztcblxuICAgIGZ1bmN0aW9uIGFkZEJ1ZigpIHtcbiAgICAgIGlmIChidWYubGVuZ3RoID4gMCkge1xuICAgICAgICB0b2tlbnMucHVzaCh7dGFnOiAnX3QnLCB0ZXh0OiBuZXcgU3RyaW5nKGJ1Zil9KTtcbiAgICAgICAgYnVmID0gJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGluZUlzV2hpdGVzcGFjZSgpIHtcbiAgICAgIHZhciBpc0FsbFdoaXRlc3BhY2UgPSB0cnVlO1xuICAgICAgZm9yICh2YXIgaiA9IGxpbmVTdGFydDsgaiA8IHRva2Vucy5sZW5ndGg7IGorKykge1xuICAgICAgICBpc0FsbFdoaXRlc3BhY2UgPVxuICAgICAgICAgIChIb2dhbi50YWdzW3Rva2Vuc1tqXS50YWddIDwgSG9nYW4udGFnc1snX3YnXSkgfHxcbiAgICAgICAgICAodG9rZW5zW2pdLnRhZyA9PSAnX3QnICYmIHRva2Vuc1tqXS50ZXh0Lm1hdGNoKHJJc1doaXRlc3BhY2UpID09PSBudWxsKTtcbiAgICAgICAgaWYgKCFpc0FsbFdoaXRlc3BhY2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzQWxsV2hpdGVzcGFjZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmaWx0ZXJMaW5lKGhhdmVTZWVuVGFnLCBub05ld0xpbmUpIHtcbiAgICAgIGFkZEJ1ZigpO1xuXG4gICAgICBpZiAoaGF2ZVNlZW5UYWcgJiYgbGluZUlzV2hpdGVzcGFjZSgpKSB7XG4gICAgICAgIGZvciAodmFyIGogPSBsaW5lU3RhcnQsIG5leHQ7IGogPCB0b2tlbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBpZiAodG9rZW5zW2pdLnRleHQpIHtcbiAgICAgICAgICAgIGlmICgobmV4dCA9IHRva2Vuc1tqKzFdKSAmJiBuZXh0LnRhZyA9PSAnPicpIHtcbiAgICAgICAgICAgICAgLy8gc2V0IGluZGVudCB0byB0b2tlbiB2YWx1ZVxuICAgICAgICAgICAgICBuZXh0LmluZGVudCA9IHRva2Vuc1tqXS50ZXh0LnRvU3RyaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFub05ld0xpbmUpIHtcbiAgICAgICAgdG9rZW5zLnB1c2goe3RhZzonXFxuJ30pO1xuICAgICAgfVxuXG4gICAgICBzZWVuVGFnID0gZmFsc2U7XG4gICAgICBsaW5lU3RhcnQgPSB0b2tlbnMubGVuZ3RoO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYW5nZURlbGltaXRlcnModGV4dCwgaW5kZXgpIHtcbiAgICAgIHZhciBjbG9zZSA9ICc9JyArIGN0YWcsXG4gICAgICAgICAgY2xvc2VJbmRleCA9IHRleHQuaW5kZXhPZihjbG9zZSwgaW5kZXgpLFxuICAgICAgICAgIGRlbGltaXRlcnMgPSB0cmltKFxuICAgICAgICAgICAgdGV4dC5zdWJzdHJpbmcodGV4dC5pbmRleE9mKCc9JywgaW5kZXgpICsgMSwgY2xvc2VJbmRleClcbiAgICAgICAgICApLnNwbGl0KCcgJyk7XG5cbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbMV07XG5cbiAgICAgIHJldHVybiBjbG9zZUluZGV4ICsgY2xvc2UubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZiAoZGVsaW1pdGVycykge1xuICAgICAgZGVsaW1pdGVycyA9IGRlbGltaXRlcnMuc3BsaXQoJyAnKTtcbiAgICAgIG90YWcgPSBkZWxpbWl0ZXJzWzBdO1xuICAgICAgY3RhZyA9IGRlbGltaXRlcnNbMV07XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpZiAoc3RhdGUgPT0gSU5fVEVYVCkge1xuICAgICAgICBpZiAodGFnQ2hhbmdlKG90YWcsIHRleHQsIGkpKSB7XG4gICAgICAgICAgLS1pO1xuICAgICAgICAgIGFkZEJ1ZigpO1xuICAgICAgICAgIHN0YXRlID0gSU5fVEFHX1RZUEU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRleHQuY2hhckF0KGkpID09ICdcXG4nKSB7XG4gICAgICAgICAgICBmaWx0ZXJMaW5lKHNlZW5UYWcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidWYgKz0gdGV4dC5jaGFyQXQoaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHN0YXRlID09IElOX1RBR19UWVBFKSB7XG4gICAgICAgIGkgKz0gb3RhZy5sZW5ndGggLSAxO1xuICAgICAgICB0YWcgPSBIb2dhbi50YWdzW3RleHQuY2hhckF0KGkgKyAxKV07XG4gICAgICAgIHRhZ1R5cGUgPSB0YWcgPyB0ZXh0LmNoYXJBdChpICsgMSkgOiAnX3YnO1xuICAgICAgICBpZiAodGFnVHlwZSA9PSAnPScpIHtcbiAgICAgICAgICBpID0gY2hhbmdlRGVsaW1pdGVycyh0ZXh0LCBpKTtcbiAgICAgICAgICBzdGF0ZSA9IElOX1RFWFQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdGF0ZSA9IElOX1RBRztcbiAgICAgICAgfVxuICAgICAgICBzZWVuVGFnID0gaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0YWdDaGFuZ2UoY3RhZywgdGV4dCwgaSkpIHtcbiAgICAgICAgICB0b2tlbnMucHVzaCh7dGFnOiB0YWdUeXBlLCBuOiB0cmltKGJ1ZiksIG90YWc6IG90YWcsIGN0YWc6IGN0YWcsXG4gICAgICAgICAgICAgICAgICAgICAgIGk6ICh0YWdUeXBlID09ICcvJykgPyBzZWVuVGFnIC0gb3RhZy5sZW5ndGggOiBpICsgY3RhZy5sZW5ndGh9KTtcbiAgICAgICAgICBidWYgPSAnJztcbiAgICAgICAgICBpICs9IGN0YWcubGVuZ3RoIC0gMTtcbiAgICAgICAgICBzdGF0ZSA9IElOX1RFWFQ7XG4gICAgICAgICAgaWYgKHRhZ1R5cGUgPT0gJ3snKSB7XG4gICAgICAgICAgICBpZiAoY3RhZyA9PSAnfX0nKSB7XG4gICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNsZWFuVHJpcGxlU3RhY2hlKHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidWYgKz0gdGV4dC5jaGFyQXQoaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmaWx0ZXJMaW5lKHNlZW5UYWcsIHRydWUpO1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFuVHJpcGxlU3RhY2hlKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLm4uc3Vic3RyKHRva2VuLm4ubGVuZ3RoIC0gMSkgPT09ICd9Jykge1xuICAgICAgdG9rZW4ubiA9IHRva2VuLm4uc3Vic3RyaW5nKDAsIHRva2VuLm4ubGVuZ3RoIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpbShzKSB7XG4gICAgaWYgKHMudHJpbSkge1xuICAgICAgcmV0dXJuIHMudHJpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzLnJlcGxhY2UoL15cXHMqfFxccyokL2csICcnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRhZ0NoYW5nZSh0YWcsIHRleHQsIGluZGV4KSB7XG4gICAgaWYgKHRleHQuY2hhckF0KGluZGV4KSAhPSB0YWcuY2hhckF0KDApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDEsIGwgPSB0YWcubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAodGV4dC5jaGFyQXQoaW5kZXggKyBpKSAhPSB0YWcuY2hhckF0KGkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHRoZSB0YWdzIGFsbG93ZWQgaW5zaWRlIHN1cGVyIHRlbXBsYXRlc1xuICB2YXIgYWxsb3dlZEluU3VwZXIgPSB7J190JzogdHJ1ZSwgJ1xcbic6IHRydWUsICckJzogdHJ1ZSwgJy8nOiB0cnVlfTtcblxuICBmdW5jdGlvbiBidWlsZFRyZWUodG9rZW5zLCBraW5kLCBzdGFjaywgY3VzdG9tVGFncykge1xuICAgIHZhciBpbnN0cnVjdGlvbnMgPSBbXSxcbiAgICAgICAgb3BlbmVyID0gbnVsbCxcbiAgICAgICAgdGFpbCA9IG51bGwsXG4gICAgICAgIHRva2VuID0gbnVsbDtcblxuICAgIHRhaWwgPSBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblxuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoID4gMCkge1xuICAgICAgdG9rZW4gPSB0b2tlbnMuc2hpZnQoKTtcblxuICAgICAgaWYgKHRhaWwgJiYgdGFpbC50YWcgPT0gJzwnICYmICEodG9rZW4udGFnIGluIGFsbG93ZWRJblN1cGVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY29udGVudCBpbiA8IHN1cGVyIHRhZy4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEhvZ2FuLnRhZ3NbdG9rZW4udGFnXSA8PSBIb2dhbi50YWdzWyckJ10gfHwgaXNPcGVuZXIodG9rZW4sIGN1c3RvbVRhZ3MpKSB7XG4gICAgICAgIHN0YWNrLnB1c2godG9rZW4pO1xuICAgICAgICB0b2tlbi5ub2RlcyA9IGJ1aWxkVHJlZSh0b2tlbnMsIHRva2VuLnRhZywgc3RhY2ssIGN1c3RvbVRhZ3MpO1xuICAgICAgfSBlbHNlIGlmICh0b2tlbi50YWcgPT0gJy8nKSB7XG4gICAgICAgIGlmIChzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nsb3NpbmcgdGFnIHdpdGhvdXQgb3BlbmVyOiAvJyArIHRva2VuLm4pO1xuICAgICAgICB9XG4gICAgICAgIG9wZW5lciA9IHN0YWNrLnBvcCgpO1xuICAgICAgICBpZiAodG9rZW4ubiAhPSBvcGVuZXIubiAmJiAhaXNDbG9zZXIodG9rZW4ubiwgb3BlbmVyLm4sIGN1c3RvbVRhZ3MpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXN0aW5nIGVycm9yOiAnICsgb3BlbmVyLm4gKyAnIHZzLiAnICsgdG9rZW4ubik7XG4gICAgICAgIH1cbiAgICAgICAgb3BlbmVyLmVuZCA9IHRva2VuLmk7XG4gICAgICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gICAgICB9IGVsc2UgaWYgKHRva2VuLnRhZyA9PSAnXFxuJykge1xuICAgICAgICB0b2tlbi5sYXN0ID0gKHRva2Vucy5sZW5ndGggPT0gMCkgfHwgKHRva2Vuc1swXS50YWcgPT0gJ1xcbicpO1xuICAgICAgfVxuXG4gICAgICBpbnN0cnVjdGlvbnMucHVzaCh0b2tlbik7XG4gICAgfVxuXG4gICAgaWYgKHN0YWNrLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbWlzc2luZyBjbG9zaW5nIHRhZzogJyArIHN0YWNrLnBvcCgpLm4pO1xuICAgIH1cblxuICAgIHJldHVybiBpbnN0cnVjdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBpc09wZW5lcih0b2tlbiwgdGFncykge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmICh0YWdzW2ldLm8gPT0gdG9rZW4ubikge1xuICAgICAgICB0b2tlbi50YWcgPSAnIyc7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzQ2xvc2VyKGNsb3NlLCBvcGVuLCB0YWdzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB0YWdzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKHRhZ3NbaV0uYyA9PSBjbG9zZSAmJiB0YWdzW2ldLm8gPT0gb3Blbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdpZnlTdWJzdGl0dXRpb25zKG9iaikge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGl0ZW1zLnB1c2goJ1wiJyArIGVzYyhrZXkpICsgJ1wiOiBmdW5jdGlvbihjLHAsdCxpKSB7JyArIG9ialtrZXldICsgJ30nKTtcbiAgICB9XG4gICAgcmV0dXJuIFwieyBcIiArIGl0ZW1zLmpvaW4oXCIsXCIpICsgXCIgfVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RyaW5naWZ5UGFydGlhbHMoY29kZU9iaikge1xuICAgIHZhciBwYXJ0aWFscyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBjb2RlT2JqLnBhcnRpYWxzKSB7XG4gICAgICBwYXJ0aWFscy5wdXNoKCdcIicgKyBlc2Moa2V5KSArICdcIjp7bmFtZTpcIicgKyBlc2MoY29kZU9iai5wYXJ0aWFsc1trZXldLm5hbWUudG9Mb3dlckNhc2UoKSkgKyAnXCIsICcgKyBzdHJpbmdpZnlQYXJ0aWFscyhjb2RlT2JqLnBhcnRpYWxzW2tleV0pICsgXCJ9XCIpO1xuICAgIH1cbiAgICByZXR1cm4gXCJwYXJ0aWFsczoge1wiICsgcGFydGlhbHMuam9pbihcIixcIikgKyBcIn0sIHN1YnM6IFwiICsgc3RyaW5naWZ5U3Vic3RpdHV0aW9ucyhjb2RlT2JqLnN1YnMpO1xuICB9XG5cbiAgSG9nYW4uc3RyaW5naWZ5ID0gZnVuY3Rpb24oY29kZU9iaiwgdGV4dCwgb3B0aW9ucykge1xuICAgIHJldHVybiBcIntjb2RlOiBmdW5jdGlvbiAoYyxwLGkpIHsgXCIgKyBIb2dhbi53cmFwTWFpbihjb2RlT2JqLmNvZGUpICsgXCIgfSxcIiArIHN0cmluZ2lmeVBhcnRpYWxzKGNvZGVPYmopICsgIFwifVwiO1xuICB9XG5cbiAgdmFyIHNlcmlhbE5vID0gMDtcbiAgSG9nYW4uZ2VuZXJhdGUgPSBmdW5jdGlvbih0cmVlLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgc2VyaWFsTm8gPSAwO1xuICAgIHZhciBjb250ZXh0ID0geyBjb2RlOiAnJywgc3Viczoge30sIHBhcnRpYWxzOiB7fSB9O1xuICAgIEhvZ2FuLndhbGsodHJlZSwgY29udGV4dCk7XG5cbiAgICBpZiAob3B0aW9ucy5hc1N0cmluZykge1xuICAgICAgcmV0dXJuIHRoaXMuc3RyaW5naWZ5KGNvbnRleHQsIHRleHQsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLm1ha2VUZW1wbGF0ZShjb250ZXh0LCB0ZXh0LCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLndyYXBNYWluID0gZnVuY3Rpb24oY29kZSkge1xuICAgIHJldHVybiAndmFyIHQ9dGhpczt0LmIoaT1pfHxcIlwiKTsnICsgY29kZSArICdyZXR1cm4gdC5mbCgpOyc7XG4gIH1cblxuICBIb2dhbi50ZW1wbGF0ZSA9IEhvZ2FuLlRlbXBsYXRlO1xuXG4gIEhvZ2FuLm1ha2VUZW1wbGF0ZSA9IGZ1bmN0aW9uKGNvZGVPYmosIHRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLm1ha2VQYXJ0aWFscyhjb2RlT2JqKTtcbiAgICB0ZW1wbGF0ZS5jb2RlID0gbmV3IEZ1bmN0aW9uKCdjJywgJ3AnLCAnaScsIHRoaXMud3JhcE1haW4oY29kZU9iai5jb2RlKSk7XG4gICAgcmV0dXJuIG5ldyB0aGlzLnRlbXBsYXRlKHRlbXBsYXRlLCB0ZXh0LCB0aGlzLCBvcHRpb25zKTtcbiAgfVxuXG4gIEhvZ2FuLm1ha2VQYXJ0aWFscyA9IGZ1bmN0aW9uKGNvZGVPYmopIHtcbiAgICB2YXIga2V5LCB0ZW1wbGF0ZSA9IHtzdWJzOiB7fSwgcGFydGlhbHM6IGNvZGVPYmoucGFydGlhbHMsIG5hbWU6IGNvZGVPYmoubmFtZX07XG4gICAgZm9yIChrZXkgaW4gdGVtcGxhdGUucGFydGlhbHMpIHtcbiAgICAgIC8vIGtleSA9IGtleS50b0xvd2VyQ2FzZSgpXG4gICAgICB0ZW1wbGF0ZS5wYXJ0aWFsc1trZXldID0gdGhpcy5tYWtlUGFydGlhbHModGVtcGxhdGUucGFydGlhbHNba2V5XSk7XG4gICAgfVxuICAgIGZvciAoa2V5IGluIGNvZGVPYmouc3Vicykge1xuICAgICAgdGVtcGxhdGUuc3Vic1trZXldID0gbmV3IEZ1bmN0aW9uKCdjJywgJ3AnLCAndCcsICdpJywgY29kZU9iai5zdWJzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBmdW5jdGlvbiBlc2Mocykge1xuICAgIHJldHVybiBzLnJlcGxhY2UoclNsYXNoLCAnXFxcXFxcXFwnKVxuICAgICAgICAgICAgLnJlcGxhY2UoclF1b3QsICdcXFxcXFxcIicpXG4gICAgICAgICAgICAucmVwbGFjZShyTmV3bGluZSwgJ1xcXFxuJylcbiAgICAgICAgICAgIC5yZXBsYWNlKHJDciwgJ1xcXFxyJyk7XG4gIH1cblxuICBmdW5jdGlvbiBjaG9vc2VNZXRob2Qocykge1xuICAgIHJldHVybiAofnMuaW5kZXhPZignLicpKSA/ICdkJyA6ICdmJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVBhcnRpYWwobm9kZSwgY29udGV4dCkge1xuICAgIHZhciBwcmVmaXggPSBcIjxcIiArIChjb250ZXh0LnByZWZpeCB8fCBcIlwiKTtcbiAgICB2YXIgc3ltID0gcHJlZml4ICsgbm9kZS5uICsgc2VyaWFsTm8rKztcblxuICAgIC8vIG1ha2UgcGFydGlhbCBuYW1lcyBub3QgY2FzZSBzZW5zYXRpdmVcbiAgICBjb250ZXh0LnBhcnRpYWxzW3N5bS50b0xvd2VyQ2FzZSgpXSA9IHtuYW1lOiBub2RlLm4sIHBhcnRpYWxzOiB7fX07XG4gICAgY29udGV4dC5jb2RlICs9ICd0LmIodC5ycChcIicgKyAgZXNjKHN5bSkgKyAnXCIsYyxwLFwiJyArIChub2RlLmluZGVudCB8fCAnJykgKyAnXCIpKTsnO1xuICAgIHJldHVybiBzeW07XG4gIH1cblxuICBIb2dhbi5jb2RlZ2VuID0ge1xuICAgICcjJzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9ICdpZih0LnModC4nICsgY2hvb3NlTWV0aG9kKG5vZGUubikgKyAnKFwiJyArIGVzYyhub2RlLm4pICsgJ1wiLGMscCwxKSwnICtcbiAgICAgICAgICAgICAgICAgICAgICAnYyxwLDAsJyArIG5vZGUuaSArICcsJyArIG5vZGUuZW5kICsgJyxcIicgKyBub2RlLm90YWcgKyBcIiBcIiArIG5vZGUuY3RhZyArICdcIikpeycgK1xuICAgICAgICAgICAgICAgICAgICAgICd0LnJzKGMscCwnICsgJ2Z1bmN0aW9uKGMscCx0KXsnO1xuICAgICAgSG9nYW4ud2Fsayhub2RlLm5vZGVzLCBjb250ZXh0KTtcbiAgICAgIGNvbnRleHQuY29kZSArPSAnfSk7Yy5wb3AoKTt9JztcbiAgICB9LFxuXG4gICAgJ14nOiBmdW5jdGlvbihub2RlLCBjb250ZXh0KSB7XG4gICAgICBjb250ZXh0LmNvZGUgKz0gJ2lmKCF0LnModC4nICsgY2hvb3NlTWV0aG9kKG5vZGUubikgKyAnKFwiJyArIGVzYyhub2RlLm4pICsgJ1wiLGMscCwxKSxjLHAsMSwwLDAsXCJcIikpeyc7XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGNvbnRleHQpO1xuICAgICAgY29udGV4dC5jb2RlICs9ICd9Oyc7XG4gICAgfSxcblxuICAgICc+JzogY3JlYXRlUGFydGlhbCxcbiAgICAnPCc6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIHZhciBjdHggPSB7cGFydGlhbHM6IHt9LCBjb2RlOiAnJywgc3Viczoge30sIGluUGFydGlhbDogdHJ1ZX07XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGN0eCk7XG4gICAgICB2YXIgdGVtcGxhdGUgPSBjb250ZXh0LnBhcnRpYWxzW2NyZWF0ZVBhcnRpYWwobm9kZSwgY29udGV4dCldO1xuICAgICAgdGVtcGxhdGUuc3VicyA9IGN0eC5zdWJzO1xuICAgICAgdGVtcGxhdGUucGFydGlhbHMgPSBjdHgucGFydGlhbHM7XG4gICAgfSxcblxuICAgICckJzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgdmFyIGN0eCA9IHtzdWJzOiB7fSwgY29kZTogJycsIHBhcnRpYWxzOiBjb250ZXh0LnBhcnRpYWxzLCBwcmVmaXg6IG5vZGUubn07XG4gICAgICBIb2dhbi53YWxrKG5vZGUubm9kZXMsIGN0eCk7XG4gICAgICBjb250ZXh0LnN1YnNbbm9kZS5uXSA9IGN0eC5jb2RlO1xuICAgICAgaWYgKCFjb250ZXh0LmluUGFydGlhbCkge1xuICAgICAgICBjb250ZXh0LmNvZGUgKz0gJ3Quc3ViKFwiJyArIGVzYyhub2RlLm4pICsgJ1wiLGMscCxpKTsnO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAnXFxuJzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9IHdyaXRlKCdcIlxcXFxuXCInICsgKG5vZGUubGFzdCA/ICcnIDogJyArIGknKSk7XG4gICAgfSxcblxuICAgICdfdic6IGZ1bmN0aW9uKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgIGNvbnRleHQuY29kZSArPSAndC5iKHQudih0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDApKSk7JztcbiAgICB9LFxuXG4gICAgJ190JzogZnVuY3Rpb24obm9kZSwgY29udGV4dCkge1xuICAgICAgY29udGV4dC5jb2RlICs9IHdyaXRlKCdcIicgKyBlc2Mobm9kZS50ZXh0KSArICdcIicpO1xuICAgIH0sXG5cbiAgICAneyc6IHRyaXBsZVN0YWNoZSxcblxuICAgICcmJzogdHJpcGxlU3RhY2hlXG4gIH1cblxuICBmdW5jdGlvbiB0cmlwbGVTdGFjaGUobm9kZSwgY29udGV4dCkge1xuICAgIGNvbnRleHQuY29kZSArPSAndC5iKHQudCh0LicgKyBjaG9vc2VNZXRob2Qobm9kZS5uKSArICcoXCInICsgZXNjKG5vZGUubikgKyAnXCIsYyxwLDApKSk7JztcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyaXRlKHMpIHtcbiAgICByZXR1cm4gJ3QuYignICsgcyArICcpOyc7XG4gIH1cblxuICBIb2dhbi53YWxrID0gZnVuY3Rpb24gKG5vZGVsaXN0LCBjb250ZXh0KSB7XG4gICAgdmFyIGZ1bmM7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2RlbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZ1bmMgPSBIb2dhbi5jb2RlZ2VuW25vZGVsaXN0W2ldLnRhZ107XG4gICAgICBmdW5jICYmIGZ1bmMobm9kZWxpc3RbaV0sIGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIEhvZ2FuLnBhcnNlID0gZnVuY3Rpb24odG9rZW5zLCB0ZXh0LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgcmV0dXJuIGJ1aWxkVHJlZSh0b2tlbnMsICcnLCBbXSwgb3B0aW9ucy5zZWN0aW9uVGFncyB8fCBbXSk7XG4gIH0sXG5cbiAgSG9nYW4uY2FjaGUgPSB7fTtcblxuICBIb2dhbi5jYWNoZUtleSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gW3RleHQsICEhb3B0aW9ucy5hc1N0cmluZywgISFvcHRpb25zLmRpc2FibGVMYW1iZGFdLmpvaW4oJ3x8Jyk7XG4gIH0sXG5cbiAgSG9nYW4uY29tcGlsZSA9IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIga2V5ID0gSG9nYW4uY2FjaGVLZXkodGV4dCwgb3B0aW9ucyk7XG4gICAgdmFyIHRlbXBsYXRlID0gdGhpcy5jYWNoZVtrZXldO1xuXG4gICAgaWYgKHRlbXBsYXRlKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuXG4gICAgdGVtcGxhdGUgPSB0aGlzLmdlbmVyYXRlKHRoaXMucGFyc2UodGhpcy5zY2FuKHRleHQsIG9wdGlvbnMuZGVsaW1pdGVycyksIHRleHQsIG9wdGlvbnMpLCB0ZXh0LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5jYWNoZVtrZXldID0gdGVtcGxhdGU7XG4gIH07XG59KSh0eXBlb2YgZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogSG9nYW4pO1xuXG59KS5jYWxsKHRoaXMscmVxdWlyZShcIm9NZnBBblwiKSx0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiA/IHNlbGYgOiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDoge30scmVxdWlyZShcImJ1ZmZlclwiKS5CdWZmZXIsYXJndW1lbnRzWzNdLGFyZ3VtZW50c1s0XSxhcmd1bWVudHNbNV0sYXJndW1lbnRzWzZdLFwiLy4uLy4uL25vZGVfbW9kdWxlcy9ob2dhbi11cGRhdGVkL2hvZ2FuLmpzXCIsXCIvLi4vLi4vbm9kZV9tb2R1bGVzL2hvZ2FuLXVwZGF0ZWRcIikiXX0=
