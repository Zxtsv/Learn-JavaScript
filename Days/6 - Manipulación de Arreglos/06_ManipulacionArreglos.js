// ! For each
var arreglo = [1,2,3,4,5,6];

arreglo.forEach(element => {
    console.log(element);
});

// ! Push, Pop y Shift 
var arreglo = [1,2,3,4,5,6];

// ? Agregando un valor
arreglo.push(7);
console.log(arreglo);

// ? Retornando el primer elemento y eliminandolo.
console.log(arreglo.shift());
console.log(arreglo);

// ? Elimina el ultimo elemento  y lo retorna.
arreglo.pop();
console.log(arreglo);

// ? Map
// * Map es inmutable y nos retornara un nuevo arreglo. Recorre todo el arreglo y transformarlo a nuestra conveniencia.

var estudiantes = ["Bernardo", "Heber","Vane", "Misogino"];
var asistencias = estudiantes.map((nombres) => {
    return {
        nombre: nombres,
        asistencia: false
    }
})
console.log(estudiantes);
console.log(asistencias);

// * Usando el operador de SPREAD 

var producto = [
    {nombre: "Vaso", precio: 28},
    {nombre: "Chelas", precio: 98}
];
var productoImpuesto = producto.map((producto) => {
    //! Debemos que tener en cuenta los casos posibles, ya que usamos la referencia en memoria con la función map.
    return {
        ...producto, // Operador SPREAD
        impuesto:.12
    }
})
console.log(producto);
console.log(productoImpuesto);

// ? Filter
// * Es un método inmutable que no va a modificar el arreglo de origen, nos ayudara a filtrar en base a una condición que devolvera un valor lógico.

var students = [
    {nombre: "Berna",edad: 18,matriculado: true},
    {nombre: "Karina",edad: 18,matriculado: false},
    {nombre: "Josh",edad: 18,matriculado: true},
    {nombre: "Jorge",edad: 20,matriculado: false},
    {nombre: "Felix",edad: 19,matriculado: true},
];

var filters =  students.filter((student) => student.matriculado); // ! Nos retorna un nuevo areglo, pero filtrado
console.log(filters);

// ! Tenemos que tener en cuenta que este método usa iteraciones, es decir, si tenemos una gran cantidad de datos, debemos que hacerlo desde la base de datos.

// ? Reduce
// * Reducimos un array a un solo valor. Puede ser cualquier tipo de dato.

var califications = [3,5,7,8,9];
var plus = califications.reduce((acumulador,calification) => acumulador + calification,0);
console.log(plus);
console.log(plus/califications.length);

// ? Some y Every. Estas funciones iteran sobre el array
// * Some: Nos ayuda a verificar si al menos un elemento cumple con los requerimientos. Retorna un valor lógico
// * Every: Nos ayuda a verificar si todos los elementos cumplen con los requerimientos. Retorna un valor lógico

var numeros = [5,1,7,5,3,9];
var resultado = numeros.some((numero)=> numero%2 === 0);
console.log(resultado);

// ? Find y FindIndex
// * Find: Se encargara de buscar un elemento que coincida con cierta condición
// * FindIndex: Nos retornara el index de un elemento en un array
var clients = [
    {id: 1,nombre: "Arturo"},
    {id: 2,nombre: "Pedro"},
    {id: 3,nombre: "Jordi"},
    {id: 4,nombre: "Hugo"}
];
var client = clients.find((client) => client.id === 3); // ! Retorna un solo valor, a diferencia de filter que retorna un array.
var client2 = clients.findIndex((client) => client.id === 3);
console.log(client);
console.log(client2);

// ? Includes
// * Nos ayuda a verificar si un array existe un elemento en especifico. Retorna un valor booleano.
var pets = ["Perro","Gato","Tortuga"];
var resultado = pets.includes("Perro");
console.log(resultado);
console.log("Hola".includes('a'));

var buscador = (parametro) => {
    let clients = [
        {id: 1,nombre: "Arturo"},
        {id: 2,nombre: "Pedro"},
        {id: 3,nombre: "Jordi"},
        {id: 4,nombre: "Hugo"}
    ];

    return clients.filter((client) => client.nombre.includes(parametro));
}
console.log(buscador("o"));

// ? Join
// * Es un método que nos ayuda a unir todos los elementos de un arreglo, oseas generar un string apartir de un elemento
var elements = ["fuego","aire","agua"];
var result = elements.join(' '); // ! Recibe como parámetro un caracter que quieres que lo separe.
console.log(result);
Object.value // Retorna los valores de un objeto
Object.keys // Retorna las keys de un objeto.

// ? Push
// * Se agrega un elemento al final del arreglo
var numbers = [1,2,3,4,5,6];
numbers.push(7);
console.log(numbers);
