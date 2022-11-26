// Lesson 12 Getting started with Express Web Framework

/*
In order to be able to use express, need to install it using npm as seen in previous lessons.
express will be added to the project's package.json file.

npm init --yes
npm install express
*/

//express replaces the html module in this example for simpler syntax
const express = require('express');
const app = express();

//server hello world message when GET request for / received
app.get('/',(req,res)=>{
    res.send('Hello World');
});

// starts the web server on port 3000
app.listen(3000);