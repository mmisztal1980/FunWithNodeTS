var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('test', ['build:tests'], function() {
    return gulp.src('tests/*.js')
            .pipe(jasmine({ 
                verbose: true
            }));   
});