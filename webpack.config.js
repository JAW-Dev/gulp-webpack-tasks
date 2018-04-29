/**
 * Webpack config.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import { api, enviroment, webpack, UglifyJsPlugin } from './tasks/gulp/config/imports';

const scriptsDest = enviroment.dest.scripts;
const js = scriptsDest + '/' + enviroment.files.js;

module.exports = {
  entry: __dirname + '/' + js,
  output: {
      filename: 'script.min.js',
      path: __dirname + '/' + scriptsDest + '/',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: [
            [ 'env', { modules: false } ],
          ],
        },
      },
    ],
  },
  plugins: [
      new UglifyJsPlugin(),
  ],
};
