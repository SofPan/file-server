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
    fs.readFile(`./server-files/${data}`, (error, data) => {
      error ? console.log(error) : console.log(data);
    });
  });
});