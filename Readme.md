## Shorthand props

```js
class Socket{};

function createSocket() {}

module.exports = {
    // syntax sugar
    createSocket: createSocket,
    // shorthand props:
    createSocket,
    Socket: Socket,
};
```