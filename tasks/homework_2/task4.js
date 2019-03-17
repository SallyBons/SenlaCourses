'use strict'
class Dictionary {
    constructor() {} 
    newEntry(newKey, newValue) {
        this.key = newKey;
        this.value =newValue;
    }
    look(findingKey) {
        let value = `Can't find entry for ${findingKey}`;
         if (this.key == findingKey) {
                value = this.value;
            }
        
        return value
    }
}

let ex = new Dictionary();
ex.newEntry('feline', 'cat');
console.log(ex.look('feline'));
console.log(ex.look('snake'));