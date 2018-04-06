'use strict'
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('css', function() {
    return gulp.src('./src/style/*.pcss')
        .pipe(postcss([
          require('postcss-cssnext')({autoprefixer: false}),
          require('postcss-assets')({
            loadPaths: ['src/img/'],
            relativeTo: 'src/style/'
          })
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
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
    gulp.watch('./src/style/*.pcss', ['css'])
});
