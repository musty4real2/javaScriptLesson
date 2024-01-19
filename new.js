// let classList= ['musa','ali','isah'];
// let groupList= ['pri1','pri2','pri3'];

// let combine= [...classList,groupList];


// console.log(combine);

// comment 
// comment 


const readline = require("readline");

// create interface for input and output
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout,
});

// create empty user input
let userInput = "";

// question user to enter name
rl.question("What is your name\n", function (string) {
userInput = string;

console.log("Your name is " + userInput);

  // close input stream
rl.close();
});
