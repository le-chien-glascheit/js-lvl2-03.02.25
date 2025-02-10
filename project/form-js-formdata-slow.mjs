/** @type {HTMLFormElement} */
const formEl = document.querySelector('#form');
const fieldSetEl = document.querySelector('fieldset');

// Event:
// - Event Handler: on*: onsubmit, onload, ... (https://html.spec.whatwg.org/#globaleventhandlers)
// - Event Listener: EventTarget: addEventListener, removeEventListener

formEl.addEventListener('submit', (ev) => {
    // cancelable : true -> default action can be canceled
    ev.preventDefault();
    fieldSetEl.disabled = true;
    // [...formEl.elements].forEach(el => el.disabled = true);
    // defaultPrevented : true -> preventDefault was called
    const formData = new FormData(formEl);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/xhr/test/form-data-slow');
    xhr.responseType = 'json';

    xhr.onload = (ev) => {
        // ev.currentTarget.response: очень редко
        console.log(xhr.response);
    };
    xhr.onloadend = (ev) => {
        fieldSetEl.disabled = false;
        formEl.reset();
    };

    xhr.send(formData); // multipart
});

formEl.onreset = (ev) => {
    console.log('reset');
    debugger
};