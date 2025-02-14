// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject(new Error('network error'));
//         resolve('response data 1');
//         // resolve('response data 2');
//     }, 5000);
// });

// newly available
const {promise: orig, resolve, reject} = Promise.withResolvers();
setTimeout(() => {
    resolve('orig data');
    // reject(new Error('something bad happened'));
}, 5000);

// second http request
const subsequent = (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('subseq response for data: ' + data);
            reject(new Error('subseq something bad happened for data: ' + data));
        }, 10_000);
    });
}

// const handler = (data) => data.toUpperCase();
// const p1 = orig.then(handler); // return new Promise
// const p2 = orig.then(handler); // return new Promise
// p1 !== p2

// orig.then((data) => {
//     return data.toUpperCase();
// })

// // "analogue"
// orig.then(
//     /*resolve*/
//     (data) => {
//         console.log(data);
//         return subsequent(); // Promise SubSeq return new Promise() -> resolved(data)/rejected(error) : SubSequent -> resolved / reject
//         // return data.toUpperCase(); // return new Promise() -> resolved(data) : orig -> resolved
//     },
//     /*reject*/
//     (error) => error, // return new Promise() -> rejected(error) : orig -> rejected
// ) // new Promise: 29/32

// orig.catch((error) => {
//     console.log(error);
//     // return error.message;
//     // return subsequent();
//     throw new Error('...'); // new Promise() => reject(error);
//     // return data (not Promise) => then analogue => new Promise -> resolved(data)
//     // return Promise => new Promise resolved(data)/rejected(error) : SubSequent -> resolved / reject
// }).then((data) => {
//     console.log(data); // new Promise->resolved(undefined)
// }).catch((error) => {
//     console.error(error); // new Promise->resolved(undefined)
// }).then((data) => {
//     console.log('it fires???')
// });

orig.finally(() => {
    console.log('finally');
    // throw new Error('something bad happened in finally'); // return new Promise => reject(finally error)
    // return 'finally';
    // return subsequent(); // return new Promise => resolve(orig data)/reject(subsequent)
    // orig: Resolved => return new Promise => resolve(orig data) not by return!
    // orig: Rejected => return new Promise => reject(orig error) not by return!
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.warn(error);
});

// orig.then((data) => data, (error) => {
//     return error.message;
// });

// const xhr = new XMLHttpRequest();
// xhr.onload = () => {
//     const xhr2 = new XMLHttpRequest();
//     xhr2.onload = () => {
//         const xhr3 = new XMLHttpRequest();
//         xhr3.onload = () => {

//         }
//         xhr3.send();
//     }
//     xhr2.send();
// };
// xhr.send();


// orig.then((data) => {
//     console.log(data);
//     return subsequent(data);
// })
// .then((data) => {
//     console.log(data);
//     return subsequent(data);
// })
// .then((data) => {

// })
// ;

// promise.then((data) => console.log(data))
//     .catch((error) => console.error(error))
//     .finally(() => console.info('finished'));

// async/await