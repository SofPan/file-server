const net = require('net');

const server = net.createServer();

server.listen(5500, () => {
  console.log("Server listening on port 5500");
});