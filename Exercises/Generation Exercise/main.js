function calculateEdad(){
    
    let nombre = prompt("Introduce tu nombre:");
    alert("Hola " + nombre + "! Mucho gusto de tenerte");
    let edad = Number(prompt("Introduce la edad:"));

    console.log("Nombre-> " + nombre);
    console.log("Edad-> " + edad);

    if(edad>=18 && edad<=29){
        alert("¡Felicidades, cumples con los requisitos para ser aceptado en el Bootcamp Java Full Stack de Generation");
    }
    else{
        alert("No cumples con los requisitos");
    }
}

alert("Deberas introducir tu edad para posteriormente saber si cumples los requisitos del programa");
calculateEdad();

// ! Ejercicio 1

function miAlfabetoLongitud(){
    let miAlfabeto = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    console.log(miAlfabeto.length);
}

miAlfabetoLongitud();

// ! Ejercicio 2

let planetas = ["Venus","Tierra","Marte","Jupiter","Saturno"];

planetas.forEach((element,index) => {
    console.log(element,index);
});

// ! Ejercicio 3

var myArr = [ 1, 2, 'Uno', true];

myArr.forEach(element => {
    console.log(element);
});


// ! Ejercicio de Practica
var elementos = ["Carbono","Oxígeno","Hierro"];
var simbolos = ["C","O","FE"];
var numAtomico = [6,8,26];
var tablaPeriodica = [elementos,simbolos,numAtomico];

// console.log(tablaPeriodica);

console.log(`El ${tablaPeriodica[0][0]} tiene como simbolo la letra ${tablaPeriodica[1][0]} y su número atómico es ${tablaPeriodica[2][0]}`); // Otra forma de imprimir, usando comillas invertidas ` (Alt gr + })

// ! Strike Generation

var tabla_per=[[["Sofía","Aguilar"],"Oxígeno","Hierro"],["C","O","Fe"],[6,8,26]];

console.log(`El ${tabla_per[0][2]} tiene como simbolo la letra ${tabla_per[1][2]} y su número atómico es ${tabla_per[2][2]}`);

// ! Strike 2 Generation

const armando = [[["Manzana","Piña","Sandía"],["Jitomate","Lechuga"],["Gryffindor","Hufflepuff","Slytheryn","Ravenclaw"],["Lentes"]],["Cubone","Rayquaza","Charizard"],[["Sonriente"],["Felíz"],["Triste"],["Sonrojado"],["Entusiasmado"],["Juguetón"]],["Vegetitta","Kokun"]];

// * Frase: El jitomate color charizard se ve sonriente  por que vio a vegetitta

console.log(`El ${armando[0][1][0]} color ${armando[1][2]} se ve ${armando[2][0]} por que vio a ${armando[3][0]}`);

