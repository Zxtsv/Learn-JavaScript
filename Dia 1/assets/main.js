/*
 * Multi-line comment
 */

// Line Comment

// alert("I'm Alert");

console.log("Hello world"); //Print a line

// Variables type String
var myName = "Bernardo";
var lastName = "Pérez";
var yearsOld = 19;

// Print the variables
console.log(myName + " " + lastName + " " + yearsOld);

// Variables type Number
var firstNumber = 19;
var secondNumber = 20;

// Print the variables
console.log(firstNumber + secondNumber);

// Functions

// Outbreak Function
function sayHello(){
    alert("Hello world");
}

// Anonymous Functions

var toSing = function(){
    console.log("I'm like to sing");
}

toSing(); // Outbreak function

// Function without parameters
function sumNumbers(){
    var number1 = 3;
    var number2 = 4;
    var sum = 3+4;
    console.log("The sum of function without parameters is -> " + sum);
}

sumNumbers();

// Function with parameters
function subtractNumbers(number1,number2){
    var subtract = number1-number2;
    console.log("The subtract of function with parameters is -> " + subtract);
}

subtractNumbers(5,3);

