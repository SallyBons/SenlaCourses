// If I try using the ES6 syntax and determine the function with => It stops working. Why?
// function findDuplicates() {
//     return (([...new Set(arguments)].length) != arguments.length);
// }

'use strict'
var array = [35, 14, 40, 14];

let DetectDuplicates = (incommingArray) => {
    let uniqueArray = incommingArray.filter(function (item, index) {
        return incommingArray.indexOf(item) == index;
    })

    return incommingArray.length != uniqueArray.length;
}

console.log(DetectDuplicates(array));