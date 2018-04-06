'use strict'
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

gulp.task('autoprefixer', function () {
  var processors = [
    cssnano()
  ];
    return gulp.src('./src/style/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
