var gulp = require("gulp");
var browserify = require("gulp-browserify");
var rename = require("gulp-rename");

gulp.paths = {
    src: "js",
    dist: "dist"
};

gulp.task("scripts", function () {
    gulp.src(gulp.paths.src + "/app.js")
        .pipe(browserify({transform: ["reactify", "envify"]}))
        .pipe(rename("bundle.js"))
        .pipe(gulp.dest(gulp.paths.src + "/"));
});