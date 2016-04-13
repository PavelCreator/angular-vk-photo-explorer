'use strict';
const gulp = require('gulp');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const notify = require('gulp-notify');
const del = require('del');

const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');

const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const stripDebug = require('gulp-strip-debug');

const htmlmin = require('gulp-htmlmin');
const removeHtmlComments = require('gulp-remove-html-comments');

const config = {
  src: {
    css: 'src/scss/*.scss',
    img: 'src/img/*',
    js: [
      'src/js/ui.js',
      'src/js/services/*.js',
      'src/js/controllers/*.js',
      'src/js/app.js'
    ],
    html: 'src/html/index.html'
  },
  build: {
    css: 'build/css',
    img: 'build/img',
    js: 'build/js',
    html: './'
  }
}

function swallowError (error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('build-css', () => {
  gulp.src(config.src.css)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest(config.build.css))
    .pipe(notify({message: 'Build CSS task complete'}));
})

gulp.task('build-img', () => {
  gulp.src(config.src.img)
    .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
    .pipe(gulp.dest(config.build.img))
    .pipe(notify({message: 'Build Images task complete'}));
});

gulp.task('build-js', () => {
  return gulp.src(config.src.js)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(gulp.dest(config.build.js))
    .pipe(notify({message: 'Build JS task complete'}))
    .on('error', swallowError);
});

gulp.task('build-html', () => {
  return gulp.src(config.src.html)
    .pipe(removeHtmlComments())
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(config.build.html))
    .pipe(notify({message: 'Build HTML task complete'}));
});

gulp.task('clean', () => {
  return del(['build/css', 'build/js', 'build/img', 'index.html']);
});

gulp.task('watch-css', () => {
  gulp.watch(config.src.css, ['build-css'])
})
gulp.task('watch-js', () => {
  gulp.watch(config.src.js, ['build-js'])
})
gulp.task('watch-img', () => {
  gulp.watch(config.src.img, ['build-img'])
})
gulp.task('watch-html', () => {
  gulp.watch(config.src.html, ['build-html'])
})

gulp.task('w', ['watch-css', 'watch-img'/*, 'watch-js', 'watch-html'*/])
gulp.task('b', ['build-css', 'build-img'/*, 'build-js', 'build-html'*/])

gulp.task('default', ['w2015'])