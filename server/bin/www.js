var app = require("../app");
var debug = require("debug")("server:server");
var http = require("http");

const PORT = process.env.PORT || 5000;
app.set("port", PORT);

// start server
var server = http.createServer(app);

server.listen(PORT);
