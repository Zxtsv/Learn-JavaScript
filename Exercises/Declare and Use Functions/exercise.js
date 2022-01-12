function getCost() {
  var trans = parseInt(prompt("Introduce la transacción:"));
  var total = trans * 3;
  return total + total * 0.01;
}

//console.log("El total es " + getCost());

function greet() {
  var name1 = prompt("Introduce el primer nombre");
  var name2 = prompt("Introduce el segundo nombre");
  var name3 = prompt("Introduce el tercer nombre");

  return "Hola " + name1 + ", hola " + name2 + ", hola " + name3;
}

//console.log( greet() );

function getAge() {
  var birthYear = prompt("Introduce tu año de nacimiento");

  var curYear = new Date().getFullYear();

  return curYear - birthYear;
}

//console.log("Tu edad es " + getAge());

function greetWAge() {
  var name1 = prompt("Introduce el primer nombre");
  var age1 = prompt("Introduce su edad");

  var name2 = prompt("Introduce el segundo nombre");
  var age2 = prompt("Introduce su edad");

  var name3 = prompt("Introduce el tercer nombre");
  var age3 = prompt("Introduce su edad");

  return (
    "Hola " +
    name1 +
    " tu edad es " +
    age1 +
    ", hola " +
    name2 +
    " tu edad es " +
    age2 +
    ", hola " +
    name3 +
    " tu edad es " +
    age3
  );
}

//console.log(greetWAge());

//Challenge Yourself 1

function aprueba() {
  var numero = parseInt(prompt("Ingresa un numero"));

  if (numero <= 5) {
    return true;
  } else return false;
}
//console.log(aprueba());

//Challenge Yourself 2
function aprueba() {
  var numero = parseInt(prompt("Ingresa un numero"));

  if (numero > 8) {
    return "Si pasas";
  } else return "No pasaste";
}
//console.log(aprueba());

//Challenge Yourself3

function aprueba() {
  var numero = parseInt(prompt("Ingresa un numero"));

  if (numero <= 8) {
    return "Si pasas";
  } else if (numero == 11) {
    return "Excelente papu";
  }
}
console.log(aprueba());
