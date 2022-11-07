// Lesson 20 Middleware

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

// app calls middlware function bodyparser. bodyparser checks and parses json and attaches to request body.
// then next function lets server know function is done processing and to proceed.
app.use(bodyparser.json());

app.use((req,res,next)=>{
//
    console.log(req.url,req.method);
    next();
})
app.use('/example',(req,res,next)=>{
    console.log(req.url,req.method);
    req.banana = 'banana';
    next();
})

app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('Middlware');
    
})

