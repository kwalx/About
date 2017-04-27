const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

gulp.task('serv', () => {
  browserSync.init({
    server: {
      baseDir: './app'
    }
  });
});

gulp.task('html', () => {
  gulp
    .src('./appIn/indexIn.html')
    .pipe(
      plumber({
        errorHandler: notify.onError(err => {
          return {
            title: 'HTML',
            message: err.message
          };
        })
      })
    )
    .pipe(rename('index.html'))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

gulp.task('css', () => {
  let processors = [
    cssnext
  ]
  gulp
    .src('./appIn/cssIn/**/*.css')
    .pipe(
      plumber({
        errorHandler: notify.onError(err => {
          return {
            title: 'Styles',
            message: err.message
          };
        })
      })
    )
    .pipe(postcss(processors))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./app/css/'))
    .pipe(browserSync.stream());
});

gulp.task('babel', () => {
  gulp
    .src('./appIn/**/*.js')
    .pipe(
      plumber({
        errorHandler: notify.onError(err => {
          return {
            title: 'JavaSctipt',
            message: err.message
          };
        })
      })
    )
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(rename('main.js'))
    .pipe(gulp.dest('./app/js/'))
    .pipe(browserSync.stream());
});

gulp.task('imagemin', () => {
  gulp.src('./appIn/imgIn/*').pipe(imagemin()).pipe(gulp.dest('./app/img'));
});

gulp.task('watch', () => {
  gulp.watch('./appIn/indexIn.html', ['html']);
  gulp.watch('./appIn/cssIn/**/*.css', ['css']);
  gulp.watch('./appIn/jsIn/**/*.js', ['babel']);
  gulp.watch('./appIn/imgIn/*', ['imagemin']);
});

gulp.task('default', ['serv', 'html', 'css', 'babel', 'imagemin', 'watch']);
