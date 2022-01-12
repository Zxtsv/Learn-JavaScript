
function areaRectangulo(){
    
var base = 5;
var altura = 7;

var area = base * altura

alert("El area del rectangulo es igual a: "+ area);


}

areaRectangulo();

function areaCirculo(radio){
    var pi = 3.1416;
    var resultado = pi * (radio**2);
    console.log("El area del circulo es igual a: " + resultado);
}

areaCirculo(5);

function areaTriangulo(base,altura){
    var area = (base * altura)/2;
    alert("El area del triangulo: " + area );
    
}

areaTriangulo(10,5);
