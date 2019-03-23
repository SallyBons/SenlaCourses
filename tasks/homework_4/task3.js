'use strict'

let getName = (postId) => {
    let url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

    return fetch(url)
        .then(function (result) {
            if (result.ok) {
                return result.json()
            }
            throw new Error('Cannot access requested URL');
        })
        .then(function (result) {
            const url = `https://jsonplaceholder.typicode.com/users/${result.userId}`;
            return fetch(url);
        })
        .then(function (result) {
            if (result.ok) {
                return result.json()
            }
            throw new Error('Cannot access requested URL');
        })
        .then(function (result) {
            return result.name;
        })
        .catch(error => {
            console.log(error);
        })
}