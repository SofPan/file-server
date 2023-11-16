const net = require("net");

const connect = net.createConnection({
  host: "localhost",
  port: 5500
});

connect.setEncoding("utf8");

connect.on("data", data => console.log("Server message: ", data));