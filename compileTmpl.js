const fs = require('fs');
const path = require('path');
/**
 * Template generator with own syntax
 */
const pug = require('pug');

/**
 * @type {string} folder contains template source and output rendering function
 */
const PATH = 'js/blocks/';

/**
 * Compiles template and write it at the path param
 * Writes clojure with exporting es6 syntax and help to reduce global
 * scope polluting
 * @param {String} path Path for io
 * @param {String} fileName Source filename at the path
 * @param {String} functionName Callback name for template rendering
 * @param {String} jsName Output filename
 */
function compileTmpl(path, fileName, jsName) {
    let templateFunc = pug.compileFile(
        path, {
            inlineRuntimeFunctions: true,
        });
    templateFunc = 'export default ' + templateFunc;
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

