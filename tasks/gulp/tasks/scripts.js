/**
 * Compile Scripts.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

'use strict';

import { api, babel, concat, del, enviroment, gulp, gulpif, ignore, rename, sourcemaps, uglify, webpack, webpackStream } from '../config/imports';

const webpackConfig = require( './../../../webpack.config.js' );
const scriptsDir = enviroment.paths.scripts;
const js = scriptsDir + '/' + enviroment.files.js;
const jsmin = scriptsDir + '/' + enviroment.files.jsmin;
const concatScripts = scriptsDir + '/' + enviroment.files.concatScripts;

/**
 * Delete Javascript files.
 *
 * @since 1.0.0
 */
gulp.task( 'cleanScripts', () =>
	//del([ files.js, files.jsmin ])
	del([ js, jsmin ])
);

/**
 * Concatenate JavaScript.
 *
 * @since 1.0.0
 */
gulp.task( 'concat', [ 'cleanScripts' ], () =>
	gulp.src( concatScripts )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.init() ) )
		.pipe( gulpif( enviroment.babel, babel({ presets: [ 'latest' ] }) ) )
		.pipe( gulpif( enviroment.concat, concat( 'script.js' ) ) )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.write() ) )
		.pipe( gulp.dest( scriptsDir ) )
);

/**
  * Uglify JavaScript.
  *
  * @since 1.0.0
  */
 gulp.task( 'uglify', [ 'concat' ], () =>
	 gulp.src( js )
		.pipe( ignore.exclude( enviroment.webpack ) )
		.pipe( gulp.dest( scriptsDir ) )
		.pipe( gulpif( enviroment.minimize, uglify({ 'mangle': false }) ) )
		.pipe( gulpif( enviroment.minimize, rename({ extname: '.min.js' }) ) )
		.pipe( gulpif( enviroment.minimize, gulp.dest( scriptsDir ) ) )
);

/**
 * Webpack.
 *
 * @since 1.0.0
 */
gulp.task( 'webpack', [ 'uglify' ], () => {
	gulp.src( js )
		.pipe( gulpif( enviroment.webpack, webpackStream( webpackConfig ) ), webpack )
		.pipe( gulpif( enviroment.webpack, gulp.dest( scriptsDir ) ) )
});

/**
  * Compile JavaScript.
  *
  * @since 1.0.0
  */
gulp.task( 'scripts', [ 'uglify' ] );
