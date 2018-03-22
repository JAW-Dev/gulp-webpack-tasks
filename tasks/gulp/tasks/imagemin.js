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

import { api, enviroment, files, gulp, gulpif, imagemin, paths } from '../config/imports';

const imagesDir = enviroment.paths.images;
const images = imagesDir + '/' + enviroment.files.images;

/**
 * Optimize images.
 *
 * @since 1.0.0
 */
gulp.task( 'imagemin', () =>
	gulp.src( images )
		.pipe( imagemin([
			imagemin.gifsicle({interlaced: true}),
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]) )
		.pipe( gulp.dest( imagesDir ) )
);
