// Lesson 15 HTTP Post requests 
/*
The body-parser module is used in this example to parse the email address
and password data from the POST request provided by the form in 
index.html. When clicking the submit button the page will display a
successful post message while also outputting to the server console the 
form data for backend processing

Sample console output:
[Object: null prototype] { email: 'foo@bar.com', password: '12345' }
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//create alias called public to static directory in current directory
app.use('/public',express.static(path.join(__dirname,'static')));

//Allows parse url encoded forms. extended not needed for strings.
//No route is provided here means the middleware will always be executed
// on all routes.
app.use(bodyParser.urlencoded({extended: false}));

//serves the main webpage
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

//POST handler. the body from the POST request is outputted to console 
// confirming data
app.post('/',(req,res)=>{
    console.log(req.body);
    // database work here
    res.send('successfully posted data');
})

app.listen(3000);