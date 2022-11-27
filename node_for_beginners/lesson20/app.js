// Lesson 20 Middleware

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

// app calls middlware function bodyparser. bodyparser checks and parses json and attaches to request body.
app.use(bodyparser.json());

//example of custom middleware. The next() method is required for custom middleware
// then next function lets server know function is done processing and to proceed.
app.use((req,res,next)=>{
    //output to the console the request url and method.
    //after execution next() continues the GET handler below.
    console.log("all routes:",req.url,req.method);
    next();
})
//custom middleware that is only executed on route '/example'
app.use('/example',(req,res,next)=>{
    console.log("example route:",req.url,req.method);
    req.banana = 'banana';
    next();
})

app.get('/',(req,res)=>{
    res.send('Middleware');
})

//NOTE: hitting this route causes both custom middleware functions above to 
//execute. First for / then for /example.
// Curiously the req.url for all route middleware shows up as "/example"
// while the req.url for the /example route middleware shows up as "/"
app.get('/example',(req,res)=>{
    // req.banana is assigned in the custom middleware on the same route
    console.log(req.banana);
    res.send('Middleware');
})

app.listen(3000);

/*
--- Sample Console Output ---
http://localhost:3000/
all routes: / GET

http://localhost:3000/orange
all routes: /orange GET

http://localhost:3000/example
all routes: /example GET
example route: / GET
banana
 */
