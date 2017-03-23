var gulp = require('gulp');
var imagemin = require('gulp-imagemin'); // image 压缩
var imgspriter = require('gulp.spritesmith') // img 雪碧图

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
})