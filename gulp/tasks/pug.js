'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';
import gulpPug from 'gulp-pug';
import prettify from 'gulp-html-prettify';

export const pug = (done) => {
    gulp.src('./app/pug/page/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            })
        }))
        .pipe(gulpPug())
        .pipe(prettify({
            indent_size: 4,
            wrap_attributes: 'auto',
            preserve_newlines: true,
            end_with_newline: true
        }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.reload({
            stream: true
        }));
    done();
}