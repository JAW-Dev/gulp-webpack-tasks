/**
 * Webpack config.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import { api, webpack, UglifyJsPlugin, log } from './tasks/gulp/config/imports';

const files = api.getStructure().files;
const paths = api.getStructure().paths;

log(__dirname + '/' + files.js);
log(__dirname + '/' + paths.scripts + '/script.js');

module.exports = {
  entry: __dirname + '/' + files.js,
  output: {
      filename: 'script.min.js',
      path: __dirname + '/' + paths.scripts + '/',
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
            [ 'latest', { modules: false } ],
          ],
        },
      },
    ],
  },
  plugins: [
      new UglifyJsPlugin()
  ],
};
