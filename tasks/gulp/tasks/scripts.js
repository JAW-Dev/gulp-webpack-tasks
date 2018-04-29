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

import { api, babel, concat, enviroment, gulp, gulpif, ignore, rename, sourcemaps, uglify, webpack, webpackStream } from '../config/imports';

const webpackConfig = require( './../../../webpack.config.js' );
const scriptsSource = enviroment.source.scripts;
const scriptsDest = enviroment.dest.scripts;
const js = scriptsDest + '/' + enviroment.files.js;
const jsmin = scriptsDest + '/' + enviroment.files.jsmin;
const jsSrc = scriptsSource + '/' + enviroment.files.jsSrc;
const jsFiles = [ js, jsmin ];

/**
 * Delete Javascript files.
 *
 * @since 1.0.0
 */
gulp.task( 'cleanScripts', () =>
	api.cleanFiles( jsFiles )
);

/**
 * Concatenate JavaScript.
 *
 * @since 1.0.0
 */
gulp.task( 'concat', [ 'cleanScripts' ], () =>
	gulp.src( jsSrc )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.init() ) )
		.pipe( gulpif( enviroment.babel, babel({ presets: [ 'env' ] }) ) )
		.pipe( gulpif( enviroment.concat, concat( 'script.js' ) ) )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.write() ) )
		.pipe( gulp.dest( scriptsDest ) )
);

/**
  * Uglify JavaScript.
  *
  * @since 1.0.0
  */
 gulp.task( 'uglify', [ 'concat' ], () =>
	gulp.src( js )
		.pipe( ignore.exclude( enviroment.webpack ) )
		.pipe( gulp.dest( scriptsDest ) )
		.pipe( gulpif( enviroment.minimize, uglify({ 'mangle': false }) ) )
		.pipe( gulpif( enviroment.minimize, rename({ extname: '.min.js' }) ) )
		.pipe( gulpif( enviroment.minimize, gulp.dest( scriptsDest ) ) )
);

/**
 * Webpack.
 *
 * @since 1.0.0
 */
gulp.task( 'webpack', [ 'uglify' ], () => {
	gulp.src( js )
		.pipe( gulpif( enviroment.webpack, webpackStream( webpackConfig ) ), webpack )
		.pipe( gulpif( enviroment.webpack, gulp.dest( scriptsDest ) ) );
});

/**
  * Compile JavaScript.
  *
  * @since 1.0.0
  */
gulp.task( 'scripts', [ 'webpack' ]);
