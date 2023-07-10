'use strict';

import gulp from 'gulp';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import webpackStream  from 'webpack-stream';

export const scripts = (done) => {

    const config = {
        mode: mode,
        entry: {
            main: './app/js/main.js',
        },
        output: {
            filename: '[name].min.js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: "defaults"
                            }]
                        ]
                    }
                }
            }]
        },
        devtool: false
        //devtool: mode === 'development' ? 'eval-cheap-module-source-map' : false
    }

    return gulp.src('./app/js/main.js')
        .pipe(plumber({
            errorHandler: notify.onError(function(error) {
                return {
                    title: 'Webpack',
                    message: error.message
                };
            })
        }))
        .pipe(webpackStream(config))
        .pipe(gulp.dest('./app/js/'))
        .pipe(browserSync.stream());
}