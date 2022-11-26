// Lesson 18 User Input Validation with JOI part 2 - nested object and arrays
/* 
Joi can be used to handle nested validations for dealing with nested objects. 
Example below has one main custom object schema that consists of 2 other 
schemas for validating an address and a list of preferences.
No fancy html form used here. Instead the input is assigned within the script.
*/

const Joi = require('joi');

// two different arrays for testing validation. to see difference update line 
// 23 with the desired array.
const arrayString = ['banana','bacon','cheese'];
const arrayObjects = [{example: 'example1'},{example: 'example2'},{example: 'example3'}];

// defines user input. modify values as desired to test behavior.
const userInput = { 
    personalInfo: {
        streetAddress: '123 Fake Street',
        city: 'Springfield',
        state: 'FL'
    },
    preferences : arrayString
};

//sets schema of personalInfo
const personalInfoSchema = Joi.object({
    streetAddress : Joi.string().trim().required(),
    city :Joi.string().trim().required(),
    state: Joi.string().trim().length(2).required()
})

//sets schema of preferences
// to change validation to array of objects, use commented line below instead
const preferencesSchema = Joi.array().items(Joi.string());
//const preferencesSchema = Joi.array().items(Joi.object());

// overall object schema to validate
const schema = Joi.object({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
})

//validate userInput and display error if encountered
const {error, value} = schema.validate(userInput);
if(error)
    console.log(error.details);
else
    console.log(value);


/* 
--- Sample Output ---
Invalid preferences value:
[
  {
    message: '"preferences[3]" must be a string',
    path: [ 'preferences', 3 ],
    type: 'string.base',
    context: { label: 'preferences[3]', value: 20, key: 3 }
  }
]

Invalid state:
[
  {
    message: '"personalInfo.state" length must be 2 characters long',
    path: [ 'personalInfo', 'state' ],
    type: 'string.length',
    context: {
      limit: 2,
      value: 'FLA',
      encoding: undefined,
      label: 'personalInfo.state',
      key: 'state'
    }
  }
]

Successful run:
{
  personalInfo: {
    streetAddress: '123 Fake Street',
    city: 'Springfield',
    state: 'FL'
  },
  preferences: [ 'banana', 'bacon', 'cheese' ]
}
*/