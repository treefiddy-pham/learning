// Lesson 14 Serving Static files with Express
/* 
Express.js handles routing and executing middleware functions
 between request and response.

Script does not output to the server console.
The resulting web page will display text formatting from 
main.css and output to the client/browser console a log message.
*/

const express = require('express');
const path = require('path');

//declare express app
const app = express();

/*
The following line is an example of some code to be run when '/public'
 express route is accessed. In this case '/public' is routed to the static 
 directory located in the app's current directory. This allows serving 
web content to a different backend location
*/
app.use('/public',express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    // note the sendFile rather than send for static page.
    //index.html will contain references to css and js scripts in /public
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.listen(3000);
