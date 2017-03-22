var gulp = require('gulp');
var uglify = require('gulp-uglify'); // js文件压缩
var rename = require('gulp-rename'); // 重命名

// js文件压缩
gulp.task('uglify', function(){
	gulp.src('src/js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'))
});

// 重命名
gulp.task('rename', function(){
	gulp.src('src/js/hello.js')
	.pipe(rename('hello.min.js'))
	.pipe(gulp.dest('dist/js'))
})