var gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('app/src/scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('app/src/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('css-min', function() {
	return gulp.src('app/src/css/style.css')
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/src/css'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'node_modules/lazysizes/lazysizes.js',
		'node_modules/sweetalert/dist/sweetalert.min.js',
		'app/src/js/script.js'
		])
		.pipe(concat('script-min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('app/src/js'));
});

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'app/src'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('app/build');
});

gulp.task('clear', function() {
	return cache.clearAll();
});

gulp.task('watch', ['browser-sync', 'sass', 'css-min'/*, 'scripts'*/], function() {
	gulp.watch('app/src/scss/**/*.scss', ['sass']);
	gulp.watch('app/src/*.html', browserSync.reload);
	gulp.watch('app/src/js/**/*.js', browserSync.reload);
});

gulp.task('img', function() {
	return gulp.src(['app/src/img/**/*'], [!'app/src/img/**/*.gif'])
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('app/build/img'));
});

gulp.task('build', ['clean', 'sass', 'scripts'], function() {

	var buildCss = gulp.src('app/src/css/*min.css')
	.pipe(gulp.dest('app/build/css'))

	var buildFonts = gulp.src('app/src/fonts/**/*')
	.pipe(gulp.dest('app/build/fonts'))

	var buildJs = gulp.src('app/src/js/**/*min.js')
	.pipe(gulp.dest('app/build/js'))

	var buildHtml = gulp.src('app/src/**/*.html')
	.pipe(gulp.dest('app/build'));

});