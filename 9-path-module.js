const path = require('path')
//platform specific separator 
console.log(path.sep);
//join- join sequence of path segment and return a normalize resulting path
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);
// for last file
const base = path.basename(filePath)
console.log(base);
//absolute path-
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.tex')
console.log(absolute)