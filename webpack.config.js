/**
 * Webpack config.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import { api, enviroment, webpack } from './tasks/gulp/tasks/imports';

const path = require( 'path' );
const jsSource = path.join( __dirname, enviroment.srcDir + enviroment.entryDir.scripts + enviroment.files.jsSrc );
const jsOutput = path.join( __dirname, enviroment.srcDir + enviroment.outputDir.javascript );

module.exports = {
	devtool: 'source-map',
	entry: jsSource,
	output: {
		filename: enviroment.files.js,
		path: jsOutput,
	},
	module: {
		rules: [
			{
				test: /\.jsx$|\.es6$|\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ 'env' ],
					},
				},
				exclude: /(node_modules|bower_components)/,
			},
		],
	},
};
