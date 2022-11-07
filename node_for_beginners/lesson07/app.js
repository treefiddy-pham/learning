//creating simple http server

const http = require('http');
const server = http.createServer((rfeq,res)=>{
    if(requestAnimationFrame.url === '/'){
        res.write('Hello World from nodejs ');
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }
    
})

server.listen('3000');