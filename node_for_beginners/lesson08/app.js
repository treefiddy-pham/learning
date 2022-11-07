// Lesson 08 Serving Static Files with HTTP and FS

const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const readStream = fs.createReadstream('./static/index.html');
    //write header for response
    res.writeHead(200,{'Content-type': 'text/html'});
    //res is also a writeable stream
    readStream.pipe(res);

    const readStream = fs.createReadstream('./static/example.json');
    //write header for response
    res.writeHead(200,{'Content-type': 'application/json'});

    const readStream = fs.createReadstream('./static/example.png');
    //write header for response
    res.writeHead(200,{'Content-type': 'image/png'});
}).listen(3000);