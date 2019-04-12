'use strict'
let check = (string) => {

    let elements = string.split(' ');

    let continueSorting = true;
    while (continueSorting) {

        continueSorting = false;

        for (let index = 0; index < elements.length - 1; index++) {
            const firstElementValue = elements[index].split('').reduce((accumulator, currentValue) => {
                return Number(accumulator) + Number(currentValue);
            });
            const secondElementValue = elements[index + 1].split('').reduce((accumulator, currentValue) => {
                return Number(accumulator) + Number(currentValue);
            });

            if (firstElementValue > secondElementValue) {
                let buffer = elements[index];
                elements[index] = elements[index + 1];
                elements[index + 1] = buffer;
                continueSorting = true;
            }
            
            if (firstElementValue == secondElementValue) {
                if (elements[index] > elements[index + 1]) {
                    let buffer = elements[index];
                    elements[index] = elements[index + 1];
                    elements[index + 1] = buffer;
                    continueSorting = true;
                } 
            }
        }
    }

    return elements.join(' ')
}

console.log(check('53133 145 162715 132 472273 97 181372 29 137714 40 456194 51 146067 84 93657 120 110688 55 239413 28 84'));
console.log(check('127447 82 422823 157 237150 74 392856 3 438729 192 421966 71 403108 89 178522 57 212092 142 47233 150 58'));
console.log(check('125566 20 94092 166 341403 17 401572 81 401052 154 375841 174 92924 122 196190 164 69018 64 135964 110 39'));
console.log(check('201002 167 166652 3 480560 131 101464 8 176255 189 160070 55 281192 99 387041 112 334378 122 426837 77 97'));
console.log(check('120106 150 372020 186 284421 73 486649 80 20445 28 158361 156 76600 102 400675 157 172364 197 188054 102 24'));
console.log(check('463263 82 434861 131 115053 166 149862 85 496555 159 17651 160 326212 121 134962 142 387591 6 486099 94 5'));