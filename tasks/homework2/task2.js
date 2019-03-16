'use strict';
Array.prototype.map = function (callback) {

    let array = new Array();
    this.forEach(element => {
        let mappedValue = callback(element);
        array.push(mappedValue);
    });
    return array;

};

console.log([1, 2, 3].map(x => x ** 2));
console.log([1, 2, 3].map(x => 2 * x));
console.log([1, 2, 3].map(x => 2 ** x));
console.log([1, 2, 3].map(x => x.toString()));
console.log([1, 2, 3].map(x => parseInt(x)));