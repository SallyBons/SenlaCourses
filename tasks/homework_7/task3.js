'use strict'
let forsage = (speedA, speedB, distance) => {
    if (speedA > speedB){
        return null;
    }

    let speedDifference = speedB - speedA;
    let time = Math.floor( distance / speedDifference * 3600);

    let hours = ~~(time / 3600);
    let minutes = ~~((time % 3600) / 60);
    let seconds = ~~time % 60;

    return [hours, minutes, seconds];
}

console.log(forsage(80, 100, 40)) // [2, 0, 0]
console.log(forsage(547, 651, 123)) // [ 1, 10, 57 ]
console.log(forsage(710, 792, 70)) // [ 0, 51, 13 ]
console.log(forsage(405, 507, 66)) // [ 0, 38, 49 ]
console.log(forsage(264, 314, 126)) // [ 2, 31, 12 ]
