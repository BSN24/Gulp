import gulp from 'gulp';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';
import browserSync from 'browser-sync';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import gcmq from 'gulp-group-css-media-queries';
import csso from 'gulp-csso';
import cssComb from 'gulp-csscomb';

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
    .pipe(sass.sync())
    .pipe(gulpIf(!dev, autoprefixer({cascade: false})))
    .pipe(gcmq())
    .pipe(gulpIf(!dev, cssComb('./node_modules/csscomb/config/zen.json')))
    .pipe(gulp.dest('./app/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
    done();
}