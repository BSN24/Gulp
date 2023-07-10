'use strict';

import gulp from 'gulp';
import svgMin from 'gulp-svgmin';
import replace from 'gulp-replace';
import cheerio from 'gulp-cheerio';
import svgSprite from 'gulp-svg-sprite';

export const iconSprite = () => {
    return gulp.src('./app/img/src/icons-svg/*.svg')
        .pipe(svgMin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        .pipe(svgSprite({
            shape: {
                dimension: {
                    maxWidth: 100,
                    maxHeight: 100
                },
                spacing: {
                    padding: 0
                }
            },
            mode: {
                symbol: {
                    sprite: 'sprite.svg'
                }
            }
        }))
        .pipe(gulp.dest('./app/img/dist/svg-sprite/'));
}