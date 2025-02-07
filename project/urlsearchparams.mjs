// Send data:
// 1. Request Line (method, path, query) <- all variants
// 2. Headers <- all variants
// 3. Body <-

// decodeURIComponent -> often done automatically by server
const pathVariable = encodeURIComponent('админка/hello');

const key = encodeURIComponent('сообщение');
const value = encodeURIComponent('ok?');

// URLSearchParams
const params = new URLSearchParams();
params.append('сообщение', 'ok?');
params.append('сообщение', 'not ok?');

const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
// xhr.open('POST', `http://localhost:9999/api/xhr/test/path-and-query/${pathVariable}?${key}=${value}`);
xhr.open('POST', `http://localhost:9999/api/xhr/test/path-and-query/${pathVariable}?${params.toString()}`);
xhr.setRequestHeader('Custom', 'some value');
xhr.setRequestHeader('Custom', 'some value');

xhr.onload = (ev) => {
    console.log(xhr.status);
};

// 1. Content-Type: application/x-www-form-urlencoded
// 2. Percent Encode
xhr.send(params);