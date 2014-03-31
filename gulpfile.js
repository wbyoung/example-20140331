var gulp = require('gulp');
var concat = require('gulp-concat');
var defineModule = require('gulp-define-module');

// var path = require('path');
// var es = require('event-stream');
// var $ = require('gulp-load-plugins')();
// var _ = require('lodash');

gulp.task('templates');

gulp.task('scripts', ['templates'], function () {
    gulp.src(['src/*.js', 'build/templates/*.js'])
        .pipe(defineModule('commonjs'))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build'))
});
