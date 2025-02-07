const params = new URLSearchParams([
    ['key', 'value1'],
    ['key', 'value2'],
    ['other', 'other value'],
]);

// Iteration Protocol: Symbol.iterator -> logic in my type [Symbol.iterator]() {}
const object = {
    [Symbol.iterator]() {
        let count = 0;
        return { // iterator
            next() {
                count++;
                if (count < 5) {
                    return { // iterator result
                        value: [`key${count}`, 'value'],
                        done: false,
                    };
                }

                return {
                    value: null,
                    done: true,
                };
            }
        }
    },
    // old school
    toString() {
        return 'old school';
    },
    // new school
    get [Symbol.toStringTag]() {
        return 'my object';
    }
};

// for of
for (const element of object) {
    console.log(element);
}

console.log('' + object);

const objParams = new URLSearchParams(object);
console.log(objParams.toString());