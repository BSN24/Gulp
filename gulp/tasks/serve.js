'use strict';

const gulp = require('gulp');

gulp.task('serve', () => {
    $.browserSync.init({
        server: './app'
    });
});
