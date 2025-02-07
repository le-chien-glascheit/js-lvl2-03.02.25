/** @type {HTMLFormElement} */
const formEl = document.querySelector('#form');

formEl.onsubmit = (ev) => {
    // cancelable : true -> default action can be canceled
    ev.preventDefault();
    // defaultPrevented : true -> preventDefault was called
    const formData = new FormData(formEl);
    const searchParams = new URLSearchParams(formData);

    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', `/api/xhr/test/form-query?${searchParams.toString()}`);
    // xhr.responseType = 'json';

    // xhr.onload = (ev) => {
    //     console.log(xhr.response);
    // };

    // xhr.send();

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/xhr/test/form-urlencoded');
    xhr.responseType = 'json';

    xhr.onload = (ev) => {
        console.log(xhr.response);
    };

    xhr.send(searchParams);
};