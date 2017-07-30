var gulp = require('gulp');
var ts = require('gulp-typescript');
var clean = require('gulp-clean');
 
var dir = 'scripts';

gulp.task('clean', () => {
  return gulp.src(dir, {read: false}).pipe(clean());
});
 
gulp.task('scripts', () => {
    var tsProject = ts.createProject('tsconfig.json');
    var tsResult = tsProject.src().pipe(tsProject());
    return tsResult.js.pipe(gulp.dest(dir));
});
 
gulp.task('default', ['clean', 'scripts']);