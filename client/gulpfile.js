const gulp = require('gulp');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const nodemon = require('gulp-nodemon');
const clean = require('gulp-clean');

gulp.task('less', () => {
  gulp.src('./public/less/index.less')
    .pipe(less())
    .pipe(cleanCSS({
      minify: true
    }))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', () => {
  gulp.src('./public/js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('img', () => {
  gulp.src('./public/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img/'));
});

gulp.task('lib', () => {
  gulp.src('./public/lib/**/*')
    .pipe(gulp.dest('./dist/lib/'));
});

gulp.task('font', () => {
  gulp.src('./public/font/**/*')
    .pipe(gulp.dest('./dist/font/'));
});

gulp.task('watch', () => {
  gulp.watch('./public/less/**/**.less', ['less']);
  gulp.watch('./public/js/**/*.js', ['js']);
  gulp.watch('./public/img/**/*', ['img']);
  gulp.watch('./public/lib/**/*', ['lib']);
  gulp.watch('./public/font/**/*', ['font']);
});

gulp.task('build', ['less', 'js', 'img', 'lib', 'font']);

gulp.task('dev', ['less', 'js', 'img', 'lib', 'font', 'watch'], function() {
  nodemon({
    script: 'app.js',
    ignore: ['gulpfile.js', 'node_modules', 'dist', 'public'],
    ext: 'js'
  });
});

gulp.task('default', ['dev']);

gulp.task('clean', () => {
  gulp.src('./dist')
    .pipe(clean());
});
