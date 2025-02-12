// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject(new Error('network error'));
//         resolve('response data 1');
//         // resolve('response data 2');
//     }, 5000);
// });

// newly available
const {promise, resolve, reject} = Promise.withResolvers();
setTimeout(() => {
    resolve('data');
}, 5000);

// "редкая форма"
// promise.then(
//     (data) => console.log(data), // for fulfilled
//     (error) => console.error(error), // for reject
// );

setInterval(() => {
    console.log(promise);
}, 1000);

// async/await:
// 1. ESM top-level
// 2. async function
try {
    const data = await promise;
    console.log(data);
} catch (e) {
    console.error(e);
} finally {
    console.info('finally')
}

// promise.then((data) => console.log(data))
//     .catch((error) => console.error(error))
//     .finally(() => console.info('finished'));