var gulp = require('gulp');
var uglify = require('gulp-uglify'); // js文件压缩
var rename = require('gulp-rename'); // 重命名
var concat = require('gulp-concat'); // 文件合并
var babel = require('gulp-babel'); // ES6编译成ES5





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

// 文件合并
gulp.task('concat', function(){
	gulp.src('src/js/*.js')
	.pipe(concat('concat.js'))
	.pipe(uglify()) // 合并之后压缩
	.pipe(gulp.dest('dist/js'))
});
// 再使用gulp-babel 之前需安装一下内容
// npm install gulp-babel babel-preset-2015 --save-dev
// 将ES6转换成ES5
gulp.task('es6', function(){
	gulp.src('src/js/es6.js')
	.pipe(babel())
	.pipe(gulp.dest('dist/js'))
});
// 监听文件
gulp.task('watch',function(){
	gulp.watch(['src/js/es6.js'], ['es6'])
});
