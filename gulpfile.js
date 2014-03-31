var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var defineModule = require('gulp-define-module');

// var es = require('event-stream');
// var $ = require('gulp-load-plugins')();
// var _ = require('lodash');

gulp.task('templates');

gulp.task('scripts', ['templates'], function () {
    gulp.src(['src/*.js', 'build/templates/*.js'])
        .pipe(defineModule('plain', {
          wrapper: 'require.register("<%= module %>", function(exports, require, module) { module.exports = <%= contents %>; })',
            context: function(context) {
            var file = context.file;
            var name = path.relative(file.cwd, file.path)
              .slice(0, -path.extname(file.path).length)
              .split(path.sep).join('.');
            return { module: name };
          }
        }))
        .pipe(concat('all.js'))
        .pipe(gulp.dest('build'))
});
