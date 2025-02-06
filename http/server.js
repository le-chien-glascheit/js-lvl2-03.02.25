import { Server } from "node:http";

const server = new Server();
server.keepAliveTimeout = 30_000;

server.on("connection", () => {
  console.log("someone connected");
});

server.on("request", (req, res) => {
  // status line &
  // headers already parsed
  console.log(req);

  // body
  const bodyChunks = [];
  req.on("data", (chunk) => {
    bodyChunks.push(chunk);
  });
  req.on("end", () => {
    // body end, not socket
    const body = Buffer.concat(bodyChunks).toString("utf8");
    console.log(body);
    // no Content-Length: , Transfer-Encoding: hex
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end('{"status": "ok"}');
  });
});

server.listen(9999);
