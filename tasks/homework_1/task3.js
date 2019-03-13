'use strict';
const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
    orders: [11700, 1980, 450, 5500]
}, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
    orders: [440, 226, 7650, 2990, 70]
}, {
    name: 'Доктор Джон Зоидберг',
    email: 'zoidberg-md@list.un',
    isSubscribed: true,
    orders: [720]
}];

let changeName = (incommingArray, index, name) => {
    let newArray = incommingArray.slice();
    newArray[index].name = name;
    return newArray;
}

console.log(changeName(clients, 1, 'Мартин Скорсезе'));
console.log(changeName(clients, 1, 'Мартин Скорсезе') === clients);
