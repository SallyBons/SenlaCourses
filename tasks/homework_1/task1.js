let nativeArray = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];

let sortDescending = (array) => {
    return array.reduce((accumulator, currentValue) => accumulator.concat(currentValue)).sort(function (a, b) { return b - a });
}

console.log(sortDescending(nativeArray));
