'use strict';

import gulp from 'gulp';
import webp from 'gulp-webp';
import newer from 'gulp-newer';
import debug from 'gulp-debug';
import browserSync from 'browser-sync';

export const imgToWebp = () => {
    return gulp.src('./app/img/**/*.{png,jpg}')
        .pipe(newer('build/img/'))
        // .pipe(debug({
        //     title: 'Convert to webp'
        // }))
        .pipe(webp())
        .pipe(gulp.dest('build/img/'));
};