// Lesson 18 User Input Validation with JOI part 2 - nested object and arrays

const Joi = require('joi');

const arrayString = ['banana','bacon','cheese'];
const arrayObjects = [{example: 'example1'},{example: 'example2'},{example: 'example3'}];

const userInput = { 
    personalInfo: {
        streetAddress: '123 Fake Street',
        city: 'Springfield',
        state: 'FL'
    },
    preferences : arrayString
};

const personalInfoSchema = Joi.object().keys({
    streetAddress : Joi.string().trim().required(),
    city :Joi.string().trim().required(),
    state: Joi.string().trim().len(2).required()
})

const preferencesSchema = Joi.array().items(Joi.string());
//const preferencesSchema = Joi.array().items(Joi.object().keys({
//    example: Joi.string().required()
//}));

const schema = Joi.object.keys({
    personalInfo : personalInfoSchema,
    preferences : preferencesSchema
})

Joi.validate(userInput,schema,(err,result)=>{
    if(err)
        console.log(err);
    else
        console.log(result);
})