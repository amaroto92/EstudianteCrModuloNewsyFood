var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-ruby-sass'),
	watch = require('gulp-watch'),
	webserver = require('gulp-webserver');

gulp.task('sass:watch', function() {
	watch(['scss/index.scss', 'scss/variables.scss'], function () {
		sass('scss/index.scss', {sourcemap: true, style: 'compact'})
			.pipe(sourcemaps.init())
			.pipe(postcss([ autoprefixer({ browsers: ['last 5 versions'] }) ]))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('./css'));
	});
});

gulp.task('sass:compile', function() {
	sass('scss/index.scss', {sourcemap: true, style: 'compact'})
		.pipe(sourcemaps.init())
		.pipe(postcss([ autoprefixer({ browsers: ['last 5 versions'] }) ]))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'));
});

gulp.task('webserver', function(){
	gulp.src('.')
		.pipe(webserver({
			livereload: true,
			open: true,
			port: 8080
		}));
});