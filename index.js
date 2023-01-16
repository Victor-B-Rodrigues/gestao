let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {
 
  socket.on('cadastrar', (vals) =>{
    io.emit('cadastrar_new', vals);
  });

  socket.on('alterar', (vals) =>{
    io.emit('alterar_new', vals);
  });

  socket.on('deletar', (vals) =>{
    io.emit('deletar_new', vals);
  });


});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('listening in http://localhost:' + port);
});