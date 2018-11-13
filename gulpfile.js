const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', () =>
    gulp.src('source/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('public/css'))
);

gulp.task('watch', ['autoprefixer'], function () {
    gulp.watch('source/css/*.css', ['autoprefixer'])
});