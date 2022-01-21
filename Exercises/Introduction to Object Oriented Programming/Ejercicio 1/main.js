// Ejercicio 1

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    describe(){
        return `${this.name},${this.age} years old`;
    }
}

document.getElementById("aplastame").addEventListener("click",function(){
    let names = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let persona = new Person(names,age);
    document.getElementById("escribeAqui").innerHTML = persona.describe();
});


// Ejercicio 2



