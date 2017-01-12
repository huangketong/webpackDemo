var path = require('path');
var glob = require('glob');
var precss = require('precss');
var autoprefixer = require('autoprefixer');



function getEntry() {
    let entry = {};
    let dirSrcJs = './src/js/**/*.js'; //src/js/index/index.js
    let dirSrcJsx = './src/js/**/*.jsx';
    let dirSrcJsArr = glob.sync(dirSrcJs);
    let dirSrcJsxArr = glob.sync(dirSrcJsx);
    let dirSrc = dirSrcJsArr.concat(dirSrcJsxArr);
    // console.log(dirSrc);

    dirSrc.forEach(function(name) {
        let start = name.indexOf('src/js/') + 7;
        let end = name.lastIndexOf('.');
        //let end = name.length - 3;

        let n = name.slice(start, end); //index/index || first/first

        n = n.slice(n.lastIndexOf('/') + 1, n.length);

        entry[n] = name;
    });
    entry.vendor = ['jquery', 'react', 'react-dom'];
    return entry;

}
module.exports = getEntry();