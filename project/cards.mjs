const loaderEl = document.querySelector('#loader');
const errorEl = document.querySelector('#error');
const appEl = document.querySelector('#app');

const xhrCompleteState = Symbol('xhrCompleteState'); // regular symbol

// global symbols - not good idea
// registration
// globarRegistyr['key'] = Symbol();
const keySymbol = Symbol.for('key'); // with registration in registry for key = "key"
// return globarRegistyr['key'];

// well-known:
// Symbol.iterator
// Symbol.toStringTag

const xhr = new XMLHttpRequest();
xhr[xhrCompleteState] = 'unknown'; // not best IDEA (just for Symbol explanation)
xhr.responseType = 'json';
xhr.open('GET', 'http://localhost:9999/api/xhr/test/cards');

// loaders:
// 1. Create Element
// 2. Show/Hide <-
xhr.onload = (ev) => {
    if (!(xhr.status >= 200 && xhr.status < 300)) {
        xhr[xhrCompleteState] = 'httperror';
        errorEl.textContent = `Your error code: ${xhr.status}-20df-2! We will fix it soon! Try again later!`;
        return;
    }

    // JSON.parse(xhr.responseText) -> throw Error
    // xhr.response = null (exception not thrown in responseType = "json")
    if (xhr.response === null) {
        // set error
        xhr[xhrCompleteState] = 'bodyerror';
        errorEl.textContent = 'Your error code: abc-20df-2! We will fix it soon! Try again later!';
        // send other xhr -> error collection
        return;
    }

    xhr[xhrCompleteState] = 'success';

    const cards = xhr.response;
    // [a, a, a] => .map() => [b, b, b]
    const cardEls = cards.map((card) => {
        const cardEl = document.createElement('div');
        cardEl.classList.add('card');
        const numEl = document.createElement('span');
        numEl.textContent = card.num;
        const balanceEl = document.createElement('span');
        balanceEl.textContent = card.balance;

        cardEl.append(numEl, balanceEl);
        return cardEl;
    });

    appEl.append(...cardEls); // => appEl.append(cardEls[0], cardEls[1], ...)
};

xhr.onerror = (ev) => {
    // 1. Ask user
    xhr[xhrCompleteState] = 'networkerror';
    errorEl.textContent = 'Check your internet connection! Try again later';
};

xhr.onloadend = (ev) => {
    const xhrFinish = Date.now();
    const xhrTotalTime = xhrFinish - xhrStart;
    const remain = Math.max(0, 500 - xhrTotalTime);
    console.log(remain);
    setTimeout(() => {
        debugger;
        loaderEl.classList.add('hidden');
        if (xhr[xhrCompleteState] === 'networkerror') {
            errorEl.classList.remove('hidden');
        }
        if (xhr[xhrCompleteState] === 'httperror') {
            errorEl.classList.remove('hidden');
        }
        if (xhr[xhrCompleteState] === 'bodyerror') {
            errorEl.classList.remove('hidden');
        }
        if (xhr[xhrCompleteState] === 'success') {
            appEl.classList.remove('hidden');
        }
    }, remain);
};

// start of new request
loaderEl.classList.remove('hidden');
appEl.classList.add('hidden');
errorEl.classList.add('hidden');

const xhrStart = Date.now();
xhr.send();