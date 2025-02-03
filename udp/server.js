const dgram = require('node:dgram');

// Node.js:
// 1. Class - Socket
// 2. helper-function - createSocket == new Socket

// dgram = {Socket: fn}
const socket = new dgram.Socket('udp4'); // UDP, IPv4

// in DOM: addEventListener('message', ev) <=> on('message', msg, rinfo)
socket.on('message', (msg, rinfo) => {
    socket.send('ok\n', rinfo.port, rinfo.address);
    console.log(msg, rinfo);
});

socket.bind(9999); // 0.0.0.0:udp:9999
