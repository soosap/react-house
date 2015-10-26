"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

/*
 |--------------------------------------------------------------------------
 | config
 |--------------------------------------------------------------------------
 |
 | Gulp configuration object.
 |
*/
var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        dist: './dist'
    }
};

/*
 |--------------------------------------------------------------------------
 | Start a local development server
 |--------------------------------------------------------------------------
*/
gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
});

/*
 |--------------------------------------------------------------------------
 | Open a given file in the browser
 |--------------------------------------------------------------------------
*/
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({
            uri: config.devBaseUrl + ':' + config.port + '/'
        }));
});

/*
 |--------------------------------------------------------------------------
 | Handle html file transfer into dist
 |--------------------------------------------------------------------------
*/
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

/*
 |--------------------------------------------------------------------------
 | Watch files for changes
 |--------------------------------------------------------------------------
*/
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
});

/*
 |--------------------------------------------------------------------------
 | Default task
 |--------------------------------------------------------------------------
*/
gulp.task('default', ['html', 'open', 'watch']);