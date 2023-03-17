import gulp from 'gulp';
import {style} from './gulp/tasks/style.js';
import {pug} from './gulp/tasks/pug.js';
import {iconSprite} from './gulp/tasks/svg.js';
import {scripts, vendorsJs} from './gulp/tasks/scripts.js';
import {serve} from './gulp/tasks/serve.js';
import {watch} from './gulp/tasks/watch.js';

global.dev = false;

//Develop mode
export const develop = (cb) => {
    global.dev = true;
    cb();
}

export default gulp.parallel(develop, serve, watch, pug, style, scripts, iconSprite, vendorsJs);