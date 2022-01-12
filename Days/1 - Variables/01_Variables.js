// ! Tipos de datos

// * Datos númericos
edad = 18; // Entero
edad = 18.5; // Float
costoBebida = "10";
costoBebida = Number(costoBebida); // Función para cambiar el tipo de valor de tipo Number
costoBebida = parseInt(costoBebida); // Función para cambiar a Integer
costoBebida = parseFloat(costoBebida); // Función para cambiar a Float

// * Datos string -> Cadenas de carácteres
nombre = "bernardo";

// * Lógicos ó booleanos
verdadero = true;
falso = false;

// * Indefinidos
variable = undefined;

// * Nulos o Null
variable = null;

// ! Tipos de datos estructurales
// * Estos pueden tener diferentes tipos de datos.

// * Objecto
persona = {
  // * En donde nombre y apellido y son claves. Esto nos permite acceder a los valores.

  nombre: "bernardo",
  apellido: "perez",
};
// * Para acceder a estos valores podemos acceder de la siguiente manera
persona.nombre;
persona.apellido;

var persona3 = JSON.stringify(persona); //lo convierte en texto
var nuevapersona = JSON.parse(persona3); //Revierte el efecto que hace stringify

// * Arrays
persona = ["Bernardo", "Pérez"];

// ! Declarando variables con "var"

// * Es una variable que SI puede cambiar su valor y donde su scope puede ser local y global. Esto ya que en la versión ES5var es la manera mas antigua para declarar variables.

var persona = "bernardo"; // * Variable de tipo string
var edad = 28; // * Variable de tipo integer

// ! Declarando variables con "let"

// *  Es una variable que también podra cambiar su valor, pero solo vivirá (funcionara) en el bloque donde fue declarada.

let persona2 = "bernardo"; // * Variable de tipo string
let edad2 = 28; // * Variable de tipo integer

// ! Declarando variables con "const"

// * Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

const persona3 = "bernardo"; // * Constante de tipo string
const edad3 = 28; // * Constante de tipo integer

console.log("Hola soy ${persona3}")
