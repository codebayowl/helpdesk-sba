const {src, dest, parallel,series, watch} = require('gulp'); // connecting gulp functions
const browserSync = require('browser-sync').create(); // connecting standalone node.js module to the project
const concat = require('gulp-concat'); // connecting standalone node.js module to the project
const uglify = require('gulp-uglify-es').default; // !!READ DOCUMENTATION FOR ".default"!! connecting standalone node.js module to the project
const scss = require('gulp-sass')(require('sass')); // connecting standalone node.js module to the project
const vendorize = require('gulp-autoprefixer'); // connecting standalone node.js module to the project
const cleancss = require('gulp-clean-css'); // connecting standalone node.js module to the project
const pug = require('gulp-pug'); // connecting standalone node.js module to the project
const imagemin = require('gulp-imagemin'); // connecting standalone node.js module to the project
const newer = require('gulp-newer'); // connecting standalone node.js module to the project
const del = require('del'); // connecting standalone node.js module to the project
const htmlmin = require('gulp-htmlmin'); // connecting standalone node.js module to the project
const uglifycss = require('gulp-uglifycss'); // connecting standalone node.js module to the project

function browsersync() {
    browserSync.init({
        server: {baseDir: 'preprod/'},
        notify: false,
        online: true // change to false if working offline (browsercync won't start otherwise)
    })
}

function compilePug() {
    return src([
        'src/pug/*.pug',
        '!src/pug/_*.pug'
    ])
    .pipe(pug())
    //.pipe(concat('index.html'))
    .pipe(dest('preprod/'))
    .pipe(browserSync.stream()) // adding watching w/o hard reload of page
}

function styles() {
    return src([
        'src/scss/*.scss',
        '!src/scss/_*.scss'
    ])
    .pipe(scss())
    .pipe(vendorize({ 
        overrideBrowserslist: ['last 10 versions'], 
        grid: true
    })) // adding autoprefixes for old browsers
    .pipe(cleancss( ( { level: { 1: { specialComments: 0} }, format: 'beautify' } ) ) )
    //.pipe(concat('styles.css'))
    .pipe(dest('preprod/css/')) // outputting to preprod
    .pipe(browserSync.stream()) // adding watching w/o hard reload of page
}

function minifyImg() {
    return src('src/img/**/*')
    .pipe(newer('preprod/img/'))
    .pipe(imagemin())
    .pipe(dest('preprod/img/'))
}

function cleanImg() {
    return del('preprod/img/**/*', {force: true})
}

function scripts() {
    return src([
        'src/js/*.js'
    ])
    //.pipe(concat('scripts.js'))
    .pipe(dest('preprod/js/')) // outputting to preprod
    .pipe(browserSync.stream()) // adding watching w/o hard reload of page
}

function cleanprod() {
    return del( 'public/**/*', {forced: true} )
}

function buildjs() {
    return src('preprod/js/*.js')
    .pipe(uglify())
    .pipe(dest('public/js/'));
}

function buildhtml() {
    return src('preprod/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('public/'));
}

function buildcss() {
    return src('preprod/css/*.css')
    .pipe(uglifycss({ 
        "maxLineLen": 80,
        "uglyComments": true 
    }))
    .pipe(dest('public/css/'));
}

function buildimg() {
    return src('preprod/img/**/*')
    .pipe(dest('public/img/'))
}

function startwatch () {
    watch( 'src/scss/*.scss', styles );
    watch( 'src/pug/*.pug', compilePug );
    watch( 'src/js/*.js', scripts );
    watch( 'src/img/**/*', minifyImg );
}

exports.browsersync = browsersync;
exports.scripts     = scripts;
exports.styles      = styles;
exports.compilePug  = compilePug;
exports.minifyImg   = minifyImg;
exports.cleanImg    = cleanImg;
exports.build       = series(cleanprod, buildjs, buildhtml, buildcss, buildimg);

exports.default     = parallel(styles, minifyImg, compilePug, scripts, browsersync, startwatch);