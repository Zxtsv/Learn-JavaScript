//https://github.com/generation-org/JS/tree/master/JS-05%20-%20Operators%20and%20Expressions

// ? Part 1

var names = ["Maria", "Antony", "Joy", "Juan"];

function addLast(nameInsert){
    names.push(nameInsert);
}

addLast("Bernardo");
console.log(names);

// ? Part 2
function isName(nameSearch,array){
    return array.includes(nameSearch);
}

console.log("Bernardo in array? --> " + isName("Bernardo",names));
console.log("Ortencia in array? --> " + isName("Ortencia",names));

// ? Part 3

var students = ["Bernardo","Karina","Josh","Jorge","Felix"];

function isArrayName(array1,array2){
    let filter = [];
    array1.forEach((element) => {
        array2.forEach((element2) =>{
            if(element==element2){
                filter.push(element);
            }
        });
    });
    return filter;
}

console.log(isArrayName(names,students));

// ? Part 4

function arrayLengthName(array){
    let newArray = [];
    array.forEach(element=>{
        newArray.push(element.length);
    });
    return newArray;
}

console.log(arrayLengthName(names));


// ! Exercise 2

console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);


// ! Exercise 3

function numberRange(number){
    if(number>=0&&number<=25){
        console.log(number + " is between 0 and 25");
    }
    else if(number>=26&&number<=100){
        console.log(number + " is between 26 and 100");
    }
    else if(number>100){
        console.log(number + " is greater than 100");
    }
    else{
        console.log(number + " is less than 0");
    }
}

numberRange(25);   // '25 is between 0 and 25'
numberRange(75);   // '75 is between 26 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'

