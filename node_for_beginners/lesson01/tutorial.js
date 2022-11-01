const sum = (num1,num2)  => num1 + num2;
const PI = 3.14;
class SomeMathObject{
    constructor() {
        console.log('object created');
    }
}
//v1 single export of sum method. call from other file does not need to specify method name.
//module.exports = sum;

//v2 exports the above methods individually. modules now need to be called using module.method syntax.
//module.exports.sum = sum;
//module.exports.PI = PI;
//module.exports.SomeMathObject = SomeMathObject;

//v3 combines all lines of v2 with a single object
module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject}