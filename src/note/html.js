var gulp = require('gulp')
var minifyHtml = require('gulp-minify-html')  // html压缩
gulp.task('minifyhtml', function(){
	gulp.src('src/index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dist'))
});