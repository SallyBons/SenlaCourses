'use strict';
Array.prototype.zip = function (array, callback) {

    if (array.length > this.length) {
        array.pop();
    }

    let newArray = this.map((currentElement, index) => {
        return callback(currentElement, array[index]);
    });

    return newArray;
}

const a = [1, 2, 3, 4, 5];
const b = ['a', 'b', 'c', 'd', 'e'];

console.log(a.zip(b, (a, b) => a + b)); //["1a", "2b", "3c", "4d", "5e"]
console.log(b.zip(a, (a, b) => a + b)); //["a1", "b2", "c3", "d4", "e5"]
console.log(b.zip(a.zip(b, (a, b) => a * b.charCodeAt(0)), (a, b) => a + b)); //["a97", "b196", "c297", "d400", "e505"]
