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

const scriptsSource = enviroment.source.scripts;
const scriptsDest = enviroment.dest.scripts;
const js = scriptsDest + '/' + enviroment.files.js;
const jsSrc = scriptsSource + '/' +  enviroment.files.jsSrc;
const jsmin = scriptsDest + '/' + enviroment.files.jsmin;


module.exports = {
	devtool: 'source-map',
	entry: jsSrc,
	output: {
		filename: enviroment.files.js,
		path: __dirname + '/' + scriptsDest + '/',
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
