const fs = require('fs');
// Example of using readstream to output a very large text file


// running this on a large file will result in error "File size is greater than possible Buffer"
/*
fs.readFile('./largefile.txt',(err,file)=>{
    if(err)
        console.log(err);
    else {
        console.log(file);
    }
})
*/

// instead of readFile/writeFile, use readStream/writeStream instead to process in a stream of data chunks

//without encoding argument, stream will contain bytestream for machine data
const readStream = fs.createReadStream('./largefile.txt','utf8');
const writeStream = fs.createWriteStream('example2.txt');

//log to console when stream is opened
readStream.on('open',()=>{
    console.log('Stream opened...');
});

//The data event occurs when the stream has data to consume.
//In this case, it will continue reading chunks of data from the file source of the stream
//then write to another stream to the output file.
// 'chunk' is the keyword for the chunk of data from the stream.
readStream.on('data',(chunk)=>{
    // log a message for each chunk of data received
    console.log(`Received ${chunk.length} bytes of data.`);
    writeStream.write(chunk);
});

//log to console when stream has ended
readStream.on('end', ()=>{
    console.log('Stream closed...')
});


/* 
[Expected Sample output]

Stream opened...
Received 65140 bytes of data.
Received 65102 bytes of data.
Received 64454 bytes of data.
Received 64451 bytes of data.
Received 64383 bytes of data.
Received 64349 bytes of data.
Received 64505 bytes of data.
Received 64443 bytes of data.
Received 64615 bytes of data.
Received 64413 bytes of data.
Received 64551 bytes of data.
Received 64470 bytes of data.
Received 64406 bytes of data.
Received 64462 bytes of data.
Received 64516 bytes of data.
Received 63839 bytes of data.
Received 64075 bytes of data.
Received 46560 bytes of data.
Stream closed...
*/