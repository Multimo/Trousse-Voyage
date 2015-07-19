var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');

gulp.task('sass', function () {
  gulp.src('./library/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./library/css'));
});

gulp.task('compass', function() {
  gulp.src('./library/scss/**/*.scss')
    .pipe(compass({
      project: path.join(__dirname, 'assets'),
      css: 'stylesheets',
      sass: 'sass'
    }))
    .pipe(gulp.dest('./library/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./library/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'sass:watch']);
