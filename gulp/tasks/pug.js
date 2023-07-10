'use strict';

import fs from 'fs';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import gulpPug from 'gulp-pug';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import formatHTML from 'gulp-format-html';

export const pug = () => {
    return gulp.src('./app/pug/page/*.pug')
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            })
        }))
        .pipe(gulpPug({
            locals: {
                blocks: JSON.parse(fs.readFileSync('./app/pug/data/blocks.json', 'utf8')),
                nav: JSON.parse(fs.readFileSync('./app/pug/data/nav.json', 'utf8')),
            }
        }))
        .pipe(gulpIf(mode === 'production', formatHTML({
            indent_size: 4,
            indent_inner_html: true,
            wrap_attributes: 'auto',
            preserve_newlines: true,
            end_with_newline: true,
            extra_liners: ['section', 'header', 'main', 'footer'],
        })))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream());
}