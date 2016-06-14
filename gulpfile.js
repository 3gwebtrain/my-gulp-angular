var paths 		= require('./gulp/paths'),
	args 		= require('yargs').argv,
	fileSytems 	= require('file-system'),
	ngConstant	= require('gulp-ng-constant');

var ENV = args.env || "mock";

var config = JSON.parse(fileSytems.readFileSync( paths[ENV].config, 'utf8'));

console.log( paths[ENV].config  , ENV, config );