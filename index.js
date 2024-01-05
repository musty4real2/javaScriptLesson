//Comment in JavaScript Code
// all javascript synthax ends with a semi-colon 

// is called in-line comment

/* multi line comment  */ 



/* comments are greyed out they are expected to be used for leaving notes for ones self or

for others to read and understand your program or that code snippet 
*/


/*NOTE: As you write code, you should regularly add comments to clarify the function of parts of your code. 
Good commenting can help communicate the intent of your code—both for others and for your future self.
*/


/*******************************************************************************************************/
/*****************************************Declare JavaScript Variables*********************************/
/*****************************************************************************************************/


/** JavaScript provides eight different data types which are 
undefined, null, boolean, string, symbol, bigint, number, and object.
 */


var ourName; 
/*
global declaration the variable could be use anywhere in the program 
Note : the data type and value of the declaration could change at any point in time also known
as mutability
*/

ourName=8; //changed value and datatype i.e mutation
ourName='Anabella';



let MyName;
MyName='Raul'

/* Note The let keyword is used to declare variable which is to be used in scope of where
it is declared that is to say that the let declaration is only going to be used within the code 
block/function in which it was used for declaration */


const pi=3.142;
/* 
the const keyword is used to declare a variable that is in-mutable/ uneditable
which means once the value is set the value can not be changed throughout the code block 
or the program it becomes constant unchangeable.
  */



var a; //unimitailized variable 
var b=2; //initailized variable using the assignment operator = to assign value 2

a=7; //assigning value to the un-initailized variable declared already 

/*CASE SENSITIVITY*/


// declaration

var StudLyCapVar;
var properCamelCase;
var TitleCaseOver;

//assignment 

StudLyCapVar=10;
PRoperCAmelCAse="A String";
tITLEcASEoVER=9000;

/*the proper way to declare a variable properly is  */

var studlyCapVar;
var properCamelCase;
var TitleCaseOver;



/* Adding Numbers in JS*/
/*
Number is a data type in JavaScript which represents numeric data
JS uses the + symbol as an addition operator when placed between two numbers.
const myVar = 5 + 10;
*/

var sum= 10+10;
console.log(sum);//output to the console the result of the variable

var difference=45-33;//subtraction in JS

console.log(difference);


var product=8*10; //multiplication operation 

console.log(product); //answer =80


var division= 66 / 33 ;
console.log(division); //the result of the quotient operation or division operation is 2


//to increment a number means adding 1 to the current value


var myVar=87;
// myVar=myVar + 1;

// the above method is a long method the short method is
myVar++;
console.log(myVar); //result is 88;


//decrement 

var myVarD=87;
// myVar=myVar - 1;
myVarD--;
console.log(myVarD); //result is 88;



// decimal point operation or floating point operations

var ourDecimal=5.7;

// ourDecimal=0.00009

// multiply decimal

var decimalProduct= 2.0 * 2.5;
console.log(decimalProduct);// result of the above operation is 5.0

// divide decimal
var quotient=4.4 / 2.0;
// result is 2.2


// remainder is symbolized by % 
// the % is used to determine if a number is even or odd

var remainder;
remainder= 11 % 3;
console.log(remainder); //result is 2


// DAY1

// Introduction
// Running JavaScript
// Comment Your Code
// Declare Variables
// Storing Values with the Assignment Operator
// Initializing Variables with the Assignment Operator
// Uninitialized Variables
// Case Sensitivity in Variables
// Basic Math
// Increment and Decrement
// Decimal Numbers
// Multiply Two Decimals
// Divide Decimals
// Finding a Remainder
// Augmented Math Operations



// DAY1 END

var a;
var b=2;


a=7;

b=a;

console.log(a);


//strings literals



var firstName='Musty';
var lastName='Turing';



//escaping a string like i don't within a string 
var myStr="i am a \"double quoted\" string inside a \"double quote\"";
console.log(myStr);

var url="<a href=\"https://www.example/com\" target=\"_blank\">Link</a>";

console.log(url);

var url2='<a href="https://www.example/com" target="_blank">Link</a>';

console.log(url2);


// concatination 


var senTence="i worked";
var sent2=" very hard";

console.log(senTence + sent2);

// second method 

senTence+="very hard using method2 concatinate";


var myName='Musa';

var str='my name is ' + myName + ' and i am well !!!';

console.log(str);


//finding string length


var firstNameLength=0;
var firstName='Ada';
firstNameLength=firstName.length;


var lastNameLength=0;
var lastName='Lovelace';

lastNameLength=lastName.length;
console.log(firstNameLength);
console.log(lastNameLength);



//brackett notation for finding first character


var firstLetterOfFirstName='';
var firstName='Ada';
firstLetterOfFirstName=firstName[0];

var firstLetterOfLastName='';
var lastName='Lovelace';
firstLetterOfLastName=lastName[0];

console.log(firstLetterOfFirstName);
console.log(firstLetterOfLastName);

// string immutability

var myStrr='Jello World';
myStrr='Hello World';

//get last letter of a string 


var lastLetterOfLastName=lastName[lastName.length -1];



function wordBlanks(myNoun, myAdjective, myVerb, myAdverb){
  var result='';

  result+="The "+ myAdjective +' ' + myNoun+ ' '+ myVerb + " to the store "+ myAdverb;

  return result;

}

console.log(wordBlanks("dog", "big", "ran", "quickly"));

/******************Array**************************************************************/

var ourArray=["John",23];
var myArray=["Quincy",1];



/*****************************************************Nested Array******************************************** */


var newArray=[["The universe", 42],["Everything",101010]];
var LatestArray=[["Bulls",23],["White Sox",45]];


//Access Array data with indexes

var numberArray=[50,60,70];
var ourData=numberArray[0];//result is 50

var LaArray=[50,60,70];
var JData=LaArray[0];

console.log(JData);


/***********************************************Modifying Array***********************************/
var ModifyingArray=[18,64,99];
ModifyingArray[1]=45;//result  = [18,45,99]

ModifyingArray[0]=56;//result = [56,64,99]

console.log(ModifyingArray);


// Declare String Variables
// Escaping Literal Quotes
// Quoting Strings with Single Quotes
// Escape Sequences
// Plus Operator
// Plus Equals Operator
// Constructing Strings with Variables
// Appending Variables to Strings
// Length of a String
// Bracket Notation
// Understand String Immutability
// Find the Nth Character
// Word Blanks
// Arrays
// Nest Arrays
// Access Array Data
// Modify Array Data
// Access Multi-Dimensional Arrays


// learning is a continous process
