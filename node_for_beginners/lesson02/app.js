// Example of working with Events module and EventEmitter Class

// gets the reference of the events module which contains the EventEmitter class and assign it to EventEmitter
const EventEmitter = require('events');
// create an object of the EventEmitter class from module reference above
const eventEmitter = new EventEmitter();

// What to run when the 'tutorial' event is encountered
eventEmitter.on('tutorial',()=>{
    console.log('tutorial event has occurred');
});

// Duplicated from above but with arguments
eventEmitter.on('tutorial2',(num1,num2)=>{
    console.log(num1 + num2);
});

// emit the event for consumption
eventEmitter.emit('tutorial');
eventEmitter.emit('tutorial2',1,2);

// example of using events with custom object

// declare class with 'extends' to inherit the EventEmitter class in this object.
// creating a new Person object will have all the methods from EventEmitter available including `emit` to emit an event.
class Person extends EventEmitter{
    constructor(name){
        //super() function allows use of this
        super();
        this._name = name;
    }
    get name() {
        return this._name;
    }
}

// declares new Person with name as argument to pass to constructor
let pedro = new Person('Pedro');
let christina = new Person('Christina');

//run functions when 'name' event occurs
christina.on('name',()=>{
    console.log('my name is ' + christina.name);
})
pedro.on('name',()=>{
    console.log('my name is ' + pedro.name);
})

// Emit the event 'name' from pedro and christina which has inherited EventEmitter.
// Events get executed syncrhonously. pedro outputs first because event occurs first even though christina is created first above.
pedro.emit('name');
christina.emit('name');