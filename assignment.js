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
        return("no condition was met!");
    }
}

console.log(weatherCondition(31));

