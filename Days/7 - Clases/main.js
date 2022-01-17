/**
 * Las clases como molde de instanciar objetos, podemos declararla con una palabra reservada "class"
 */

// ! Sintaxis de la declaración

class Identificador{
    constructor(parametros){
        this.propiedad = parametros; // ! Cuando usamos el operador this nos referimos a la variable que esta dentro de la clase
        
        // Métodos
    }
}

// ! Sintaxis instancia objetos
let identificador = new Identificador(5);

// ! Accesos a las propiedades o métodos

identificador.propiedad; // * En este caso es una propiedad

// ? Propiedades privadas

// * Cuando tenemos una clase por defecto tenemos que las propiedades son públicas, en caso de que requiramos tener una propiedad privada podemos usar la siguiente sintaxis

class Employee{
    // * Públicas
    name;
    surname;
    // * Privadas
    #age;
    #departament;

    // ! Para obtener el valor o introducir un valor a este tipo de propiedades se utilizan get y set

    set age(age){
        // * Operador this refiriendonos a la variable de la clase y # para referirnos a privada
        this.#age = age;
    }

    get age(){
        return this.#age;
    }
}

let employee = new Employee();

employee.age = 19; // * En la invocación de los métodos get y set se usan como propiedades.

// ? Herencia en Javascript

// ! Sintaxis
class EmployeeExtends extends Employee{
    constructor(variable){
        super(variable); // ! Con esto usaremos el constructor de la clase padre
    }

    getVarible(){
        return super.age; // ! Manera de usar métodos de la clase padre
    }
}

// ? Palabra reservada static

// * Los métodos con esta palabra reservada se relacionaran con la clase y no con la instancia. Es decir las instancias no pueden ejecutar un método static, esto mismo puede pasar con los parametros o variables

class Prueba{
    static contador=5;
    static metodoEstatico(){
        return "Hola desde static";
    }
}

console.log(Prueba.metodoEstatico()); // ! Manera de llamar un método static
console.log(Prueba.contador); // ! Manera de llamar un método static

// ? Creación de constantes estaticas 


class Prueba{
    // ! Sintaxis
    // * Este tipo de constantes estaticas nos puede ser muy utiles en ciertas ocasiones. En caso de que queramos crear un numero definido de objetos,etc. Recordemos que con la palabra static se asocia a la clase, es decir, no modificaria su valor al crear un nuevo objeto.
    static get contador(){
        return 5;
    }
    static metodoEstatico(){
        return "Hola desde static";
    }
}