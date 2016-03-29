var gulp = require('gulp');
var del = require('del');

gulp.task('clean', ['clean:js', 'clean:tests'], function () {
    
});

gulp.task('clean:js', function () {
    return del([
        'app/**/*.js'
    ]);
});

gulp.task('clean:tests', function () {
    return del([
        'tests/**/*.js'
    ]);
});