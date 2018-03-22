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

import yargs, { argv } from 'yargs';
import plumber from 'gulp-plumber';

export default {
  environment: ( argv.env ) ? argv.env : 'development',

  getEnvironment () {
    let environmentType;
    try {
      environmentType = require(`./environments/${this.environment}`);
    } catch (e) {
      throw new Error(`No environment file found for ${this.environment}`);
    }
    environmentType.environment = this.environment;
    return environmentType;
  },

  getStructure() {
    let structureFile;
    try {
      structureFile = require('./config/structure');
    } catch (e) {
      throw new Error('No structure file found');
    }
    return structureFile;
  },

  getPackageJson: () => {
    return JSON.parse( fs.readFileSync( './package.json', 'utf8' ) );
  },
}
