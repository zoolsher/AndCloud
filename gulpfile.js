var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    gulp.src('web-code/public/**')
        .pipe(gulp.dest('web-end/public/'))
    gulp.src('web-code/**/*.css')
        .pipe(gulp.dest('web-end'));
    gulp.src('web-code/**/*.png')
        .pipe(gulp.dest('web-end'));
    gulp.src(['web-code/**/*.js', '!web-code/public/js/*.js'])
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('web-end'));
    gulp.src('web-code/**/*.jsx')
        .pipe(babel({
            presets: ['react', 'es2015']
        }))
        .pipe(rename(function(path) {
            path.extname = ".jsx"
        }))
        .pipe(gulp.dest('web-end'));
})