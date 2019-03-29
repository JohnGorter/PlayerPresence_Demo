var WebSocketServer = require("ws").Server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)
console.log("http server listening on %d", port)
var wss = new WebSocketServer({server: server})
console.log("websocket server created")

wss.broadcast = function(data) {
  for (var i in clients) {
    if (clients[i].readyState == 1) {
        console.log("sending data to client");
        clients[i].send(data);
    }
  }
};

var clients = []; 
wss.on("connection", function(ws) {
  clients.push(ws);
  console.log("websocket connection open");

  ws.on('message', function(message) {
    console.log("message received by server");
    wss.broadcast(message);
  })

  ws.on("close", function() {
    console.log("websocket connection close")
  })
})

setInterval(() => {
    console.log("sending a ping");
    wss.broadcast("ping");
}, 1000); 
