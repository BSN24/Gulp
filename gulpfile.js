import gulp from 'gulp';
import browserSync from 'browser-sync';

import {style} from './gulp/tasks/style.js';
import {pug} from './gulp/tasks/pug.js';
import {iconSprite} from './gulp/tasks/svg.js';
import {scripts, vendorsJs} from './gulp/tasks/scripts.js';

global.dev = false;

export const serve = () => {
    browserSync.init({
        ui: false,
        server: './app'
    });

    gulp.watch('./app/pug/**/*.pug', gulp.series(pug));
    gulp.watch('./app/scss/**/**/*.scss', gulp.series(style));
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/img/**/*.{jpg,svg,png}').on('change', browserSync.reload);
    gulp.watch('./app/js/main.js', gulp.series(scripts)).on('change', browserSync.reload);
    gulp.watch('./app/js/vendors/*.js', gulp.series(vendorsJs)).on('change',browserSync.reload);
    gulp.watch('./app/img/svg-icons/*.svg', gulp.series(iconSprite)).on('change', browserSync.reload);
}

//Develop mode
export const develop = (cb) => {
    global.dev = true;
    cb();
}

export default gulp.parallel(develop, serve, pug, style, scripts, iconSprite, vendorsJs);