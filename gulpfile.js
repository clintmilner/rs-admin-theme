var gulp = require( 'gulp' ),
    less = require( 'gulp-less' ),
    connect = require( 'gulp-connect' );

var masterLess, lessSources, jsSources, outputDir;

outputDir = 'resources/webapps/static';
masterLess = outputDir + '/components/less/cmStyles.less';
lessSources = [ outputDir + '/components/less/*.less',
    outputDir + '/components/less/mixins/*.less' ];
jsSources = [ outputDir + ' /components/js/*.js' ];


// Tasks
gulp.task( 'less', function(){
    return gulp.src( masterLess )
        .pipe( less() )
        .pipe( gulp.dest( outputDir ) )
        .pipe( connect.reload() );
});

gulp.task( 'js', function(){
    // todo
});

gulp.task( 'watch', function(){
    gulp.watch( lessSources, [ 'less' ] );
    gulp.watch( jsSources, [ 'js' ] );
});

gulp.task( 'connect', function(){
    connect.server({
        root: '/',
        livereload: true
    })
});
gulp.task( 'default', [ 'less', 'js', 'connect', 'watch' ] );