/**
 * Compile Styles.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

'use strict';

import { api, autoprefixer, cssnano, enviroment, gulp, gulpif, notify, plumber, postcss, rename, sass, sourcemaps } from './imports';

const cssOutput = enviroment.srcDir + enviroment.outputDir.styles;
const cssEntry = cssOutput + enviroment.files.css;
const sassEntry = enviroment.srcDir + enviroment.entryDir.sass + enviroment.files.sass;

/**
 * Compile Sass and run stylesheet through PostCSS.
 *
 * @since 1.0.0
 */
gulp.task( 'compileStyles', () =>
	gulp.src( sassEntry )
		.pipe( plumber({ errorHandler: ( err ) => {
			notify.onError({
				title: 'Gulp error in "compileStyles" task',
				message: err.toString(),
			})( err );
		}}) )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.init() ) )
		.pipe( sass({'errLogToConsole': true, 'outputStyle': 'expanded'}) )
		.pipe( gulpif( enviroment.postcss, postcss([ autoprefixer({'browsers': [ 'last 2 version' ]}) ]) ) )
		.pipe( gulpif( enviroment.sourcemaps, sourcemaps.write( './' ) ) )
		.pipe( gulp.dest( cssOutput ) )
	);

/**
 * Minify and optimize style.css.
 *
 * @since 1.0.0
 */
gulp.task( 'minifyStyles', [ 'compileStyles' ], () =>
gulp.src( cssEntry )
	.pipe( plumber({ errorHandler: ( err ) => {
		notify.onError({
			title: 'Gulp error in "minifyStyles" task',
			message: err.toString(),
		})( err );
	}}) )
	.pipe( gulpif( enviroment.minify, cssnano({'safe': true, discardComments: {removeAll: true}}) ) )
	.pipe( gulpif( enviroment.minify, rename( enviroment.files.cssmin ) ) )
	.pipe( gulpif( enviroment.minify, gulp.dest( cssOutput ) ) )
);

/**
  * Compile Styles.
  *
  * @since 1.0.0
  */
gulp.task( 'styles', [ 'minifyStyles' ]);
