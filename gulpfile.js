var gulp        = require('gulp'),
    requirejs   = require('requirejs'),
    ts          = require('gulp-typescript'),
    htmlmin     = require('gulp-htmlmin');
    htmlreplace = require('gulp-html-replace');

// RequireJS Optimizer
gulp.task("requirejs", function (done) {
    requirejs.optimize({
        "baseUrl": 'dev/js/lib',
        //"generateSourceMaps": true,
        "include": [
            "../../vendor/requirejs/require",
        ],
        "name" : '../AppBootstrap',
        "optimize": "none", //"uglify2",
        "out": 'build/app-build.js',
        "paths": {
          "jquery" : '../../vendor/jquery/dist/jquery',
          "lodash" : '../../vendor/lodash/lodash'
        },
        // for source maps
        "preserveLicenseComments": false,
        "wrapShim": false
    }, function () {
        done();
    }, done);
});

// Convert TS -> JS
gulp.task("typescript", function(){
  return gulp.src('dev/ts/**/*.ts')
          .pipe(ts({
            module: "amd",
            target: "es5",
            noImplicitAny: false,
            sourceMap: false
          }))
          .pipe(gulp.dest('dev/js'));
});

// Build Task
gulp.task('default', ['typescript', 'requirejs'], function(){
  gulp.src('dev/index.htm')
    .pipe(htmlreplace({'requirejs': 'app-build.js'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('build/'));
});
