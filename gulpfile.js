const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnext = require('postcss-cssnext');
const cssnano = require('gulp-cssnano');
const csscomb = require('gulp-csscomb');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const pngquant = require('gulp-pngquant');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const del = require('del');
const cache = require('gulp-cache');
const rename = require('gulp-rename');
const bs = require('browser-sync').create();

gulp.task('clean', () => {
  return del.sync('dist');
});

gulp.task('clear', () => {
  return cache.clearAll();
});

gulp.task('build', ['clean', 'css', 'js', 'img'], () => {
  let buildHtml = gulp.src('app/*.html').pipe(gulp.dest('dist'));
  let buildFonts = gulp.src('app/fonts/**/*').pipe(gulp.dest('dist/fonts'));
  let buildImg = gulp.src('app/img/**/*').pipe(gulp.dest('dist/img'));
  let buildCss = gulp.src('app/css/*.css').pipe(gulp.dest('dist/css'));
  let buildJS = gulp.src('app/js/*.js').pipe(gulp.dest('dist/js'));
});

gulp.task('serv', () => {
  bs.init({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('html', () => {
  gulp
    .src('app/index.html')
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
    .pipe(bs.stream());
});

gulp.task('css', () => {
  let processors = [cssnext];
  gulp
    .src('app/src/css/**/*.css')
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
    .pipe(csscomb())
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('app/css/'))
    .pipe(bs.stream());
});

gulp.task('js', () => {
  gulp
    .src('app/src/**/*.js')
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
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('app/js/'))
    .pipe(bs.stream());
});

gulp.task('img', () => {
  gulp
    .src('app/src/img/*')
    .pipe(
      cache(
        imagemin({
          interlaced: true,
          progressive: true,
          svgoPlugins: [{ removeViewBox: false }],
          use: [pngquant]
        })
      )
    )
    .pipe(gulp.dest('app/img'));
});

gulp.task('fonts', () => {
  gulp.src('app/src/fonts/**/*').pipe(gulp.dest('app/fonts/'));
});

gulp.task('watch', ['html', 'img', 'fonts', 'css', 'js'], () => {
  gulp.watch('app/index.html', ['html']);
  gulp.watch('app/**/*.css', ['css']);
  gulp.watch('app/**/*.js', ['js']);
  gulp.watch('app/img/*', ['img']);
  gulp.watch('app/fonts/*', ['fonts']);
});

gulp.task('default', ['serv', 'watch']);
