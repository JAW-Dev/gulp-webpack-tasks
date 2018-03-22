/**
 * Compile Dist.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import { api, del, excludes, enviroment, files, gulp, gulpif, paths } from '../config/imports';

const distDir = enviroment.paths.dist;
const distExcludes =  enviroment.excludes;

/**
 * Delete the dist directory.
 *
 * @since 1.0.0
 */
gulp.task( 'cleanDist', () =>
	del([ distDir ])
);

 /**
  * Copy files to the dist directory.
  *
  * @since 1.0.0
  */
gulp.task( 'copy', [ 'cleanDist' ], () =>
	gulp.src( distExcludes )
		.pipe( gulp.dest( distDir ) )
);

/**
  * Build Dist.
  *
  * @since 1.0.0
  */
gulp.task( 'build', [ 'copy' ]);
