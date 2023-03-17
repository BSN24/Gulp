// 'use strict';
//
// const gulp = require('gulp');
// const buffer = require('vinyl-buffer');
// const imageMin = require('gulp-imagemin');
//
// gulp.task('imageMinify', () => {
//     return gulp.src(['./app/img/**/*.{gif,png,jpg,svg,webp}', '!./app/img/svg-sprite/**/*'])
//         .pipe(buffer())
//         .pipe(imageMin([
//             imageMin.gifsicle({interlaced: true}),
//             imageMin.mozjpeg({
//                 quality: 80,
//                 progressive: true
//             }),
//             imageMin.optipng({optimizationLevel: 5}),
//             imageMin.svgo({
//                 plugins: [
//                     {removeViewBox: true},
//                     {cleanupIDs: false}
//                 ]
//             })
//         ]))
//         .pipe(gulp.dest('./build/img/'));
// });