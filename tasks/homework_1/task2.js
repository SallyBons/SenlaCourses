// If I try using the ES6 syntax and determine the function with => It stops working. Why?
function findDuplicates() {
    return (([...new Set(arguments)].length) != arguments.length);
}

console.log(findDuplicates(35, 14, 40, 14))
