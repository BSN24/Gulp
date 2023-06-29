import gulp from "gulp";
import {pug} from "./pug.js";
import {style} from "./style.js";
import {imgToWebp} from './img.js';
import {iconSprite} from "./svg.js";
import {scripts} from "./scripts.js";
import browserSync from "browser-sync";
import {copyFonts, copyComponentsJS, copyMedia} from './copy.js'

export const watch = () => {
    gulp.watch('./app/pug/**/*.pug', pug);

    gulp.watch('./app/pug/data/*.json', pug);

    gulp.watch('./app/scss/**/**/*.scss', style);

    gulp.watch('./app/*.html').on('change', browserSync.reload);

    gulp.watch('./app/img/**/*.{jpg,png}', imgToWebp).on('change', browserSync.reload);

    gulp.watch(['./app/js/**/*.js'], scripts);

    gulp.watch('./app/img/**/*{.jpg,jpeg,png,svg,mp4}', copyMedia).on('change', browserSync.reload);

    gulp.watch('./app/img/icons-svg/*.svg', iconSprite).on('change', browserSync.reload);

    gulp.watch('./app/js/components/*.js', copyComponentsJS);

    gulp.watch('./app/fonts/**/*{.ttf,woff,woff2,svg}', copyFonts).on('change', browserSync.reload);
}