const net = require("net");
const prompt = require("prompt-sync")();

const connect = net.createConnection({
  host: "localhost",
  port: 5500
});

connect.setEncoding("utf8");

connect.on("data", data => {
  console.log("Server message: ", data);
});

connect.on("connect", () => {
  const fileName = prompt("What file would you like to request? ");
  connect.write(`FileName: ${fileName}`);
});