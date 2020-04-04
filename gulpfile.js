/**
 * Arquivo de configurações GULP
 */

 /**
  * Objefo principal
  * @type {gulp}
  */
 const {src, dest, series, parallel, watch}  = require('gulp');


// ! Orchestration
var orchestrator = {
	del: require('del'),
	terser: require('gulp-terser'),
	rename: require('gulp-rename'),
	outJs: './dist',
	inJs: './dist/*.js'
};

function clear(cb) {
	orchestrator.del([orchestrator.outJs + '/*.min.js']);
	cb();
}

function terser(cb) {
	src(orchestrator.inJs).pipe(orchestrator.terser()).pipe(
		orchestrator.rename(function (path) {
			path.basename += '.min';
		})
	).pipe(dest(orchestrator.outJs));
	cb();
}

exports.clear = clear;
exports.terser = terser;
