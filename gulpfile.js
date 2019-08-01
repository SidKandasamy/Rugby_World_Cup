// We require the following packages
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let rename = require('gulp-rename');
let sass = require('gulp-sass');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
let browserSync = require('browser-sync').create();


// SCSS and CSS tasks

// Create a gulp task to combine and convert all scss files to single css file
gulp.task('sass', function () {
    let stream = gulp.src('./scss/styles.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
        .pipe(rename('styles.css'));
    return stream;
});

// Create a gulp task to minify css file
gulp.task('minify-css', () => {
  return gulp.src('./css/styles.css')
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('./css/'));
});

// Create gulp series (series of tasks) to run css related tasks simultaneously
gulp.task('styles', gulp.series('sass', 'minify-css'));



// JavaScript tasks

// Create gulp task to combine all javascript files
gulp.task('concat', function() {
  return gulp.src('./js/jquery-3.3.1.slim.min.js', './js/popper.min.js', 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js')
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./js/dist/'));
});

// Create gulp task to minify combined javascript file
gulp.task("minify-js", function () {
    return gulp.src("./js/dist/scripts.js")
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest("./js/dist/"));
});

// Create gulp series (series of tasks) to run javscript related tasks simultaneously
gulp.task('scripts', gulp.series('concat', 'minify-js'));



// Watch function

// Create a gulp task to watch all my scss and js files for changes and run a set of gulp series when those files are updated
gulp.task('watch', function () {
	return gulp.watch(['./scss/**/*.scss', './js/*.js'], gulp.series('styles', 'scripts', 'browser-sync-reload'));
});

// watch, as above, but with BrowserSync
gulp.task('watch-bs', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

	gulp.watch(['./scss/**/*.scss', './js/*.js'], gulp.series('styles', 'scripts', 'browser-sync-reload'));
});

gulp.task('browser-sync-reload', function() {
    browserSync.reload();
});
