'use strict'
let parse = (string) => {
    let array = [];
    let value = 0;
    let stringArray = string.split('');
    for (let index = 0; index < stringArray.length; index++) {
        switch (stringArray[index]) {
            case 'i':
                value = value + 1;
                break;
            case 'd':
                value = value - 1;
                break;
            case 's':
                value = value * value;
                break;
            case 'o':
                array.push(value);
                break;
            default:
                break;
        }
    }
    return array;
}
console.log(parse('iiisxxxdoso'));