// Lesson 21 Express Router
/**
 * Sometimes the app will become very cluttered with all the possible routes.
 * This example will do all the route handling in a separate people.js file.
 * Can also be useful for reusing functionality on multiple subroutes.
 */

//declare express app as normal
const express = require('express');
const app = express();

// Loads modules from people.js
const people = require('./routes/people');
// Attaches people modules to the people route. All requests have to go 
// through the /people route in order for routes in //people.js to execute
app.use('/people',people);

app.listen(3000);

/**
 * No console output expected except for a custom middlware function call.
 * Main thing to look at to confirm functionality is response body in browser
 * indicating the route that was hit.
 */