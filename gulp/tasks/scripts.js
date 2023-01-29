'use strict';

import gulp from 'gulp';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import babel from 'gulp-babel';

export const scripts = (done) => {
    gulp.src('./app/js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify({
            annotations: false,
            keep_fnames: true,
            mangle: false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./app/js/'))
    done();
}

export const vendorsJs = (done) => {
    gulp.src(['./app/js/vendors/*.js', '!./app/js/vendors/jquery.min.js'])
        .pipe(concat('vendors.min.js',{newLine: ';'}))
        .pipe(gulp.dest('./app/js'));
    done();
}