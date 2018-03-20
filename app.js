var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function (socket) {
  socket.on('new message', function (message) {
    io.sockets.emit('chat message', message);
  });
});

server.listen(port, function () {
  console.log('Server started on port ' + port)
});