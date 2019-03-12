const clients = [{
    name: 'Филип Фрай',
    email: 'fray@mail.un',
    isSubscribed: false,
}, {
    name: 'Бендер Сгибатель Родригес',
    email: 'bender.rodriges@rambler.un',
    isSubscribed: true,
}];

let postMail = (incommingArray) => {
    incommingArray.forEach(element => {
        if (element.isSubscribed) {
            console.log(`${element.name}, ваш заказ принят, подробности вашего заказа в письме, которое мы отправили на ${element.email}`)
        }
    });
}

postMail(clients);