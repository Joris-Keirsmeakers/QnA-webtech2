//Pogingen tot Gulp tasks zijn gemaakt aan de hand van de volgende tutorial: https://css-tricks.com/gulp-for-beginners/
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');




//Minify Css
gulp.task('minify-css', function() {
  return gulp.src('./public/stylesheets/*.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(gulp.dest('dist'));
 });

//minify images
 gulp.task('images', function(){
   return gulp.src('./public/images/**/*.+(png|jpg|gif|svg)')
   .pipe(imagemin())
   .pipe(gulp.dest('dist/images'))
 });

//minify js
 gulp.task('useref', function(){
   return gulp.src('./public/js/**/*.js')
     .pipe(useref())
     // Minifies only if it's a JavaScript file
     .pipe(gulpIf('*.js', uglify()))
     .pipe(gulp.dest('dist'))
 });

//poging to browsersync
 gulp.task('browserSync', function() {
   browserSync.init({
     server: {
       baseDir: 'app'
     },
   })
 })

 gulp.task('watch', ['browserSync'], function (){
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('./views/*.pug', browserSync.reload);
  gulp.watch('./*/*.js', browserSync.reload);
});
