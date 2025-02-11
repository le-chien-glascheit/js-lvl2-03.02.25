// not arrow!
const fn = function(...params) {
    console.log(this);   
    console.log(params);
};
fn(); // undefined

const obj = {
    name: 'obj',
    handle() {
        console.log(this);
    },
    fn,
};
// 1. simple obj.method() => this = obj
obj.handle();
obj.fn();

const thief = {
    name: 'thief',
};
thief.handle = obj.handle;
thief.fn = fn;
thief.handle();
thief.fn();

// 2. simple: new Fn() -> this = {}
const fnObj = new fn(); // this = {}

/** @type {HTMLButtonElement} */
const buttonEl = document.querySelector('#button');
// 3. call fn(), handle() -> with specified this (currentTarget, thisArg)
buttonEl.onclick = fn;
buttonEl.addEventListener('click', obj.handle);
[1, 2, 3].map(fn, thief);

// this -> context
// Function:
// 1. call & apply => method.call(obj)
// 2. bind

fn.call(thief, 'params');
Array.prototype.mapEmulation = (callback, thisArg) => {
    if (thisArg) {
        callback.call(thisArg, 'el', 'idx', 'arr');
        return;
    }
    callback('el', 'idx', 'arr');
};

[].mapEmulation(fn, thief);
// Object.prototype.hasOwnProperty.call(this, "..."); // true


console.log('----------------------')
const bound = fn.bind(thief, 'first');
bound('second'); // this -> thief ('analogue' fn.call(thief, 'first', ...params))
// bound.call(obj);
buttonEl.onclick = bound;


const arrow = () => {console.log(this)};
arrow();
arrow.call(thief);
// arrow functions: no this
// no new, call - not working

// this in static method -> fn constructor/class