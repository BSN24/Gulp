import gulp from "gulp";
import {pug} from "./pug.js";
import {style} from "./style.js";
import {iconSprite} from "./svg.js";
import {scripts} from "./scripts.js";
import browserSync from "browser-sync";
import {imgToWebp, imageMin} from "./img.js";

export const watch = (done) => {
    gulp.watch('./app/pug/**/*.pug', pug);

    gulp.watch('./app/pug/data/*.json', pug);

    gulp.watch('./app/scss/**/**/*.scss', style);

    //gulp.watch('./app/*.html').on('change', browserSync.reload);

    gulp.watch('./app/img/src/**/*.{jpg,png}', imgToWebp);

    gulp.watch(['./app/img/src/**/*.svg', '!./app/img/src/icons-svg/*.svg'], imageMin).on('change', browserSync.reload);

    gulp.watch(['./app/js/**/*.js', '!./app/js/main.min.js'], scripts).on('change', browserSync.reload);

    gulp.watch('./app/img/src/icons-svg/*.svg', iconSprite).on('change', browserSync.reload);

    done();

}
