'use strict'
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

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
        .pipe(gulp.dest('./src/style/'));
});

gulp.task('default', function() {
    gulp.watch('./src/style/*.pcss', ['css'])
});
