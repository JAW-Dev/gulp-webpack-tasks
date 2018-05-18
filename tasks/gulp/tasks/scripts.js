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

import { api, babel, concat, enviroment, gulp, gulpif, ignore, plumber, rename, sourcemaps, uglify, webpack, webpackStream } from './imports';

const webpackConfig = require( './../../../webpack.config.js' );
const scriptsSource = enviroment.source.scripts;
const scriptsDest = enviroment.dest.scripts;
const js = scriptsDest + '/' + enviroment.files.js;

/**
 * Webpack.
 *
 * @since 1.0.0
 */
gulp.task( 'webpack', () => {
	return gulp.src( js )
		.pipe( plumber({ errorHandler: ( err ) => {
            notify.onError({
                title: "Gulp error in " + err.plugin,
                message: err.toString(),
            })( err );
        }}) )
		.pipe( gulpif( enviroment.webpack, webpackStream( webpackConfig ) ), webpack )
		.pipe( gulpif( enviroment.webpack, gulp.dest( scriptsDest ) ) );
});

/**
  * Uglify JavaScript.
  *
  * @since 1.0.0
  */
 gulp.task( 'uglify', [ 'webpack' ], () =>
	gulp.src( js )
		.pipe( plumber({ errorHandler: ( err ) => {
			notify.onError({
				title: "Gulp error in " + err.plugin,
				message: err.toString(),
			})( err );
		}}) )
		.pipe( gulp.dest( scriptsDest ) )
		.pipe( gulpif( enviroment.minify, uglify({ 'mangle': false }) ) )
		.pipe( gulpif( enviroment.minify, rename({ extname: '.min.js' }) ) )
		.pipe( gulpif( enviroment.minify, gulp.dest( scriptsDest ) ) )
);

/**
  * Compile JavaScript.
  *
  * @since 1.0.0
  */
gulp.task( 'scripts', [ 'webpack', 'uglify' ]);
