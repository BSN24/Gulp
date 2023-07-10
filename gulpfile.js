import gulp from 'gulp';
import {pug} from './gulp/tasks/pug.js';
import {serve} from './gulp/tasks/serve.js';
import {style} from './gulp/tasks/style.js';
import {watch} from './gulp/tasks/watch.js';
import {iconSprite} from './gulp/tasks/svg.js';
import {scripts} from './gulp/tasks/scripts.js';
import {imgToWebp, imageMin} from './gulp/tasks/img.js';

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv)).argv;
global.mode = argv.mode;

export default gulp.series(
    imgToWebp,
    imageMin,
    gulp.parallel(
        pug,
        style,
        scripts,
        iconSprite,
    ),
    watch,
    serve
);