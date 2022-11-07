// Lesson 13 Express http get, route params and query strings

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('./example',(req,res)=>{
    res.send('hitting example route');
});

// browse to http://localhost:3000/example/myname/myage?query=examplequery&sort=byage
app.get('./example/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age );
});

app.listen(3000);

