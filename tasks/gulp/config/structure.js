/**
 * Gulp Structure.
 *
 * @package   Theme_Package
 * @author    Theme_Author <Theme_Author_Email>
 * @copyright Copyright (c) 2018, Theme_Author
 * @license   GNU General Public License v2 or later
 * @version   1.0.0
 */

const paths = {
    'baseDir': './',
    'dist': 'dist',
    'images': 'assets/images',
    'sass': 'assets/styles/sass',
    'scripts': 'assets/scripts',
    'styles': 'assets/styles',
};

const files = {
    'css': paths.baseDir + 'style.css',
    'cssmin': paths.baseDir + 'style.min.css',
    'concatScripts': paths.scripts + '/concat/*.js',
    'html': [ './*.html', './**/*.html' ],
    'images': paths.images + '/*',
    'js': paths.scripts + '/script.js',
    'jsFile': paths.scripts + '/script.js',
    'jsmin': paths.scripts + '/script.min.js',
    'php': [ './*.php', './**/*.php' ],
    'sass': paths.sass + '/**/*.scss',
    'styles': paths.baseDir + '/style.css',
    'svg': paths.images + '/*.svg',
};

const dist = [
    './**/*',
    '!bin',
    '!bin/**',
    '!dist',
    '!dist/**',
    '!git',
    '!git/**',
    '!gulp-tasks',
    '!gulp-tasks/**',
    '!node_modules',
    '!node_modules/**',
    '!tests',
    '!tests/**',
    '!' + paths.sass,
    '!' + paths.sass + '/**',
    '!' + paths.scripts,
    '!' + paths.scripts + '/**',
    '!.bablerc',
    '!.editorconfig',
    '!.eslintrc.js',
    '!.gitignore',
    '!.sas-lint.yml',
    '!.travis.yml',
    '!Gulpfile.js',
    '!package-lock.json',
    '!package.json',
    '!phpcs.xml',
    '!phpmd.xml',
    '!phpunit.xml',
    '!yarn.lock',
];

export { paths, files, dist };
