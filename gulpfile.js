var gulp = require('gulp');
var uglify = require('gulp-uglify'); // js文件压缩

// js文件压缩
gulp.task('uglify', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
});