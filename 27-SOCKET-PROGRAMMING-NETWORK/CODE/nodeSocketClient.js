const net = require('net');
const client = net.createConnection({ port: 8080 }, () => {
  console.log('client connecteds');
  client.write('hello frmo node client');
});

client.on('data', (serverData) => {
  console.log('datarecieved from server is', serverData.toString());
});
