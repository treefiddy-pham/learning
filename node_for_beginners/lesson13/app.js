// Lesson 13 Express http get, route params and query strings

const express = require('express');
const app = express();


//similar to lesson 08, response will vary depending on uri path accessed
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/example',(req,res)=>{
    res.send('hitting example route');
});

//handling parameters provided in uri path.
// after ./example/ provide name and age as subdirectories for response with parameters outputted
// browse to http://localhost:3000/example/myname/myage?query=examplequery&sort=byage
app.get('/example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age );
});

app.listen(3000);

/*
[sample output from http://localhost:3000/example/jane/25]
{ name: 'jane', age: '25' }
{}

[sample output from http://localhost:3000/example/jane/25?query=examplequery&sort=byage]
{ name: 'jane', age: '25' }
{ query: 'examplequery', sort: 'byage' }
*/