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

const stylesDir = enviroment.paths.styles;
const scriptsDir = enviroment.paths.scripts;
const js = scriptsDir + '/' + enviroment.files.js;
const jsConcat = scriptsDir + '/' + enviroment.files.concatScripts;
const sassfiles = enviroment.paths.sass + '/' + enviroment.files.sass;

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
	gulp.watch( jsConcat, [ 'scripts' ]);
	gulp.watch( enviroment.files.html ).on( 'change', browserSync.reload );
	gulp.watch( enviroment.files.php ).on( 'change', browserSync.reload );
});
