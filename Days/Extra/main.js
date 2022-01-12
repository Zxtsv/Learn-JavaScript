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

// Prompt is used to enter data
function prompter(){
    var input_Name = prompt("What's ur name?");
    console.log("Nice to meet u " + input_Name);
}

//prompter();  outbreak function



function confirmation(){
    var question = confirm("You wanna search doggy");
    if(question){
        alert("Okey :DD");
        window.open("https://www.google.com","__BLANK");
        //window.location = "https://www.google.com";
    }
    else{
        alert("No problem :DD");
    }
}

function changeColor(newColor){
    var elem = document.getElementById("Text");
    elem.style.color = newColor;
}

function Accion (Tipo){
    var elem = document.getElementById ("DivBotones");
    if (Tipo == "Ocultar")
    elem.style.display = 'none';
    else
    elem.style.display = '';
}
