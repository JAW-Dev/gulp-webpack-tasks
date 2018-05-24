/**
 * Minify Images.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

'use strict';

import { api, enviroment, gulp, gulpif, imagemin, notify, plumber } from './imports';

const imagesEntry = enviroment.srcDir + enviroment.entryDir.images;
const imagesOutput = enviroment.srcDir + enviroment.outputDir.images;
const images = imagesEntry + enviroment.files.images;

/**
 * Optimize images.
 *
 * @since 1.0.0
 */
gulp.task( 'imagemin', () =>
	gulp.src( images )
		.pipe( plumber({ errorHandler: ( err ) => {
			notify.onError({
				title: 'Gulp error in "imagemin" task',
				message: err.toString(),
			})( err );
		}}) )
		.pipe( imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false},
				],
			}),
		]) )
		.pipe( gulp.dest( imagesOutput ) )
);
