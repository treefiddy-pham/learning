// Lesson 17 User Input Validation with Joi
/*
This example uses Joi to simplify validation of form inputs. Validation 
logic is written in the form of properties instead of complex sets of 
try and if statements. The response message body is determined whether 
validation is successful or not.

properties used in this example:
required() - ensures that data was entered.
email() - checks for valid email address.
min() - minimum number of characters
max() - maximum number of characters

index.html was updated to send a serialized JSON object of 
form contents instead of array in previous lesson.
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const app = express();

app.use('/public',express.static(path.join(__dirname,'static')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.post('/',(req,res)=>{
    console.log(req.body);
    //creates schema for input validation
    const schema = Joi.object({
        email : Joi.string().trim().email().required(),
        password : Joi.string().min(5).max(10).required()
    });
    //perform validation and output the result.
    const {error, result} = schema.validate(req.body);
    if(error) {
        console.log(error);
        res.send('an error has occurred');
    }
    else {
        res.send('successfully posted data');
    }
    console.log(result);

    // database work here
    //res.json({success : true});
});

app.listen(3000);

/*
--- Sample Output ---
server console:
[Object: null prototype] { email: 'foo@bar.com', password: 'password' }
undefined
[Object: null prototype] { email: 'foo@bar.com', password: '123' }
[Error [ValidationError]: "password" length must be at least 5 characters long]

*/