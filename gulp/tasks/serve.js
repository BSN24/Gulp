'use strict';

import browserSync from "browser-sync";

export const serve = () => {
    return browserSync.init({
        ui: false,
        server: './app/'
    });
}