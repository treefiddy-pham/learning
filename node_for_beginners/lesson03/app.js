// example of using readline module to handle user input.

const readline = require('readline');
// creates interface 'rl' with stdin and stdout to get user input from console.
const rl = readline.createInterface({input: process.stdin,
                                     output : process.stdout});

// generate two random integeers between 1 and 10 and get their sum.
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let answer = num1 + num2;

// uses question method to prompt user for answer of sum of the random numbers with callback function to process input.
rl.question(`What is ${ num1 } + ${ num2}? \n`,
(userInput)=>{
    //console.log(userInput);
    
    //close input stream if correct answer is inputted. without else handlers input will continue to be received until forced to break.
    //trim user input is good practice
    if(userInput.trim() == answer){
        rl.close();
    }
    //if incorrect answer is inputted, reprompt for input with callback to process input again.
    else{
        rl.setPrompt('Incorrect response please try again\n');
        rl.prompt();
        // Checks for correct answer and closes if correct.
        // Here the rl interface is waiting for the 'line' event where an EOL has been inputted.
        // this callback makes sure the input is processed and will reprompt after every incorrect response.
        rl.on('line',(userInput)=>{
            if(userInput.trim() == answer){
                rl.close();
            }
            
            else{
                rl.setPrompt(`Your answer of ${userInput} is incorrect\n`);
                rl.prompt();
            }
        })
    }
});

// run callback function on close event which is when correct answer is inputted as coded above.
rl.on('close',()=>{
    console.log('Correct!!!!!');
});