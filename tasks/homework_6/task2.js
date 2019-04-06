'use strict'
let deleteDublicate = (inputElement) => {
    let value = [...inputElement];
    let array = [];
    for (let index = 0; index < value.length; index++) {
        if (value[index] != value[index + 1]) {
            array.push(value[index]);
        }
    }
    return array;

}
console.log(deleteDublicate('AAAABBBCCDAABBBSS'));
console.log(deleteDublicate([2, 4, 4, 5, 2, 2, 8]));