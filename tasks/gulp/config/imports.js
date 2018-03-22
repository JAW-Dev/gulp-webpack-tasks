/**
 * Gulp Variables.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

import api from './../api';
import autoprefixer from 'autoprefixer';
import babel from 'gulp-babel';
import browserSync, { create } from 'browser-sync';
import concat from 'gulp-concat';
import cssnano from 'gulp-cssnano';
import del from 'del';
import log from 'fancy-log';
import fs from 'fs';
import gulp from 'gulp';
import gulpif from 'gulp-if';
import ignore from 'gulp-ignore';
import imagemin from 'gulp-imagemin';
import notify from 'gulp-notify';
import postcss from 'gulp-postcss';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import sass from 'gulp-sass';
import sassLint from 'gulp-sass-lint';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import yargs, { argv } from 'yargs';

const enviroment = api.getEnvironment().default;
const files = api.getStructure().files;
const paths = api.getStructure().paths;

export {
    api,
    autoprefixer,
    argv,
    babel,
    browserSync,
    create,
    concat,
    cssnano,
    del,
    log,
    enviroment,
    files,
    fs,
    gulp,
    gulpif,
    ignore,
    imagemin,
    notify,
    paths,
    postcss,
    UglifyJsPlugin,
    rename,
    replace,
    sass,
    sassLint,
    sourcemaps,
    uglify,
    webpack,
    webpackStream,
    yargs
};
