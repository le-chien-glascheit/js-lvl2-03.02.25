const ajax = async (path, fetchParams) => {
    const response = await fetch(path, fetchParams);
    if (!response.ok) {
        // TODO: discuss response error body
        throw new Error('bad response');
    }
    return await response.json();
};

try {
    const created = await ajax('http://127.0.0.1:9999/api/rest/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // mode: 'no-cors', -> opaque (not solution)
        body: JSON.stringify({
            message: 'new message',
            tags: ['#funny'],
        })
    });
    console.log(created);
} catch (e) {

}