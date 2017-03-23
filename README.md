如何使用
--
首先下载安装gulp
```
$ npm i gulp -g
```
在本地建一个文件夹gulp_study
```
$ mkdir gulp_study

$ cd gulp_study
```
开始工作
--
建立配置文件，并安装本地gulp依赖
```
$ npm init

$ npm install gulp --save-dev
```
在gulp_study文件夹建立相关文件夹

文件结构为
```
gulp_study
    |
    |
    |--dist // 生成文件
    |
    |--src  //源码放的位置 
    |   |
    |   |--------js
    |   |---------css
    |   |-----img
    |   |-----less
    |   |-----index.html
    |
    |--gulpfile.js
    |
    |--package.json
    |
```
gulp处理文件分类
--
1. [html](#html--source)
2. [css](#css-source)
3. [js](#js-source)
4. [img](#img-source)

主要用到以下插件
---


###### [gulp-uglify](https://www.npmjs.com/package/gulp-gulify)  js文件压缩

###### [gulp-rename](https://www.npmjs.com/package/gulp-rename) 重命名

###### [gulp-minify-css](https://www.npmjs.com/package/gulp-minify-css) css压缩

###### [gulp-less](https://www.npmjs.com/package/gulp-less)  编译less

###### [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)   自动添加浏览器前缀

###### [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) image 压缩

###### [gulp.spritesmith](https://www.npmjs.com/package/gulp.spritesmith) img 雪碧图

###### [gulp-minify-html](https://www.npmjs.com/package/gulp-minify-html) html 压缩

###### [gulp-concat](https://www.npmjs.com/package/gulp-concat) 文件合并

###### [gulp-babel](https://www.npmjs.com/package/gulp-babel)  将es6编译成es5

###### [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)

html  [[source](./src/note/html.js)]
--
html 主要还是进行代码压缩处理
```
var gulp = require('gulp')
var minifyHtml = require('gulp-minify-html')  // html压缩
gulp.task('minifyhtml', function(){
    gulp.src('src/index.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'))
});
```
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>首页</title>
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <script type="text/javascript" src="./js/hello.js"></script>
</head>
<body>
    
</body>
</html>
```
运行
```
$ gulp minifyhtml
```
之后就可以在dist文件夹下面看到压缩好的index.html

css [[source](./src/note/css.js)]
--
加载所需插件
```
var gulp = require('gulp');
var rename = require('gulp-rename'); // 重命名
var minifyCss = require('gulp-minify-css'); // css压缩
var autoprefixer = require('gulp-autoprefixer') // 自动添加浏览器前缀
```
> css代码压缩处理
```
// css 压缩
gulp.task('minifycss', function(){
    gulp.src('src/css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
});
```
> css 添加浏览器前缀
```
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

```
> css 重新命名
```
// css 重名
gulp.task('renamecss', function(){
    gulp.src('src/css/style.css')
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('dist/css'))
});
```
js [[source](./src/note/js.js)]
--
js主要经行压缩，重命名, 合并文件,   ES6 转换ES5

加载插件
```
var gulp = require('gulp');
var uglify = require('gulp-uglify'); // js文件压缩
var rename = require('gulp-rename'); // 重命名
var concat = require('gulp-concat'); // 文件合并
var babel = require('gulp-babel'); // ES6编译成ES5
```

> 压缩
```
// js文件压缩
gulp.task('uglify', function(){
    gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});
```
> 合并文件，重命名
```
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
```
> 将ES6转换为ES5
```
// 再使用gulp-babel 之前需安装一下内容
// npm install gulp-babel babel-preset-2015 --save-dev
// 将ES6转换成ES5
gulp.task('es6', function(){
    gulp.src('src/js/es6.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'))
});
```
img [[source](./src/note/img.js)]
--
关于图片处理主要经行压缩，制作雪碧图

加载插件
```
var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); // image 压缩
var imgspriter = require('gulp.spritesmith') // img 雪碧图
```
> 图片压缩
```
// image压缩
gulp.task('imagemin', function(){
    gulp.src('src/img/*.{png,jpg,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
});
```
> 雪碧图
```
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
})
```