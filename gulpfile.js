'use strict'
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const postCSSCustomProperties = require('postcss-custom-properties');
const cssnext = require('postcss-cssnext');
const assets = require('postcss-assets');
const nested = require('postcss-nested');
const browserSync = require('browser-sync').create();

gulp.task('css', function() {
  return gulp.src('./src/style/*.pcss')
    .pipe(postcss([
      postCSSCustomProperties(),
      nested(),
      cssnext({
        autoprefixer: false,
        features: {
          customProperties: false
        }
      }),
      assets({
        loadPaths: ['src/img/'],
        relativeTo: 'src/style/'
      }),
    ]))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./src/style/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src'
    },
  })
});

gulp.task('default', ['browserSync', 'css'], function() {
  gulp.watch('src/index.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
  gulp.watch('src/style/*.pcss', ['css'])
});