/**
 * Watch.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import { api, browserSync, enviroment, gulp, watch } from './imports';

const scriptsSource = enviroment.srcDir + enviroment.entryDir.scripts + enviroment.files.scriptsSrc;
const sassfiles = enviroment.srcDir + enviroment.entryDir.sass + enviroment.files.sass;

/**
 * Watch
 *
 * @since 1.0.0
 */
gulp.task( 'watch', () => {
	browserSync.init([
        sassfiles,
        scriptsSource,
    ], {
		proxy: 'https://wp-dev.test/',
		reloadDelay: 1000,
		notify: false,
    });
	gulp.watch( sassfiles, [ 'styles' ]);
	gulp.watch( scriptsSource, [ 'scripts' ]);
	gulp.watch( enviroment.files.html ).on( 'change', browserSync.reload );
	gulp.watch( enviroment.files.php ).on( 'change', browserSync.reload );
});
