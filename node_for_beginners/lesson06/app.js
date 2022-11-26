// Pipes and Pipe chaining

const fs = require('fs');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('example.txt','utf8');
const writeStream1 = fs.createWriteStream('textcopy.txt');
const writeStreamZip = fs.createWriteStream('example.zip');
//readStream.on('data',(chunk)=>{
//    writeStream.writre(chunk);
//});

// this single line acts the same as the above to send data from readstream to writestream
readStream.pipe(writeStream1);

// uses pipe to zip the contents of the stream before writing to the writestream
//change writestream destination to *.gz file first
readStream.pipe(gzip).pipe(writeStreamZip);

//change read and write streams to match input and output files
//readStream.pipe(gunzip).pipe(writeStream);


/*
No console ouptput expected. check folder for new files.
*/