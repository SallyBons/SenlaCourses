'use strict'
function isOpposite(dir1, dir2) {
    if (dir1 + dir2 === 'SOUTHNORTH') return true;
    if (dir1 + dir2 === 'NORTHSOUTH') return true;
    if (dir1 + dir2 === 'EASTWEST') return true;
    if (dir1 + dir2 === 'WESTEAST') return true;
    return false;
}

function crossDesert(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        if (isOpposite(arr[i], arr[i + 1])) {
            arr.splice(i, 2);
            return crossDesert(arr);
        }
    }
    return arr;
}

console.log(crossDesert(['NORTH', 'WEST', 'SOUTH', 'EAST'])) // ['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'NORTH'])) // [ 'NORTH' ]
console.log(crossDesert(['NORTH', 'EAST', 'NORTH', 'EAST', 'WEST', 'WEST', 'EAST', 'EAST', 'WEST', 'SOUTH'])) // ['NORTH', 'EAST']
console.log(crossDesert(['NORTH', 'WEST', 'SOUTH', 'EAST'])) //  ['NORTH', 'WEST', 'SOUTH', 'EAST']
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])) // [ 'WEST' ]
console.log(crossDesert(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])); // ['WEST']
console.log(crossDesert(['NORTH', 'WEST', 'SOUTH', 'EAST'])); // ['NORTH', 'WEST', 'SOUTH', 'EAST'])
console.log(crossDesert(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])); // []
console.log(crossDesert(['EAST', 'WEST'])) // []