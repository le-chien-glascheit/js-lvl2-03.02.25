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

## Protocol (over UDP)

1. Text
2. Interperation

```json
{
    "command": "save",
    "data": {...}
}
```

## Protocol TCP