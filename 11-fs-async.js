const {readFile, writeFile} = require('fs')
console.log('start')

//Asynchronous method- Need to provide call back. ()=>
// We run call back when we are done. Like listener

readFile('./content/first.txt', 'utf8', (err, result)=> {
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
    const second = result
    writeFile('./content/result-async.txt',
    `Here is the result : ${first}, ${second}`,
    (err, result)=>{
        if(err){
            console.log(err);
            return
        }
        // console.log(result);
        console.log('done with this task')
    }
    )
    })
})
console.log('starting next task')

//Alternative to asynchronous method is using Promises as well as Async-Await
//Reading-writing implies from and to the database

//HTTP- Brief Intro
//Cover In Detail Later- setting server implies methods of HTTP
//Express is the package for node.js which is basically abstraction over HTTP module for setting server