// Lesson 12 Getting started with Express Web Framework
/*
npm init --yes
npm install express

*/

const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(3000);