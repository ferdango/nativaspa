import gulp from 'gulp';
import babel from 'gulp-babel';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import browserSync from 'browser-sync';
import size from 'gulp-size';
import twig from 'gulp-twig';
import del from 'del';
import plumber from 'gulp-plumber';

const sync = browserSync.create();
const reload = sync.reload;
const config = {
    paths: {
        src: {
            html: './src/views/pages/*.twig',
            img: './src/img/**/**.*',
            fonts: './src/fonts/**/**.*',
            css: './src/css/**.*',
            sass: ['./src/sass/app.scss'],
            js: [
                './src/js/libs/vue.js',
                './src/js/*.js',
            ],
            jsLib: 'src/js/modules/**.*',
            iconfonts: './src/icon-fonts/**/*.*'
        },
        dist: {
            main: './dist',
            css: './dist/assets/css',
            js: './dist/assets/js',
            img: './dist/assets/img',
            fonts: './dist/assets/fonts',
            css: './dist/assets/css',
            iconfonts: './dist/assets/icon-fonts/',
            html: './dist'
        }
    }
};

gulp.task('sass', () => {
    return gulp.src(config.paths.src.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(clean())
        .pipe(size({
            title: '=======*** CSS ***=======',
            showFiles: true
        }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(config.paths.dist.css))
        .pipe(sync.stream());
});

gulp.task('js', () => {
    gulp.src(config.paths.src.js)
        .pipe(babel({ presets: ['env'] }))
        .pipe(concat('app.js'))
        .pipe(size())
        .pipe(uglify())
        .pipe(gulp.dest(config.paths.dist.js));

    reload();
});

gulp.task('html', () => {
    gulp.src(config.paths.src.html)
    .pipe(twig({
        base: '/',
        errorLogToConsole: true,
        data: {
            title: 'Gulp and Twig',
            benefits: [
                'Fast',
                'Flexible',
                'Secure'
            ]
        }
    }))
    .pipe(size({
        title: '=======*** HTML ***=======',
        showFiles: true
    }))
    .pipe(gulp.dest(config.paths.dist.html));
    reload();


})

gulp.task('static', () => {
    gulp.src(config.paths.src.fonts)
        .pipe(gulp.dest(config.paths.dist.fonts));

    gulp.src(config.paths.src.img)
        .pipe(gulp.dest(config.paths.dist.img));

    gulp.src(config.paths.src.css)
        .pipe(gulp.dest(config.paths.dist.css));

    gulp.src(config.paths.src.jsLib)
        .pipe(gulp.dest(config.paths.dist.js));

    reload();
});

gulp.task('clean', () => {
    return del([config.paths.dist.main]);
});

gulp.task('build', ['clean'], function () {
    gulp.start('sass', 'js', 'static', 'html');
});

gulp.task('server', () => {
    sync.init({
        injectChanges: true,
        server: config.paths.dist.main
    });
});

gulp.task('watch', ['default'], function () {
    gulp.watch('src/sass/**/*.*', ['sass']);
    gulp.watch('src/js/**/*.js', ['js', 'static']);
    gulp.watch('src/views/**/*.twig', ['html']);
    gulp.start('server');
});

gulp.task('default', ['build']);