'use strict';

import browserSync from "browser-sync";

export const serve = (done) => {
    browserSync.init({
        ui: false,
        server: './build'
    });
    done();
}