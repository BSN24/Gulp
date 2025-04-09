'use strict';

import gulp from 'gulp';
import newer from 'gulp-newer';
import debug from 'gulp-debug';

export const copyFonts = () => {
    return gulp.src('./app/fonts/**/*{.ttf,woff,woff2,svg}', {since: gulp.lastRun(copyFonts)})
        .pipe(newer('build/fonts/'))
        .pipe(debug({
            title: 'Copy fonts'
        }))
        .pipe(gulp.dest('build/fonts/'));
}

export const copyMedia = () => {
    return gulp.src('./app/img/**/*{.jpg,jpeg,png,svg,mp4}')
        .pipe(newer('build/img/'))
        .pipe(debug({
            title: 'Copy media'
        }))
        .pipe(gulp.dest('build/img/'));
}

export const copyComponentsJS = () => {
    return gulp.src('./app/js/components/*.js', {since: gulp.lastRun(copyComponentsJS)})
        .pipe(gulp.dest('./build/js/components/'));
}

export const copyToThemeStyle = () => {
    return gulp.src('./app/css/*.css')
        .pipe(debug({
            title: 'Copy styles'
        }))
        .pipe(gulp.dest('./theme/assets/css/'));
}

export const copyToThemeScripts = () => {
    return gulp.src('./app/js/*.js')
        .pipe(debug({
            title: 'Copy scripts'
        }))
        .pipe(gulp.dest('./theme/assets/js/'));
}
