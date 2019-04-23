'use strict'
let encrypt = (incomingString) => {
    let strOne = '';
    let strTwo = '';
    
    let array = incomingString.split('');

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (index % 2 == 0) {
            strOne = strOne + element;
        } else {
            strTwo = strTwo + element;
        }
    }

    return strOne + strTwo;
}

console.log(encrypt('All that glitters is not gold'))
console.log(encrypt('The better part of valor is discretion'))
console.log(encrypt('Conscience does make cowards of us all'))