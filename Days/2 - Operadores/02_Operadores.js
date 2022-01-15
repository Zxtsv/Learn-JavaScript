// Todo: Para realizar las pruebas es necesario seleccionar el fragmento de código en el que queramos ver el ejemplo. Para posteriormente realizar la combinación de teclar " ctrl + alt + n " para correr el fragmento de código.

// ! Operadores de asignación y aritmeticos

var x = 1; // * Donde el operador es " + "

// ? Operadores de asignación de adición

var x = 1;
x += 1; // * Donde x es igual a 2 ahora
console.log(x);
x++; // * Donde x ahora vale 3
console.log(x);

// ? Operadores de asignación de resta

var x = 5;
x -= 1; // * Donde x ahora vale 4
console.log(x);
x--; // * Donde x ahora vale 3
console.log(x);

// ? Operadores de asignación de multiplicación

var x = 5;
x *= 5; // * Donde x vale 25
console.log(x);

// ? Operadores de asignación de división

var x = 10;
x /= 5; // * Donde x vale 2
console.log(x);

// ? Operadores de asignación de residuo

var x = 9;
x %= 5; // * Donde x vale 4
console.log(x);

// ? Operadores de asignación de exponentación

var x = 4;
x **= 2; // * Donde x^2 vale 16
console.log(x);

// ! Operadores de comparación

// ? Operador de comparación " == "
// * Este operador compara los valores, pero no es muy estricto en el caso del tipo de dato

console.log(3 == 3);
console.log(3 == "3");

//* Aunque no es el mismo tipo de dato, nos retorna true. Debemos que tener cuidado.

// ? Operador de comparación estrictamente igual " === "
// * Este operador compara los valores, a diferencia del primero, este si compara el tipo de dato igualmente

console.log(3 === 3);
console.log(3 === "3");

// * Podemos verificar que nos retorna false

// ? Operador de comparación es diferente " != "
// * Este operador compara los valores, pero retorna true en caso de que sean diferentes retorna true

console.log(3 != 4);
console.log(3 != "3");

// * Aunque no es el mismo tipo de dato, este retorna false, ya que toma igualmente el "contenido"

// ? Operador de comparación es diferente estrictamente " !== "

console.log(5 !== 5);
console.log(5 !== "5");

// ? Operadores de comparación "<" "<=" ">" ">="

console.log(4>2);
console.log(5>=5);
console.log(8<12);
console.log(8<=8);

// ! Operadores lógicos

// ? Operadores AND
// * Este operador retorna un true en caso de que las 2 partes sean valor true.

console.log(true && true);
console.log(true && false);

// ? Operadores OR
// * Este operador retorna un true en caso de que solo 1 parte sea valor true.

console.log(true || false);
console.log(false || false);

// ? Operador NOT
// * Este operador vuelve lo contrario del valor booleano

console.log(!true);

// ! Otros operadores

// ? Operadores de concatenación
// * Este operador "junta" las cadenas
var string1 = "Mi nombre es " + "Bernardo";
console.log(string1);

// ? Operadores condicional o ternario
console.log(3>5 ? "Es mayor" : "Es menor");
//* Este operador, su sintaxis es: ? instruccionesTrue : instruccionesFalse

// ? Operadores de deconstructuración en objetos
var persona = {
    nombre: "Bernardo",
    apellido: "Apellido"
};
// * Para sacar una propiedad del objeto tenemos que realizar la siguiente instancia
var {nombre} = persona; // * Sintaxis: propiedad = de que objeto sacarlo.
console.log(nombre);
// * Igualmente podemos sacar varias propiedades de un objeto
var {nombre,apellido} = persona;
console.log(nombre + " " + apellido);
// * Igualmente podemos asignarle un nuevo nombre a la variable
var {nombre:nuevoNombre} = persona;
console.log(nuevoNombre);

// ? Operadores de deconstructuración en arreglos

var personas = ["Bernardo","Jose","Arturo"];
// * Destructura desde la primera posición
var [primeraPosición] = personas;
console.log(primeraPosición);

// ? Operador de determinación de tipo

var numero = 1;
console.log(typeof numero);


