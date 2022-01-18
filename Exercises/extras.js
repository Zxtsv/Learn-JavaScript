/**
 * Realiza un programa con ciclos, los cuales tenga como salida:
 * 0 0
 * 0 1
 * 0 2
 * 1 0
 * .... Sucesivamente hasta llegar a
 * 3 2
 */

for (let num2 = 0; num2 <= 3; num2++) {
  for (let num1 = 0; num1 < 3; num1++) {
    console.log(num2 + " " + num1);
  }
}

for (let i = 0; i <= 15; i += 3) {
  console.log(i);
}

let count = 0;
while (count++ < 50) {
  for (let i = 0; i < 25; i++) {
    console.log(`Valor de count: ${count} | Valor de i: ${i}`);
  }

  count += 10;
}

// ? Operador ternario

edad = 15;
permiso = "no";
tutor = "no";
tutorName = "Berna"

edad >= 18 ? permiso=="si" ? console.log("Sabanas nos vemos"): console.log("Chale no te dejaron")
            : (edad>=15&&edad<18) ? permiso == "si" ? tutor=="si" ? console.log(`Tu tutor es ${tutorName} estas invitado :D`): console.log("Debes traer a tu tutor padrino")
            : console.log("Ni modo te lo pierdes"):console.log("Te lo pierdes pa");

let nameA = "marina pardo y felipe maqueda";

console.log(nameA.slice(22,nameA.length));
