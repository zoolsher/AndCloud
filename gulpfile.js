var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
gulp.task('default', function() {
    gulp.src('web-code/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('web-end'));
    gulp.src('web-code/**/*.jsx')
        .pipe(babel({
            presets: ['react', 'es2015']
        }))
        .pipe(rename(function(path) {
            path.extname = ".jsx"
        }))
        .pipe(gulp.dest('web-end'));
    gulp.src('web-code/**/*.css')
        .pipe(gulp.dest('web-end'));
})