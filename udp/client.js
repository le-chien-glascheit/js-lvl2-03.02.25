const dgram = require('node:dgram');

const socket = new dgram.Socket('udp4'); // UDP, IPv4

socket.on('message', (msg, rinfo) => {
    console.log(msg, rinfo);
});

socket.send('request\n', 9999, '127.0.0.1', (err) => {
    console.log('sent');
});