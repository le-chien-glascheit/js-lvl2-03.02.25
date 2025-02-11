/** @type {HTMLFormElement} */
const formEl = document.querySelector('#form');

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const {currentTarget} = ev;

    const valid = currentTarget.checkValidity();
    if (!valid) {
        currentTarget.reportValidity();
    }
});