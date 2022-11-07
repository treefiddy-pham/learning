const fs = require('fs');
//without encoding argument, stream will contain bytestream
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt');


// Example of using readstream to output a very large text file

// running this on a large file will result in error "File size is greater than possible Buffer"
fs.readFile('./largefile.txt',(err,file)=>{
    if(err)
        console.log(err);
    else {
        console.log(file);
    }
})
// readstream inherits eventemitter class and has data event
const readStream= fs.createReadStream('./largefile.txt','utf8');
readStream.on('data',(chunk)=>{
    //console.log(chunk);
    writeStream.write(chunk);
    });