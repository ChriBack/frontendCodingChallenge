var gulp = require('gulp');
var webserver = require('gulp-webserver');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var runSequence = require('run-sequence');
var embedTemplates = require('gulp-angular-embed-templates');
var replace = require('gulp-replace-path');
//----------------------------------------------------------------------------------//
var css = 'src/css/';
var scss = 'src/scss/';

//DEV Webserver
gulp.task('serve', ['moveToLibs'], function () {
	gulp.src('src')
		.pipe(webserver({
			port: '9090',
			livereload: true,
			open: true
		}));
});

//DIST Webserver
gulp.task('serveDist', function () {
	gulp.src('dist')
		.pipe(webserver({
			port: '9091',
			livereload: true,
			open: true
		}));
});

gulp.task('sass', function () {
	return gulp.src(scss + '**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(css));
});

gulp.task('sass:watch', function () {
	gulp.watch(scss + '**/*.scss', ['sass']);
});

//Move modules to src
gulp.task('moveToLibs', function () {
	gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/jquery/dist/jquery.min.js'
	]).pipe(gulp.dest('src/js'));
});

//Concat CSS
gulp.task('concatCss', function () {
	return gulp.src([
		'src/css/bootstrap.min.css',
		'src/css/main.css'])
		.pipe(concatCss('main.css'))
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(cleanCSS({debug: true}, function (details) {
			console.log(details.name + ': ' + details.stats.originalSize);
			console.log(details.name + ': ' + details.stats.minifiedSize);
		}))
		.pipe(gulp.dest('dist/css'));
});

//Concat js assets
gulp.task('concatAssetsJs', function () {
	return gulp.src([
		'src/js/jquery.min.js',
		'src/js/angular.min.js',
		'src/js/angular-ui-router.js',
		'src/js/routeToComponents.js',
		'src/js/bootstrap.min.js'
	])
		.pipe(concat('assetsJs.js'))
		.pipe(gulp.dest('dist/js'));
});

//Move fonts
gulp.task('moveImages', function () {
 gulp.src(['src/images/**'])
 .pipe(gulp.dest('dist/images'));
 });

gulp.task('js:build', function () {
	gulp.src('src/app/**/*.js')
		.pipe(embedTemplates({'basePath':'./src/'}))
		.pipe(sourcemaps.init())
		.pipe(concat('App.js'))
		.pipe(replace('../images/', 'images/'))
		.pipe(uglify({mangle: false}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/js'));
});

//Build Dist
gulp.task('buildDist', function () {
	runSequence(
		'js:build',
		'concatCss',
		'moveImages',
		'concatAssetsJs'
	);
});