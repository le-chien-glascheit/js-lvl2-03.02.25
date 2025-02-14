const handle = (note, error) => {
    console.log(note, error);
};

document.querySelector('#getNoteById').addEventListener('click', (ev) => {
    const sciptEl = document.createElement('script');
    sciptEl.src = 'http://127.0.0.1:9999/api/jsonp/getNoteById?noteId=1&callback=handle';
    document.body.append(sciptEl);
});