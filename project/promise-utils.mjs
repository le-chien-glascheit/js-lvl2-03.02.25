const gen = ({
    value, error
}, delay) => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.debug(`promise for: ${value} ${error}`);
        if (value) {
            resolve(value);
            return;
        }
        reject(new Error(error));
    }, delay);
});

// resilience4j or rxjs (some operators)
const retry = async (promiseGen, count = 3) => {
    let tries = 0;
    while (++tries <= count) {
        try {
            console.debug(`let's try ${tries}`);
            const result = await promiseGen();
            return result;
        } catch (e) {
            console.log(e);
            if (tries === count) {
                throw new Error('count exceed', {cause: e});
            }
        }
    }
};

// Utils (static methods):
// 1. all
// 2. any
// 3. race
// 4. allSettled 
// promise = Promise.<method>([promise, promise, promise])

// all

// try {
//     const composed = Promise.all([gen({value: 3}, 3000), gen({value: 2}, 2000), gen({value: 1}, 1000)])
//     const value = await composed;
//     console.debug(value);
// } catch(e) {
//     console.warn(e);
// }

// try {
//     // not waits for all if any rejected
//     const composed = Promise.all([gen({value: 3}, 3000), gen({error: 'oops!'}, 2000), gen({value: 1}, 1000)])
//     const value = await composed;
//     console.debug(value);
// } catch(e) {
//     console.warn(e);
// }

// try {
//     // not waits for all if any rejected
//     const composed = Promise.all([gen({value: 3}, 3000), retry(() => gen({error: 'oops!'}, 2000), 3), gen({value: 1}, 1000)])
//     const value = await composed;
//     console.debug(value);
// } catch(e) {
//     console.warn(e);
// }

// any

// try {
//     const composed = Promise.any([gen({value: 3}, 3000), gen({value: 2}, 2000), gen({value: 1}, 1000)])
//     const value = await composed;
//     console.debug('result value', value);
// } catch(e) {
//     console.warn('result error', e);
// }

// try {
//     const composed = Promise.any([gen({value: 3}, 3000), gen({value: 2}, 2000), gen({error: 'oops!'}, 1000)])
//     const value = await composed;
//     console.debug('result value', value);
// } catch(e) {
//     console.warn('result error', e);
// }

// try {
//     const composed = Promise.any([gen({error: 'oops 3'}, 3000), gen({error: 'oops 2'}, 2000), gen({error: 'oops 1'}, 1000)])
//     const value = await composed;
//     console.debug('result value', value);
// } catch(e) {
//     console.warn('result error', e);
// }

// race
// try {
//     const composed = Promise.race([gen({value: 3}, 3000), gen({value: 2}, 2000), gen({error: 'oops!'}, 1000)]);
//     const value = await composed;
//     console.debug('result value', value);
// } catch(e) {
//     console.warn('result error', e);
// }

// try {
//     const composed = Promise.race([gen({error: 'oops!'}, 3000), gen({value: 2}, 2000)]);
//     const value = await composed;
//     console.debug('result value', value);
// } catch(e) {
//     console.warn('result error', e);
// }

// allSettled
try {
    const composed = Promise.allSettled([gen({value: 3}, 3000), gen({value: 2}, 2000), gen({error: 'oops!'}, 1000)])
    const value = await composed;
    console.debug('result value', value);
} catch(e) {
    console.warn('result error', e);
}