import gulp from 'gulp';
import gulpIf from 'gulp-if';
import {pug} from './gulp/tasks/pug.js';
import {imgToWebp} from './gulp/tasks/img.js';
import {clean} from './gulp/tasks/clean.js'
import {serve} from './gulp/tasks/serve.js';
import {style} from './gulp/tasks/style.js';
import {watch} from './gulp/tasks/watch.js';
import {iconSprite} from './gulp/tasks/svg.js';
import {scripts} from './gulp/tasks/scripts.js';
import {copyFonts, copyComponentsJS, copyMedia} from './gulp/tasks/copy.js';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv;
global.mode = argv.mode;

export default gulp.series(
    clean,
    gulp.parallel(
        copyFonts,
        copyComponentsJS,
        copyMedia,
        imgToWebp,
        pug,
        style,
        scripts,
        iconSprite
    ),
    serve,
    watch
);