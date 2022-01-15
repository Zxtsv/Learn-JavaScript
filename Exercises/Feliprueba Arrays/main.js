/*
    Declara un array llamada "carreritas" con los seguientes valores:
    Lucia, Roberto, María, Jesús, Andrea y José
    
    Deberas imprimir la clasificación actual.

    La carrera continúa y se va modificando esas posiciones:
        - Andrea adelanta a María
        - José es descalificado de la carrera
        - Detrás de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando
        - Hay un nuevo concursante que toma el primer puesto: Federico
        - Imprime la clasificación actual de las posiciones que se han modificado.
*/

let carreritas = ["Lucia", "Roberto", "María", "Jesús", "Andrea", "José"];

function swap(array, indexRevasa, indexRevasado) {
// ! Esta función lo que realiza es un intercambio de valores en el array
  let temp = array[indexRevasa];
  array[indexRevasa] = array[indexRevasado];
  array[indexRevasado] = temp;
}

swap(carreritas,3,4); // ! Revasando a Jesús
swap(carreritas,2,3); // ! Revasando a Maria
carreritas.pop(); // ! Eliminando a José

let temp = carreritas.slice(2,carreritas.length);

carreritas.splice(2,carreritas.length); // ! Eliminando

carreritas.push("Cristóbal","Fernanda","Armando"); // ! Añadiendo
temp.forEach(element => {
    carreritas.push(element); // ! Añadiendo todos las personas del array temp
});

carreritas.unshift("Federico"); // ! Añadiendo al primer lugar

carreritas.forEach((element,index) => {
    console.log(`Puesto ${index+1}: ${element}`);
});


