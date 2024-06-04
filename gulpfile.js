import sync from "browser-sync";
import del from "del";
import gulp from "gulp";
import fileInclude from "gulp-file-include";
import gulpIf from "gulp-if";
import plumber from "gulp-plumber";

import fonter from "gulp-fonter";
import htmlMin from "gulp-htmlmin";
import removeHtml from "gulp-remove-html";
import ttf2woff2 from "gulp-ttf2woff2";
import webpHtml from "gulp-webp-html";

import gulpSass from "gulp-sass";
import bulk from "gulp-sass-bulk-importer";
import dartSass from "sass";

import autoprefixer from "autoprefixer";
import imagemin from "gulp-imagemin";
import postCss from "gulp-postcss";
import webp from "gulp-webp";
import webpCss from "gulp-webpcss";
import csso from "postcss-csso";
import pimport from "postcss-import";
import minmax from "postcss-media-minmax";

import babel from "gulp-babel";
import terser from "gulp-terser";

let isBuildFlag = false;
const sass = gulpSass(dartSass);
const projectFolder = "prod";
const sourceFolder = "src";
const path = {
  build: {
    html: projectFolder + "/",
    css: projectFolder + "/styles/",
    js: projectFolder + "/scripts/",
    img: projectFolder + "/images/",
    fonts: projectFolder + "/fonts/",
  },

  src: {
    html: [sourceFolder + "/pages/**/*.html"],
    css: sourceFolder + "/styles/styles.{scss,css}",
    js: sourceFolder + "/scripts/script.js",
    img: sourceFolder + "/images/**/*.{jpg,jpeg,png,gif,ico,webp,svg}",
    fonts: sourceFolder + "/fonts/*.{ttf,eot,otf,ttc,woff,woff2}",
  },

  watch: {
    html: sourceFolder + "/**/*.html",
    css: sourceFolder + "/styles/**/*.{scss,css}",
    js: sourceFolder + "/scripts/**/*.js",
    img: sourceFolder + "/images/**/*.{jpg,jpeg,png,gif,ico,webp,svg}",
  },

  clean: "./" + projectFolder + "/",
};

export const browserSync = () => {
  sync.init({
    ui: false,
    notify: false,
    browser: "chrome",
    server: {
      baseDir: "./" + projectFolder + "/",
    },
  });
};

export const html = () => {
  return gulp
    .src(path.src.html)
    .pipe(plumber())
    .pipe(fileInclude({ basepath: "src/" }))
    .pipe(webpHtml())
    .pipe(gulpIf(isBuildFlag, removeHtml()))
    .pipe(
      gulpIf(
        isBuildFlag,
        htmlMin({
          removeComments: true,
          collapseWhitespace: true,
        })
      )
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(sync.stream());
};

export const css = () => {
  return gulp
    .src(path.src.css, { sourcemaps: !isBuildFlag })
    .pipe(bulk())
    .pipe(
      sass({
        outputStyle: "expanded",
      })
    )
    .pipe(
      webpCss({
        webpClass: ".webp",
        noWebpClass: ".no-webp",
      })
    )
    .pipe(postCss([pimport, autoprefixer, minmax]))
    .pipe(gulpIf(isBuildFlag, postCss([csso])))
    .pipe(gulp.dest(path.build.css, { sourcemaps: !isBuildFlag }))
    .pipe(sync.stream());
};

export const js = () => {
  return gulp
    .src(path.src.js, { sourcemaps: !isBuildFlag })
    .pipe(fileInclude())
    .pipe(
      gulpIf(
        isBuildFlag,
        babel({
          presets: ["@babel/preset-env"],
        })
      )
    )
    .pipe(gulpIf(isBuildFlag, terser()))
    .pipe(gulp.dest(path.build.js, { sourcemaps: !isBuildFlag }))
    .pipe(sync.stream());
};

export const images = () => {
  return gulp
    .src(path.src.img)
    .pipe(webp())
    .pipe(gulp.dest(path.build.img))
    .pipe(gulp.src(path.src.img))
    .pipe(
      gulpIf(
        isBuildFlag,
        imagemin({
          progressive: true,
          verbose: true,
          optimizationLevel: 3,
        })
      )
    )
    .pipe(gulp.dest(path.build.img));
};

export const fonts = () => {
  return gulp
    .src(path.src.fonts)
    .pipe(plumber())
    .pipe(
      fonter({
        formats: ["ttf", "eot", "woff", "svg"],
      })
    )
    .pipe(gulp.dest(path.build.fonts))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.build.fonts));
};

export const clean = () => {
  return del(path.clean);
};

const setMode = (isBuild) => {
  return (cb) => {
    isBuildFlag = isBuild;
    cb();
  };
};

export const watchFiles = () => {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.img], images);
};

const watch = gulp.parallel(watchFiles, browserSync);

const dev = gulp.parallel(css, html, js, images);

export const build = gulp.series(clean, setMode(true), dev, fonts, browserSync);

export default gulp.series(clean, dev, watch);
