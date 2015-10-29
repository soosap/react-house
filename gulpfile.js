'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

/*
 |--------------------------------------------------------------------------
 | config
 |--------------------------------------------------------------------------
 |
 | Gulp configuration object.
 |
*/
var config = {
	port: 8080,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		dist: './dist',
		images: './src/images/*'
	}
};

/*
 |--------------------------------------------------------------------------
 | Handle html file transfer into dist
 |--------------------------------------------------------------------------
*/
gulp.task('html', function () {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(livereload())
});


/*
 |--------------------------------------------------------------------------
 | Handle image file transfer into dist
 |--------------------------------------------------------------------------
 */
gulp.task('images', function () {
	gulp.src(config.paths.images)
		.pipe(gulp.dest(config.paths.dist + '/images'));

	gulp.src('./src/favicon.ico')
		.pipe(gulp.dest(config.paths.dist));
});


/*
 |--------------------------------------------------------------------------
 | Watch html files for changes
 |--------------------------------------------------------------------------
*/
gulp.task('watch', function () {
	livereload.listen(35729, function (err) {
		if (err) { console.log(err); }

		gulp.watch(config.paths.html, ['html']);
	});
});

/*
 |--------------------------------------------------------------------------
 | Default task
 |--------------------------------------------------------------------------
*/
gulp.task('default', ['html', 'images', 'watch']);