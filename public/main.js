window.onload = function () {
  var socket = io.connect();

  $('button').click(function () {

    var message = $('#m').val();

    if (message) {

      socket.emit('new message', message).emit();
      $('#m').val('');
    }
  });

  socket.on('chat message', function (message) {
    $('#messages').append(`<li>${message}</li>`);
  });
}