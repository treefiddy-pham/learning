// Lesson 10 Installing packages using npm

// npmjs.com

// npm install <<package_name>>
// installing package will download files to node_modules and update package.json with dependencies

const _ = require('lodash');

let example = _.fill([1,2,3,4,5],"banana",1,4);
console.log(example);


// npm uninstall <<package_name>>
