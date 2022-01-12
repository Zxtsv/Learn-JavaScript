// * Son un conjunto de sentencias o intrucciones que podemos utilizar para realizar ciertas cosas especificas.

function nombreFuncion(){
    // Intrucciones
}

function retornable(){
    return variable; //* La palabra reservada hace que retorne un valor una función.
}

// ? Parámetro tipo REST 
function cocinar(ing1,ing2,...masIng){ //Lo que agregamos son 3 puntos
	console.log("Ingrediente 1: ", ing1);
	console.log("Ingrediente 2: ", ing2);
	console.log("Demas ingredientes: ",masing);
}

// ? Parámetro tipo Spread

function cocinar(ing1,ing2,ing3){
	for(let i=0;i<=3;i++){
		console.log("Ingrediente " + (i+1) + ": " + ing[i+1]);
	}
}
var ingredientesBase = ["Pollo","Tomate"];
cocinar(...ingredientesBase,"arroz");
/*La diferencia que podemos ver es que en la invocación agregamos ...
Pero en la función no. Y si, podemos combinar parametros de todos tipos*/

cocinar("pollo","tomate", "frijoles","pescado");

//Cuando queramos hacer mas sencilla las cosas podemos mandar todo por ejemplo
function cocinar(...ingredientes){
	console.log("Ingredientes: ",ingredientes);
}

//Ya que los parámetros de tipo REST agrupan todo en una sola variable


// ? Funciones expresión o anonimas

var suma = function(a,b){
    return (a+b);
}

console.log(suma(2,3));

// ? Funciones flecha o arrow

// * Son alternativas, pero es limitada y no se puede utilizar en todas las situaciones

var restar = (a,b) => {
    return (a-b);
}
console.log(restar(5,3));

// * Alternativa de escritura de la función flecha, el cual {} ya estan implicitas

var multiplicacion = (a,b) => a*b;
console.log(multiplicacion(5,5));



