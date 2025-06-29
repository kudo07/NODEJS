const net = require('net');

const server = net.createServer((socket) => {
  socket.on('data', (clientData) => {
    console.log('data received from client', clientData.toString());
    socket.write('recieved on server thank you');
  });
});
server.listen(8080, () => {
  console.log('New server up on port 8080');
});
