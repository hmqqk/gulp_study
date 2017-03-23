var gulp = require('gulp');
var rename = require('gulp-rename'); // 重命名
var minifyCss = require('gulp-minify-css'); // css压缩
var autoprefixer = require('gulp-autoprefixer') // 自动添加浏览器前缀


// css 压缩
gulp.task('minifycss', function(){
	gulp.src('src/css/*.css')
	.pipe(minifyCss())
	.pipe(gulp.dest('dist/css'))
});
// css 重名
gulp.task('renamecss', function(){
	gulp.src('src/css/style.css')
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest('dist/css'))
});
// 自动添加浏览器前缀
gulp.task('autoprefixer', function(){
	gulp.src('src/css/*.css')
	.pipe(autoprefixer({
		browsers: ['last 2 versions', 'Android >= 4.0'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove:true //是否去掉不必要的前缀 默认：true 
	}))
	.pipe(gulp.dest('dist/css'))
});

