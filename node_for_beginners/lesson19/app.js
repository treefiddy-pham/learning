// Lesson 19 EJS TEmplates with Express

//npm install body-parser
//npm install joi 

const express = require('express');
const path = require('path');
const bodyParse = require('body-parser');
const Joi = require('joi');
const app = express();

// app.use = middleware
//create alias called public to static directory in current directory
app.use('/public',express.static(path.join(__dirname,'static')));
// allows parse url encoded forms. extended not needed for strings
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine','ejs');
// Express will look for templates in ./views directory by default

app.get('/:userQuery',(req,res)=>{
    res.render('index',{data : {userQuery: req.params.userQuery,
                                searchResults:['book1','book2','book3'],
                                loggedIn : true,
                                username : 'asdlfkjasdlfkj'}});
});

app.get('/',(req,res)=>{
    //NOTE THE CHANGE HERE from sendFile for static file
    res.render('index');
});


app.post('/',(req,res)=>{
    console.log(req.body);
    const schema = Joi.object().keys({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    Joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err);
            res.send('an error has occurred');
        }
        else{
            res.send('successfully posted data')
        }
        console.log(result);
    });
    // database work here
    res.json({success : true});
})
// note output of console.log from index.html will output an array instead of json due to the serializearray


app.listen(3000);