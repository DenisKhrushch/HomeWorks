let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync');

const devPath = 'dev';
const destPath = 'public';

gulp.task('sass', function() {
    return gulp.src(`${devPath}/scss/**/*.scss`)
        .pipe(sass())
        .pipe(gulp.dest(`${destPath}/css/`));
});

gulp.task('html', function() {
    return gulp.src('public/index.html')
        .pipe(browserSync.stream());
});

gulp.task('watch', function () {
    gulp.watch(`${devPath}/scss/**/*.scss`, gulp.parallel('sass'));
    gulp.watch(`${devPath}/*.html`, gulp.parallel('html'))
});

// Static server
// gulp.task('browser-sync', function() {
//     browserSync({
//         server: "public"
//     })
// });

gulp.task('default', gulp.parallel('sass', 'watch'));