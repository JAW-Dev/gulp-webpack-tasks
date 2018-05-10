/**
 * Enviroment.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

'use strict';

import fs from 'fs';
import yargs, { argv } from 'yargs';
import config from './gulp.config.json';

export default {
  environment: ( argv.env ) ? argv.env : 'development',
	getEnvironment() {
		let environmentType;
		try {
			environmentType = config[this.environment];
			
		} catch ( e ) {
			throw new Error( `No environment for ${this.environment}` );
		}
		return environmentType;
	},
	cleanFiles( files ) {
		files.forEach( ( file, index ) => {
			if ( fs.existsSync( file ) ) {
				fs.unlinkSync( file );
				return fs.writeFileSync( file, '' );
			} else {
				return fs.writeFileSync( file, '' );
			}
		});
	},
};
