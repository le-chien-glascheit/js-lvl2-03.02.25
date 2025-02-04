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

## Protocol HTTP

RFC ->

http://ya.ru:80/search?q=js

1. Request Line: GET|POST|DELETE|... part_of_url /search?q=js HTTP/1.1\r\n
2. Headers: Key: Value
2.0. Host: ya.ru:80 
2.1. Accept: image/png\r\n
2.2. Content-Length: length in bytes\r\n (Transfer-Encoding)
\r\n
3. (opt) Body: bytes

1. Status Line: HTTP/1.1 200 OK\r\n
2. Headers: Key: Value
2.0. Host: ya.ru:80 
2.1. Accept: image/png\r\n
2.2. Content-Length: length in bytes\r\n (Transfer-Encoding)
\r\n
3. (opt) Body: bytes

1. RL + Headers | SL + Headers
2. Body