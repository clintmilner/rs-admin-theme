var gulp = require( 'gulp' ),
    less = require( 'gulp-less' ),
    uglify = require( 'gulp-uglify' ),
    concat = require( 'gulp-concat' );

var masterLess, lessSources, jsSources, jsLibSources, cssLibSources, webfontSources, htmlSources;

masterLess = 'components/less/rs-theme.less';
lessSources = [ 'components/less/*.less', 'components/less/mixins/*.less' ];
cssLibSources = [ 'components/css/lib/*.css' ];
webfontSources = [ 'components/css/fonts/*' ];
jsSources = [ 'components/js/*.js' ];
jsLibSources = [ 'components/js/lib/*.js' ];
htmlSources = [ 'pages/*.html' ];


// Tasks
gulp.task( 'less', function(){
    return gulp.src( masterLess )
        .pipe( less() )
        .pipe( gulp.dest( 'build/css' ) );
});
gulp.task( 'cssLibs', function(){
    gulp.src( cssLibSources )
        .pipe( gulp.dest( 'build/css/lib' ) );
});
gulp.task( 'webfonts', function(){
    gulp.src( webfontSources )
        .pipe( gulp.dest( 'build/css/fonts' ) );
});
gulp.task( 'js', function(){
    gulp.src( jsSources )
        .pipe( concat( 'rs-scripts.js' ) )
        .pipe( gulp.dest( 'build/js' ) );
});
gulp.task( 'jsLibs', function(){
   gulp.src( jsLibSources )
       .pipe( gulp.dest( 'build/js/lib' ) );
});
gulp.task( 'html', function(){
   return gulp.src( htmlSources );
});
gulp.task( 'watch', function(){
    gulp.watch( lessSources, [ 'less' ] );
    gulp.watch( jsSources, [ 'js' ] );
    gulp.watch( jsLibSources, [ 'jsLibs' ] );
    gulp.watch( cssLibSources, [ 'cssLibs' ] );
    gulp.watch( webfontSources, [ 'webfonts' ] );
    gulp.watch( htmlSources, [ 'html' ] );
});

gulp.task( 'default', [ 'less', 'cssLibs', 'webfonts', 'js', 'jsLibs', 'html', 'watch' ] );