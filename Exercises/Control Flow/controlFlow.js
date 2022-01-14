// Consider business hours 9am - 6pm. Use the 24-hour clock system (6pm = 18).

function businessHours(dayNumber, hourNumber) {
  if (hourNumber >= 9 && hourNumber <= 18 && dayNumber > 0 && dayNumber < 6) {
    return true;
  } else {
    return false;
  }
}

// The yearDayNumber will be an int ranging from 0 to 365
// janFirstDayNumber will be an int ranging from 0 to 6, representing the day of the week of January 1st.

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    if(janFirstDayNumber>=0 && janFirstDayNumber<=6){
        return (yearDayNumber % 7);
    }
    else{
        return -1;
    }
}

function isWork(){
    let dayNumber = Number(prompt("Introduce el dia (Del 0 al 6, donde 0 es Domingo):"));
    let yearDayNumber = Number(prompt("Introduce el dia del año (Año=365):"));
    let hour = Number(prompt("Introduce la hora (Formato 24hrs):"));
    console.log(businessHours(getDayNumber(dayNumber,yearDayNumber),hour));
}

isWork();