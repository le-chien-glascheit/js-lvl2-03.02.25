/** @type {HTMLInputElement} */
const photoEl = document.querySelector('#photo');

photoEl.onchange = (ev) => {
    const file = photoEl.files[0];

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/api/xhr/test/form-blob');
    xhr.setRequestHeader('content-type', 'application/octet-stream');
    xhr.responseType = 'blob';

    xhr.onload = (ev) => {
        console.log(xhr.response);
    };

    xhr.send(file);
};