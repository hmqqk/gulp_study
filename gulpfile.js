let gulp = require('gulp');
let uglify = require('gulp-uglify'); // js文件压缩
let rename = require('gulp-rename'); // 重命名
let minifyCss = require('gulp-minify-css'); // css压缩
let less = require('gulp-less'); // 编译less
let autoprefixer = require('gulp-autoprefixer') // 自动添加浏览器前缀
let imagemin = require('gulp-imagemin'); // image 压缩
let imgspriter = require('gulp.spritesmith'); // img 雪碧图
let minifyHtml = require('gulp-minify-html'); // html 压缩
let concat = require('gulp-concat'); // 文件合并
let babel = require('gulp-babel'); // 将es6编译成es5
let sourcemaps = require('gulp-sourcemaps');


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
// 压缩html
gulp.task('minifyhtml', function(){
	gulp.src('src/index.html')
	.pipe(minifyHtml())
	.pipe(gulp.dest('dist'))
});
// 文件合并
gulp.task('concat', function(){
	gulp.src('src/js/*.js')
	.pipe(sourcemaps.init())
      .pipe(concat('concat.js'))
    .pipe(sourcemaps.write('..maps',{
    	 mapSources: function(sourcePath, file) {
        // source paths are prefixed with '../src/' 
        return '../src/' + sourcePath;
      }
    }))
	.pipe(gulp.dest('dist/js'))
});
// 编译ES6
gulp.task('es6', function(){
	gulp.src('src/js/es6.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(gulp.dest('dist/js'))
});

// 监听文件
gulp.task('watch',function(){
	gulp.watch(['src/js/es6.js'], ['es6'])
});
gulp.task('default',['uglify', 'minifyhtml']) // 默认任务，执行gulp

