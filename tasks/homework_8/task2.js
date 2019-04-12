 'use strict'
let check = (outerArray) => {

    let bufferArray = [];
    for (let index = 0; index < outerArray.length; index++) {
        const innerArray = outerArray[index];
        bufferArray = bufferArray.concat(innerArray);
    }

    // Get set of symbols
    let symbols = [...new Set(bufferArray)]
    let occurrences = [];

    symbols.forEach(symbol => {
        let counter = 0;
        for (let index = 0; index < bufferArray.length; index++) {
            if (bufferArray[index] == symbol) counter = counter + 1;
        }
        occurrences.push(counter)
    });

    // Get maximum number of occurrences in the incoming array
    let maxNumber = Math.max.apply(null, occurrences);

    let symbolsToRemove = [];
    for (let i = 0; i < occurrences.length; i++) {
        if (occurrences[i] === maxNumber)
            symbolsToRemove.push(symbols[i]);
    }

    let arrayToReturn = [];

    for (let index = 0; index < outerArray.length; index++) {
        let arrayToCheck = outerArray[index];
        for (let index = 0; index < symbolsToRemove.length; index++) {
            const symbol = symbolsToRemove[index];
            arrayToCheck = arrayToCheck.filter(element => {
                return element !== symbol;
            });
        }
        arrayToReturn.push(arrayToCheck)
    }
    return arrayToReturn;
}

console.log(check([[3, 4, 5]])) // [[]]
console.log(check([[3, 4, 5], [3, 4, 5]])) // [[], []]
console.log(check([[5, 6, 8, 4, 7, 7, 1, 7, 7, 7, 8], [7, 8, 1, 8, 3, 7, 4, 2, 8, 3, 4], [8, 0, 1, 6, 9, 3, 2, 6, 2, 1, 7]]))
console.log(check([[]]))
console.log(check([]))
console.log(check([[8, 1, 6, 7, 4, 1, 8, 7], [0, 0, 0, 7, 2, 3, 2, 3, 8, 2, 5], [0, 3, 9, 7, 8, 9, 8, 9, 2, 9, 4, 8]]))