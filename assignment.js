// 1. *Variable Declaration:*
//    Declare a variable called greeting and assign the value "Hello, JavaScript!" to it.



function questionOne(){
    let greeting = "Hello, JavaScript!";
    return greeting;
}


console.log(questionOne());


// 2. *Data Types:*

//    What are the basic data types in JavaScript?


function questionTwo(){
    let answer = "\nJavaScript provides eight different data types which are \n undefined, null, boolean, string, symbol, bigint, number, and object."
    console.log(answer);
}
questionTwo();



// 3. *Array Manipulation:*
//    Create an array called fruits containing three fruits of your choice. Add a new fruit to the end of the array


function arryFruit(){
    let fruit=["Apple","Cashew","Peach"];
    fruit.push("Banana");
    return fruit;
}
console.log(arryFruit());


// 4. *Conditional Statements:*
//    Write an if statement that checks whether a variable temperature is greater than 30. If it is, 
//    log "It's a hot day!" to the console; otherwise, log "It's a pleasant day.


function weatherCondition(temperature){
    if (temperature <= 10){
        return (temperature + " entered is below 10 degree not in the  30 degree category");
    }else if (temperature <= 20){
        return(temperature + " entered is below 20 degree not in the  30 degree category");
    }else if(temperature <= 30){
        return(temperature + " entered is below 30 degree not in the  30 degree category");
    }else if(temperature >=30){
        return(temperature + " It's a hot day!");
    }else{
        return("It's a pleasant day");
    }
}

console.log(weatherCondition(31));


// Create a function called square that takes a parameter num and 
// returns the square of that number

function square(num) {
    return num * num;
}
let result = square(5);
console.log(result); 


// Use a for loop to print the numbers from 1 to 5 to the console.

for(let i = 1; i <= 5; i ++){
    console.log(i);
}

// Create an object representing a car with properties brand, 
// model, and year. Assign values of your choice to these properties.



let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022
} 
console.log("Brand: " + car.brand);
// console.log("Model: " + car.model);
// console.log("Year: " + car.year);


// Write a JavaScript code snippet that alerts "Button clicked!"
//  when a button with the id "myButton" is clicked

document.getElementById("myButton").addEventListener("click", function() {
alert("Button clicked!");
});