const net = require("node:net");

const socket = new net.Socket();

const buffer = [];
socket.on("data", (data) => {
  buffer.push(data);
});

socket.on("end", () => {
  const line = Buffer.concat(buffer).toString("utf8");
  console.log(line);
});

socket.connect(9999, "127.0.0.1", () => {
  socket.end("request\n");
});
