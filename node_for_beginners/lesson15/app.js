// Lesson 15 HTTP Post requests 

//npm install body-parser

const express = require('express');
const path = require('path');
const bodyParse = requre('body-parser');
const app = express();

// app.use = middleware
//create alias called public to static directory in current directory
app.use('/public',express.static(path.join(__dirname,'static')));
// allows parse url encoded forms. extended not needed for strings
app.use(bodyParser.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    // database work here
    res.send('successfully psoted data');
})

app.listen(3000);