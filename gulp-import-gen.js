var through = require('through2');
var gutil = require('gulp-util');
var path = require('path');


module.exports.css = function(fruitpath){
	var paths = '';	// where we will push the path names with the @import

	var write = function (file, enc, cb){
		if (file.path != "undefined" && !!path.relative(fruitpath, path.dirname(file.path))){
			paths =	paths + '@import "' + path.relative(fruitpath, path.dirname(file.path) + '/style') + '";\n';
		}
		cb();
	};

	var flush = function(cb){	// flush occurs at the end of the concating from write()
		// gutil.log(gutil.colors.cyan(paths));	// log it

		var newFile = new gutil.File({	// create a new file
			base: __dirname,
			cwd: __dirname,
			path: '_fruit.scss',
			contents: new Buffer(paths)	// set the contents to the paths we created
		});

		this.push(newFile);	// push the new file to gulp's stream
		cb();
	};

	return through.obj(write, flush);	// return it
};


module.exports.js = function(fruitpath){
  var paths = '\'use strict\';\n\n'; // where we will push the path names with the @import

  var write = function (file, enc, cb){
    if (file.path != "undefined" && !!path.relative(fruitpath, path.dirname(file.path))){
      paths = paths + 'require("./' + path.relative(fruitpath, path.dirname(file.path)) + '");\n';
    }
    cb();
  };

  var flush = function(cb){ // flush occurs at the end of the concating from write()
    // gutil.log(gutil.colors.cyan(paths));  // log it

    var newFile = new gutil.File({  // create a new file
      base: __dirname,
      cwd: __dirname,
      path: 'index.js',
      contents: new Buffer(paths) // set the contents to the paths we created
    });

    this.push(newFile); // push the new file to gulp's stream
    cb();
  };

  return through.obj(write, flush); // return it
};
