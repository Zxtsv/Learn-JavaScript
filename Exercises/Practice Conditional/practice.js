function dayCalculate(dayNumber) {
  if (dayNumber >= 0 && dayNumber <= 6) {
    if (dayNumber == 0) {
      return "Domingo";
    } else if (dayNumber == 1) {
      return "Lunes";
    } else if (dayNumber == 2) {
      return "Martes";
    } else if (dayNumber == 3) {
      return "Miercoles";
    } else if (dayNumber == 4) {
      return "Jueves";
    } else if (dayNumber == 5) {
      return "Viernes";
    } else if (dayNumber == 6) {
      return "Sabado";
    }
  } else {
    return "Número de dia invalido";
  }
}

function otherDayCalculate(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Domingo";
      break;
    case 1:
      return "Lunes";
      break;
    case 2:
      return "Martes";
      break;
    case 3:
      return "Miercoles";
      break;
    case 4:
      return "Jueves";
      break;
    case 5:
      return "Viernes";
      break;
    case 6:
      return "Sabado";
      break;
    default:
      return "Número de dia invalido";
      break;
  }
}

let dayNumber = Number(prompt("Introduce el numero del dia (0-6):"));
console.log(otherDayCalculate(dayNumber));
