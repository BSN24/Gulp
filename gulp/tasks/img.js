'use strict';

import gulp from 'gulp';
import webp from 'gulp-webp';
import newer from 'gulp-newer';
import debug from 'gulp-debug';
import imagemin, {gifsicle, mozjpeg, optipng, svgo} from 'gulp-imagemin';
import browserSync from 'browser-sync';

export const imgToWebp = () => {
    return gulp.src('./app/img/src/**/*.{png,jpg}')
        .pipe(newer('./app/img/dist/'))
        .pipe(debug({
            title: 'CONVERT TO WEBP'
        }))
        .pipe(webp({
            preset: 'picture',
            quality: 90,
            method: 3,
        }))
        .pipe(gulp.dest('./app/img/dist/'))
        .pipe(browserSync.stream());
}

export const imageMin = () => {
    return gulp.src(['./app/img/src/**/*.{jpg,png,svg}', '!./app/img/src/icons-svg/*.svg'])
        .pipe(newer('./app/img/dist/'))
        .pipe(debug({
            title: 'IMAGEMIN'
        }))
        .pipe(imagemin([
            gifsicle({interlaced: true}),
            mozjpeg({quality: 90, progressive: true}),
            optipng({optimizationLevel: 4}),
            svgo({
                plugins: [
                    {
                        name: 'removeViewBox',
                        active: true
                    },
                    {
                        name: 'cleanupIDs',
                        active: false
                    }
                ]
            })
        ]))
        .pipe(gulp.dest('./app/img/dist/'))
}