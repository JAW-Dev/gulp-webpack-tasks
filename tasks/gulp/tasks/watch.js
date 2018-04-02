/**
 * Watch.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import { api, browserSync, enviroment, gulp, watch } from '../config/imports';

const scriptsDest = enviroment.dest.scripts;
const js = scriptsDest + '/' + enviroment.files.js;
const jsSrc = scriptsDest + '/' + enviroment.files.jsSrc;
const sassfiles = enviroment.source.sass + '/' + enviroment.files.sass;

/**
 * Watch
 *
 * @since 1.0.0
 */
gulp.task( 'watch', () => {
	browserSync.init([
        sassfiles,
        js,
    ], {
		proxy: 'http://templates.test/build-tools/',
		reloadDelay: 1000,
    });
	gulp.watch( sassfiles, [ 'styles' ]);
	gulp.watch( jsSrc, [ 'scripts' ]);
	gulp.watch( enviroment.files.html ).on( 'change', browserSync.reload );
	gulp.watch( enviroment.files.php ).on( 'change', browserSync.reload );
});
