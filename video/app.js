const videoEl = document.querySelector('#video');

// events
videoEl.addEventListener("play", (event) => {
    console.log(event);
});

setTimeout(() => {
    videoEl.play(); // method()
}, 3000);