// legacy or advanced (most situations)
const obj = {
    type: 'text',
};
Object.defineProperty(obj, 'nonwriteable', {
    value: 42,
    writable: false,
});

// obj.nonwriteable = 99;

Object.defineProperty(obj, 'responseText', {
    get: function() {
        if (this.type !== 'text') {
            throw new Error('only for type text allowed');
        }

        return 'text response';
    },
});

const proto = Object.getPrototypeOf(obj);
Object.defineProperty(proto, 'property', {
    get: function() {
        return this._property;
    },
    set: function(val) {
        this._property = val;
    },
});

obj.property = 99;

obj.type = 'json';
// const text = obj.responseText;

// EventTarget -> events fired on
setTimeout(() => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'http://localhost:9999/api/xhr/test/json');
    xhr.setRequestHeader('X-Secret', 'top secret');

    // 1. serialize (string) -> JSON.stringify/parse, ...
    const json = JSON.stringify({
        req: {
            value: 'req',
        },
    });
    // 2. Content-Type: application/json
    xhr.setRequestHeader('Content-Type', 'application/json');

    // any http response 
    xhr.onload  = (ev) => {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log(xhr.response);
            // console.log(xhr.responseText); not accessible
            // console.log(xhr.responseXML); not accessible

            console.log(xhr.response.res.value);
        } else {

        }
    };

    xhr.send(json);
}, 5000);

const patient = {
    id: 1,
    value: 'secret',
    inner: {
        value: 'inner',
    },
};
console.log(Object.getOwnPropertyDescriptor(patient, 'id'));

const frozen = Object.freeze(patient); // freeze patient
// frozen.id = 2;
// patient.id = 2;
console.log(Object.getOwnPropertyDescriptor(frozen, 'id'));
frozen.inner.value = 'changed'; // ok, only top level props affected
console.log(frozen);