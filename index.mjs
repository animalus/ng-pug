import pug from "gulp-pug";
import path from "path";
import pug_plugin_ng from "pug-plugin-ng";

const pug_opts = { doctype: "html", plugins: [pug_plugin_ng] };

const SRC_DIR = "src";

const pugFiles = (srcDir) => {
    return path.join(srcDir, "**", "*.pug");
};

export const compilePug = (gulp, srcDir) => {
    return gulp
        .src(pugFiles(srcDir))
        .pipe(pug(pug_opts))
        .pipe(gulp.dest(srcDir));
};

export const addPugTasks = (gulp, dir) => {
    const pugTask = dir ? `pug:${dir}` : "pug";
    const watchTask = dir ? `pugwatch:${dir}` : "pugwatch";
    const srcDir = dir || SRC_DIR;

    gulp.task(pugTask, () => {
        return compilePug(gulp, srcDir);
    });

    gulp.task(watchTask, () => {
        return gulp.watch(pugFiles(srcDir), gulp.series(pugTask));
    });
};
