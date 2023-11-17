const net = require('net');
const fs = require('fs');

const server = net.createServer();

server.listen(5500, () => {
  console.log("Server listening on port 5500");
});

server.on("connection", client => {
  console.log("New client connected");
  client.write("Connection established");
  client.setEncoding("utf8");
  client.on("data", data => {
    console.log("Client requesting file: ", data);
    fs.readFile(`./server-files/${data}`, 'utf8', (error, data) => {
      if (error) {
        console.log(error);
        return;
      }

      console.log(data);
    });
  });
});