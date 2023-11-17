const net = require("net");
const prompt = require("prompt-sync")();
const fs = require('fs');

const connect = net.createConnection({
  host: "localhost",
  port: 5500
});
let fileName;
connect.setEncoding("utf8");

connect.on("data", data => {
  fs.writeFile(`./client-downloads/${fileName}`, data, (err, body) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("File received");
    return body;
  });
  connect.end();
});

connect.on("connect", () => {
  fileName = prompt("What file would you like to request? ");
  connect.write(fileName);
});