var gulp = require( 'gulp' ),
    less = require( 'gulp-less' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' );

var masterLess, lessSources, jsSources, jsLibSources, htmlSources;

masterLess = 'components/less/rs-theme.less';
lessSources = [ 'components/less/*.less', 'components/less/mixins/*.less' ];
jsSources = [ 'components/js/*.js' ];
jsLibSources = [ 'components/js/libs/*.js' ];
htmlSources = [ 'pages/*.html' ];


// Tasks
gulp.task( 'less', function(){
    return gulp.src( masterLess )
        .pipe( less() )
        .pipe( gulp.dest( 'build/css' ) );
});

gulp.task( 'js', function(){
    gulp.src( jsSources )
        .pipe( concat( 'rs-scripts.js' ) )
        .pipe( gulp.dest( 'build/js' ) );
});
gulp.task( 'jsLibs', function(){
   gulp.src( jsLibSources )
       .pipe( uglify() )
       .pipe( gulp.dest( 'build/js/lib' ) );
});

gulp.task( 'html', function(){
   return gulp.src( htmlSources );
});

gulp.task( 'watch', function(){
    gulp.watch( lessSources, [ 'less' ] );
    gulp.watch( jsSources, [ 'js' ] );
    gulp.watch( jsLibSources, [ 'jsLibs' ] );
    gulp.watch( htmlSources, [ 'html' ] );
});

gulp.task( 'default', [ 'less', 'js', 'jsLibs', 'html', 'watch' ] );