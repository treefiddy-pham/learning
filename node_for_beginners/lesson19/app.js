// Lesson 19 EJS TEmplates with Express
/* 
EJS allows for serving dynamic content through templates. Request 
handling via express does not change, but webpage contents will 
change based on what parameters provided in the requests
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();


app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Set the view engine to EJS.
// Express will look for *.ejs templates in ./views directory by default
app.set('view engine','ejs');

// serving a template called anon.ejs if no parameters provided
app.get('/',(req,res)=>{
    //NOTE THE CHANGE HERE from sendFile for static file
    res.render('anon');
});

// serving template index.ejs when a single route parameter of userQuery 
// is provided. The render function also includes a data object for 
// generating dynamic content.
// see index.js for how the data properties are referenced.
app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery,
                                searchResults:['book1','book2','book3'],
                                loggedIn : true,
                                username : 'myusername'}});
});

app.listen(3000);

/* 
--- Sample Output to web browser ---
http://localhost:3000/books
You Searched For : books
You are logged in as : myusername
book1
book1
book2
book3
*/