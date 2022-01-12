

// Parte 1 tabla de cambio de datos
var x = false;
var z = Number(x);
var y = x.toString();

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x));

x = true;
z = Number(x);
y = x.toString();

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x));


console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x));

x = 0;
z = Number(x);
y = x.toString();
var x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = 1;
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = "0";
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = "000";
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = "1";
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = NaN;
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));


x = Infinity;
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = -Infinity;
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = "";
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = "20";
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = "Twenty";
z = Number(x);
y = x.toString();
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = null;
z = Number(x);
y = String(x);
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));

x = undefined;
z = Number(x);
y = String(x);
x1 = Boolean(x);

console.log(typeof(z));
console.log(typeof(y));
console.log(typeof(x1));


//Parte 2 inciso uno Calculadora de edad
function ageCalculator (){
    var edad = parseInt(prompt("¿Cual es el año de tu nacimiento?:"));
    var year = parseInt(prompt("Introduce el año a futuro: "));
    alert("Para el año " + year +" tendrias " + (year-edad) + " años");
}

ageCalculator();

//Ejercicio 2
function informationCard(){
    var nombre = prompt("Introduce tu nombre:");
    var locacion = prompt("Introduce tu locación:");
    var hobby = prompt("Introduce tu hobby:");
    alert("Hi, my name is " + nombre + ". I live in " + locacion + " and enjoy " + hobby);    
}
informationCard();


