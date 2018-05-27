/**
 * Pug runtime lib for importing it in pug templates
 */
import {exports as pugRuntimeFuncs} from './js/utils/render/pug-runtime';
import fs from 'fs';
import path from 'path';
/**
 * Template generator with own syntax
 */
import pug from 'pug';

/**
 * Import pug runtime library in es6 syntax
 * We need exports object in some cases of pug compile functions
 * Because its behavior is building on require exports into a pug const.
 * @type {string}
 */
const strForImport = 'import {' + Object.entries(pugRuntimeFuncs).map( ([key, func]) => {
    return func.name;
}).join(', ')+", exports as pug} from 'pug/pug-runtime';";
/**
 * Export template with es6 syntax
 * @type {string}
 */
const strForExport = ' export default template;';
/**
 * Compiles template and write it at the path param
 * Writes clojure with exporting es6 syntax and help to reduce global
 * scope polluting
 * @param {String} path Path for io
 * @param {String} fileName Source filename at the path
 * @param {String} jsName Output filename
 */
function compileTmpl(path, fileName, jsName) {
    let templateFunc = pug.compileFile(path, {});
    templateFunc = strForImport + templateFunc;
    templateFunc += strForExport;
    fs.writeFileSync(path + jsName, templateFunc);
}

/**
 * Searches files by template mask recursively
 * @param dir
 * @param pattern
 * @return {Array}
 */
const searchRecursive = (dir, pattern) => {
    let files = [];
    fs.readdirSync(dir).forEach(function (dirInner) {
        dirInner = path.resolve(dir, dirInner);
        const stat = fs.statSync(dirInner);
        if (stat.isDirectory()) {
            files = [...files, ...searchRecursive(dirInner, pattern)];
        } else if (stat.isFile() && dirInner.endsWith(pattern)) {
            files.push(dirInner);
        }
    });
    return files;
};
const pugFiles = searchRecursive('./js/', '.pug');
/**
 * Paginator template rendering
 */
pugFiles.forEach(function(filePath) {
    const fileName = filePath.split('/').shift();
    compileTmpl(
        filePath,
        fileName,
        '.tmpl.js'
    );
});

