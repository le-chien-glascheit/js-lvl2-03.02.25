const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'http://localhost:9999/api/xhr/test/cards');

xhr.onload = (ev) => {
    // TODO: JSON -> div list in html
};