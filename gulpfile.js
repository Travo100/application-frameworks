var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    webserver = require('gulp-webserver');

gulp.task('sass', function() {
    return sass('sass/') 
    .on('error', function (err) {
      console.error('Error!', err.message);
   })
    .pipe(gulp.dest('css/'));
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      port: 1337
    }));
});

gulp.task('watch', function(){
  gulp.watch('js/*.js');
  gulp.watch('sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'webserver', 'watch']);