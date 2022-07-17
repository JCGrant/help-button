const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);

app.ws("/ws", (ws) => {
  ws.on("message", (msg) => {
    expressWs.getWss().clients.forEach((client) => {
      client.send(msg);
    });
  });
});

app.listen(8010);
