/** @type {HTMLButtonElement} */
const buttonEl = document.querySelector('#button');

// Bubbling or Target by default, Event Listener - true (Capturing)
// Event Handler: only one => next assigment will rewrite
// Event Listener: allow multiple

// window.addEventListener('click', (ev) => {
//     debugger;
//     console.log('clicked on window');
// }, true); // capturing

buttonEl.addEventListener('click', (ev) => {
    // click -> button/span
    // target: button/span
    // currentTarget: button
    // ev -> target/currentTarget
    console.log('clicked');
    ev.currentTarget.textContent = Date.now();
});

// const listener = (ev) => {console.log('clicked')}
// buttonEl.addEventListener('click', listener);

// buttonEl.addEventListener('click', (ev) => {
//     buttonEl.removeEventListener('click', listener);
// });

// buttonEl.onclick = (ev) => {
//     console.log('clicked');
//     buttonEl.onclick = null;
// };
