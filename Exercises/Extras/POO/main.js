class padre {
    constructor(apellido) {
        this.apellidoPadre = apellido;
    }
}
class hijo extends padre {
    constructor(nombre, apellido) {
        super(apellido);
        this.nombreHijo = nombre;
    }
    registro() {
        return (
            "El nombre del hijo será: " + this.nombreHijo + " " + this.apellidoPadre
        );
    }
}
let numHijos = Number(prompt("Introduce el número de hijos"));

const registrarHijos = (numHjos) => {
    let apellido = prompt("Introduce el apellido del padre");
    let string1 = "";
    for (let i = 0; i < numHijos; i++) {
        let nombre = prompt(`Introduce el nombre del hijo ${i + 1}:`);
        let hijo1 = new hijo(nombre, apellido);
        string1 += hijo1.registro() + "<br>";
    }
    document.getElementById("Id").innerHTML = string1;
};

registrarHijos(numHijos);
