'use strict'
let getWave = (inputValue) => {
    let resultArray = [];
    let element = 0;
    for (element = 0; element < inputValue.length; element++) {
        if (inputValue[element] === ' ') continue;
        resultArray.push(Array.from(inputValue, (stringElement, stringIndex) => element === stringIndex ? stringElement.toUpperCase() : stringElement).join(''));
    }
    return resultArray;
}
console.log(getWave('react'));
console.log(getWave('hello world'));