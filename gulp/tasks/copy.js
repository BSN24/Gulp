// 'use strict';
//
// const gulp = require('gulp');
//
// gulp.task('copy', (done) => {
//     const fonts = gulp.src('./app/fonts/**/*{.ttf,woff,woff2,svg}')
//         .pipe(gulp.dest('./build/fonts/'));
//
//     const html = gulp.src('./app/*.html')
//         .pipe(gulp.dest('./build/'));
//
//     const js = gulp.src(['./app/js/**/*.js', '!./app/js/main.js'])
//         .pipe(gulp.dest('./build/js/'));
//
//     const css = gulp.src('./app/css/**/*.css')
//         .pipe(gulp.dest('./build/css/'));
//
//     const svgSprites = gulp.src('./app/img/svg-sprite/**/*.svg')
//         .pipe(gulp.dest('./build/img/svg-sprite/'));
//
//     done();
// });