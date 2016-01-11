var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	sass = require('gulp-ruby-sass'),
	watch = require('gulp-watch');

gulp.task('watch', function() {
	watch('scss/index.scss', function () {
		sass('scss/index.scss', {sourcemap: true, style: 'compact'})
			.pipe(sourcemaps.init())
			.pipe(postcss([ autoprefixer({ browsers: ['last 5 versions'] }) ]))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest('./css'));
	});
});