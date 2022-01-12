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