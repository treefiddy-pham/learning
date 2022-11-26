// Lesson 16 Working with JSON Data
/*
The body-parser middleware can also be used to parse JSON.
The form from previous lesson has been updated to use jQuery/AJAX 
to submit form data as an array of JSON objects.
The json response received by client is outputted to browser and console.
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
// Run json parser for all routes
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    // database work here
    
    //send respose back to client as json
    res.json({success : true});
})
// note output of console.log from index.html will output an array instead of json due to the serializearray


app.listen(3000);

/*
--- Sample output ---
from server console:
[
  { name: 'email', value: 'foo@bar.com' },
  { name: 'password', value: '54321' }
]

from browser console:
successfully got response
(index):28 {success: true}
*/
