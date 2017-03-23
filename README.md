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
