import './AppCards.webcomponent.mjs';

const appCardsEl = document.createElement('app-cards');
document.body.append(appCardsEl);

appCardsEl.addEventListener('load', (ev) => {
    console.log('cards loaded');
});
appCardsEl.addEventListener('error', (ev) => {
    console.log('cards not loaded');
});

// const imageEl = new Image();
// imageEl.onload = (ev) => {
//     console.log('load')
// };
// imageEl.onerror = (ev) => {
//     console.log('error')
// };
// imageEl.src = '/static/404';