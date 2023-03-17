import gulp from "gulp";
import browserSync from "browser-sync";
import {pug} from "./pug.js";
import {style} from "./style.js";
import {scripts, vendorsJs} from "./scripts.js";
import {iconSprite} from "./svg.js";

export const watch = () => {
    gulp.watch('./app/pug/**/*.pug', gulp.parallel(pug));
    gulp.watch('./app/scss/**/**/*.scss', gulp.parallel(style));
    gulp.watch('./app/*.html').on('change', browserSync.reload);
    gulp.watch('./app/img/**/*.{jpg,svg,png}').on('change', browserSync.reload);
    gulp.watch('./app/js/main.js', gulp.series(scripts));
    gulp.watch('./app/js/vendors/*.js', gulp.series(vendorsJs));
    gulp.watch('./app/img/svg-icons/*.svg', gulp.series(iconSprite)).on('change', browserSync.reload);
}