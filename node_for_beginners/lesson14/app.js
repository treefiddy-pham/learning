// Lesson 14 Serving Static files with Express


const express = require('express');
const path = require('path');

const app = express();

// app.use = middleware
//create alias called public to static directory in current directory
app.use('/public',express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    // note the sendFile rather than send
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(3000);