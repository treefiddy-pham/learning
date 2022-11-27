/*
All route handling is offloaded here to declutter app.js
NOTE that any path here will be relative to the route 
they are attached to in main script.
e.g. if modules are exported to 'people' route, then that 
'people' route will be '/' here and 'people/example' will 
be '/example' here.
*/

const express = require('express');
// create an instance of just the router instead of entire
// express object.
const route = express.Router();

// Route syntax is same as if it were express app
route.use((req,res,next)=>{
    console.log('middleware being used');
    next();
})

route.get('/',(req,res)=>{
    res.send('/ being hit');
})

route.get('/example',(req,res)=>{
    res.send('/example being hit');
})

// export is needed to expose modules to outside scripts.
module.exports = route;
