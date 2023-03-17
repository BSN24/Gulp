import browserSync from "browser-sync";

export const serve = () => {
    browserSync.init({
        ui: false,
        server: './app'
    });
}