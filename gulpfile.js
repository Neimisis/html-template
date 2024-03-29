const gulp = require("gulp");
const clean = require("./gulp/tasks/clean");
const css = require("./gulp/tasks/css");
const font = require("./gulp/tasks/font");
const html = require("./gulp/tasks/html");
const img = require("./gulp/tasks/img");
const js = require("./gulp/tasks/js");
const serve = require("./gulp/tasks/serve");
const svg = require("./gulp/tasks/svg");
const zip = require("./gulp/tasks/zip");
const ftp = require("./gulp/tasks/ftp");

const build = gulp.series(clean, gulp.parallel(img, js, svg), font, css, html);
const dev = gulp.series(build, serve);
const deployzip = gulp.series(build, zip);
const deployftp = gulp.series(deployzip, ftp);

exports.clean = clean;
exports.css = css;
exports.font = font;
exports.html = html;
exports.img = img;
exports.js = js;
exports.serve = serve;
exports.svg = svg;
exports.zip = zip;
exports.ftp = ftp;
exports.build = build;
exports.dev = dev;
exports.deployzip = deployzip;
exports.deployftp = deployftp;
exports.default = dev;
