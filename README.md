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
1. html
2. css
3. js
4. img

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