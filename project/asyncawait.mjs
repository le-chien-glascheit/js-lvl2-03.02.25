// const data = await Promise.resolve('data'); // promise.then(() => ...)
// console.log(data);

// try { // setTimeout, callback'и
//     const data = await Promise.reject(new Error('...')); // throw new Error
//     console.log(data);
// } catch (e) { // .catch((error) => ...)
//     console.warn(e);
// } finally { // .finally(() => ...)
//     console.info('finally');
// }

// const fn = async () => {
//     const data = await Promise.resolve('...'); // await Promise<rejected> -> throw error (analogue) -> 3.
//     // const data = await Promise.reject(new Error('...')); // await Promise<rejected> -> throw error (analogue) -> 3.
//     // const data = 'data';
//     // throw new Error('something bad happened');
//     return data;
//     /*
//     1. data -> Promise -> resolved(data)
//     2. promise -> Promise -> resolve/reject(original)
//     3. throw error ->  Promise -> reject(error)
//     */
// };

// try {
//     const result = await fn(); // return Promise
//     console.log(result);
// } catch (e) {
//     console.warn(e);
// }


// 1. API -> Promise -> Promisification: wait(ms), xhr
// https://github.com/axios/axios/blob/v1.7.9/lib/adapters/xhr.js
const wait = (delay) => {
    const {promise, resolve} = Promise.withResolvers();
    setTimeout(() => {
        resolve();
    }, delay);
    return promise;
};

const ajax = async (url, { method = 'GET', headers = {}, body, responseType } = {}) => {
    const {promise, resolve, reject} = Promise.withResolvers();

    const xhr = new XMLHttpRequest();
    xhr.responseType = responseType;
    xhr.open(method, url);

    for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value);
    }

    xhr.onload = (ev) => resolve(xhr);
    xhr.onerror = (ev) => reject(new Error('network error'));

    xhr.send(body);
    return promise;
};

// console.log('before');
// await wait(1000);
// console.log('after');

// /** @type {HTMLFormElement} */
// const formEl = document.querySelector('#form');
// // eventhandler/eventlisteners -> synchronous
// formEl.addEventListener('submit', async (ev) => {
//     ev.preventDefault();
//     await wait(0); // note: setTimeout set callback to the other task
// });

// try {
//     const xhr = await ajax('/api/promise/data', {responseType: 'json'});
//     const data = xhr.response;
//     console.log(data);
// } catch (e) {
//     console.warn(e);
// }

// 2. fetch
// fetch(url, params) => Promise
// try {
//     console.log('start');
//     const response = await fetch('/api/test/readystate', {
//         method: 'POST',
//     }); // network error
//     if (!response.ok) { // !200-299
//         throw new Error('bad status code');
//     }
//     console.log('response line + headers fetched');
//     const responseBody = await response.text();
//     console.log('body fetched');
//     console.log(responseBody);
// } catch (e) {
//     console.warn(e);
// }

// try {
//     console.log('start');
//     const response = await fetch('/api/test/readystate', {
//         method: 'POST',
//     }); // network error
//     console.log('response line + headers fetched');
//     const responseBody = await response.json(); // throw error
//     console.log('body fetched');
//     console.log(responseBody);
// } catch (e) {
//     console.warn(e);
// }

try {
    const response = await fetch('/api/fetch/test/cards');
    const body = await response.json();
    console.log(body);
} catch (e) {
    console.warn(e);
} finally {
    console.log('finally');
}