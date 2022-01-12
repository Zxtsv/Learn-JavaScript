// ! Ciclo while

while (condicion) {
    // Código
}

// ! Ciclo do-while

do {
    
} while (condicion);

// ! Ciclo for in

let personas = {
    nombre: "Bernardo",
    apellido: "Pérez"
};

for (const clave in personas) {
    // Intrucciones
    console.log(clave + "-> " + personas[clave]);
}

// ! Ciclo for of
// * Es para array, ya que las listas no son iterables. Es decir, se usa para estructuras iterables.

let numeros = [1,2,3,4,5,6];

for (const i of numeros) {
    console.log(i);
}