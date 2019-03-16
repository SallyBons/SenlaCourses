'use strict'
class Dictionary {
    constructor() {
        this.array = new Array();
    }
    newEntry(newKey, newValue) {
        this.array.push({ key: newKey, value: newValue })
    }
    look(findingKey) {
        let value = "Can't find entry for key.";
        this.array.forEach(element => {
            if (element.key == findingKey) {
                value = element.value;
            }
        });
        return value
    }
}

let ex = new Dictionary();
ex.newEntry('feline', 'cat');
ex.newEntry('cannis', 'dog');
ex.newEntry('cannis lupus', 'wolf');
ex.newEntry('puma concolor', 'cuguar');
console.log(ex.look('feline'));
console.log(ex.look('snake'));