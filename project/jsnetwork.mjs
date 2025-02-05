console.log('js network');

// Resource - img, audio, video
// document.createElement
// 
const imgEl = new Image();
imgEl.src = 'http://localhost:9999/static/js.png';

setTimeout(() => {
    const auDIO = new Audio()
    auDIO.src = 'http://localhost:9999/static/sound.wav';
    auDIO.play()
}, 5000);


// Link
setTimeout(() => {
    const linkEl = document.createElement('a');
    linkEl.href = 'http://localhost:9999/api/href';
    // linkEl.target = '_blank';
    linkEl.textContent = 'Click me';

    // document.body.append(linkEl);
    // linkEl.click();
}, 10000);

// Form
/** @type {HTMLFormElement} */
setTimeout(() => {
    const formEl = document.querySelector('#form');
    formEl.submit();
}, 15000)
