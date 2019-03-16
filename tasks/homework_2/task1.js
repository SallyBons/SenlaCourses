'use strict';
Object.create = (function (incommingPrototype, incommingProperties) {
    if (typeof incommingPrototype != 'object' || typeof (incommingPrototype) == null) {
        throw new TypeError("Prototype is not an Object");
    }

    let obj = new Object();
    obj.prototype = incommingPrototype;

    if (typeof (incommingPrototype) === "object") {
        for (let prop in incommingPrototype) {
            if (incommingPrototype.hasOwnProperty((prop))) {
                obj[prop] = incommingPrototype[prop];
            }
        }
    }

    if (incommingProperties !== undefined) {
        Object.defineProperties(obj, incommingProperties);
    }
    
    return obj;
});

let citizen = {
    sleep: function () { return "zzZ..."; },
    panic: function () { return "AaAaAaAa!"; }
};

let veteran = Object.create(citizen, {
    panic: {
        value: function () {
            return "SNAFU";
        }
    }
});

console.log(veteran !== citizen); // true
console.log(veteran instanceof citizen.constructor); // true
console.log(veteran.sleep()); // zzZ...
console.log(veteran.panic()); //SNAFU