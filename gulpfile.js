'use strict'
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

gulp.task('autoprefixer', function () {
<<<<<<< HEAD
    return gulp.src('./src/style/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
=======
  var processors = [
    cssnano()
  ];
    return gulp.src('./src/style/*.css')
        .pipe(postcss(processors))
>>>>>>> 8382896eea4ff808971f560fb9a0213799d11082
        .pipe(gulp.dest('./dest'));
});
