console.log('xhr');

// EventTarget -> events fired on
setTimeout(() => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:9999/api/xhr/test/xml');
    xhr.setRequestHeader('X-Secret', 'top secret');

    const xml = document.implementation.createDocument('', '');
    const reqEl = xml.createElement('req');
    xml.append(reqEl);
    const valueEl = xml.createElement('value');
    valueEl.textContent = 'query';
    reqEl.append(valueEl);

    // any http response 
    xhr.onload  = (ev) => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.response);
            console.log(xhr.responseText);
            console.log(xhr.responseXML); // document

            // responseType = ""
            // text/xml
            const value = xhr.responseXML.querySelector('value').textContent;
            console.log(value);
        } else {

        }
    };

    // const serializer = new XMLSerializer();
    // const xmlString = serializer.serializeToString(xml);
    // debugger;

    xhr.send(xml);
}, 5000);