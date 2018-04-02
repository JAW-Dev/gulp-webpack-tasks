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

import { api, enviroment, gulp, gulpif, imagemin } from '../config/imports';

const imagesSource = enviroment.source.images;
const imagesDest = enviroment.dest.images;
const images = imagesSource + '/' + enviroment.files.images;

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
					{cleanupIDs: false},
				],
			}),
		]) )
		.pipe( gulp.dest( imagesDest ) )
);
