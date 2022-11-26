// Lesson 08 Serving Static Files with HTTP and FS

const http = require('http');
const fs = require('fs');

//create http server on port 3000
http.createServer((req,res)=>{
//note that for browser to display files correctly the content type needs to be added to the header.
//below are examples of html, json, and image content types.
//also when content is served, include http status 200 for successful request.
    if (req.url==='/html') {
        const readStatic = fs.createReadStream('./static/index.html');
        res.writeHead(200,{'Content-type': 'text/html'});
        //res is also a writeable stream
        readStatic.pipe(res);
    }
    else if (req.url==='/json') {
        const readJson = fs.createReadStream('./static/example.json');
        res.writeHead(200,{'Content-type': 'application/json'});
        readJson.pipe(res);
    }
    else if (req.url==='/image') {
        const readImage = fs.createReadStream('./static/example.png');
        res.writeHead(200,{'Content-type': 'image/png'});
        readImage.pipe(res);
    }
    else {
        res.write('Hello World from nodejs ');
        res.end();
    }
}).listen(3000);