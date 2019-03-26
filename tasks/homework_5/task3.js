"use strict";
function matrixAddition(firstMatrix, secondMatrix) {
    let result = [];
    firstMatrix.forEach((currentOuterIndex, currentInnerIndex) => {
        result.push(currentOuterIndex.reduce((sums, value, index) => sums.concat(value + secondMatrix[currentInnerIndex][index]), []));
    });
    return result;
}
console.log(matrixAddition(
    [[1, 2],
    [1, 2]],
    //    +
    [[2, 3],
    [2, 3]]));
