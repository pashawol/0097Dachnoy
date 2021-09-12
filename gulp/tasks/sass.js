module.exports = () => {
	$.gulp.task('sass', () => {
		const processors = [ 
			$.autoprefixer(),
			$.nested(),
			$.cssnano()
		];
		return $.gulp.src($.sourse + '/sass/main.scss')
			.pipe($.sassGlob())
			.pipe($.sass().on('error', $.sass.logError))
			.pipe($.gcmq())
			.pipe($.postcss(processors))
			.pipe($.rename({ suffix: '.min', prefix: '' }))
			.pipe($.gulp.dest($.public + '/css'))
			.pipe($.browserSync.stream());
	});

}