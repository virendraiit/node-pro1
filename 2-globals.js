//GLOBALS - NO WINDOW !!!! i.e no window object
//__dirname - path to directory
//__flename - file name
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
setInterval(() => {
    console.log('hello world')
}, 1000);