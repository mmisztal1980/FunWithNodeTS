var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build', ['build:js', 'build:tests'], function(){
    
});

/** \brief:  
 * 
 */
gulp.task('build:js', ['clean:js'], function() {
    return gulp.src('app/**/*.ts')
            .pipe(ts({
                noImplicitAny: true,
            }))
            .pipe(gulp.dest('app'));
});

gulp.task('build:tests', ['build:js', 'clean:tests'], function () {
    return gulp.src('tests/**/*.ts')
            .pipe(ts({
                noImplicitAny: true,
                module: 'commonjs',
            }))
            .pipe(gulp.dest('tests'))
});