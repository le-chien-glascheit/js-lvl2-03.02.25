const net = require("node:net");

const server = new net.Server({
  allowHalfOpen: true,
});

server.on("connection", (socket) => {
  // socket = client socket
  const buffer = []; // bad idea! 1Gb
  // 0. type: auth
  // 1-4. size: unsigned int (4 * 10^9)
  socket.on("data", (data) => {
    buffer.push(data);
  });
  // bad code
  socket.on("end", () => {
    // Buffer
    // text = binary + encoding
    const line = Buffer.concat(buffer).toString("utf8");
    console.log(line);
    socket.end(`response for ${line}`);
  });
});

server.listen(9999);
