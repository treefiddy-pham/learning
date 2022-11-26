//creating simple http server

const http = require('http');

// creates an http server with simple response callback functions.
const server = http.createServer((req,res)=>{
    //if server is accessed from server root path then deliver greeting message
    //otherwise display message that other directory was used.
    if(req.url === '/'){
        res.write('Hello World from nodejs ');
        res.end();
    }
    else{
        res.write('using some other domain');
        res.end();
    }
    
})

//starts the http server on port 3000.
//after this runs point browser to http://localhost:3000/ to see greeting message above
server.listen('3000');