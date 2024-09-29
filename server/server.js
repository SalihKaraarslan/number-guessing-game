const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("send_message", (msg) => {
    socket.broadcast.emit("recieve_message", msg);
  });
});

server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
