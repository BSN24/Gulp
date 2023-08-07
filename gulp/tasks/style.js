'use strict';

import gulp from 'gulp';
import dartSass from 'sass';
import csso from 'gulp-csso';
import gulpIf from 'gulp-if';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import notify from 'gulp-notify';
import cssComb from 'gulp-csscomb';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import autoprefixer from 'gulp-autoprefixer';
import bulkSass from 'gulp-sass-bulk-import';
import groupMedia from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const style = (done) => {
    gulp.src('./app/scss/style.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'Styles',
                    message: error.message
                };
            })
        }))
        .pipe(bulkSass())
        .pipe(sass.sync())
        .pipe(groupMedia())
        .pipe(gulpIf(mode === 'production', autoprefixer({
            cascade: false,
            grid: true
        })))
        .pipe(gulpIf(mode === 'production', cssComb('./node_modules/csscomb/config/zen.json')))
        .pipe(gulp.dest('./app/css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpIf(mode === 'production', csso()))
        .pipe(gulp.dest('./app/css'))
        .pipe(browserSync.stream());
    done();
}