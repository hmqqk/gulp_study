var gulp = require('gulp');
var uglify = require('gulp-uglify'); // js文件压缩
var rename = require('gulp-rename'); // 重命名
var minifyCss = require('gulp-minify-css'); // css压缩
var less = require('gulp-less'); // 编译less
var autoprefixer = require('gulp-autoprefixer') // 自动添加浏览器前缀
var imagemin = require('gulp-imagemin'); // image 压缩
var imgspriter = require('gulp.spritesmith'); // img 雪碧图
var minifyHtml = require('gulp-minify-html'); // html 压缩


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
});
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
gulp.task('less',function(){
	gulp.src('src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/css'))
});
// image压缩
gulp.task('imagemin', function(){
	gulp.src('src/img/*.{png,jpg,gif,ico}')
	.pipe(imagemin())
	.pipe(gulp.dest('dist/img'))
});
// image 雪碧图
gulp.task('imgspriter', function(){
	gulp.src('src/icon/*.png')
	.pipe(imgspriter({
		imgName:'sprite.png',  
        cssName:'css/icon.css',  
        padding:5,  
        algorithm:'binary-tree'    
	}))
	.pipe(gulp.dest('dist/spriter'))
});
gulp.task('minifyhtml', function(){
	gulp.src('src/index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dist'))
});

gulp.task('default',['uglify', 'minifyhtml']) // 默认任务，执行gulp

