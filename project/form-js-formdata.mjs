/** @type {HTMLFormElement} */
const formEl = document.querySelector('#form');

formEl.onsubmit = (ev) => {
    // cancelable : true -> default action can be canceled
    ev.preventDefault();
    // defaultPrevented : true -> preventDefault was called
    const formData = new FormData(formEl);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/xhr/test/form-data');
    xhr.responseType = 'json';

    xhr.onload = (ev) => {
        console.log(xhr.response);
    };

    xhr.send(formData); // multipart
};